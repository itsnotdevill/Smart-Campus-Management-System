import { Shield, Key, Smartphone, Lock } from 'lucide-react';

const AuthSettings = () => {
    return (
        <div className="max-w-4xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Authentication & Security</h1>
                <p className="text-sm text-gray-500">Manage login methods and security protocols.</p>
            </div>

            <div className="space-y-6">
                {/* Password Policy */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">Password Policy</h3>
                            <p className="text-sm text-gray-500">Configure password strength requirements.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <span className="font-medium text-gray-700">Minimum Length</span>
                            <select className="bg-white border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                                <option>8 Characters</option>
                                <option>10 Characters</option>
                                <option>12 Characters</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                            <span className="font-medium text-gray-700">Require Special Characters</span>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-blue-500 cursor-pointer"></label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2FA */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                            <Smartphone size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">Two-Factor Authentication</h3>
                            <p className="text-sm text-gray-500">Add an extra layer of security.</p>
                        </div>
                    </div>
                    <div className="p-4 border border-blue-100 bg-blue-50 rounded-xl flex justify-between items-center">
                        <div>
                            <p className="text-sm font-semibold text-blue-800">2FA is currently Disabled</p>
                            <p className="text-xs text-blue-600 mt-1">Enable to protect admin accounts.</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700">Enable 2FA</button>
                    </div>
                </div>

                {/* Login History */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 opacity-75">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gray-100 text-gray-600 rounded-lg">
                            <Key size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">API Keys</h3>
                            <p className="text-sm text-gray-500">Manage access keys for third-party integrations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthSettings;
