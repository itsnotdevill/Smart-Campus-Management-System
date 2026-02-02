import { User, Lock, Bell, Moon } from 'lucide-react';

const StaffSettings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Profile Section */}
                <div className="p-8 border-b border-gray-50">
                    <div className="flex items-center space-x-6">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-3xl">
                            S
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">Staff Member</h3>
                            <p className="text-gray-500">staff@campus.com</p>
                            <button className="mt-2 text-sm text-green-600 font-semibold hover:underline">Change Profile Photo</button>
                        </div>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="p-8 space-y-6 max-w-2xl">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <div className="flex items-center space-x-2">
                            <User size={20} className="text-gray-400" />
                            <input type="text" defaultValue="Staff Member" className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-100 outline-none transition" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <div className="flex items-center space-x-2">
                            <Lock size={20} className="text-gray-400" />
                            <input type="password" placeholder="Change Password" className="flex-1 p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-100 outline-none transition" />
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Bell size={20} className="text-gray-400" />
                            <span className="text-gray-700 font-medium">Email Notifications</span>
                        </div>
                        <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Moon size={20} className="text-gray-400" />
                            <span className="text-gray-700 font-medium">Dark Mode</span>
                        </div>
                        <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-sm transition transform hover:-translate-y-0.5">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffSettings;
