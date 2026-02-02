import { FileText, Download, Filter } from 'lucide-react';

const StaffReports = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">My Reports</h1>
                <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    <Filter size={18} className="mr-2" /> Filter
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Generate Report Card */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Generate Activity Report</h3>
                    <p className="text-indigo-100 text-sm mb-6">Download a detailed summary of your completed tasks and inventory actions.</p>
                    <div className="flex space-x-3">
                        <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 rounded-lg text-sm font-semibold transition">Last 30 Days</button>
                        <button className="flex-1 bg-white text-indigo-600 py-2 rounded-lg text-sm font-bold shadow hover:bg-gray-50 transition">Download PDF</button>
                    </div>
                </div>

                {/* Recent Reports List */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Recent Downloads</h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Monthly_Tasks_Oct.pdf', date: 'Oct 31, 2024', size: '2.4 MB' },
                            { name: 'Inventory_Audit_Q3.csv', date: 'Sep 15, 2024', size: '1.1 MB' },
                            { name: 'Maintenance_Log_004.xlsx', date: 'Aug 01, 2024', size: '850 KB' },
                        ].map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                                <div className="flex items-center">
                                    <FileText size={20} className="text-gray-400 mr-3" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">{file.name}</p>
                                        <p className="text-xs text-gray-400">{file.date} • {file.size}</p>
                                    </div>
                                </div>
                                <Download size={18} className="text-gray-400 hover:text-blue-600" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffReports;
