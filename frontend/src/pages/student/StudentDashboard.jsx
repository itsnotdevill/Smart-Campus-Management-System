import { Book, Calendar, Award } from 'lucide-react';

const StudentDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Portal</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <div className="flex items-center space-x-4 mb-4">
                        <Calendar className="text-blue-500" size={28} />
                        <h2 className="text-xl font-semibold">Attendance</h2>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">85%</p>
                    <p className="text-sm text-gray-500">Overall Attendance</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <div className="flex items-center space-x-4 mb-4">
                        <Book className="text-purple-500" size={28} />
                        <h2 className="text-xl font-semibold">Courses</h2>
                    </div>
                    <p className="text-lg font-medium">5 Active Subjects</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                    <div className="flex items-center space-x-4 mb-4">
                        <Award className="text-yellow-500" size={28} />
                        <h2 className="text-xl font-semibold">Grades</h2>
                    </div>
                    <p className="text-lg font-medium">GPA: 3.8</p>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
