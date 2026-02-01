import { Users, ClipboardList } from 'lucide-react';

const FacultyDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Faculty Portal</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <div className="flex items-center space-x-4 mb-4">
                        <Users className="text-indigo-500" size={28} />
                        <h2 className="text-xl font-semibold">My Classes</h2>
                    </div>
                    <p className="text-gray-600">Computer Science - Semester 6</p>
                    <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">View Students</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <div className="flex items-center space-x-4 mb-4">
                        <ClipboardList className="text-green-500" size={28} />
                        <h2 className="text-xl font-semibold">Daily Attendance</h2>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Mark Attendance</button>
                </div>
            </div>
        </div>
    );
};

export default FacultyDashboard;
