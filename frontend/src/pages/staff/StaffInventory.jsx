import { useState, useEffect } from 'react';
import axios from 'axios';
import { Package, Plus, Minus, Search, AlertCircle } from 'lucide-react';

const StaffInventory = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newItem, setNewItem] = useState({ itemName: '', category: 'General', quantity: 0, minQuantity: 10 });

    useEffect(() => {
        fetchInventory();
    }, []);

    const fetchInventory = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.get('http://localhost:5000/api/inventory', config);
            setItems(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleAddItem = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.post('http://localhost:5000/api/inventory', newItem, config);
            setItems([...items, data].sort((a, b) => a.itemName.localeCompare(b.itemName)));
            setIsModalOpen(false);
            setNewItem({ itemName: '', category: 'General', quantity: 0, minQuantity: 10 });
        } catch (error) {
            alert('Failed to add item');
        }
    };

    const updateQuantity = async (id, change) => {
        const item = items.find(i => i._id === id);
        if (!item) return;
        const newQty = Math.max(0, item.quantity + change);

        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            const { data } = await axios.put(`http://localhost:5000/api/inventory/${id}`, { quantity: newQty }, config);
            setItems(items.map(i => i._id === id ? data : i));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Plus size={18} className="mr-2" /> Add Item
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div key={item._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-gray-800">{item.itemName}</h3>
                                {item.quantity <= item.minQuantity && (
                                    <AlertCircle size={20} className="text-red-500" title="Low Stock" />
                                )}
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{item.category}</p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                            <div className="text-2xl font-bold text-gray-800">
                                {item.quantity} <span className="text-xs font-normal text-gray-400">units</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => updateQuantity(item._id, -1)} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-600">
                                    <Minus size={16} />
                                </button>
                                <button onClick={() => updateQuantity(item._id, 1)} className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 text-blue-600">
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>
                        <div className={`mt-3 text-xs font-bold text-center py-1 rounded-full ${item.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                                item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                            }`}>
                            {item.status}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6">
                        <h3 className="text-xl font-bold mb-4">Add Inventory Item</h3>
                        <form onSubmit={handleAddItem} className="space-y-4">
                            <input
                                className="w-full p-2 border rounded-lg"
                                placeholder="Item Name"
                                value={newItem.itemName}
                                onChange={e => setNewItem({ ...newItem, itemName: e.target.value })}
                                required
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="number"
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Quantity"
                                    value={newItem.quantity}
                                    onChange={e => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
                                    required
                                />
                                <input
                                    type="number"
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Min Limit"
                                    value={newItem.minQuantity}
                                    onChange={e => setNewItem({ ...newItem, minQuantity: parseInt(e.target.value) })}
                                />
                            </div>
                            <select
                                className="w-full p-2 border rounded-lg"
                                value={newItem.category}
                                onChange={e => setNewItem({ ...newItem, category: e.target.value })}
                            >
                                <option value="General">General</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Stationery">Stationery</option>
                                <option value="Maintenance">Maintenance</option>
                                <option value="Cleaning">Cleaning</option>
                            </select>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StaffInventory;
