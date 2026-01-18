import { useEffect, useState } from 'react';
import TutorLayout from './TutorLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { BookOpen, MapPin, Clock, Calendar, Monitor, Home } from 'lucide-react';
import { toast } from 'sonner';

// Mock tuition posts
const mockTuitionPosts = [
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

export default function TuitionFeed() {
  const [tuitionPosts, setTuitionPosts] = useState(mockTuitionPosts);
  const [appliedPosts, setAppliedPosts] = useState<number[]>([]);

  useEffect(() => {
    // Check for posts created by students in localStorage
    const storedPosts = localStorage.getItem('tuitionPosts');
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      // Combine mock posts with stored posts
      setTuitionPosts([...mockTuitionPosts, ...parsedPosts]);
    }

    // Load applied posts
    const stored = localStorage.getItem('appliedPosts');
    if (stored) {
      setAppliedPosts(JSON.parse(stored));
    }
  }, []);

  const handleApply = (postId: number, studentName: string) => {
    const updatedApplied = [...appliedPosts, postId];
    setAppliedPosts(updatedApplied);
    localStorage.setItem('appliedPosts', JSON.stringify(updatedApplied));
    toast.success(`Application sent to ${studentName}! They will contact you soon.`);
  };

  const getModeIcon = (mode: string) => {
    if (mode === 'online') return <Monitor className="size-4" />;
    if (mode === 'home') return <Home className="size-4" />;
    return <span className="text-xs">Online/Home</span>;
  };

  const getModeText = (mode: string) => {
    if (mode === 'online') return 'Online';
    if (mode === 'home') return 'Home Visit';
    return 'Flexible';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <TutorLayout>
      <div className="space-y-6">
        <div>
          <h1>Tuition Opportunities</h1>
          <p className="text-muted-foreground mt-2">
            Browse student requirements and apply to teach
          </p>
        </div>

        <div className="grid gap-4">
          {tuitionPosts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No tuition posts available at the moment. Check back later!</p>
              </CardContent>
            </Card>
          ) : (
            tuitionPosts.map((post) => {
              const hasApplied = appliedPosts.includes(post.id);
              
              return (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2 flex-wrap">
                          <span>Student: {post.studentName}</span>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                            {post.subject}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {post.studentLevel}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {post.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="size-4 text-muted-foreground" />
                        <span>{post.area}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="size-4 text-muted-foreground" />
                        <span>{post.preferredTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        {getModeIcon(post.mode)}
                        <span>{getModeText(post.mode)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="size-4 text-muted-foreground" />
                        <span>{formatDate(post.postedDate)}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {hasApplied ? (
                        <Button disabled className="bg-green-600">
                          Applied ✓
                        </Button>
                      ) : (
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => handleApply(post.id, post.studentName)}
                        >
                          Apply to Teach
                        </Button>
                      )}
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </TutorLayout>
  );
}
