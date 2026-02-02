import { useState } from 'react';
import { Moon, User, Save, Lock } from 'lucide-react';

const Settings = () => {
    const [profile, setProfile] = useState({ name: 'Admin User', email: 'admin@campus.com', phone: '+1 234 567 890' });
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        // Simulate API call
        alert("Profile Updated Successfully!");
        setIsEditing(false);
    };

    return (
        <div className="max-w-4xl space-y-8">
            <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

            {/* Profile Settings */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Profile Settings</h2>
                        <p className="text-sm text-gray-500">Manage your personal information</p>
                    </div>
                    {!isEditing && (
                        <button onClick={() => setIsEditing(true)} className="text-blue-600 text-sm font-medium hover:underline">Edit Profile</button>
                    )}
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                disabled={!isEditing}
                                className={`w-full p-2 rounded-lg border ${isEditing ? 'border-blue-300 bg-white' : 'border-gray-200 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-100`}
                                value={profile.name}
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                disabled={!isEditing}
                                className={`w-full p-2 rounded-lg border ${isEditing ? 'border-blue-300 bg-white' : 'border-gray-200 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-100`}
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="text"
                                disabled={!isEditing}
                                className={`w-full p-2 rounded-lg border ${isEditing ? 'border-blue-300 bg-white' : 'border-gray-200 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-100`}
                                value={profile.phone}
                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                            />
                        </div>
                    </div>
                    {isEditing && (
                        <div className="flex justify-end pt-4">
                            <button onClick={() => setIsEditing(false)} className="mr-3 px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
                            <button onClick={handleSave} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                <Save size={18} className="mr-2" /> Save Changes
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Application Preferences */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50">
                    <h2 className="text-lg font-semibold text-gray-800">Preferences</h2>
                    <p className="text-sm text-gray-500">Customize your workspace</p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition cursor-pointer">
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-purple-100 text-purple-600 rounded-full">
                                <Moon size={20} />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">Dark Mode</p>
                                <p className="text-xs text-gray-500">Switch between light and dark themes</p>
                            </div>
                        </div>
                        <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="darkModeToggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                            <label htmlFor="darkModeToggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
