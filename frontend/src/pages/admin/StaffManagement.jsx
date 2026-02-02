import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserPlus, Trash2, Search, Mail, Phone, UserCheck } from 'lucide-react';

const StaffManagement = () => {
    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newStaff, setNewStaff] = useState({ name: '', email: '', password: '', role: 'staff' });

    useEffect(() => {
        fetchStaff();
    }, []);

    const fetchStaff = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const { data } = await axios.get('http://localhost:5000/api/users?role=staff', config);
            setStaffList(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching staff", error);
            setLoading(false);
        }
    };

    const handleAddStaff = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const { data } = await axios.post('http://localhost:5000/api/users', newStaff, config);

            alert("Staff Added Successfully");
            setIsAddModalOpen(false);
            setNewStaff({ name: '', email: '', password: '', role: 'staff' });

            // Directly update the list with the new user
            setStaffList(prev => [...prev, data]);
        } catch (error) {
            console.error(error);
            const message = error.response?.data?.message || "Failed to add staff";
            alert(`Error: ${message}`);
        }
    };

    const handleDeleteStaff = async (id) => {
        if (window.confirm("Are you sure you want to remove this staff member?")) {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                await axios.delete(`http://localhost:5000/api/users/${id}`, config);
                setStaffList(staffList.filter(staff => staff._id !== id));
            } catch (error) {
                console.error(error);
                alert("Failed to delete staff");
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Staff Management</h1>
                    <p className="text-sm text-gray-500">Manage access and details for all staff members.</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm transition"
                >
                    <UserPlus size={18} className="mr-2" /> Add Staff
                </button>
            </div>

            {/* Staff List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-400">Loading Staff...</div>
                ) : (
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold">
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffList.length > 0 ? staffList.map((staff) => (
                                <tr key={staff._id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3">
                                                {staff.name.charAt(0)}
                                            </div>
                                            <span className="font-medium text-gray-900">{staff.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">
                                        <div className="flex flex-col text-sm">
                                            <span className="flex items-center"><Mail size={12} className="mr-1" /> {staff.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold uppercase">{staff.role}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleDeleteStaff(staff._id)}
                                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition"
                                            title="Remove Staff"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">No staff members found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Add Staff Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Add New Staff</h3>
                            <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-600">✕</button>
                        </div>
                        <form onSubmit={handleAddStaff} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={newStaff.name}
                                    onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                                    required
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={newStaff.email}
                                    onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                                    required
                                    placeholder="jane@campus.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Default Password</label>
                                <input
                                    type="password"
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={newStaff.password}
                                    onChange={(e) => setNewStaff({ ...newStaff, password: e.target.value })}
                                    required
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="pt-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <select
                                    className="w-full p-2 border rounded-lg bg-gray-50"
                                    value={newStaff.role}
                                    onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
                                    disabled
                                >
                                    <option value="staff">Staff</option>
                                    <option value="faculty">Faculty</option>
                                </select>
                                <p className="text-xs text-gray-400 mt-1">Role is locked to Staff for this form.</p>
                            </div>

                            <div className="flex justify-end space-x-3 mt-6">
                                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffManagement;
