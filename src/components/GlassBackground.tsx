/**
 * Ambient "Liquid Glass" wallpaper. A fixed, full-viewport layer of soft
 * colour orbs that drift behind the page's frosted glass panels so the glass
 * has something to refract. Purely decorative — hidden from assistive tech.
 */
export default function GlassBackground() {
    return (
        <div className="ambient-bg" aria-hidden="true">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="orb orb-4" />
        </div>
    );
}
