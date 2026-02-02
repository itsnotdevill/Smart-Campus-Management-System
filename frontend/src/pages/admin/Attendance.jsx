import { useState, useEffect } from 'react';
import { Calendar, Search, Filter, Download } from 'lucide-react';
import axios from 'axios';

const Attendance = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterDate, setFilterDate] = useState(new Date().toISOString().split('T')[0]);

    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        // Simulate backend fetch
        const fetchAttendance = async () => {
            // In real app: const { data } = await axios.get('/api/attendance');
            // Mocking data for visual completion
            setTimeout(() => {
                setAttendanceData([
                    { id: 1, name: 'John Doe', rollNo: 'CS101', status: 'Present', time: '09:00 AM', subject: 'Data Structures' },
                    { id: 2, name: 'Alice Smith', rollNo: 'CS102', status: 'Absent', time: '-', subject: 'Data Structures' },
                    { id: 3, name: 'Bob Johnson', rollNo: 'CS103', status: 'Late', time: '09:15 AM', subject: 'Data Structures' },
                    { id: 4, name: 'Emma Wilson', rollNo: 'CS104', status: 'Present', time: '08:55 AM', subject: 'Data Structures' },
                    { id: 5, name: 'Michael Brown', rollNo: 'CS105', status: 'Present', time: '09:00 AM', subject: 'Data Structures' },
                    { id: 6, name: 'Sarah Davis', rollNo: 'CS106', status: 'Present', time: '09:00 AM', subject: 'Data Structures' },
                    { id: 7, name: 'David Miller', rollNo: 'CS107', status: 'Absent', time: '-', subject: 'Data Structures' },
                    { id: 8, name: 'James Wilson', rollNo: 'CS108', status: 'Late', time: '09:15 AM', subject: 'Data Structures' },
                    { id: 9, name: 'Linda Moore', rollNo: 'CS109', status: 'Present', time: '08:55 AM', subject: 'Data Structures' },
                    { id: 10, name: 'Robert Taylor', rollNo: 'CS110', status: 'Present', time: '09:00 AM', subject: 'Data Structures' },
                ]);
                setLoading(false);
            }, 800);
        };
        fetchAttendance();
    }, [filterDate]);

    const handleEditClick = (record) => {
        setSelectedRecord(record);
        setIsEditModalOpen(true);
    };

    const handleUpdateStatus = () => {
        // Here we would call API to update: axios.put(`/api/attendance/${selectedRecord.id}`, selectedRecord)
        const updatedData = attendanceData.map(item =>
            item.id === selectedRecord.id ? selectedRecord : item
        );
        setAttendanceData(updatedData);
        setIsEditModalOpen(false);
        // Show success notification provided by a Context or simple alert
        alert("Attendance status updated successfully!");
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Attendance Records</h1>
                    <p className="text-sm text-gray-500">View and manage daily attendance.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search Student..."
                            className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2">
                        <Calendar size={18} className="text-gray-500 mr-2" />
                        <input
                            type="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="text-sm text-gray-700 focus:outline-none"
                        />
                    </div>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
                        <Download size={18} className="mr-2" /> Export
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold">
                                <th className="px-6 py-4">Student Name</th>
                                <th className="px-6 py-4">Roll No</th>
                                <th className="px-6 py-4">Subject</th>
                                <th className="px-6 py-4">Time</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-8 text-center text-gray-500">Loading records...</td>
                                </tr>
                            ) : (
                                attendanceData.map((record) => (
                                    <tr key={record.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 font-medium text-gray-900">{record.name}</td>
                                        <td className="px-6 py-4 text-gray-500">{record.rollNo}</td>
                                        <td className="px-6 py-4 text-gray-500">{record.subject}</td>
                                        <td className="px-6 py-4 text-gray-500">{record.time}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${record.status === 'Present' ? 'bg-green-100 text-green-700' :
                                                record.status === 'Absent' ? 'bg-red-100 text-red-700' :
                                                    'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {record.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleEditClick(record)}
                                                className="text-blue-600 cursor-pointer hover:underline text-sm font-medium"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">Previous</button>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">1</button>
                        <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">2</button>
                        <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">3</button>
                        <button className="px-3 py-1 border rounded text-sm text-gray-600 hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            {isEditModalOpen && selectedRecord && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6">
                        <h3 className="text-xl font-bold mb-4">Update Attendance</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-500">Student</label>
                                <p className="font-semibold">{selectedRecord.name} ({selectedRecord.rollNo})</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={selectedRecord.status}
                                    onChange={(e) => setSelectedRecord({ ...selectedRecord, status: e.target.value })}
                                >
                                    <option value="Present">Present</option>
                                    <option value="Absent">Absent</option>
                                    <option value="Late">Late</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button onClick={handleUpdateStatus} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Attendance;
