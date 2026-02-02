import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
    // Mock Data
    const attendanceTrend = [
        { day: 'Mon', present: 4500, absent: 200 },
        { day: 'Tue', present: 4600, absent: 150 },
        { day: 'Wed', present: 4550, absent: 180 },
        { day: 'Thu', present: 4700, absent: 100 },
        { day: 'Fri', present: 4400, absent: 300 },
        { day: 'Sat', present: 4000, absent: 500 },
    ];

    const genderDistribution = [
        { name: 'Male', value: 2400 },
        { name: 'Female', value: 2289 },
    ];

    const COLORS = ['#3B82F6', '#EC4899'];

    return (
        <div className="space-y-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
                <p className="text-sm text-gray-500">Deep dive into campus metrics.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Attendance Trend */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Weekly Attendance Trend</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={attendanceTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                <Legend />
                                <Bar dataKey="present" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Present" />
                                <Bar dataKey="absent" fill="#EF4444" radius={[4, 4, 0, 0]} name="Absent" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Gender Distribution */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Student Demographics</h3>
                    <div className="h-80 flex justify-center items-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={genderDistribution}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {genderDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Performance Stats */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Department Performance</h3>
                <div className="space-y-4">
                    {['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Business'].map(dept => (
                        <div key={dept} className="flex items-center">
                            <span className="w-32 text-sm text-gray-600 font-medium">{dept}</span>
                            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden mx-4">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}></div>
                            </div>
                            <span className="text-sm font-bold text-gray-800">{Math.floor(Math.random() * 40) + 60}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Analytics;
