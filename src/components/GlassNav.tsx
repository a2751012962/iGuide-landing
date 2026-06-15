import { Compass, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguageSwitch } from './useLanguageSwitch';

type NavLabels = {
    about: string;
    featureA: string;
    featureB: string;
    login: string;
    signup: string;
    lang: string;
};

/**
 * Floating Liquid-Glass navigation shared by the main pages. `active` controls
 * which link is highlighted; language + auth actions live on the right.
 */
export default function GlassNav({
    lang,
    labels,
    active,
}: {
    lang: 'zh' | 'en';
    labels: NavLabels;
    active: 'about' | 'featureA' | 'featureB';
}) {
    const navigate = useNavigate();
    const switchTo = useLanguageSwitch(lang);

    const linkClass = (key: typeof active) =>
        `text-sm font-medium transition-colors ${
            active === key
                ? 'text-[#E84A27]'
                : 'text-slate-600 hover:text-[#E84A27]'
        }`;

    return (
        <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
            <div className="glass-surface-lg bg-white/60 border border-white/60 shadow-glass max-w-7xl mx-auto rounded-2xl px-4 sm:px-6">
                <div className="flex justify-between items-center h-14">
                    <Link to={`/${lang}/about`} className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#E84A27] rounded-xl flex items-center justify-center text-white shadow-sm">
                            <Compass className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[#13294B]">iGuide</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to={`/${lang}/about`} className={linkClass('about')}>{labels.about}</Link>
                        <Link to={`/${lang}/featureA`} className={linkClass('featureA')}>{labels.featureA}</Link>
                        <Link to={`/${lang}/featureB`} className={linkClass('featureB')}>{labels.featureB}</Link>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            onClick={() => navigate(switchTo)}
                            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#E84A27] transition-colors px-2.5 py-1.5 rounded-full hover:bg-white/40"
                        >
                            <Globe className="w-4 h-4" />
                            {labels.lang}
                        </button>
                        <button className="text-sm font-medium text-slate-600 hover:text-[#13294B] transition-colors hidden sm:block">{labels.login}</button>
                        <button className="glass-btn text-white bg-[#13294B]/90 border-white/15 px-4 py-2 rounded-full text-sm font-medium">
                            {labels.signup}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
