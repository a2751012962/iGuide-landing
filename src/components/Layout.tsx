import { useEffect, useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import GlassBackground from './GlassBackground';

/**
 * Shared shell for every content page. The ambient {@link GlassBackground} lives
 * here so it persists across navigations (it no longer tears down and restarts
 * on each route change). The routed page swaps instantly: fading or sliding a
 * full page of `backdrop-filter` glass forces the browser to re-resolve every
 * blur against the backdrop on each frame — that grouped repaint is what made
 * navigation, notably the navbar language toggle, lag.
 *
 * The "liquid glass" flourish instead rides on a single cheap layer: a
 * translucent light sweep that passes across the viewport on each route change.
 * It carries no backdrop-filter, so it lives on its own GPU layer and only ever
 * animates `transform` — buttery regardless of how much glass is on screen.
 * Skipped on the first paint (SSG-safe, no hydration flash) and under
 * prefers-reduced-motion.
 */
export default function Layout() {
    const location = useLocation();
    const reduceMotion = useReducedMotion();
    const prevPath = useRef<string | null>(null);

    // A language toggle only swaps the leading /en|/zh segment, and the SwapText
    // roll on each page already carries that transition — so the full-viewport
    // sweep would just pile on. Strip the language segment to tell a same-page
    // language switch apart from a genuine page navigation.
    const stripLang = (p: string) => p.replace(/^\/(en|zh)(?=\/|$)/, '') || '/';
    const prev = prevPath.current;
    const isLangSwitch =
        prev !== null &&
        prev !== location.pathname &&
        stripLang(prev) === stripLang(location.pathname);

    useEffect(() => {
        prevPath.current = location.pathname;
    }, [location.pathname]);

    // Skip on first paint (prev === null) so there's no fly-in on load, and on
    // same-page language switches (handled by SwapText instead).
    const showSweep = !reduceMotion && prev !== null && !isLangSwitch;

    return (
        <LazyMotion features={domAnimation}>
            <GlassBackground />
            <Outlet />
            {showSweep && (
                <m.div
                    key={location.pathname}
                    className="route-sweep"
                    aria-hidden="true"
                    initial={{ x: '-120%' }}
                    animate={{ x: '120%' }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
            )}
        </LazyMotion>
    );
}
