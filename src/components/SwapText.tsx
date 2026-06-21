import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * Crossfading text that "rolls over" whenever {@link swapKey} changes — used for
 * the language toggle. The outgoing copy shrinks, drifts up and fades out while
 * the incoming copy rises up from below, grows to full size and fades in, so the
 * two languages swap with a soft vertical roll instead of a hard cut.
 *
 * Both copies are stacked in a single CSS grid cell (`grid-area: 1/1`) so they
 * overlap during the swap without knocking the surrounding layout around; the
 * animation is transform/opacity only. `initial={false}` means it stays inert on
 * first paint (SSG-safe: the text renders at rest, so there's no hydration flash
 * and no fly-in on load). Under prefers-reduced-motion the roll/scale is dropped
 * to a quick opacity crossfade — the DOM structure is kept identical either way
 * so toggling reduced motion never causes a hydration mismatch.
 *
 * Use `block` for text that needs to wrap within its container (headings,
 * paragraphs); the default inline grid shrink-wraps to a single line and suits
 * short labels.
 */
export default function SwapText({
    swapKey,
    children,
    className = '',
    block = false,
}: {
    swapKey: string;
    children: ReactNode;
    className?: string;
    block?: boolean;
}) {
    const reduceMotion = useReducedMotion();
    const shift = reduceMotion ? 0 : 14;
    const scale = reduceMotion ? 1 : 0.85;

    return (
        <span className={`swap-text ${block ? 'swap-text--block' : ''} ${className}`}>
            <AnimatePresence initial={false} mode="sync">
                <m.span
                    key={swapKey}
                    className="swap-text__item"
                    initial={{ opacity: 0, y: shift, scale }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -shift, scale }}
                    transition={{ duration: reduceMotion ? 0.15 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    {children}
                </m.span>
            </AnimatePresence>
        </span>
    );
}
