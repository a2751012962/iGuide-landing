import { useState } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react';
import { Compass, Globe, Menu, X } from 'lucide-react';
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
 * which link is highlighted; language + auth actions live on the right. On
 * small screens the primary links collapse into a glass dropdown menu.
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
    const [open, setOpen] = useState(false);

    const linkClass = (key: typeof active) =>
        `interactive text-sm font-medium ${
            active === key
                ? 'text-[#E84A27]'
                : 'text-slate-600 hover:text-[#E84A27]'
        }`;

    const links = [
        { key: 'about', label: labels.about },
        { key: 'featureA', label: labels.featureA },
        { key: 'featureB', label: labels.featureB },
    ] as const;

    return (
        <LazyMotion features={domAnimation}>
        <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
            <div className="glass-surface-lg bg-white/60 border border-white/60 shadow-glass max-w-7xl mx-auto rounded-2xl px-4 sm:px-6">
                <div className="flex justify-between items-center h-14">
                    <Link to={`/${lang}/about`} onClick={() => setOpen(false)} className="interactive flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#E84A27] rounded-xl flex items-center justify-center text-white shadow-sm">
                            <Compass className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[#13294B]">iGuide</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        {links.map(({ key, label }) => (
                            <Link key={key} to={`/${lang}/${key}`} className={linkClass(key)}>{label}</Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            onClick={() => {
                                setOpen(false);
                                navigate(switchTo);
                            }}
                            className="interactive flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#E84A27] px-2.5 py-1.5 rounded-full hover:bg-white/40"
                        >
                            <Globe className="w-4 h-4" />
                            {labels.lang}
                        </button>
                        <button className="interactive text-sm font-medium text-slate-600 hover:text-[#13294B] hidden sm:block">{labels.login}</button>
                        <button className="interactive glass-btn text-white bg-[#13294B]/90 border-white/15 px-4 py-2 rounded-full text-sm font-medium hidden sm:block">
                            {labels.signup}
                        </button>
                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-label={lang === 'zh' ? '菜单' : 'Menu'}
                            aria-expanded={open}
                            className="interactive md:hidden flex items-center justify-center w-9 h-9 rounded-full text-[#13294B] hover:bg-white/40"
                        >
                            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown — smoothly expands/collapses. */}
                <AnimatePresence initial={false}>
                    {open && (
                        <m.div
                            key="mobile-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="border-t border-white/50 py-3 flex flex-col gap-1">
                                {links.map(({ key, label }) => (
                                    <Link
                                        key={key}
                                        to={`/${lang}/${key}`}
                                        onClick={() => setOpen(false)}
                                        className={`px-3 py-2 rounded-xl hover:bg-white/40 ${linkClass(key)}`}
                                    >
                                        {label}
                                    </Link>
                                ))}
                                <div className="mt-2 flex gap-2 px-1">
                                    <button className="interactive flex-1 text-sm font-medium text-[#13294B] glass-surface-sm bg-white/50 border border-white/60 px-4 py-2 rounded-full">
                                        {labels.login}
                                    </button>
                                    <button className="interactive flex-1 glass-btn text-white bg-[#13294B]/90 border-white/15 px-4 py-2 rounded-full text-sm font-medium">
                                        {labels.signup}
                                    </button>
                                </div>
                            </div>
                        </m.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
        </LazyMotion>
    );
}
