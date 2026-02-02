const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/faculty', require('./routes/facultyRoutes'));
app.use('/api/notices', require('./routes/noticeRoutes'));
app.use('/api/complaints', require('./routes/complaintRoutes'));
app.use('/api/attendance', require('./routes/attendanceRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/inventory', require('./routes/inventoryRoutes'));
app.use('/api/requests', require('./routes/requestRoutes'));

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

// Server updated to include staff role support
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
