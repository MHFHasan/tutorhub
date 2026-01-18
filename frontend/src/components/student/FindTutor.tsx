import { useState } from 'react';
import StudentLayout from './StudentLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { BookOpen, MapPin, Award, Clock, Search } from 'lucide-react';
import { toast } from 'sonner';

// Mock tutor data
const allTutors = [
  {
    id: 1,
    name: 'Mr. Perera',
    subject: 'Mathematics',
    experience: 5,
    qualification: 'B.Sc in Mathematics',
    area: 'Colombo',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Ms. Silva',
    subject: 'Physics',
    experience: 7,
    qualification: 'M.Sc in Physics',
    area: 'Kandy',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Mr. Fernando',
    subject: 'Chemistry',
    experience: 4,
    qualification: 'B.Sc in Chemistry',
    area: 'Galle',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Ms. Jayawardena',
    subject: 'English',
    experience: 6,
    qualification: 'MA in English Literature',
    area: 'Colombo',
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Mr. Dissanayake',
    subject: 'Biology',
    experience: 8,
    qualification: 'M.Sc in Biology',
    area: 'Negombo',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Ms. Rajapaksa',
    subject: 'Mathematics',
    experience: 3,
    qualification: 'B.Sc in Engineering',
    area: 'Colombo',
    rating: 4.6,
  },
  {
    id: 7,
    name: 'Mr. Bandara',
    subject: 'Computer Science',
    experience: 5,
    qualification: 'B.Sc in Computer Science',
    area: 'Kandy',
    rating: 4.7,
  },
  {
    id: 8,
    name: 'Ms. Wijesinghe',
    subject: 'Sinhala',
    experience: 10,
    qualification: 'BA in Sinhala',
    area: 'Colombo',
    rating: 4.9,
  }
];

const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science', 'Sinhala'];
const areas = ['All', 'Colombo', 'Kandy', 'Galle', 'Negombo', 'Gampaha', 'Kurunegala'];

export default function FindTutor() {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedArea, setSelectedArea] = useState('All');
  const [experienceRange, setExperienceRange] = useState([0]);

  const filteredTutors = allTutors.filter(tutor => {
    const matchesSubject = selectedSubject === 'All' || tutor.subject === selectedSubject;
    const matchesArea = selectedArea === 'All' || tutor.area === selectedArea;
    const matchesExperience = tutor.experience >= experienceRange[0];
    return matchesSubject && matchesArea && matchesExperience;
  });

  const handleContact = (tutorName: string) => {
    toast.success(`Request sent to ${tutorName}!`);
  };

  const handleReset = () => {
    setSelectedSubject('All');
    setSelectedArea('All');
    setExperienceRange([0]);
  };

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div>
          <h1>Find a Tutor</h1>
          <p className="text-muted-foreground mt-2">
            Use filters to find the perfect tutor for your needs
          </p>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="size-5" />
              Search Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label>Subject</Label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map(subject => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Area</Label>
                <Select value={selectedArea} onValueChange={setSelectedArea}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map(area => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Minimum Experience: {experienceRange[0]} years</Label>
                <Slider
                  value={experienceRange}
                  onValueChange={setExperienceRange}
                  max={10}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button variant="outline" onClick={handleReset}>
                Reset Filters
              </Button>
              <div className="text-sm text-muted-foreground flex items-center">
                Showing {filteredTutors.length} tutors
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          {filteredTutors.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No tutors found matching your criteria. Try adjusting the filters.</p>
              </CardContent>
            </Card>
          ) : (
            filteredTutors.map((tutor) => (
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
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded">
                      <span className="text-amber-600">★</span>
                      <span className="text-sm font-medium">{tutor.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="size-4 text-muted-foreground" />
                      <span>{tutor.experience} Years</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="size-4 text-muted-foreground" />
                      <span>{tutor.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="size-4 text-muted-foreground" />
                      <span>{tutor.area}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleContact(tutor.name)}
                    >
                      Contact Tutor
                    </Button>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </StudentLayout>
  );
}
