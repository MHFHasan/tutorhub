import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Slider } from '../../components/ui/slider';
import { Badge } from '../../components/ui/badge';
import { mockTutors, subjects, areas } from '../../data/mockData';
import { GraduationCap, MapPin, Award, Monitor } from 'lucide-react';

export default function FindTutorPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [experienceRange, setExperienceRange] = useState<number[]>([0]);

  const filteredTutors = mockTutors.filter((tutor) => {
    const subjectMatch = selectedSubject === 'all' || tutor.subject === selectedSubject;
    const areaMatch = selectedArea === 'all' || tutor.area === selectedArea;
    const experienceYears = parseInt(tutor.experience);
    const experienceMatch = experienceYears >= experienceRange[0];
    
    return subjectMatch && areaMatch && experienceMatch;
  });

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Find Tutor</h2>
        <p className="text-gray-600 mt-1">Filter tutors by subject, area, and experience</p>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>Refine your search to find the perfect tutor</CardDescription>
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
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map((subject) => (
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
                  <SelectItem value="all">All Areas</SelectItem>
                  {areas.map((area) => (
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
                max={15}
                step={1}
                className="mt-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">
          Found {filteredTutors.length} tutor{filteredTutors.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutors.map((tutor) => (
          <Card key={tutor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    {tutor.name}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    <Badge variant="secondary" className="mt-1">
                      {tutor.subject}
                    </Badge>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award className="w-4 h-4" />
                <span>{tutor.qualification}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GraduationCap className="w-4 h-4" />
                <span>{tutor.experience} experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{tutor.area}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Monitor className="w-4 h-4" />
                <span>{tutor.mode}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTutors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tutors found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
