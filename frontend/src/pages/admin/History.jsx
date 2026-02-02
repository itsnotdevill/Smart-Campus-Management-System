import { Clock, CheckCircle, AlertTriangle, User } from 'lucide-react';

const History = () => {
    const logs = [
        { id: 1, action: 'User Login', user: 'Natali Saif', time: '2 mins ago', type: 'info' },
        { id: 2, action: 'Updated Attendance', user: 'Dhruv Kumar', time: '15 mins ago', type: 'success' },
        { id: 3, action: 'System Alert', user: 'System', time: '1 hour ago', type: 'warning', details: 'Database backup completed' },
        { id: 4, action: 'New Event Created', user: 'Natali Saif', time: '2 hours ago', type: 'success', details: 'Cricket Tournament' },
        { id: 5, action: 'User Logout', user: 'Andi Lane', time: '3 hours ago', type: 'info' },
        { id: 6, action: 'Failed Login Attempt', user: 'Unknown IP', time: '4 hours ago', type: 'error' },
        { id: 7, action: 'Report Generated', user: 'Natali Saif', time: '5 hours ago', type: 'info' },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'success': return <CheckCircle className="text-green-500" size={18} />;
            case 'warning': return <AlertTriangle className="text-yellow-500" size={18} />;
            case 'error': return <AlertTriangle className="text-red-500" size={18} />;
            default: return <Clock className="text-blue-500" size={18} />;
        }
    };

    return (
        <div className="max-w-4xl">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Activity History</h1>
                <p className="text-sm text-gray-500">Track system changes and user actions.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-50">
                    {logs.map((log) => (
                        <div key={log.id} className="p-4 hover:bg-gray-50 transition flex items-start space-x-4">
                            <div className="mt-1 bg-gray-50 p-2 rounded-lg border border-gray-100">
                                {getIcon(log.type)}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <h4 className="font-semibold text-gray-900">{log.action}</h4>
                                    <span className="text-xs text-gray-400 font-medium">{log.time}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                    <span className="font-medium text-gray-800 mr-1">{log.user}</span>
                                    {log.details && <span>- {log.details}</span>}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-gray-50 text-center">
                    <button className="text-sm text-blue-600 font-medium hover:underline">View All History</button>
                </div>
            </div>
        </div>
    );
};

export default History;
