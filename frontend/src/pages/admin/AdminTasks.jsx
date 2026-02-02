import { useState, useEffect } from 'react';
import axios from 'axios';
import { Clipboard, CheckCircle, Clock } from 'lucide-react';

const AdminTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.get('http://localhost:5000/api/tasks', config);
            setTasks(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this task?")) return;
        // Note: I haven't implemented DELETE endpoint for tasks yet, but UI is here.
        // Ideally would call delete endpoint. For now just alerting.
        alert("Delete functionality not yet connected to backend API");
    };

    const getPriorityColor = (p) => {
        if (p === 'High') return 'text-red-500 bg-red-50';
        if (p === 'Medium') return 'text-orange-500 bg-orange-50';
        return 'text-blue-500 bg-blue-50';
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Task Overview</h1>
                    <p className="text-sm text-gray-500">Monitor all maintenance and operational tasks.</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? <div className="p-8 text-center">Loading tasks...</div> : (
                    <div className="divide-y divide-gray-100">
                        {tasks.map((task) => (
                            <div key={task._id} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition">
                                <div className="mb-4 md:mb-0">
                                    <div className="flex items-center space-x-3 mb-1">
                                        <h3 className="font-bold text-gray-800 text-lg">{task.title}</h3>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${getPriorityColor(task.priority)}`}>
                                            {task.priority}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500">{task.description || 'No description provided.'}</p>
                                    <p className="text-xs text-gray-400 mt-2">Created: {new Date(task.createdAt).toLocaleDateString()}</p>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${task.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                            task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-gray-100 text-gray-700'
                                        }`}>
                                        {task.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {tasks.length === 0 && <div className="p-8 text-center text-gray-400">No tasks currently active.</div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminTasks;
