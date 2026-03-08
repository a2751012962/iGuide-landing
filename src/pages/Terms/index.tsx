import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Globe } from 'lucide-react';

export default function Terms() {
    const [lang, setLang] = useState<'zh' | 'en'>('zh');

    const content = {
        en: {
            nav: {
                back: 'Back to Home',
                lang: '中文'
            },
            title: 'Terms of Service & Legal Disclaimer',
            lastUpdated: 'Last Updated: March 2026',
            intro: 'Welcome to iGuide. By accessing or using our website (iguide.chat) and our associated services (including the AI Assistant and Dorm Viewer), you agree to be bound by these Terms of Service.',
            sections: [
                {
                    title: '1. Non-Affiliation Disclaimer',
                    content: 'iGuide is an independent, student-led project. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with the University of Illinois Urbana-Champaign (UIUC), University Housing, or any of its official departments. All UIUC-related names, marks, emblems, and images are registered trademarks of their respective owners. Information provided regarding student organizations, including but not limited to CSSA events, is gathered independently and does not represent official organizational announcements.'
                },
                {
                    title: '2. AI Assistant & Information Accuracy',
                    content: 'Our AI Chatbot utilizes Large Language Models and Retrieval-Augmented Generation (RAG) technology to assist with campus-related inquiries.',
                    list: [
                        'No Guarantee of Accuracy: While we strive to provide helpful and up-to-date information regarding courses, syllabi, campus events, and general guidance, AI-generated responses may contain errors, omissions, or "hallucinations."',
                        'Academic & Financial Decisions: You should never rely solely on the AI Assistant for critical decisions regarding degree requirements, course registration, tuition, or housing contracts. Always verify information through official UIUC portals (e.g., Enterprise, Course Explorer, University Housing).'
                    ]
                },
                {
                    title: '3. Dorm Viewer & Content',
                    content: 'The 360° virtual tours, images, and reviews provided in the Dorm Viewer are for informational purposes only.',
                    list: [
                        'Room layouts, furniture, and conditions may change. We do not guarantee that the dorm rooms assigned to you by the University will exactly match the visual representations on our platform.'
                    ]
                },
                {
                    title: '4. Data & Privacy',
                    content: 'We respect your privacy. By interacting with the AI Assistant, you acknowledge that your text inputs may be processed by third-party AI models and stored securely to improve system performance. Please do not share sensitive personal information (such as UIN, passwords, or financial details) in the chat.'
                },
                {
                    title: '5. Intellectual Property',
                    content: 'The codebase, design, and original visual assets of iGuide are the property of the iGuide development team. "iGuide" is operated as an independent project name. You may not reproduce, distribute, or create derivative works from our core platform without explicit permission.'
                },
                {
                    title: '6. Limitation of Liability',
                    content: 'To the maximum extent permitted by law, the iGuide team shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our services.'
                }
            ],
            footer: '© 2026 iGuide Project. All rights reserved.'
        },
        zh: {
            nav: {
                back: '返回首页',
                lang: 'EN'
            },
            title: '服务条款与法律免责声明',
            lastUpdated: '最后更新：2026年3月',
            intro: '欢迎访问 iGuide。访问或使用我们的网站 (iguide.chat) 及其相关服务（包括 AI 助手和宿舍全景查看器），即表示您同意受本服务条款的约束。',
            sections: [
                {
                    title: '1. 非官方声明',
                    content: 'iGuide 是一个由学生主导的独立项目。我们不隶属于伊利诺伊大学厄巴纳-香槟分校 (UIUC)、大学住宿部或其任何官方部门，也不与之相关、未获其授权或认可。所有与 UIUC 相关的名称、标志、徽章和图像均为其各自所有者的注册商标。提供的关于学生组织（包括但不限于 CSSA 活动）的信息系独立收集，不代表官方组织公告。'
                },
                {
                    title: '2. AI 准确性免责',
                    content: '我们的 AI Chatbot 使用大型语言模型和 RAG 技术来协助解答有关校园生活的查询。',
                    list: [
                        '不保证准确性：虽然我们努力提供有关课程、教学大纲、校园活动和一般性指导的最新、有用的信息，但 AI 生成的回复可能包含错误、遗漏或“幻觉”。',
                        '学术与财务决定：您绝不应仅仅依赖 AI 助手来做出有关学位要求、课程注册、学费或住宿合同的关键决定。请始终通过 UIUC 官方门户网站（如 Enterprise、Course Explorer、University Housing）核实信息。'
                    ]
                },
                {
                    title: '3. 宿舍查看器免责',
                    content: '宿舍查看器中提供的 360° 虚拟导览、图片和评论仅供参考。',
                    list: [
                        '房间布局、家具和状况可能会发生变化。我们不保证大学分配给您的宿舍房间与我们平台上显示的视觉效果完全相符。'
                    ]
                },
                {
                    title: '4. 数据处理准则',
                    content: '我们尊重您的隐私。与 AI 助手互动，即表示您承认您的文本输入可能会由第三方 AI 模型进行处理，并被安全存储以提高系统性能。请不要在聊天中分享敏感的个人信息（如 UIN、密码或财务信息）。'
                },
                {
                    title: '5. 知识产权',
                    content: 'iGuide 的代码库、设计和原创视觉资产归 iGuide 开发团队所有。"iGuide" 作为一个独立项目名称运营。未经明确许可，您不得复制、分发或利用我们的核心平台创作衍生作品。'
                },
                {
                    title: '6. 责任限制',
                    content: '在法律允许的最大范围内，iGuide 团队对因您使用或无法使用我们的服务而导致的任何直接、间接、附带或后果性的损害不承担责任。'
                }
            ],
            footer: '© 2026 iGuide Project. 保留所有权利。'
        }
    };

    const t = content[lang];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">
            {/* Simple Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/about" className="flex items-center gap-2 group">
                            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-[#E84A27] transition-colors" />
                            <span className="text-sm font-medium text-slate-600 group-hover:text-[#E84A27] transition-colors">{t.nav.back}</span>
                        </Link>
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#E84A27] transition-colors px-2 py-1.5 rounded-md hover:bg-orange-50"
                            >
                                <Globe className="w-4 h-4" />
                                {t.nav.lang}
                            </button>
                            <div className="flex items-center gap-2">
                                <Compass className="w-5 h-5 text-[#E84A27]" />
                                <span className="text-lg font-bold tracking-tight text-[#13294B]">iGuide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 prose prose-slate max-w-none">
                    <h1 className="text-3xl font-bold text-[#13294B] mb-2">{t.title}</h1>
                    <p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">{t.lastUpdated}</p>

                    <p>{t.intro}</p>

                    {t.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold text-[#13294B] mt-10 mb-4">{section.title}</h3>
                            <p>{section.content}</p>
                            {section.list && (
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    {section.list.map((item, i) => (
                                        <li key={i}><strong>{item.split('：')[0] || item.split(':')[0]}</strong>{lang === 'zh' && item.includes('：') ? '：' : (lang === 'en' && item.includes(':') ? ': ' : '')}{item.includes('：') ? item.split('：').slice(1).join('：') : (item.includes(':') ? item.split(':').slice(1).join(':') : '')}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-slate-50 py-8 border-t border-slate-200 text-center">
                <p className="text-slate-400 text-xs text-center">
                    {t.footer}
                </p>
            </footer>
        </div>
    );
}
