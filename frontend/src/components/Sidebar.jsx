import { Layout, Users, UserCheck, BookOpen, Calendar, History, BarChart2, FileText, Lock, Settings, HelpCircle, Clipboard, Package } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', icon: Layout, path: '/admin/dashboard' },
        { name: 'Tasks', icon: Clipboard, path: '/admin/tasks' },
        { name: 'Inventory', icon: Package, path: '/admin/inventory' },
        { name: 'Attendance', icon: UserCheck, path: '/admin/attendance' },
        { name: 'Analytics', icon: BarChart2, path: '/admin/analytics' },
        { name: 'Events', icon: Calendar, path: '/admin/events' },
        { name: 'Staff', icon: Users, path: '/admin/staff-management' },
        { name: 'History', icon: History, path: '/admin/history' },
        { name: 'Reports', icon: FileText, path: '/admin/reports' },
        { name: 'Authentication', icon: Lock, path: '/admin/auth-settings' },
        { name: 'Settings', icon: Settings, path: '/admin/settings' },
        { name: 'Help', icon: HelpCircle, path: '/admin/help' },
    ];

    return (
        <div className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col shadow-sm hidden md:flex">
            <div className="p-6 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    C
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-800 tracking-tight">campus</h1>
                    <p className="text-xs text-gray-400">by spacebasic</p>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-2 overflow-y-auto mt-4">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 text-sm font-medium ${isActive
                                ? 'bg-blue-50 text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                            }`
                        }
                    >
                        <item.icon size={20} strokeWidth={1.5} />
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-50 bg-gray-50/50">
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        window.location.href = '/';
                    }}
                    className="flex items-center space-x-3 w-full p-2.5 rounded-lg text-red-600 hover:bg-red-50 text-sm font-medium transition-colors"
                >
                    <div className="bg-red-100 p-1.5 rounded-md">
                        <Lock size={16} />
                    </div>
                    <span>Log Out</span>
                </button>
            </div>

            <div className="p-4 pt-2 text-xs text-gray-400 text-center">
                &copy; 2024 Smart Campus
            </div>
        </div>
    );
};

export default Sidebar;
