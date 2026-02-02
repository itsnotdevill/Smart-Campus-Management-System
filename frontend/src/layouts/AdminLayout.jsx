import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Search, Sun, Bell, Layout as LayoutIcon } from 'lucide-react';

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            <Sidebar />

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 px-8 py-4 flex justify-between items-center border-b border-gray-100">
                    <div className="flex items-center text-gray-500 text-sm">
                        <LayoutIcon size={16} className="mr-2" />
                        <span className="cursor-pointer hover:text-blue-600">Admin Portal</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-100 w-64"
                            />
                        </div>
                        <Sun size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                        <div className="relative">
                            <Bell size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden border border-blue-200">
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="Profile" />
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 overflow-y-auto p-8 scrollbar-hide">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
