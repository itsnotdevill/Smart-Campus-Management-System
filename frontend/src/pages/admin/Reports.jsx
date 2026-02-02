import { useState } from 'react';
import { FileText, Download, Filter, Plus } from 'lucide-react';

const Reports = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reports, setReports] = useState([
        { title: 'Student Attendance Report', desc: 'Monthly attendance summary for all departments.', size: '2.4 MB' },
        { title: 'Faculty Performance Review', desc: 'Quarterly review metrics and student feedback.', size: '1.8 MB' },
        { title: 'Campus Event Analysis', desc: 'Participation and budget breakdown for recent events.', size: '4.2 MB' },
        { title: 'System Usage Logs', desc: 'Technical logs for system administration.', size: '5.1 MB' },
    ]);
    const [newReport, setNewReport] = useState({ title: '', desc: '', type: 'PDF' });

    const handleCreateReport = (e) => {
        e.preventDefault();
        setReports([{ ...newReport, size: '0.5 MB' }, ...reports]);
        setIsModalOpen(false);
        setNewReport({ title: '', desc: '', type: 'PDF' });
        alert("Report Generated Successfully!");
    };

    return (
        <div className="max-w-5xl">
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Reports Center</h1>
                    <p className="text-sm text-gray-500">Generate and download system reports.</p>
                </div>
                <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                        <Filter size={18} className="mr-2" /> Filter
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition"
                    >
                        <Plus size={18} className="mr-2" /> Generate New Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-100 transition">
                                <FileText size={24} />
                            </div>
                            <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase">{report.type || 'PDF'}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{report.title}</h3>
                        <p className="text-sm text-gray-500 mb-6 h-10 line-clamp-2">{report.desc}</p>

                        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                            <span className="text-xs text-gray-400 font-medium">{report.size} • Generated today</span>
                            <button className="flex items-center text-blue-600 font-semibold text-sm hover:underline">
                                <Download size={16} className="mr-1" /> Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Generate Report Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Generate New Report</h2>
                        <form onSubmit={handleCreateReport} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Report Title</label>
                                <input
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={newReport.title}
                                    onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
                                    required
                                    placeholder="e.g., Monthly Attendance Summary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={newReport.desc}
                                    onChange={(e) => setNewReport({ ...newReport, desc: e.target.value })}
                                    required
                                    placeholder="Brief description of the report contents"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                                <select
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={newReport.type}
                                    onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
                                >
                                    <option>PDF</option>
                                    <option>CSV</option>
                                    <option>Excel</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Generate</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Reports;
