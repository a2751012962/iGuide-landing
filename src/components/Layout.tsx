import { useLocation, useOutlet } from 'react-router-dom';
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from 'motion/react';
import GlassBackground from './GlassBackground';

/**
 * Shared shell for every content page. The ambient {@link GlassBackground} lives
 * here so it persists across navigations (it no longer tears down and restarts
 * on each route change), while the routed page is crossfaded via
 * `AnimatePresence`. This is what makes discrete navigations — e.g. the navbar
 * language toggle — feel smooth instead of snapping to a blank rebuild.
 *
 * `useOutlet()` captures the resolved page element so the *outgoing* page keeps
 * rendering its own content while it fades out (a plain <Outlet/> would show the
 * incoming route during the exit). `initial={false}` skips the very first
 * animation so the prerendered HTML paints fully opaque — no flash, SSG-safe.
 * All motion collapses to an instant swap under prefers-reduced-motion.
 */
export default function Layout() {
    const location = useLocation();
    const outlet = useOutlet();
    const reduceMotion = useReducedMotion();

    return (
        <LazyMotion features={domAnimation}>
            <GlassBackground />
            <AnimatePresence mode="wait" initial={false}>
                <m.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    {outlet}
                </m.div>
            </AnimatePresence>
        </LazyMotion>
    );
}
