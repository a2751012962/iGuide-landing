import { useEffect, useRef } from 'react';

/**
 * Ambient "Liquid Glass" wallpaper. A fixed, full-viewport layer of soft
 * colour orbs that drift behind the page's frosted glass panels so the glass
 * has something to refract. Each orb is heavily blurred so overlapping blobs
 * melt into soft, lava-lamp-style colour clouds, and the whole field drifts
 * gently toward the cursor. Purely decorative — hidden from assistive tech.
 */
export default function GlassBackground() {
    const rootRef = useRef<HTMLDivElement>(null);

    // Cursor parallax: write normalized pointer offset (-1..1) into CSS vars
    // the orb field references. Client-only (useEffect never runs during the
    // static prerender), rAF-throttled, and disabled for reduced-motion.
    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame = 0;
        const onMove = (e: PointerEvent) => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                const mx = (e.clientX / window.innerWidth) * 2 - 1;
                const my = (e.clientY / window.innerHeight) * 2 - 1;
                el.style.setProperty('--mx', mx.toFixed(3));
                el.style.setProperty('--my', my.toFixed(3));
            });
        };

        window.addEventListener('pointermove', onMove, { passive: true });
        return () => {
            window.removeEventListener('pointermove', onMove);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div className="ambient-bg" aria-hidden="true" ref={rootRef}>
            <div className="orb-field">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
                <div className="orb orb-4" />
                <div className="orb orb-5" />
                <div className="orb orb-6" />
            </div>
        </div>
    );
}
