import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Button } from '../../components/ui/button';
import { subjects, areas } from '../../data/mockData';
import { toast } from 'sonner';
import { FileText } from 'lucide-react';

export default function PostTuitionPage() {
  const [formData, setFormData] = useState({
    subject: '',
    area: '',
    preferredTime: '',
    mode: 'online',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.subject || !formData.area || !formData.preferredTime) {
      toast.error('Please fill in all fields');
      return;
    }

    // In a real app, this would be sent to the backend
    toast.success('Tuition requirement posted successfully!');
    
    // Reset form
    setFormData({
      subject: '',
      area: '',
      preferredTime: '',
      mode: 'online',
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Post Tuition Requirement</h2>
        <p className="text-gray-600 mt-1">Share your learning needs and connect with tutors</p>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Tuition Details
            </CardTitle>
            <CardDescription>
              Fill in the details about the tuition you're looking for
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Area</Label>
                <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Input
                  id="preferredTime"
                  placeholder="e.g., Weekdays - Evening"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Mode</Label>
                <RadioGroup value={formData.mode} onValueChange={(value) => setFormData({ ...formData, mode: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="font-normal cursor-pointer">
                      Online
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="home" id="home" />
                    <Label htmlFor="home" className="font-normal cursor-pointer">
                      Home
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="font-normal cursor-pointer">
                      Both (Online / Home)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Post Requirement
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
