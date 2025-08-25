import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatsCounter from "@/components/StatsCounter";
import { Clock, MapPin, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Home = () => {
  const scheduleItems = [
    { time: "6:00 AM", class: "CrossFit Intensity", trainer: "Mike Johnson" },
    { time: "8:00 AM", class: "Power Yoga", trainer: "Sarah Davis" },
    { time: "10:00 AM", class: "HIIT Cardio", trainer: "Alex Rodriguez" },
    { time: "6:00 PM", class: "Strength Training", trainer: "David Wilson" },
    { time: "7:30 PM", class: "Zumba Dance", trainer: "Maria Garcia" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-hero font-athletic font-black text-white mb-6 animate-fade-in-up">
            TRANSFORM YOUR
            <span className="block text-primary">BODY & MIND</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up font-body">
            Join FitLife and experience the ultimate fitness journey with expert trainers, 
            cutting-edge equipment, and a community that pushes you to be your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button 
              variant="default" 
              className="red-gradient font-athletic font-bold px-8 py-4 text-lg hover-lift"
            >
              START YOUR JOURNEY
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white font-athletic font-bold px-8 py-4 text-lg hover:bg-white hover:text-background transition-smooth"
            >
              WATCH VIDEO
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl-dynamic font-athletic font-bold text-foreground mb-4">
              WHY CHOOSE FITLIFE?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              We provide everything you need to achieve your fitness goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="w-12 h-12 text-primary" />,
                title: "Expert Trainers",
                description: "Certified professionals to guide your fitness journey"
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Community",
                description: "Join a supportive community of fitness enthusiasts"
              },
              {
                icon: <MapPin className="w-12 h-12 text-primary" />,
                title: "Prime Location",
                description: "Conveniently located with easy parking access"
              },
              {
                icon: <Clock className="w-12 h-12 text-primary" />,
                title: "Flexible Hours",
                description: "Open 24/7 to fit your busy schedule"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-gradient border-border hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:animate-fitness-pulse">
                    {feature.icon}
                  </div>
                  <h3 className="font-athletic font-bold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl-dynamic font-athletic font-bold text-foreground mb-4">
              TODAY'S SCHEDULE
            </h2>
            <p className="text-muted-foreground text-lg font-body">
              Join our high-energy group classes
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {scheduleItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-6 mb-4 card-gradient border border-border rounded-lg hover-lift"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary font-athletic font-bold text-xl">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="font-athletic font-bold text-foreground">
                      {item.class}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      with {item.trainer}
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="font-athletic font-semibold">
                  Book Class
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl-dynamic font-athletic font-bold text-foreground mb-6">
            READY TO START YOUR FITNESS JOURNEY?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
            Join thousands of members who have already transformed their lives at FitLife
          </p>
          <Button 
            variant="default" 
            className="red-gradient font-athletic font-bold px-12 py-6 text-xl hover-lift animate-intense-glow"
          >
            JOIN FITLIFE TODAY
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;