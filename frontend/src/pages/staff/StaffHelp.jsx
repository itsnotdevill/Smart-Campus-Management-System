import { HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';

const StaffHelp = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">IT Support Hotline</h3>
                                <p className="text-sm text-gray-500">Available 24/7 for critical issues</p>
                            </div>
                        </div>
                        <p className="text-xl font-mono font-bold text-blue-600">+1 (800) 123-4567</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Email Support</h3>
                                <p className="text-sm text-gray-500">Response within 2 hours</p>
                            </div>
                        </div>
                        <p className="text-gray-700 font-medium">support@campus.edu</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {[
                            { q: 'How do I request a shift change?', a: 'Go to the Schedule tab and click on "Request Change" or submit a formal leave request in the Requests section.' },
                            { q: 'Can I update inventory from my phone?', a: 'Yes, the staff portal is fully responsive and works on mobile devices.' },
                            { q: 'My password isn\'t working.', a: 'Please contact IT support or use the "Forgot Password" link on the login page.' },
                        ].map((item, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-xl">
                                <h4 className="font-semibold text-gray-900 text-sm mb-2">{item.q}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffHelp;
