import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttendanceChart = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-96">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Reports <span className="text-gray-400 font-normal">/Today</span></h3>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: 'none' }}
                        itemStyle={{ color: '#1f2937' }}
                    />
                    {/* Simulating multiple lines for the curved effect in design */}
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                    <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} />
                    <Area type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} fillOpacity={0} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;
