// Mock tutors data
export const mockTutors = [
  {
    id: 1,
    name: 'Mr. Perera',
    subject: 'Mathematics',
    experience: '5 Years',
    qualification: 'B.Sc in Mathematics',
    area: 'Colombo',
    rating: 4.8,
    description: 'Specialized in O/L and A/L Mathematics with proven track record.',
    email: 'perera@example.com'
  },
  {
    id: 2,
    name: 'Ms. Silva',
    subject: 'Physics',
    experience: '7 Years',
    qualification: 'M.Sc in Physics',
    area: 'Kandy',
    rating: 4.9,
    description: 'Expert in Advanced Level Physics with 95% student success rate.',
    email: 'silva@example.com'
  },
  {
    id: 3,
    name: 'Mr. Fernando',
    subject: 'Chemistry',
    experience: '4 Years',
    qualification: 'B.Sc in Chemistry',
    area: 'Galle',
    rating: 4.7,
    description: 'Interactive teaching methods for O/L and A/L Chemistry students.',
    email: 'fernando@example.com'
  },
  {
    id: 4,
    name: 'Ms. Jayawardena',
    subject: 'English',
    experience: '6 Years',
    qualification: 'MA in English Literature',
    area: 'Colombo',
    rating: 4.9,
    description: 'IELTS and O/L English expert with Cambridge certification.',
    email: 'jayawardena@example.com'
  },
  {
    id: 5,
    name: 'Mr. Dissanayake',
    subject: 'Biology',
    experience: '8 Years',
    qualification: 'M.Sc in Biology',
    area: 'Negombo',
    rating: 4.8,
    description: 'Comprehensive A/L Biology classes with practical sessions.',
    email: 'dissanayake@example.com'
  },
  {
    id: 6,
    name: 'Ms. Rajapaksa',
    subject: 'Mathematics',
    experience: '3 Years',
    qualification: 'B.Sc in Engineering',
    area: 'Colombo',
    rating: 4.6,
    description: 'Engineering graduate specializing in advanced mathematics.',
    email: 'rajapaksa@example.com'
  },
  {
    id: 7,
    name: 'Mr. Bandara',
    subject: 'Computer Science',
    experience: '5 Years',
    qualification: 'B.Sc in Computer Science',
    area: 'Kandy',
    rating: 4.7,
    description: 'Programming, algorithms, and O/L ICT expert.',
    email: 'bandara@example.com'
  },
  {
    id: 8,
    name: 'Ms. Wijesinghe',
    subject: 'Sinhala',
    experience: '10 Years',
    qualification: 'BA in Sinhala',
    area: 'Colombo',
    rating: 4.9,
    description: 'O/L and A/L Sinhala language and literature specialist.',
    email: 'wijesinghe@example.com'
  }
];

// Mock tuition posts
export const mockTuitionPosts = [
  {
    id: 1,
    studentName: 'Kamal',
    subject: 'Mathematics',
    studentLevel: 'O/L (Grade 10-11)',
    area: 'Colombo',
    preferredTime: 'Weekday Evenings',
    mode: 'online',
    description: 'Need help with advanced algebra and geometry. Preparing for O/L exams.',
    postedDate: '2026-01-10',
    status: 'active'
  },
  {
    id: 2,
    studentName: 'Nimal',
    subject: 'Physics',
    studentLevel: 'A/L (Grade 12-13)',
    area: 'Kandy',
    preferredTime: 'Weekends',
    mode: 'home',
    description: 'Looking for experienced tutor for A/L Physics. Mechanics and electricity topics.',
    postedDate: '2026-01-11',
    status: 'active'
  },
  {
    id: 3,
    studentName: 'Saman',
    subject: 'English',
    studentLevel: 'Grade 6-9',
    area: 'Colombo',
    preferredTime: 'Weekday Afternoons',
    mode: 'both',
    description: 'Need English language tutor for improving grammar and writing skills.',
    postedDate: '2026-01-12',
    status: 'active'
  },
  {
    id: 4,
    studentName: 'Amara',
    subject: 'Chemistry',
    studentLevel: 'A/L (Grade 12-13)',
    area: 'Galle',
    preferredTime: 'Flexible',
    mode: 'online',
    description: 'Preparing for A/L exams. Need comprehensive coverage of organic chemistry.',
    postedDate: '2026-01-12',
    status: 'active'
  },
  {
    id: 5,
    studentName: 'Ruwan',
    subject: 'Biology',
    studentLevel: 'O/L (Grade 10-11)',
    area: 'Negombo',
    preferredTime: 'Weekday Evenings',
    mode: 'home',
    description: 'Looking for tutor to help with O/L Biology syllabus and practical work.',
    postedDate: '2026-01-13',
    status: 'active'
  }
];

// Subjects list
export const subjects = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Computer Science',
  'Sinhala',
  'History',
  'Geography',
  'Economics',
  'Accounting',
  'Business Studies'
];

// Areas in Sri Lanka
export const areas = [
  'Colombo',
  'Kandy',
  'Galle',
  'Negombo',
  'Gampaha',
  'Kurunegala',
  'Matara',
  'Anuradhapura',
  'Jaffna',
  'Batticaloa',
  'Trincomalee',
  'Ratnapura'
];

// Helper function to get random items from array
export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper function to format dates
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  return date.toLocaleDateString();
}
