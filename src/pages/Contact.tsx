import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success("Thank you! We'll contact you within 24 hours to schedule your free consultation.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      program: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-hero font-athletic font-black text-foreground mb-6">
            GET
            <span className="block text-primary">STARTED</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Ready to transform your life? Sign up for a free consultation and let us help you 
            achieve your fitness goals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-lg-dynamic font-athletic font-bold text-foreground">
                    Start Your Fitness Journey Today
                  </CardTitle>
                  <p className="text-muted-foreground font-body">
                    Fill out the form below and we'll schedule your free consultation within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-athletic font-semibold text-foreground">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="bg-background border-border focus:border-primary font-body"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-athletic font-semibold text-foreground">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-background border-border focus:border-primary font-body"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-athletic font-semibold text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-background border-border focus:border-primary font-body"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-athletic font-semibold text-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-background border-border focus:border-primary font-body"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div className="space-y-2">
                      <Label className="font-athletic font-semibold text-foreground">
                        Interested Program
                      </Label>
                      <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                        <SelectTrigger className="bg-background border-border focus:border-primary font-body">
                          <SelectValue placeholder="Select a program you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="crossfit">CrossFit Intensity</SelectItem>
                          <SelectItem value="yoga">Power Yoga</SelectItem>
                          <SelectItem value="hiit">HIIT Cardio</SelectItem>
                          <SelectItem value="strength">Strength Training</SelectItem>
                          <SelectItem value="consultation">Not sure - need consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-athletic font-semibold text-foreground">
                        Tell us about your fitness goals
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-background border-border focus:border-primary font-body min-h-24"
                        placeholder="What do you hope to achieve? Any specific goals or concerns?"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full red-gradient font-athletic font-bold py-6 text-lg hover-lift"
                    >
                      GET MY FREE CONSULTATION
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="font-athletic font-bold text-foreground">
                    Visit Our Gym
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-athletic font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground font-body">
                        123 Fitness Avenue<br />
                        Downtown District<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-athletic font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground font-body">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-athletic font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground font-body">
                        info@fitlifegym.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-athletic font-semibold text-foreground">Hours</h3>
                      <div className="text-muted-foreground font-body">
                        <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                        <p>Saturday - Sunday: 6:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="card-gradient border-border">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground font-athletic font-semibold">
                        Interactive Map
                      </p>
                      <p className="text-sm text-muted-foreground font-body">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;