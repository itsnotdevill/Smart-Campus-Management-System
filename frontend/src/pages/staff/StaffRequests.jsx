import { useState, useEffect } from 'react';
import axios from 'axios';
import { Send, Clock, CheckCircle, XCircle, Plus, FileText } from 'lucide-react';

const StaffRequests = () => {
    const [requests, setRequests] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newRequest, setNewRequest] = useState({ type: 'Leave', details: '', dateRequired: '' });

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.get('http://localhost:5000/api/requests', config);
            setRequests(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.post('http://localhost:5000/api/requests', newRequest, config);
            setRequests([data, ...requests]);
            setIsModalOpen(false);
            setNewRequest({ type: 'Leave', details: '', dateRequired: '' });
            alert('Request submitted successfully');
        } catch (error) {
            alert('Failed to submit request');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">My Requests</h1>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={18} className="mr-2" /> New Request
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {requests.map((req) => (
                    <div key={req._id} className="bg-white p-6 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm">
                        <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-lg ${req.type === 'Leave' ? 'bg-purple-50 text-purple-600' :
                                    req.type === 'Equipment' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                                }`}>
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">{req.type} Request</h3>
                                <p className="text-sm text-gray-500">{req.details}</p>
                                <p className="text-xs text-gray-400 mt-1">Date: {new Date(req.dateRequired).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className={`px-4 py-2 rounded-full text-xs font-bold flex items-center ${req.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                req.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                            {req.status === 'Pending' && <Clock size={14} className="mr-1" />}
                            {req.status === 'Approved' && <CheckCircle size={14} className="mr-1" />}
                            {req.status === 'Rejected' && <XCircle size={14} className="mr-1" />}
                            {req.status}
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6">
                        <h3 className="text-xl font-bold mb-4">Submit New Request</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <select
                                className="w-full p-2 border rounded-lg"
                                value={newRequest.type}
                                onChange={e => setNewRequest({ ...newRequest, type: e.target.value })}
                            >
                                <option value="Leave">Leave Application</option>
                                <option value="Equipment">New Equipment</option>
                                <option value="Maintenance">Maintenance Repair</option>
                                <option value="Other">Other</option>
                            </select>
                            <textarea
                                className="w-full p-2 border rounded-lg h-24"
                                placeholder="Describe your request..."
                                value={newRequest.details}
                                onChange={e => setNewRequest({ ...newRequest, details: e.target.value })}
                                required
                            />
                            <input
                                type="date"
                                className="w-full p-2 border rounded-lg"
                                value={newRequest.dateRequired}
                                onChange={e => setNewRequest({ ...newRequest, dateRequired: e.target.value })}
                                required
                            />
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffRequests;
