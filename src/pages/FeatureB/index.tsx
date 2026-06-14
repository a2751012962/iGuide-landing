import { Compass, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Seo from '../../components/Seo';
import { useLanguageSwitch } from '../../components/useLanguageSwitch';

export default function FeatureB({ lang }: { lang: 'zh' | 'en' }) {
    const navigate = useNavigate();
    const switchTo = useLanguageSwitch(lang);

    const content = {
        zh: {
            seo: { title: '功能 B — iGuide', description: 'iGuide 功能 B 页面，专为 UIUC 学生设计的校园工具。' },
            nav: { about: '关于我们', featureA: '功能A', featureB: '功能B', login: '登录', signup: '免费注册', lang: 'EN' },
        },
        en: {
            seo: { title: 'Feature B — iGuide', description: 'iGuide Feature B page, a campus tool built for UIUC students.' },
            nav: { about: 'About Us', featureA: 'Feature A', featureB: 'Feature B', login: 'Log in', signup: 'Sign up free', lang: '中文' },
        }
    };

    const t = content[lang];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <Seo title={t.seo.title} description={t.seo.description} path="/featureB" lang={lang} breadcrumbLabel={t.nav.featureB} />
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#E84A27] rounded-lg flex items-center justify-center text-white shadow-sm">
                                <Compass className="w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-[#13294B]">iGuide</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <Link to={`/${lang}/about`} className="text-sm font-medium text-slate-600 hover:text-[#E84A27] transition-colors">{t.nav.about}</Link>
                            <Link to={`/${lang}/featureA`} className="text-sm font-medium text-slate-600 hover:text-[#E84A27] transition-colors">{t.nav.featureA}</Link>
                            <Link to={`/${lang}/featureB`} className="text-sm font-medium text-[#E84A27] transition-colors">{t.nav.featureB}</Link>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button
                                onClick={() => navigate(switchTo)}
                                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#E84A27] transition-colors px-2 py-1.5 rounded-md hover:bg-orange-50"
                            >
                                <Globe className="w-4 h-4" />
                                {t.nav.lang}
                            </button>
                            <button className="text-sm font-medium text-slate-600 hover:text-[#13294B] transition-colors hidden sm:block">{t.nav.login}</button>
                            <button className="bg-[#13294B] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                                {t.nav.signup}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#13294B] mb-6">Feature B</h1>
                <p className="text-lg text-slate-500">This is a placeholder page for Feature B.</p>
            </section>
        </div>
    );
}
