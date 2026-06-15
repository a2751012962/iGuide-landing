import { useRef, type ReactNode, type PointerEvent as ReactPointerEvent } from 'react';

/**
 * A frosted `glass-card` surface that responds to the pointer: it tilts
 * subtly in 3D toward the cursor and shows a soft radial "spotlight" under
 * it, reinforcing the liquid-glass refraction. Pointer handlers are no-ops
 * for users who prefer reduced motion, and they never run during the static
 * prerender (they only fire on real pointer events in the browser).
 */
export default function InteractiveGlassCard({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const frame = useRef(0);

    const prefersReducedMotion = () =>
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el || prefersReducedMotion()) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width; // 0..1
        const py = (e.clientY - rect.top) / rect.height; // 0..1
        if (frame.current) return;
        frame.current = requestAnimationFrame(() => {
            frame.current = 0;
            // Track the cursor 1:1 while moving — any transform transition here
            // makes the tilt chase the pointer a beat behind (the "lag").
            el.style.transition = 'none';
            el.style.setProperty('--card-mx', `${(px * 100).toFixed(1)}%`);
            el.style.setProperty('--card-my', `${(py * 100).toFixed(1)}%`);
            const rotX = (0.5 - py) * 8; // tilt up/down
            const rotY = (px - 0.5) * 8; // tilt left/right
            el.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-0.375rem) scale(1.02)`;
        });
    };

    const handleLeave = () => {
        const el = ref.current;
        if (!el) return;
        if (frame.current) {
            cancelAnimationFrame(frame.current);
            frame.current = 0;
        }
        // Ease smoothly back to rest only on leave.
        el.style.transition = 'transform 0.45s var(--ease-liquid)';
        el.style.transform = '';
    };

    return (
        <div
            ref={ref}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`card-spotlight ${className}`}
        >
            {children}
        </div>
    );
}
