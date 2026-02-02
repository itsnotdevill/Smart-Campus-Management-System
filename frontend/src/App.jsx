import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminLayout from './layouts/AdminLayout';
import FacultyLayout from './layouts/FacultyLayout';
import StaffLayout from './layouts/StaffLayout';
import DashboardHome from './pages/admin/DashboardHome';
import Events from './pages/admin/Events';
import StaffManagement from './pages/admin/StaffManagement';
import AdminTasks from './pages/admin/AdminTasks';
import AdminInventory from './pages/admin/AdminInventory';
import Settings from './pages/admin/Settings';
import Attendance from './pages/admin/Attendance';
import Analytics from './pages/admin/Analytics';
import History from './pages/admin/History';
import Reports from './pages/admin/Reports';
import AuthSettings from './pages/admin/AuthSettings';
import Help from './pages/admin/Help';
import StudentDashboard from './pages/student/StudentDashboard';
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import StaffDashboard from './pages/staff/StaffDashboard';
import StaffTasks from './pages/staff/StaffTasks';
import StaffInventory from './pages/staff/StaffInventory';
import StaffRequests from './pages/staff/StaffRequests';
import StaffSchedule from './pages/staff/StaffSchedule';
import StaffReports from './pages/staff/StaffReports';
import StaffSettings from './pages/staff/StaffSettings';
import StaffHelp from './pages/staff/StaffHelp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes wrapped in Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="tasks" element={<AdminTasks />} />
          <Route path="inventory" element={<AdminInventory />} />
          <Route path="events" element={<Events />} />
          <Route path="settings" element={<Settings />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="staff-management" element={<StaffManagement />} />
          <Route path="history" element={<History />} />
          <Route path="reports" element={<Reports />} />
          <Route path="auth-settings" element={<AuthSettings />} />
          <Route path="help" element={<Help />} />
          {/* Redirect base /admin to dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Faculty Routes */}
        <Route path="/faculty" element={<FacultyLayout />}>
          <Route path="dashboard" element={<FacultyDashboard />} />
          {/* Add more faculty routes here similarly */}
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Staff Routes */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="tasks" element={<StaffTasks />} />
          <Route path="inventory" element={<StaffInventory />} />
          <Route path="requests" element={<StaffRequests />} />
          <Route path="schedule" element={<StaffSchedule />} />
          <Route path="reports" element={<StaffReports />} />
          <Route path="settings" element={<StaffSettings />} />
          <Route path="help" element={<StaffHelp />} />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        <Route path="/student/*" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
