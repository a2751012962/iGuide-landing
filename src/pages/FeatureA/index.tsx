import Seo from '../../components/Seo';
import GlassNav from '../../components/GlassNav';

export default function FeatureA({ lang }: { lang: 'zh' | 'en' }) {
    const content = {
        zh: {
            seo: { title: '功能 A — iGuide', description: 'iGuide 功能 A 页面，专为 UIUC 学生设计的校园工具。' },
            nav: { about: '关于我们', featureA: '功能A', featureB: '功能B', login: '登录', signup: '免费注册', lang: 'EN' },
            heading: '功能 A',
            body: '这是功能 A 的占位页面。',
        },
        en: {
            seo: { title: 'Feature A — iGuide', description: 'iGuide Feature A page, a campus tool built for UIUC students.' },
            nav: { about: 'About Us', featureA: 'Feature A', featureB: 'Feature B', login: 'Log in', signup: 'Sign up free', lang: '中文' },
            heading: 'Feature A',
            body: 'This is a placeholder page for Feature A.',
        }
    };

    const t = content[lang];

    return (
        <div className="min-h-screen font-sans text-slate-800">
            <Seo title={t.seo.title} description={t.seo.description} path="/featureA" lang={lang} breadcrumbLabel={t.nav.featureA} />
            <GlassNav lang={lang} labels={t.nav} active="featureA" />

            {/* Content */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <div className="glass-card-elevated glass-shine bg-white/65 border-white/70 shadow-glass-lg rounded-3xl px-8 py-16 sm:px-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#13294B] mb-6">{t.heading}</h1>
                    <p className="text-lg text-slate-500">{t.body}</p>
                </div>
            </section>
        </div>
    );
}
