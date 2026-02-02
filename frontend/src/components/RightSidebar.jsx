const RightSidebar = ({ admins }) => {
    return (
        <div className="space-y-8">
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800">Admins</h3>
                </div>
                <div className="space-y-4">
                    {admins.map((admin, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                {admin.avatar ? (
                                    <img src={admin.avatar} alt={admin.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-gray-500 font-bold">{admin.name.charAt(0)}</span>
                                )}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">{admin.name}</p>
                                <p className="text-xs text-gray-400">{admin.role || 'Admin'}</p>
                            </div>
                        </div>
                    ))}
                    {admins.length === 0 && (
                        <p className="text-sm text-gray-400">No admins found</p>
                    )}
                </div>
            </div>

            {/* Mobile App Preview / Events Section based on reference image showing phone */}
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800">Events</h3>
                </div>
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden relative">
                    {/* Cricket Tournament Card */}
                    <div className="w-full h-32 bg-green-100 relative">
                        <img src="https://images.unsplash.com/photo-1531415074968-0ea896807981?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Cricket" className="w-full h-full object-cover" />
                        <div className="absolute top-2 right-2 p-1 bg-white/30 backdrop-blur rounded-full">
                            <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-800">Cricket Tournament</h4>
                            <span className="px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-lg pointer-events-none">REGISTER</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                            <span className="mr-2">📍 Main Campus, B Block</span>
                            <span>📅 25-27 Oct, 24</span>
                        </div>

                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Satish" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-800">Satish Kumar</p>
                                    <p className="text-[10px] text-gray-400">In-charge</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8H8c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8h5c4.418 0 8 3.582 8 8z"></path></svg>
                                </button>
                                <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
