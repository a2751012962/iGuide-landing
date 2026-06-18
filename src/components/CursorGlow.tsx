import { useEffect, useRef } from 'react';

/**
 * A soft "focus" ring that trails the cursor on pointer devices. It reads the
 * element under the pointer and recolours itself:
 *   • default        → brand orange (over empty/neutral areas)
 *   • over a card    → faint orange, slightly larger (matches the card's own
 *                      warm hover glow)
 *   • over a control → partial navy/blue (links, buttons, anything tagged
 *                      data-cursor-invert) for a complementary pop against the
 *                      orange accents.
 *
 * Desktop-only and disabled under prefers-reduced-motion (gated in JS for the
 * listeners and in CSS for the element). The ring lives on its own GPU layer and
 * only ever animates transform/opacity, so it stays cheap. Decorative, so it's
 * hidden from assistive tech and never blocks pointer events.
 */
export default function CursorGlow() {
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ring = ringRef.current;
        if (!ring) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

        let raf = 0;
        let x = 0;
        let y = 0;

        const onMove = (e: PointerEvent) => {
            x = e.clientX;
            y = e.clientY;

            // Classify what's under the pointer. Cards win over the link that
            // wraps them, so hovering a gateway card reads as "card", not
            // "control".
            const target = e.target as Element | null;
            let variant = 'default';
            if (target) {
                if (target.closest('.card-spotlight')) variant = 'card';
                else if (target.closest('a, button, [role="button"], [data-cursor-invert]')) variant = 'invert';
            }
            if (ring.dataset.variant !== variant) ring.dataset.variant = variant;

            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = 0;
                ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
                ring.style.opacity = '1';
            });
        };

        const onLeave = () => {
            ring.style.opacity = '0';
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        document.addEventListener('pointerleave', onLeave);
        return () => {
            window.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerleave', onLeave);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return <div ref={ringRef} className="cursor-ring" aria-hidden="true" />;
}
