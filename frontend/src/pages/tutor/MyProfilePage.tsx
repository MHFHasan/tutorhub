import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { User, Mail, GraduationCap, Award, MapPin, BookOpen } from 'lucide-react';

export default function MyProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">My Profile</h2>
        <p className="text-gray-600 mt-1">View and manage your tutor profile</p>
      </div>

      <div className="max-w-3xl">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription>Professional Tutor</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Professional Details</h3>
              <div className="space-y-4">
                {user.subjects && (
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium">Subjects</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {user.subjects.split(',').map((subject, index) => (
                        <Badge key={index} variant="secondary">
                          {subject.trim()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {user.qualification && (
                  <div className="flex items-start gap-3 text-gray-700">
                    <Award className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Qualification</p>
                      <p>{user.qualification}</p>
                    </div>
                  </div>
                )}

                {user.experience && (
                  <div className="flex items-start gap-3 text-gray-700">
                    <GraduationCap className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Experience</p>
                      <p>{user.experience}</p>
                    </div>
                  </div>
                )}

                {user.area && (
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Area</p>
                      <p>{user.area}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
