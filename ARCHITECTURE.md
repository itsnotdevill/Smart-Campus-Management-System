# System Architecture

## Architecture Overview
The Smart Campus Management System follows the **MVC (Model-View-Controller)** architectural pattern on the backend and a **Component-Based Architecture** on the frontend.

### 1. Frontend (View)
- **React (Vite)**: SPA (Single Page Application) for dynamic user experience.
- **State Management**: React Hooks (`useState`, `useEffect`, `useContext`).
- **Styles**: Tailwind CSS for utility-first styling.
- **Communication**: Axios for HTTP requests to the backend REST API.

### 2. Backend (Controller & Logic)
- **Node.js & Express**: Handles API routing, middleware processing, and business logic.
- **Controllers**: Separate logic for Users, Students, Faculty, etc.
- **Middleware**: Authentication (`authMiddleware.js`) ensures secure access using JWT.

### 3. Database (Model)
- **MongoDB Atlas**: NoSQL Cloud Database.
- **Mongoose**: ODM (Object Data Modeling) library to define schemas and relationships.
- **Collections**: Users, Students, Attendance, etc.

## Data Flow
1. User interacts with Frontend (e.g., Login Form).
2. React sends `POST /api/users/login` request to Express Server.
3. Express generic middleware runs (CORS, JSON parsing).
4. `userRoutes` maps the request to `authUser` controller.
5. Controller calls `User.findOne` via Mongoose.
6. MongoDB returns query result.
7. Controller validates password and generates JWT.
8. Response sent back to Frontend.
9. Frontend stores token and navigates to Dashboard.

## Class Diagram (Simplified)
- **User**: name, email, role, login()
- **Student (inherits User link)**: rollNo, course, viewAttendance()
- **Faculty (inherits User link)**: empId, designation, markAttendance()

## Security Features
- **JWT**: Stateless authentication.
- **Bcrypt**: Password hashing (salt rounds: 10).
- **Environment Variables**: Sensitive keys (MONGO_URI) stored in `.env`.
