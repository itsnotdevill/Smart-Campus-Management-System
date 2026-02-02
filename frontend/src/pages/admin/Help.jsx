import { HelpCircle, Mail, MessageSquare, Book } from 'lucide-react';

const Help = () => {
    return (
        <div className="max-w-4xl">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">How can we help you?</h1>
                <p className="text-gray-500">Search for help or browse common topics below.</p>
                <div className="mt-6 max-w-xl mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search for articles..."
                        className="w-full p-4 pl-12 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                    <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition cursor-pointer">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Book size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Documentation</h3>
                    <p className="text-sm text-gray-500">Read detailed guides on how to use the platform.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition cursor-pointer">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Live Chat</h3>
                    <p className="text-sm text-gray-500">Chat with our support team in real-time.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition cursor-pointer">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Email Support</h3>
                    <p className="text-sm text-gray-500">Get help via email for complex issues.</p>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                {[
                    "How do I Add a new Admin?",
                    "Can I export attendance reports to Excel?",
                    "How do I reset a student's password?",
                    "Where can I see the system logs?"
                ].map((faq, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                        <span className="font-medium text-gray-700">{faq}</span>
                        <HelpCircle size={16} className="text-gray-400" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Help;
