import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { mockTutors } from '../../data/mockData';
import { GraduationCap, MapPin, Award, Monitor } from 'lucide-react';

export default function TutorFeedPage() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Available Tutors</h2>
        <p className="text-gray-600 mt-1">Browse and connect with qualified tutors</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTutors.map((tutor) => (
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
    </div>
  );
}
