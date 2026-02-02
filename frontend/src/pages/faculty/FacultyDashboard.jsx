import { Users, ClipboardList, BookOpen, Clock } from 'lucide-react';

const FacultyDashboard = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Faculty Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Stats */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Students</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">120</h3>
                        </div>
                        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                            <Users size={24} />
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Classes Today</p>
                            <h3 className="text-3xl font-bold text-gray-800 mt-2">4</h3>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                            <BookOpen size={24} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upcoming Classes */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-800">Today's Schedule</h3>
                        <button className="text-indigo-600 text-sm font-medium">View All</button>
                    </div>
                    <div className="p-6 space-y-4">
                        {[
                            { time: '09:00 AM', subject: 'Data Structures', room: 'Lab 2', batch: 'CS-A' },
                            { time: '11:00 AM', subject: 'Database Systems', room: 'LH 101', batch: 'CS-B' },
                            { time: '02:00 PM', subject: 'Operating Systems', room: 'LH 102', batch: 'CS-A' },
                        ].map((cls, index) => (
                            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="p-3 bg-white rounded-lg shadow-sm mr-4 text-center min-w-[80px]">
                                    <span className="block text-xs text-gray-500 font-bold">{cls.time.split(' ')[0]}</span>
                                    <span className="block text-[10px] text-gray-400">{cls.time.split(' ')[1]}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{cls.subject}</h4>
                                    <p className="text-xs text-gray-500">{cls.batch} • {cls.room}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-50">
                        <h3 className="text-lg font-bold text-gray-800">Quick Actions</h3>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-4">
                        <button className="p-4 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition">
                            <ClipboardList className="mx-auto text-indigo-600 mb-2" size={24} />
                            <span className="text-sm font-medium text-indigo-800">Mark Attendance</span>
                        </button>
                        <button className="p-4 bg-green-50 rounded-xl text-center hover:bg-green-100 transition">
                            <Users className="mx-auto text-green-600 mb-2" size={24} />
                            <span className="text-sm font-medium text-green-800">Student List</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyDashboard;
