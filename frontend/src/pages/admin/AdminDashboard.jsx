import { useState } from 'react';
import { Users, BookOpen, UserCheck, Bell, DollarSign, Layout } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar Placeholder */}
            <div className="w-64 bg-gray-900 text-white p-5 hidden md:block">
                <h1 className="text-2xl font-bold mb-10">Smart Campus</h1>
                <nav className="space-y-4">
                    <div className="flex items-center space-x-3 p-2 bg-gray-800 rounded cursor-pointer">
                        <Layout size={20} /> <span>Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
                        <Users size={20} /> <span>Students</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
                        <UserCheck size={20} /> <span>Faculty</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
                        <BookOpen size={20} /> <span>Courses</span>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
                    <div className="flex items-center space-x-4">
                        <Bell className="text-gray-500 cursor-pointer" />
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                    </div>
                </header>

                <main className="p-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                            { label: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-500' },
                            { label: 'Total Faculty', value: '156', icon: UserCheck, color: 'bg-green-500' },
                            { label: 'Active Courses', value: '42', icon: BookOpen, color: 'bg-purple-500' },
                            { label: 'Revenue', value: '$12.5M', icon: DollarSign, color: 'bg-yellow-500' },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                                <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
                                    <stat.icon size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Activities</h3>
                        <p className="text-gray-500">Activity chart placeholder (Recharts)</p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
