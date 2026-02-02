import { Calendar, Clock, MapPin } from 'lucide-react';

const StaffSchedule = () => {
    // Mock schedule for visualization
    const schedule = [
        { day: 'Monday', time: '09:00 AM - 05:00 PM', role: 'Main Office Duty', location: 'Admin Block' },
        { day: 'Tuesday', time: '09:00 AM - 05:00 PM', role: 'Inventory Audit', location: 'Store Room' },
        { day: 'Wednesday', time: '09:00 AM - 05:00 PM', role: 'Maintenance Review', location: 'Campus Wide' },
        { day: 'Thursday', time: '09:00 AM - 05:00 PM', role: 'Main Office Duty', location: 'Admin Block' },
        { day: 'Friday', time: '09:00 AM - 04:00 PM', role: 'Weekly Reporting', location: 'Admin Block' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Work Schedule</h1>
                <div className="text-sm text-gray-500 flex items-center">
                    <Calendar size={16} className="mr-2" /> Current Week
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schedule.map((shift, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 transition">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{shift.day}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{shift.role}</h3>
                        <div className="space-y-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                <Clock size={16} className="mr-2 text-gray-400" />
                                {shift.time}
                            </div>
                            <div className="flex items-center">
                                <MapPin size={16} className="mr-2 text-gray-400" />
                                {shift.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start space-x-3">
                <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm">
                    <Calendar size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-blue-900 text-sm">Need a schedule change?</h4>
                    <p className="text-xs text-blue-700 mt-1">Submit a leave request or contact the HR department for roster adjustments.</p>
                </div>
            </div>
        </div>
    );
};

export default StaffSchedule;
