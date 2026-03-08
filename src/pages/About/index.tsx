import { useState } from 'react';
import { motion } from 'motion/react';
import { Home, MessageSquare, Compass, ArrowRight, CheckCircle2, Users, Star, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    const [lang, setLang] = useState<'zh' | 'en'>('zh');

    const content = {
        zh: {
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

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">
            {/* Navigation - Note: This should ideally be moved to a shared component in the future */}
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
                            <Link to="/about" className="text-sm font-medium text-[#E84A27] transition-colors">{t.nav.about}</Link>
                            <Link to="/featureA" className="text-sm font-medium text-slate-600 hover:text-[#E84A27] transition-colors">{t.nav.featureA}</Link>
                            <Link to="/featureB" className="text-sm font-medium text-slate-600 hover:text-[#E84A27] transition-colors">{t.nav.featureB}</Link>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button
                                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
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

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/50 text-[#E84A27] text-sm font-medium mb-8 border border-orange-200/50">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E84A27] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E84A27]"></span>
                        </span>
                        {t.hero.badge}
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#13294B] tracking-tight mb-6 leading-tight">
                        {t.hero.title1} <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E84A27] to-orange-400">{t.hero.titleHighlight}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
                        {t.hero.desc}
                    </p>
                </motion.div>

                {/* The Gateway Cards */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto text-left">
                    {/* Card A: Dorm Viewer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a
                            href="https://iguide.chat/dorms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col h-full bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110"></div>

                            <div className="relative z-10 flex-grow">
                                <div className="w-14 h-14 bg-orange-100 text-[#E84A27] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
                                    <Home className="w-7 h-7" />
                                </div>

                                <h2 className="text-2xl font-bold text-[#13294B] mb-2">{t.cards.dorm.title}</h2>
                                <p className="text-slate-500 mb-8 text-lg">{t.cards.dorm.subtitle}</p>

                                <ul className="space-y-3 mb-10">
                                    {t.cards.dorm.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative z-10 mt-auto pt-6 border-t border-slate-100">
                                <div className="flex items-center justify-between text-[#E84A27] font-semibold group-hover:text-orange-600 transition-colors">
                                    <span>{t.cards.dorm.action}</span>
                                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 group-hover:translate-x-1 transition-all">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* Card B: AI Chatbot */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <a
                            href="https://iguide.chat/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col h-full bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110"></div>

                            <div className="relative z-10 flex-grow">
                                <div className="w-14 h-14 bg-blue-100 text-[#13294B] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-inner">
                                    <MessageSquare className="w-7 h-7" />
                                </div>

                                <h2 className="text-2xl font-bold text-[#13294B] mb-2">{t.cards.chat.title}</h2>
                                <p className="text-slate-500 mb-8 text-lg">{t.cards.chat.subtitle}</p>

                                <ul className="space-y-3 mb-10">
                                    {t.cards.chat.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-slate-600">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative z-10 mt-auto pt-6 border-t border-slate-100">
                                <div className="flex items-center justify-between text-[#13294B] font-semibold group-hover:text-blue-800 transition-colors">
                                    <span>{t.cards.chat.action}</span>
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:translate-x-1 transition-all">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Social Proof Section */}
            <section className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div className="p-4">
                            <div className="flex justify-center mb-4">
                                <Users className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#13294B] mb-2">2,000+</h3>
                            <p className="text-slate-500 font-medium">{t.stats.users}</p>
                        </div>
                        <div className="p-4 pt-8 md:pt-4">
                            <div className="flex justify-center mb-4">
                                <Shield className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#13294B] mb-2">24</h3>
                            <p className="text-slate-500 font-medium">{t.stats.dorms}</p>
                        </div>
                        <div className="p-4 pt-8 md:pt-4">
                            <div className="flex justify-center mb-4">
                                <Star className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#13294B] mb-2">98%</h3>
                            <p className="text-slate-500 font-medium">{t.stats.satisfaction}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal / Compliance Section */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl font-bold text-[#13294B] mb-8 text-center">{t.legal.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold text-[#13294B] mb-3">{t.legal.affiliation}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{t.legal.affiliationText}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-[#13294B] mb-3">{t.legal.aiDisclaimer}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{t.legal.aiDisclaimerText}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-[#13294B] mb-3">{t.legal.ip}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{t.legal.ipText}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-[#13294B] mb-3">{t.legal.privacy}</h4>
                            <p className="text-xs text-slate-500 leading-relaxed">{t.legal.privacyText}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-8 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Compass className="w-5 h-5 text-[#E84A27]" />
                        <span className="text-lg font-bold tracking-tight text-[#13294B]">iGuide</span>
                    </div>
                    <p className="text-slate-400 text-xs text-center md:text-left">
                        {t.footer.copyright}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
                        <Link to="/terms" className="hover:text-[#E84A27] transition-colors">{t.footer.terms}</Link>
                        <Link to="/terms" className="hover:text-[#E84A27] transition-colors">{t.footer.privacy}</Link>
                        <Link to="/terms" className="hover:text-[#E84A27] transition-colors">{t.footer.disclaimer}</Link>
                        <a href="mailto:support@iguide.chat" className="hover:text-[#E84A27] transition-colors">{t.footer.contact}</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
