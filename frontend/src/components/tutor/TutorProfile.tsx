import { useState, useEffect } from 'react';
import TutorLayout from './TutorLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { User, BookOpen, Award, MapPin, Clock, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';

export default function TutorProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subjects: '',
    experience: '',
    qualification: '',
    area: '',
    bio: '',
    phone: ''
  });

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const parsed = JSON.parse(currentUser);
      setUser(parsed);
      setFormData({
        name: parsed.name || '',
        email: parsed.email || '',
        subjects: parsed.subjects || '',
        experience: parsed.experience || '',
        qualification: parsed.qualification || '',
        area: parsed.area || '',
        bio: parsed.bio || '',
        phone: parsed.phone || ''
      });
    }
  }, []);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      ...formData
    };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const handleCancel = () => {
    // Reset form to current user data
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        subjects: user.subjects || '',
        experience: user.experience || '',
        qualification: user.qualification || '',
        area: user.area || '',
        bio: user.bio || '',
        phone: user.phone || ''
      });
    }
    setIsEditing(false);
  };

  if (!user) return null;

  return (
    <TutorLayout>
      <div className="space-y-6 max-w-4xl">
        <div className="flex justify-between items-center">
          <div>
            <h1>My Profile</h1>
            <p className="text-muted-foreground mt-2">
              Manage your teaching profile and credentials
            </p>
          </div>
          {!isEditing && (
            <Button onClick={() => setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700">
              Edit Profile
            </Button>
          )}
        </div>

        {isEditing ? (
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile Information</CardTitle>
              <CardDescription>Update your details below</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="e.g., +94 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Area</Label>
                    <Input
                      id="area"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="subjects">Subjects (comma-separated)</Label>
                    <Input
                      id="subjects"
                      placeholder="e.g., Mathematics, Physics"
                      value={formData.subjects}
                      onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Input
                      id="experience"
                      placeholder="e.g., 5 Years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="qualification">Qualification</Label>
                  <Input
                    id="qualification"
                    placeholder="e.g., B.Sc in Mathematics"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio / About Me</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell students about your teaching approach and experience..."
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="button" onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                    Save Changes
                  </Button>
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Profile Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="size-20 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <User className="size-10 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{user.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {user.subjects?.split(',').map((subject: string, index: number) => (
                        <Badge key={index} className="bg-blue-100 text-blue-700">
                          {subject.trim()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {user.bio && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm">{user.bio}</p>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <Clock className="size-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Experience</p>
                      <p className="font-medium">{user.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Award className="size-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Qualification</p>
                      <p className="font-medium">{user.qualification}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <MapPin className="size-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Area</p>
                      <p className="font-medium">{user.area}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Mail className="size-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-sm">{user.email}</p>
                    </div>
                  </div>

                  {user.phone && (
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Phone className="size-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Profile Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardDescription>Profile Completeness</CardDescription>
                  <CardTitle className="text-3xl">
                    {user.bio && user.phone ? '100%' : user.bio || user.phone ? '90%' : '80%'}
                  </CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription>Profile Views</CardDescription>
                  <CardTitle className="text-3xl">45</CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardDescription>Response Rate</CardDescription>
                  <CardTitle className="text-3xl">N/A</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </>
        )}
      </div>
    </TutorLayout>
  );
}
