# TutorHub - Tutor & Student Matching Platform

A complete React.js frontend prototype for connecting students with tutors and tutors with tuition opportunities.

## 🎯 Features

### For Students
- Browse available tutors with detailed profiles
- Filter tutors by subject, area, and experience level
- Post tuition requirements for tutors to apply
- View tutor ratings and qualifications

### For Tutors
- View tuition opportunities posted by students
- Apply to teach students
- Manage professional profile
- Track applications and profile views

## 🚀 Getting Started

### Demo Credentials

**Student Login:**
- Email: Use any email containing "student" (e.g., student@example.com)
- Password: Any value

**Tutor Login:**
- Email: Use any email containing "tutor" (e.g., tutor@example.com)
- Password: Any value

## 📱 Routes

### Public Routes
- `/` - Landing page
- `/register` - Registration with role selection (Student/Tutor)
- `/login` - Login page

### Student Routes
- `/student/dashboard` - Student dashboard overview
- `/student/tutors` - Browse all available tutors
- `/student/find` - Find tutors with advanced filters
- `/student/post` - Post tuition requirements

### Tutor Routes
- `/tutor/dashboard` - Tutor dashboard overview
- `/tutor/tuition-feed` - Browse student tuition postings
- `/tutor/profile` - View and edit tutor profile

## 🎨 Technology Stack

- **React.js** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Sonner** for toast notifications
- **Lucide React** for icons

## 📦 Mock Data

The application uses mock data stored in:
- `localStorage` for user sessions and posted tuition requirements
- `/utils/mockData.ts` for predefined tutors and tuition posts

## 🔒 Authentication

Mock authentication system:
- User sessions stored in `localStorage`
- Role-based routing (student vs tutor)
- Automatic redirect based on user role

## 💡 Key Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Role-Based UI**: Different interfaces for students and tutors
- **Interactive Filters**: Search and filter functionality
- **Real-time Feedback**: Toast notifications for user actions
- **State Persistence**: Data persists across page refreshes

## 🎓 Mock Data Examples

### Sample Tutors
- Mr. Perera - Mathematics (Colombo)
- Ms. Silva - Physics (Kandy)
- Mr. Fernando - Chemistry (Galle)
- And more...

### Sample Subjects
Mathematics, Physics, Chemistry, Biology, English, Computer Science, Sinhala, History, Geography

### Sample Areas
Colombo, Kandy, Galle, Negombo, Gampaha, Kurunegala, and more Sri Lankan cities

## 🔄 User Flows

### Student Flow
1. Register as student or login
2. Browse tutors or use filters to find specific tutors
3. Post tuition requirements with subject, area, and preferences
4. Receive applications from tutors

### Tutor Flow
1. Register as tutor with qualifications
2. Browse tuition opportunities
3. Apply to teach students
4. Manage profile and credentials

## 📝 Notes

- This is a **frontend-only prototype** with no backend integration
- All data is mocked or stored in browser localStorage
- Applications and interactions are simulated
- No real email or payment processing

## 🎯 Future Enhancements

- Real backend integration with API
- User messaging system
- Payment processing
- Review and rating system
- Advanced search with AI matching
- Video call integration
- Calendar scheduling
