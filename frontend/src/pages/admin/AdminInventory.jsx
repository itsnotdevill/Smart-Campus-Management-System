import { useState, useEffect } from 'react';
import axios from 'axios';
import { Package, AlertCircle } from 'lucide-react';

const AdminInventory = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Inventory Status</h1>
                    <p className="text-sm text-gray-500">Track campus resources and stock levels.</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold">
                            <th className="px-6 py-4">Item Name</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Quantity</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? items.map((item) => (
                            <tr key={item._id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                <td className="px-6 py-4 font-medium text-gray-900">{item.itemName}</td>
                                <td className="px-6 py-4 text-gray-500">{item.category}</td>
                                <td className="px-6 py-4">
                                    <span className={item.quantity <= item.minQuantity ? 'text-red-600 font-bold' : 'text-gray-800'}>
                                        {item.quantity}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${item.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                                            item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        )) : (
                            <tr><td colSpan="4" className="px-6 py-8 text-center text-gray-500">No inventory data.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminInventory;
