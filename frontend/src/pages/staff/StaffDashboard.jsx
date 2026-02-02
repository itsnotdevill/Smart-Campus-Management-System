import { Clipboard, Package, AlertTriangle, CheckCircle } from 'lucide-react';

const StaffDashboard = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Staff Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Pending Tasks</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">12</h3>
                        </div>
                        <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                            <AlertTriangle size={24} />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Completed Tasks</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">45</h3>
                        </div>
                        <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                            <CheckCircle size={24} />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Inventory Requests</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">8</h3>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <Package size={24} />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Active Tickets</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">5</h3>
                        </div>
                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                            <Clipboard size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Task List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50">
                    <h3 className="text-lg font-bold text-gray-800">Recent Tasks</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        {[
                            { title: 'Repair AC in Lab 3', priority: 'High', status: 'Pending', time: '2h ago' },
                            { title: 'Replace Projector Bulb - Room 101', priority: 'Medium', status: 'In Progress', time: '4h ago' },
                            { title: 'Delivered Stationery to Dept', priority: 'Low', status: 'Completed', time: 'Yesterday' },
                        ].map((task, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                                <div>
                                    <h4 className="font-semibold text-gray-800">{task.title}</h4>
                                    <p className="text-xs text-gray-500 mt-1">Priority: <span className={`font-bold ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-orange-500' : 'text-blue-500'}`}>{task.priority}</span> • {task.time}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${task.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                        task.status === 'Pending' ? 'bg-red-100 text-red-700' :
                                            'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {task.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;
