# Smart Campus Management System

> A comprehensive, industry-grade web application for university management, catering to Students, Faculty, and Admin roles.

## 🚀 Features
- **Role-Based Access Control (RBAC)**: Admin, Faculty, Student panels.
- **Admin Dashboard**: Analytics, User Management, Course Management.
- **Faculty Portal**: Attendance Marking, Notice Uploads.
- **Student Portal**: View Attendance, Grades, Notices.
- **Secure Authentication**: JWT-based login with encrypted passwords.
- **Responsive UI**: Built with React, Tailwind CSS, and Lucide Icons.

## 🛠 Technology Stack
- **Frontend**: React (Vite), Tailwind CSS, Recharts, Lucide React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT, BcryptJS

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas Account (Connection String)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "Smart Campus Management System"
```

### 2. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file in `backend/` and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
- Start the server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

## 📸 Screenshots
(Include screenshots of Login, Admin Dashboard, Student Portal here)

## 🧪 API Endpoints (Sample)
- `POST /api/users/login` - User Login
- `POST /api/users/register` - Register User
- `GET /api/students` - Get All Students (Admin/Faculty)
- `POST /api/attendance` - Mark Attendance (Faculty)

## 🔮 Future Enhancements
- AI-based attendance prediction.
- Chatbot for student queries.
- Mobile App integration.

---
**University Final Year Project** - Prepared by [itsnotdevill]
