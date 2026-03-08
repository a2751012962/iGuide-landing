import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">
            {/* Simple Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/about" className="flex items-center gap-2 group">
                            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-[#E84A27] transition-colors" />
                            <span className="text-sm font-medium text-slate-600 group-hover:text-[#E84A27] transition-colors">Back to Home</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            <Compass className="w-5 h-5 text-[#E84A27]" />
                            <span className="text-lg font-bold tracking-tight text-[#13294B]">iGuide</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 prose prose-slate max-w-none">
                    <h1 className="text-3xl font-bold text-[#13294B] mb-2">Terms of Service & Legal Disclaimer</h1>
                    <p className="text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">Last Updated: March 2026</p>

                    <p>Welcome to iGuide. By accessing or using our website (<code>iguide.chat</code>) and our associated services (including the AI Assistant and Dorm Viewer), you agree to be bound by these Terms of Service.</p>

                    <h3 className="text-xl font-semibold text-[#13294B] mt-10 mb-4">1. Non-Affiliation Disclaimer (非官方声明)</h3>
                    <p>iGuide is an independent, student-led project. We are <strong>not</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with the <strong>University of Illinois Urbana-Champaign (UIUC)</strong>, University Housing, or any of its official departments. All UIUC-related names, marks, emblems, and images are registered trademarks of their respective owners. Information provided regarding student organizations, including but not limited to CSSA events, is gathered independently and does not represent official organizational announcements.</p>

                    <h3 className="text-xl font-semibold text-[#13294B] mt-10 mb-4">2. AI Assistant & Information Accuracy (AI 准确性免责)</h3>
                    <p>Our AI Chatbot utilizes Large Language Models and Retrieval-Augmented Generation (RAG) technology to assist with campus-related inquiries.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>No Guarantee of Accuracy:</strong> While we strive to provide helpful and up-to-date information regarding courses, syllabi, campus events, and general guidance, AI-generated responses may contain errors, omissions, or "hallucinations."</li>
                        <li><strong>Academic & Financial Decisions:</strong> You should <strong>never</strong> rely solely on the AI Assistant for critical decisions regarding degree requirements, course registration, tuition, or housing contracts. Always verify information through official UIUC portals (e.g., Enterprise, Course Explorer, University Housing).</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#13294B] mt-10 mb-4">3. Dorm Viewer & Content (宿舍查看器免责)</h3>
                    <p>The 360° virtual tours, images, and reviews provided in the Dorm Viewer are for informational purposes only.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Room layouts, furniture, and conditions may change. We do not guarantee that the dorm rooms assigned to you by the University will exactly match the visual representations on our platform.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#13294B] mt-10 mb-4">4. Data & Privacy (数据处理准则)</h3>
                    <p>We respect your privacy. By interacting with the AI Assistant, you acknowledge that your text inputs may be processed by third-party AI models and stored securely to improve system performance. Please <strong>do not</strong> share sensitive personal information (such as UIN, passwords, or financial details) in the chat.</p>

                    <h3 className="text-xl font-semibold text-[#13294B] mt-10 mb-4">5. Intellectual Property (知识产权)</h3>
                    <p>The codebase, design, and original visual assets of iGuide are the property of the iGuide development team. "iGuide" is operated as an independent project name. You may not reproduce, distribute, or create derivative works from our core platform without explicit permission.</p>

                    <h3 className="text-xl font-semibold text-[#13294B] mt-10 mb-4">6. Limitation of Liability (责任限制)</h3>
                    <p>To the maximum extent permitted by law, the iGuide team shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our services.</p>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-slate-50 py-8 border-t border-slate-200 text-center">
                <p className="text-slate-400 text-xs text-center">
                    © 2026 iGuide Project. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
