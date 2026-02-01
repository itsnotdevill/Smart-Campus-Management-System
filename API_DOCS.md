# API Documentation

## Auth
- **POST** `/api/users/login`
  - Body: `{ email, password }`
  - Returns: Token and User Info
- **POST** `/api/users` (Registration)
  - Body: `{ name, email, password, role }`

## Students
- **GET** `/api/students`
  - Headers: `Authorization: Bearer <token>`
  - Access: Admin, Faculty
- **POST** `/api/students`
  - Body: `{ name, email, department, ... }`
  - Access: Admin
- **GET** `/api/students/:id`
  - Access: Admin, Faculty, Student (Self)

## Faculty
- **GET** `/api/faculty`
  - Access: Private
- **POST** `/api/faculty`
  - Access: Admin

## Attendance
- **POST** `/api/attendance`
  - Body: `{ studentId, date, status, subject }`
  - Access: Faculty
- **GET** `/api/attendance/:studentId`
  - Access: Admin, Faculty, Student

## Notices
- **GET** `/api/notices`
  - Access: Public/Private
- **POST** `/api/notices`
  - Body: `{ title, content, targetAudience }`
  - Access: Admin, Faculty

## Complaints
- **POST** `/api/complaints`
  - Body: `{ title, description }`
  - Access: Student
- **GET** `/api/complaints`
  - Access: Admin
