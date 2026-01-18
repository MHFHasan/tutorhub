import { useState } from 'react';
import StudentLayout from './StudentLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { FileText, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science', 'Sinhala', 'History', 'Geography'];
const areas = ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Gampaha', 'Kurunegala', 'Matara', 'Anuradhapura'];
const preferredTimes = ['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekends', 'Flexible'];

export default function PostTuition() {
  const [formData, setFormData] = useState({
    subject: '',
    area: '',
    preferredTime: '',
    mode: 'online',
    description: '',
    studentLevel: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.subject || !formData.area || !formData.preferredTime || !formData.studentLevel) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Save to localStorage (mock backend)
    const existingPosts = JSON.parse(localStorage.getItem('tuitionPosts') || '[]');
    const newPost = {
      id: Date.now(),
      ...formData,
      studentName: JSON.parse(localStorage.getItem('currentUser') || '{}').name,
      postedDate: new Date().toISOString(),
      status: 'active'
    };
    existingPosts.push(newPost);
    localStorage.setItem('tuitionPosts', JSON.stringify(existingPosts));

    toast.success('Tuition requirement posted successfully!');
    setSubmitted(true);
  };

  const handlePostAnother = () => {
    setFormData({
      subject: '',
      area: '',
      preferredTime: '',
      mode: 'online',
      description: '',
      studentLevel: ''
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <StudentLayout>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="py-12 text-center">
            <div className="size-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="size-8 text-green-600" />
            </div>
            <h2 className="mb-2">Tuition Posted Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Your tuition requirement has been posted. Qualified tutors will be able to view and apply to your listing.
            </p>
            <div className="flex gap-2 justify-center">
              <Button onClick={handlePostAnother} className="bg-blue-600 hover:bg-blue-700">
                Post Another
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/student/tutors'}>
                Browse Tutors
              </Button>
            </div>
          </CardContent>
        </Card>
      </StudentLayout>
    );
  }

  return (
    <StudentLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1>Post Tuition Requirement</h1>
          <p className="text-muted-foreground mt-2">
            Fill in the details and let qualified tutors apply
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="size-5" />
              Tuition Details
            </CardTitle>
            <CardDescription>
              Provide as much detail as possible to attract the right tutors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger id="subject">
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
                  <Label htmlFor="studentLevel">Student Level *</Label>
                  <Select value={formData.studentLevel} onValueChange={(value) => setFormData({ ...formData, studentLevel: value })}>
                    <SelectTrigger id="studentLevel">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grade-6-9">Grade 6-9</SelectItem>
                      <SelectItem value="ol">O/L (Grade 10-11)</SelectItem>
                      <SelectItem value="al">A/L (Grade 12-13)</SelectItem>
                      <SelectItem value="university">University Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="area">Area *</Label>
                  <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                    <SelectTrigger id="area">
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
                  <Label htmlFor="preferredTime">Preferred Time *</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                    <SelectTrigger id="preferredTime">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {preferredTimes.map(time => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Mode *</Label>
                <RadioGroup value={formData.mode} onValueChange={(value) => setFormData({ ...formData, mode: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="font-normal cursor-pointer">
                      Online Classes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="home" id="home" />
                    <Label htmlFor="home" className="font-normal cursor-pointer">
                      Home Visit
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="font-normal cursor-pointer">
                      Either Online or Home
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Additional Details (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Describe any specific requirements, learning goals, or preferences..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Post Requirement
                </Button>
                <Button type="button" variant="outline" onClick={() => window.history.back()}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  );
}
