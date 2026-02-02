import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Calendar, MapPin, Loader } from 'lucide-react';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', description: '', type: 'Other' });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            // Fallback for demo if no backend connection
            try {
                const { data } = await axios.get('http://localhost:5000/api/events', config);
                setEvents(data);
            } catch (err) {
                console.warn("Backend fail, using mock data", err);
                setEvents([
                    { _id: 1, title: 'Cricket Tournament', date: '2024-10-25', location: 'Main Campus, B Block', type: 'Sports', description: 'Annual cricket cup.' },
                    { _id: 2, title: 'Tech Symposium', date: '2024-11-12', location: 'Auditorium', type: 'Academic', description: 'Tech talks and project showcase.' }
                ]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = { headers: { Authorization: `Bearer ${token}` } };
            await axios.post('http://localhost:5000/api/events', newEvent, config);
            setShowModal(false);
            setNewEvent({ title: '', date: '', location: '', description: '', type: 'Other' });
            fetchEvents();
        } catch (error) {
            alert('Failed to create event (Ensure Backend is running and you are logged in)');
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Events</h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    <Plus size={20} className="mr-2" /> Add Event
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center p-12"><Loader className="animate-spin text-blue-500" /></div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div key={event._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-bold ring-1 ring-white/30">
                                    {event.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                                <div className="space-y-2 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center">
                                        <Calendar size={16} className="mr-2 text-blue-500" />
                                        <span>{new Date(event.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin size={16} className="mr-2 text-red-500" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Simple Modal for creating events */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Create New Event</h2>
                        <form onSubmit={handleCreate} className="space-y-4">
                            <input
                                className="w-full p-3 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-100"
                                placeholder="Event Title"
                                value={newEvent.title}
                                onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                                required
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="date"
                                    className="w-full p-3 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={newEvent.date}
                                    onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
                                    required
                                />
                                <select
                                    className="w-full p-3 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    value={newEvent.type}
                                    onChange={e => setNewEvent({ ...newEvent, type: e.target.value })}
                                >
                                    <option>Academic</option>
                                    <option>Sports</option>
                                    <option>Cultural</option>
                                    <option>Workshop</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <input
                                className="w-full p-3 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-100"
                                placeholder="Location"
                                value={newEvent.location}
                                onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
                                required
                            />
                            <textarea
                                className="w-full p-3 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-100"
                                placeholder="Description"
                                rows="3"
                                value={newEvent.description}
                                onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                            />
                            <div className="flex justify-end space-x-3 mt-6">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Create Event</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
