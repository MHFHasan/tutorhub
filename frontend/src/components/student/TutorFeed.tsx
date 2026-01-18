import StudentLayout from './StudentLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { BookOpen, MapPin, Award, Clock } from 'lucide-react';
import { toast } from 'sonner';

// Mock tutor data
const mockTutors = [
  {
    id: 1,
    name: 'Mr. Perera',
    subject: 'Mathematics',
    experience: '5 Years',
    qualification: 'B.Sc in Mathematics',
    area: 'Colombo',
    rating: 4.8,
    description: 'Specialized in O/L and A/L Mathematics with proven track record.'
  },
  {
    id: 2,
    name: 'Ms. Silva',
    subject: 'Physics',
    experience: '7 Years',
    qualification: 'M.Sc in Physics',
    area: 'Kandy',
    rating: 4.9,
    description: 'Expert in Advanced Level Physics with 95% student success rate.'
  },
  {
    id: 3,
    name: 'Mr. Fernando',
    subject: 'Chemistry',
    experience: '4 Years',
    qualification: 'B.Sc in Chemistry',
    area: 'Galle',
    rating: 4.7,
    description: 'Interactive teaching methods for O/L and A/L Chemistry students.'
  },
  {
    id: 4,
    name: 'Ms. Jayawardena',
    subject: 'English',
    experience: '6 Years',
    qualification: 'MA in English Literature',
    area: 'Colombo',
    rating: 4.9,
    description: 'IELTS and O/L English expert with Cambridge certification.'
  },
  {
    id: 5,
    name: 'Mr. Dissanayake',
    subject: 'Biology',
    experience: '8 Years',
    qualification: 'M.Sc in Biology',
    area: 'Negombo',
    rating: 4.8,
    description: 'Comprehensive A/L Biology classes with practical sessions.'
  },
  {
    id: 6,
    name: 'Ms. Rajapaksa',
    subject: 'Mathematics',
    experience: '3 Years',
    qualification: 'B.Sc in Engineering',
    area: 'Colombo',
    rating: 4.6,
    description: 'Engineering graduate specializing in advanced mathematics.'
  },
  {
    id: 7,
    name: 'Mr. Bandara',
    subject: 'Computer Science',
    experience: '5 Years',
    qualification: 'B.Sc in Computer Science',
    area: 'Kandy',
    rating: 4.7,
    description: 'Programming, algorithms, and O/L ICT expert.'
  },
  {
    id: 8,
    name: 'Ms. Wijesinghe',
    subject: 'Sinhala',
    experience: '10 Years',
    qualification: 'BA in Sinhala',
    area: 'Colombo',
    rating: 4.9,
    description: 'O/L and A/L Sinhala language and literature specialist.'
  }
];

export default function TutorFeed() {
  const handleContact = (tutorName: string) => {
    toast.success(`Request sent to ${tutorName}! They will contact you soon.`);
  };

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1>Browse Tutors</h1>
          <p className="text-muted-foreground mt-2">
            Explore our community of qualified tutors
          </p>
        </div>

        <div className="grid gap-4">
          {mockTutors.map((tutor) => (
            <Card key={tutor.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      {tutor.name}
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                        {tutor.subject}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {tutor.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded">
                    <span className="text-amber-600">★</span>
                    <span className="text-sm font-medium">{tutor.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="size-4 text-muted-foreground" />
                    <span>{tutor.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-muted-foreground" />
                    <span>{tutor.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="size-4 text-muted-foreground" />
                    <span>{tutor.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="size-4 text-muted-foreground" />
                    <span>Available</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleContact(tutor.name)}
                  >
                    Contact Tutor
                  </Button>
                  <Button variant="outline">View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
}
