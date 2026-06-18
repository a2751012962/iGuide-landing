import Seo from '../../components/Seo';
import GlassNav from '../../components/GlassNav';
import SwapText from '../../components/SwapText';

export default function FeatureB({ lang }: { lang: 'zh' | 'en' }) {
    const content = {
        zh: {
            seo: { title: '功能 B — iGuide', description: 'iGuide 功能 B 页面，专为 UIUC 学生设计的校园工具。' },
            nav: { about: '关于我们', featureA: '功能A', featureB: '功能B', login: '登录', signup: '免费注册', lang: 'EN' },
            heading: '功能 B',
            body: '这是功能 B 的占位页面。',
        },
        en: {
            seo: { title: 'Feature B — iGuide', description: 'iGuide Feature B page, a campus tool built for UIUC students.' },
            nav: { about: 'About Us', featureA: 'Feature A', featureB: 'Feature B', login: 'Log in', signup: 'Sign up free', lang: '中文' },
            heading: 'Feature B',
            body: 'This is a placeholder page for Feature B.',
        }
    };

    const t = content[lang];

    return (
        <div className="min-h-screen font-sans text-slate-800">
            <Seo title={t.seo.title} description={t.seo.description} path="/featureB" lang={lang} breadcrumbLabel={t.nav.featureB} />
            <GlassNav lang={lang} labels={t.nav} active="featureB" />

            {/* Content */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <div className="glass-card-elevated glass-shine bg-white/65 border-white/70 shadow-glass-lg rounded-3xl px-8 py-16 sm:px-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#13294B] mb-6"><SwapText swapKey={lang} block>{t.heading}</SwapText></h1>
                    <p className="text-lg text-slate-500"><SwapText swapKey={lang} block>{t.body}</SwapText></p>
                </div>
            </section>
        </div>
    );
}
