import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import FacultyDashboard from './pages/faculty/FacultyDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes (Placeholder for now, need actual AuthGuard) */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/faculty/*" element={<FacultyDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
