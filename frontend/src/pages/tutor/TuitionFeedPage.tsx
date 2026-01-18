import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { mockTuitionRequests } from '../../data/mockData';
import { BookOpen, MapPin, Clock, Monitor, Calendar } from 'lucide-react';
import { toast } from 'sonner';

export default function TuitionFeedPage() {
  const handleApply = (requestId: number, studentName: string) => {
    toast.success(`Successfully applied for tuition with ${studentName}!`);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Tuition Opportunities</h2>
        <p className="text-gray-600 mt-1">Browse and apply for tuition requests from students</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mockTuitionRequests.map((request) => (
          <Card key={request.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    {request.subject}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Posted by: {request.studentName}
                  </CardDescription>
                </div>
                <Badge variant="outline">{request.mode}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{request.area}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{request.preferredTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Monitor className="w-4 h-4" />
                  <span>{request.mode}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Posted on {new Date(request.postedDate).toLocaleDateString()}</span>
                </div>
              </div>

              <Button 
                className="w-full"
                onClick={() => handleApply(request.id, request.studentName)}
              >
                Apply for this Tuition
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {mockTuitionRequests.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No tuition requests available at the moment</p>
        </div>
      )}
    </div>
  );
}
