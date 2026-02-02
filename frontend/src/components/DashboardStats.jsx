import { Users, UserCheck, UserX } from 'lucide-react';

const DashboardStats = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 font-medium text-sm">Students</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-2">{stats.students?.toLocaleString() || 0}</h3>
                    </div>
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <Users size={24} />
                    </div>
                </div>
                <div className="flex items-center text-green-500 text-sm font-medium">
                    <span>↗ 8.5% Up from yesterday</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 font-medium text-sm">Present</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-2">{stats.present?.toLocaleString() || 0}</h3>
                    </div>
                    <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                        <UserCheck size={24} />
                    </div>
                </div>
                <div className="flex items-center text-red-500 text-sm font-medium">
                    <span>↘ 4.3% Down from yesterday</span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-gray-500 font-medium text-sm">Absent</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-2">{stats.absent?.toLocaleString() || 0}</h3>
                    </div>
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                        <UserX size={24} />
                    </div>
                </div>
                <div className="flex items-center text-red-500 text-sm font-medium">
                    <span>↘ 1.1% Down from yesterday</span>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;
