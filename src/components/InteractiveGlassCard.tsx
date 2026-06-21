import { useCallback, useEffect, useRef, type ReactNode, type PointerEvent as ReactPointerEvent } from 'react';

/**
 * A frosted `glass-card` surface with a "legendary card" feel. On pointer
 * devices it tilts in 3D toward the cursor and lights a radial spotlight under
 * it. With no cursor (touch), the same tilt + sheen is driven by the card's
 * position in the viewport as you scroll, so the holographic effect plays on
 * every device. Both paths are no-ops under prefers-reduced-motion, and none of
 * this runs during the static prerender (effects/handlers are client-only).
 */
export default function InteractiveGlassCard({
    children,
    className = '',
    shimmerDelay = '0s',
}: {
    children: ReactNode;
    className?: string;
    /** Stagger for the idle shimmer so a row of cards flashes left-to-right. */
    shimmerDelay?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const frame = useRef(0);
    const hovering = useRef(false);

    const prefersReducedMotion = () =>
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cursor devices drive the tilt from the pointer; only cursor-less (touch)
    // devices fall back to the scroll-driven pose. Keeps desktop cards resting
    // flat until hovered instead of tilting on every scroll.
    const canHover = () =>
        typeof window !== 'undefined' &&
        window.matchMedia('(hover: hover)').matches;

    // Scroll-driven pose: tilt the card and slide/brighten its sheen based on
    // where it sits in the viewport. Skipped while the pointer is driving it.
    const applyScroll = useCallback(() => {
        const el = ref.current;
        if (!el || hovering.current || prefersReducedMotion()) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const center = rect.top + rect.height / 2;
        // -1 when the card's centre sits at the top of the viewport, 0 at the
        // middle, +1 at the bottom. Independent of card height so tall mobile
        // cards still get the full tilt range.
        const p = Math.max(-1, Math.min(1, (center - vh / 2) / (vh / 2)));
        el.style.transition = 'transform 0.4s var(--ease-liquid)';
        // Tilt back as it rises past centre, forward as it enters from below.
        el.style.transform = `perspective(1000px) rotateX(${(-p * 12).toFixed(2)}deg) rotateY(0deg)`;
        // Sheen slides vertically with travel and is brightest near centre.
        el.style.setProperty('--card-mx', '50%');
        el.style.setProperty('--card-my', `${(50 + p * 55).toFixed(1)}%`);
        el.style.setProperty('--card-glow', (1 - Math.abs(p)).toFixed(2));
    }, []);

    useEffect(() => {
        // Cursor devices use the pointer handlers below, not scroll; only wire
        // up the scroll-driven pose on touch (no-hover) devices.
        if (prefersReducedMotion() || canHover()) return;
        let raf = 0;
        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                applyScroll();
            });
        };
        applyScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [applyScroll]);

    const handleMove = (e: ReactPointerEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el || prefersReducedMotion()) return;
        // Touch fires pointermove while scrolling and frequently never sends a
        // matching pointerleave (it sends pointercancel) — taking over here
        // would stick the card in the hover pose and kill scroll tilt. Let
        // touch use the scroll-driven pose instead.
        if (e.pointerType === 'touch') return;
        hovering.current = true;
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
            el.style.setProperty('--card-glow', '1');
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
        hovering.current = false;
        if (canHover()) {
            // Cursor devices: ease back to a flat rest pose (no scroll tilt).
            el.style.transition = 'transform 0.4s var(--ease-liquid)';
            el.style.transform = '';
            el.style.setProperty('--card-glow', '0');
        } else {
            // Touch (e.g. pointercancel): hand back to the scroll-driven pose.
            applyScroll();
        }
    };

    return (
        <div
            ref={ref}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            onPointerCancel={handleLeave}
            className={`card-spotlight ${className}`}
        >
            {/* Idle "breathing" shimmer that loops while the card is untouched
                (paused on hover, where the cursor spotlight takes over). */}
            <span className="card-idle-shimmer" aria-hidden="true" style={{ animationDelay: shimmerDelay }} />
            {children}
        </div>
    );
}
