export interface Tutor {
  id: number;
  name: string;
  subject: string;
  experience: string;
  area: string;
  qualification: string;
  mode: string;
}

export interface TuitionRequest {
  id: number;
  studentName: string;
  subject: string;
  area: string;
  preferredTime: string;
  mode: string;
  postedDate: string;
}

export const mockTutors: Tutor[] = [
  {
    id: 1,
    name: 'Mr. Perera',
    subject: 'Mathematics',
    experience: '5 Years',
    area: 'Colombo',
    qualification: 'MSc in Mathematics',
    mode: 'Online / Home',
  },
  {
    id: 2,
    name: 'Ms. Silva',
    subject: 'Science',
    experience: '3 Years',
    area: 'Kandy',
    qualification: 'BSc in Physics',
    mode: 'Online',
  },
  {
    id: 3,
    name: 'Mr. Fernando',
    subject: 'English',
    experience: '8 Years',
    area: 'Galle',
    qualification: 'MA in English Literature',
    mode: 'Home',
  },
  {
    id: 4,
    name: 'Mrs. Jayawardena',
    subject: 'ICT',
    experience: '4 Years',
    area: 'Colombo',
    qualification: 'BIT',
    mode: 'Online / Home',
  },
  {
    id: 5,
    name: 'Mr. Dissanayake',
    subject: 'Mathematics',
    experience: '10 Years',
    area: 'Negombo',
    qualification: 'PhD in Mathematics',
    mode: 'Home',
  },
  {
    id: 6,
    name: 'Ms. Wijesinghe',
    subject: 'Chemistry',
    experience: '6 Years',
    area: 'Kandy',
    qualification: 'MSc in Chemistry',
    mode: 'Online / Home',
  },
];

export const mockTuitionRequests: TuitionRequest[] = [
  {
    id: 1,
    studentName: 'Anil Kumar',
    subject: 'Mathematics',
    area: 'Colombo',
    preferredTime: 'Weekends - Morning',
    mode: 'Home',
    postedDate: '2026-01-10',
  },
  {
    id: 2,
    studentName: 'Sameera Perera',
    subject: 'Science',
    area: 'Kandy',
    preferredTime: 'Weekdays - Evening',
    mode: 'Online',
    postedDate: '2026-01-11',
  },
  {
    id: 3,
    studentName: 'Nimal Fernando',
    subject: 'English',
    area: 'Galle',
    preferredTime: 'Weekdays - Afternoon',
    mode: 'Online',
    postedDate: '2026-01-12',
  },
  {
    id: 4,
    studentName: 'Kumari Silva',
    subject: 'ICT',
    area: 'Colombo',
    preferredTime: 'Weekends - Evening',
    mode: 'Home',
    postedDate: '2026-01-12',
  },
];

export const subjects = [
  'Mathematics',
  'Science',
  'English',
  'ICT',
  'Chemistry',
  'Physics',
  'Biology',
  'History',
  'Geography',
];

export const areas = [
  'Colombo',
  'Kandy',
  'Galle',
  'Negombo',
  'Jaffna',
  'Matara',
  'Kurunegala',
  'Anuradhapura',
];
