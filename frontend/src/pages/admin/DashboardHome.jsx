import { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardStats from '../../components/DashboardStats';
import AttendanceChart from '../../components/AttendanceChart';
import QRCodeGenerator from '../../components/QRCodeGenerator';
import RightSidebar from '../../components/RightSidebar';

const DashboardHome = () => {
    const [stats, setStats] = useState({ students: 0, faculty: 0, present: 0, absent: 0 });
    const [chartData, setChartData] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                // Get token from localStorage
                const token = localStorage.getItem('token');

                try {
                    const config = {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    };
                    const { data } = await axios.get('http://localhost:5000/api/dashboard/stats', config);
                    setStats(data.stats);
                    setChartData(data.chartData);
                    setAdmins(data.admins);
                } catch (err) {
                    console.error("Backend error, using empty default", err);
                    setStats({ students: 0, faculty: 0, present: 0, absent: 0 });
                    setChartData([]);
                }
            } catch (error) {
                console.error("Error fetching dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1 space-y-6">
                {loading ? (
                    <div className="flex items-center justify-center h-48 text-gray-400">Loading Dashboard...</div>
                ) : (
                    <>
                        <QRCodeGenerator />
                        <DashboardStats stats={stats} />
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1">
                            <AttendanceChart data={chartData} />
                        </div>
                    </>
                )}
            </div>

            <div className="w-full xl:w-80">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full">
                    <RightSidebar admins={admins} />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
