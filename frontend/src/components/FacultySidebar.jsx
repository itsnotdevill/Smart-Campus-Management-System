import { Layout, Users, ClipboardList, BookOpen, Calendar, Settings, HelpCircle, FileText } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const FacultySidebar = () => {
    const menuItems = [
        { name: 'Dashboard', icon: Layout, path: '/faculty/dashboard' },
        { name: 'My Classes', icon: BookOpen, path: '/faculty/classes' },
        { name: 'Attendance', icon: ClipboardList, path: '/faculty/attendance' },
        { name: 'Students', icon: Users, path: '/faculty/students' },
        { name: 'Assignments', icon: FileText, path: '/faculty/assignments' },
        { name: 'Schedule', icon: Calendar, path: '/faculty/schedule' },
        { name: 'Settings', icon: Settings, path: '/faculty/settings' },
        { name: 'Help', icon: HelpCircle, path: '/faculty/help' },
    ];

    return (
        <div className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col shadow-sm hidden md:flex">
            <div className="p-6 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    F
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-800 tracking-tight">Faculty</h1>
                    <p className="text-xs text-gray-400">Portal</p>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-2 overflow-y-auto mt-4">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 text-sm font-medium ${isActive
                                ? 'bg-indigo-50 text-indigo-600 shadow-sm'
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
                        <Settings size={16} className="text-red-600" />
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

export default FacultySidebar;
