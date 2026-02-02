import { useState, useEffect } from 'react';
import axios from 'axios';
import { Clipboard, CheckCircle, Clock, AlertTriangle, Plus } from 'lucide-react';

const StaffTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({ title: '', priority: 'Medium', description: '' });

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

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.post('http://localhost:5000/api/tasks', newTask, config);
            setTasks([data, ...tasks]);
            setIsModalOpen(false);
            setNewTask({ title: '', priority: 'Medium', description: '' });
        } catch (error) {
            alert('Failed to create task');
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: newStatus }, config);
            setTasks(tasks.map(t => t._id === id ? data : t));
        } catch (error) {
            alert('Failed to update status');
        }
    };

    const getPriorityColor = (p) => {
        if (p === 'High') return 'text-red-500 bg-red-50';
        if (p === 'Medium') return 'text-orange-500 bg-orange-50';
        return 'text-blue-500 bg-blue-50';
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={18} className="mr-2" /> New Task
                </button>
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
                                    <select
                                        value={task.status}
                                        onChange={(e) => updateStatus(task._id, e.target.value)}
                                        className={`px-4 py-2 rounded-lg text-sm font-semibold border-none focus:ring-2 focus:ring-offset-1 cursor-pointer transition-all ${task.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                        {tasks.length === 0 && <div className="p-8 text-center text-gray-400">No tasks found. Create one to get started!</div>}
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6">
                        <h3 className="text-xl font-bold mb-4">Create New Task</h3>
                        <form onSubmit={handleAddTask} className="space-y-4">
                            <input
                                className="w-full p-2 border rounded-lg"
                                placeholder="Task Title"
                                value={newTask.title}
                                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                                required
                            />
                            <textarea
                                className="w-full p-2 border rounded-lg"
                                placeholder="Description"
                                value={newTask.description}
                                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                            />
                            <select
                                className="w-full p-2 border rounded-lg"
                                value={newTask.priority}
                                onChange={e => setNewTask({ ...newTask, priority: e.target.value })}
                            >
                                <option value="Low">Low Priority</option>
                                <option value="Medium">Medium Priority</option>
                                <option value="High">High Priority</option>
                            </select>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Create Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffTasks;
