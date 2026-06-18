import { m } from 'motion/react';
import { Home, MessageSquare, Compass, ArrowRight, CheckCircle2, Users, Star, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import GlassNav from '../../components/GlassNav';
import InteractiveGlassCard from '../../components/InteractiveGlassCard';
import SwapText from '../../components/SwapText';

type GatewayCard = {
    key: string;
    href: string;
    icon: LucideIcon;
    accentText: string;
    title: string;
    subtitle: string;
    features: string[];
    action: string;
    delay: number;
};

/**
 * Inner content of a gateway card, laid out on a responsive plugin
 * `glass-card` surface (navy/slate palette over the frosted panel).
 */
function CardInner({ card, lang }: { card: GatewayCard; lang: 'zh' | 'en' }) {
    const Icon = card.icon;
    return (
        <div className="flex flex-col h-full w-full text-left">
            <div className="flex-grow">
                <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 ease-liquid group-hover:scale-110 glass-surface-sm bg-white/50 border border-white/60 ${card.accentText}`}
                >
                    <Icon className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-[#13294B]"><SwapText swapKey={lang}>{card.title}</SwapText></h2>
                <p className="mb-8 text-lg text-slate-500"><SwapText swapKey={lang} block>{card.subtitle}</SwapText></p>
                <ul className="space-y-3 mb-10">
                    {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                            <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-emerald-500" />
                            <SwapText swapKey={lang} block className="flex-1">{feature}</SwapText>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-auto pt-6 border-t border-white/50">
                <div className={`flex items-center justify-between font-semibold ${card.accentText}`}>
                    <SwapText swapKey={lang}>{card.action}</SwapText>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 ease-liquid glass-surface-sm bg-white/50 border border-white/60">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function About({ lang }: { lang: 'zh' | 'en' }) {
    const content = {
        zh: {
            seo: {
                title: 'iGuide — 专为 UIUC 学生打造的终极校园工具箱',
                description: 'iGuide 为 UIUC 学生提供宿舍对比（真实评价、设施与房型）和 24/7 中英双语 AI 助手，解答选课、教授评分与校园生活的一切疑问。'
            },
            nav: { about: '关于我们', featureA: '功能A', featureB: '功能B', login: '登录', signup: '免费注册', lang: 'EN' },
            hero: {
                badge: '已有 2,000+ UIUC 学生加入',
                title1: '专为 UIUC 学生打造的',
                titleHighlight: '终极校园工具箱',
                desc: '无论是寻找最适合的宿舍，还是解答关于选课、校园生活的任何疑问，iGuide 都能为你提供最准确的答案。选择你需要的功能，立即开始探索。'
            },
            cards: {
                dorm: {
                    title: 'Dorm Viewer',
                    subtitle: '探索并比较 UIUC 宿舍',
                    features: [
                        '真实学生评价与居住体验',
                        '详细的设施与房型对比',
                        '周边餐饮与交通便利度分析'
                    ],
                    action: '进入宿舍指南'
                },
                chat: {
                    title: 'AI Chatbot',
                    subtitle: '你的 24/7 全天候 Illini 助手',
                    features: [
                        '选课建议与教授评分查询',
                        '校园生活、美食与交通百事通',
                        '支持中英双语，秒级实时响应'
                    ],
                    action: '开启智能对话'
                }
            },
            stats: {
                users: '活跃 UIUC 用户',
                dorms: '宿舍楼全方位覆盖',
                satisfaction: '用户满意度'
            },
            legal: {
                title: '合规与法律声明',
                affiliation: '非官方声明',
                affiliationText: 'iGuide 是一个由学生主导的独立项目，并非伊利诺伊大学厄巴纳-香槟分校 (UIUC) 的官方服务。我们的内容不受大学住宿或任何官方部门的认可或验证。',
                aiDisclaimer: 'AI 准确性声明',
                aiDisclaimerText: 'iGuide Chatbot 使用大型语言模型和 RAG 技术。虽然我们努力确保准确性，但 AI 偶尔可能会生成不正确或有偏差的信息。用户应与大学官方资源交叉核对重要的学术或财务决定。',
                ip: '商标与版权',
                ipText: 'iGuide™ 是一个独立项目。所有与 UIUC 相关的标志和名称均为其各自所有者的知识产权。',
                privacy: '隐私与数据处理简述',
                privacyText: '我们重视您的隐私。您的对话数据仅用于提高 AI 的响应质量，通过安全加密的方式处理和存储。'
            },
            footer: {
                copyright: '© 2026 iGuide Project. 保留所有权利。',
                privacy: '隐私政策',
                terms: '服务条款',
                disclaimer: '免责声明',
                contact: '联系我们'
            }
        },
        en: {
            seo: {
                title: 'iGuide — UIUC Dorm Viewer & AI Campus Assistant',
                description: 'The ultimate campus toolkit for UIUC students. Compare dorms with real student reviews and get 24/7 answers on courses, professors, and campus life from a bilingual AI assistant.'
            },
            nav: { about: 'About Us', featureA: 'Feature A', featureB: 'Feature B', login: 'Log in', signup: 'Sign up free', lang: '中文' },
            hero: {
                badge: 'Trusted by 2,000+ UIUC Students',
                title1: 'The Ultimate Campus Toolkit',
                titleHighlight: 'Built for UIUC Students',
                desc: "Whether you're looking for the perfect dorm or need answers about courses and campus life, iGuide provides the most accurate answers. Choose your tool and start exploring."
            },
            cards: {
                dorm: {
                    title: 'Dorm Viewer',
                    subtitle: 'Explore & Compare UIUC Housing',
                    features: [
                        'Real student reviews and living experiences',
                        'Detailed amenities and room type comparisons',
                        'Nearby dining and transit accessibility analysis'
                    ],
                    action: 'Enter Dorm Viewer'
                },
                chat: {
                    title: 'AI Chatbot',
                    subtitle: 'Your 24/7 Illini Assistant',
                    features: [
                        'Course advice and professor ratings',
                        'Campus life, food, and transit know-it-all',
                        'Bilingual support with instant responses'
                    ],
                    action: 'Start Smart Chat'
                }
            },
            stats: {
                users: 'Active UIUC Users',
                dorms: 'Dorms Fully Covered',
                satisfaction: 'User Satisfaction'
            },
            legal: {
                title: 'Compliance & Legal',
                affiliation: 'Affiliation Disclaimer',
                affiliationText: 'iGuide is an independent student-led project and is not an official service of the University of Illinois Urbana-Champaign (UIUC). Our content is not endorsed or verified by the University Housing or any official department.',
                aiDisclaimer: 'AI Accuracy Disclaimer',
                aiDisclaimerText: 'Our AI Chatbot uses Large Language Models and RAG technology. While we strive for accuracy, AI can occasionally generate incorrect or biased information. Users should cross-reference important academic or financial decisions with official university resources.',
                ip: 'Intellectual Property',
                ipText: 'iGuide™ is an independent project. All UIUC-related logos and names are the intellectual property of their respective owners.',
                privacy: 'Privacy Note',
                privacyText: 'We value your privacy. Your conversation data is used solely to improve the AI\'s response quality and is processed securely and stored in encrypted databases.'
            },
            footer: {
                copyright: '© 2026 iGuide Project. All rights reserved.',
                privacy: 'Privacy Policy',
                terms: 'Terms of Service',
                disclaimer: 'Disclaimers',
                contact: 'Contact'
            }
        }
    };

    const t = content[lang];

    const cards: GatewayCard[] = [
        {
            key: 'dorm',
            href: 'https://iguide.chat/dorms',
            icon: Home,
            accentText: 'text-[#E84A27]',
            title: t.cards.dorm.title,
            subtitle: t.cards.dorm.subtitle,
            features: t.cards.dorm.features,
            action: t.cards.dorm.action,
            delay: 0.2,
        },
        {
            key: 'chat',
            href: 'https://iguide.chat/chat',
            icon: MessageSquare,
            accentText: 'text-[#13294B]',
            title: t.cards.chat.title,
            subtitle: t.cards.chat.subtitle,
            features: t.cards.chat.features,
            action: t.cards.chat.action,
            delay: 0.3,
        },
    ];

    return (
        <div className="min-h-screen font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">
            <Seo title={t.seo.title} description={t.seo.description} path="/about" lang={lang} breadcrumbLabel={t.nav.about} />
            <GlassNav lang={lang} labels={t.nav} active="about" />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="glass-surface-sm bg-white/50 border border-white/60 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#E84A27] text-sm font-medium mb-8 shadow-glass">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E84A27] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E84A27]"></span>
                        </span>
                        <SwapText swapKey={lang}>{t.hero.badge}</SwapText>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#13294B] tracking-tight mb-6 leading-tight">
                        <SwapText swapKey={lang} block>
                            {t.hero.title1} <br className="hidden sm:block" />
                            <span className="gradient-flow">{t.hero.titleHighlight}</span>
                        </SwapText>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
                        <SwapText swapKey={lang} block>{t.hero.desc}</SwapText>
                    </p>
                </m.div>

                {/* The Gateway Cards — responsive frosted glass-card surfaces. */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto text-left">
                    {cards.map((card) => (
                        <m.div
                            key={card.key}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full"
                        >
                            <a
                                href={card.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full"
                            >
                                <InteractiveGlassCard className="glass-card glass-shine liquid-sheen overflow-hidden bg-white/60 border-white/60 rounded-3xl p-8 sm:p-10 h-full shadow-glass group-hover:shadow-glass-lg">
                                    <CardInner card={card} lang={lang} />
                                </InteractiveGlassCard>
                            </a>
                        </m.div>
                    ))}
                </div>
            </section>

            {/* Stats / Social Proof Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto glass-card-elevated glass-shine liquid-sheen overflow-hidden bg-white/65 border-white/70 rounded-3xl px-6 py-10 sm:px-10 shadow-glass-lg"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/50">
                        <div className="p-4">
                            <div className="flex justify-center mb-4">
                                <span className="lift glass-surface-sm bg-white/50 border border-white/60 w-12 h-12 rounded-2xl flex items-center justify-center text-[#E84A27]">
                                    <Users className="w-6 h-6" />
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-[#13294B] mb-2">2,000+</h3>
                            <p className="text-slate-500 font-medium"><SwapText swapKey={lang}>{t.stats.users}</SwapText></p>
                        </div>
                        <div className="p-4 pt-8 md:pt-4">
                            <div className="flex justify-center mb-4">
                                <span className="lift glass-surface-sm bg-white/50 border border-white/60 w-12 h-12 rounded-2xl flex items-center justify-center text-[#13294B]">
                                    <Shield className="w-6 h-6" />
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-[#13294B] mb-2">24</h3>
                            <p className="text-slate-500 font-medium"><SwapText swapKey={lang}>{t.stats.dorms}</SwapText></p>
                        </div>
                        <div className="p-4 pt-8 md:pt-4">
                            <div className="flex justify-center mb-4">
                                <span className="lift glass-surface-sm bg-white/50 border border-white/60 w-12 h-12 rounded-2xl flex items-center justify-center text-amber-500">
                                    <Star className="w-6 h-6" />
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-[#13294B] mb-2">98%</h3>
                            <p className="text-slate-500 font-medium"><SwapText swapKey={lang}>{t.stats.satisfaction}</SwapText></p>
                        </div>
                    </div>
                </m.div>
            </section>

            {/* Legal / Compliance Section */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-7xl mx-auto glass-card glass-shine bg-white/55 border-white/60 rounded-3xl px-6 py-10 sm:px-10 shadow-glass"
                >
                    <h3 className="text-xl font-bold text-[#13294B] mb-8 text-center"><SwapText swapKey={lang}>{t.legal.title}</SwapText></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="lift rounded-2xl p-3 -m-3 hover:bg-white/30">
                            <h4 className="text-sm font-semibold text-[#13294B] mb-3"><SwapText swapKey={lang}>{t.legal.affiliation}</SwapText></h4>
                            <p className="text-xs text-slate-500 leading-relaxed"><SwapText swapKey={lang} block>{t.legal.affiliationText}</SwapText></p>
                        </div>
                        <div className="lift rounded-2xl p-3 -m-3 hover:bg-white/30">
                            <h4 className="text-sm font-semibold text-[#13294B] mb-3"><SwapText swapKey={lang}>{t.legal.aiDisclaimer}</SwapText></h4>
                            <p className="text-xs text-slate-500 leading-relaxed"><SwapText swapKey={lang} block>{t.legal.aiDisclaimerText}</SwapText></p>
                        </div>
                        <div className="lift rounded-2xl p-3 -m-3 hover:bg-white/30">
                            <h4 className="text-sm font-semibold text-[#13294B] mb-3"><SwapText swapKey={lang}>{t.legal.ip}</SwapText></h4>
                            <p className="text-xs text-slate-500 leading-relaxed"><SwapText swapKey={lang} block>{t.legal.ipText}</SwapText></p>
                        </div>
                        <div className="lift rounded-2xl p-3 -m-3 hover:bg-white/30">
                            <h4 className="text-sm font-semibold text-[#13294B] mb-3"><SwapText swapKey={lang}>{t.legal.privacy}</SwapText></h4>
                            <p className="text-xs text-slate-500 leading-relaxed"><SwapText swapKey={lang} block>{t.legal.privacyText}</SwapText></p>
                        </div>
                    </div>
                </m.div>
            </section>

            {/* Footer */}
            <footer className="px-4 sm:px-6 lg:px-8 pb-6 pt-4">
                <div className="max-w-7xl mx-auto glass-surface-lg bg-white/60 border border-white/60 shadow-glass rounded-2xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Compass className="w-5 h-5 text-[#E84A27]" />
                        <span className="text-lg font-bold tracking-tight text-[#13294B]">iGuide</span>
                    </div>
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        <SwapText swapKey={lang}>{t.footer.copyright}</SwapText>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
                        <Link to={`/${lang}/terms`} className="link-underline inline-block hover:text-[#E84A27] transition-colors"><SwapText swapKey={lang}>{t.footer.terms}</SwapText></Link>
                        <Link to={`/${lang}/terms`} className="link-underline inline-block hover:text-[#E84A27] transition-colors"><SwapText swapKey={lang}>{t.footer.privacy}</SwapText></Link>
                        <Link to={`/${lang}/terms`} className="link-underline inline-block hover:text-[#E84A27] transition-colors"><SwapText swapKey={lang}>{t.footer.disclaimer}</SwapText></Link>
                        <a href="mailto:support@iguide.chat" className="link-underline inline-block hover:text-[#E84A27] transition-colors"><SwapText swapKey={lang}>{t.footer.contact}</SwapText></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
