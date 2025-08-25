import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Zap, Heart, Target, Flame } from "lucide-react";
import { useState } from "react";

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
    {
      id: "crossfit",
      title: "CrossFit Intensity",
      subtitle: "High-Intensity Functional Fitness",
      icon: <Zap className="w-8 h-8" />,
      duration: "45 min",
      level: "Advanced",
      maxParticipants: 15,
      description: "Push your limits with our signature CrossFit program combining strength, cardio, and functional movements.",
      benefits: ["Burns 400+ calories", "Builds functional strength", "Improves cardiovascular health", "Develops mental toughness"],
      schedule: ["Mon, Wed, Fri - 6:00 AM", "Tue, Thu - 6:30 PM", "Sat - 9:00 AM"],
      price: "$149/month"
    },
    {
      id: "yoga",
      title: "Power Yoga",
      subtitle: "Strength, Flexibility & Mindfulness",
      icon: <Heart className="w-8 h-8" />,
      duration: "60 min",
      level: "All Levels",
      maxParticipants: 20,
      description: "Find your inner strength and flexibility with our dynamic yoga sessions led by certified instructors.",
      benefits: ["Improves flexibility", "Reduces stress", "Builds core strength", "Enhances mind-body connection"],
      schedule: ["Daily - 8:00 AM & 7:00 PM", "Weekend - 10:00 AM", "Beginner classes available"],
      price: "$99/month"
    },
    {
      id: "hiit",
      title: "HIIT Cardio",
      subtitle: "Maximum Results, Minimum Time",
      icon: <Flame className="w-8 h-8" />,
      duration: "30 min",
      level: "Intermediate",
      maxParticipants: 12,
      description: "High-Intensity Interval Training designed to maximize fat burn and improve cardiovascular fitness in minimal time.",
      benefits: ["Burns fat fast", "Boosts metabolism", "Improves endurance", "Time-efficient workouts"],
      schedule: ["Mon-Fri - 12:00 PM", "Tue, Thu - 7:30 AM", "Sat - 11:00 AM"],
      price: "$119/month"
    },
    {
      id: "strength",
      title: "Strength Training",
      subtitle: "Build Muscle, Gain Power",
      icon: <Target className="w-8 h-8" />,
      duration: "50 min",
      level: "Beginner to Advanced",
      maxParticipants: 10,
      description: "Progressive strength training program focusing on compound movements and muscle development.",
      benefits: ["Builds lean muscle", "Increases bone density", "Improves posture", "Boosts confidence"],
      schedule: ["Mon, Wed, Fri - 6:00 PM", "Tue, Thu - 8:00 AM", "Sat - 2:00 PM"],
      price: "$129/month"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner": return "bg-green-500/20 text-green-400";
      case "intermediate": return "bg-yellow-500/20 text-yellow-400";
      case "advanced": return "bg-red-500/20 text-red-400";
      default: return "bg-blue-500/20 text-blue-400";
    }
  };

  return (
    <main className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-hero font-athletic font-black text-foreground mb-6">
            FITNESS
            <span className="block text-primary">PROGRAMS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Discover our comprehensive range of fitness programs designed to help you achieve 
            your goals, whether you're a beginner or an elite athlete.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={program.id}
                className={`card-gradient border-border hover-lift cursor-pointer group relative overflow-hidden transition-smooth ${
                  selectedProgram === program.id ? "ring-2 ring-primary glow-red" : ""
                }`}
                onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              >
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 red-gradient rounded-lg group-hover:animate-fitness-pulse">
                      <div className="text-white">
                        {program.icon}
                      </div>
                    </div>
                    <Badge className={`${getLevelColor(program.level)} font-athletic font-semibold`}>
                      {program.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg-dynamic font-athletic font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-primary font-athletic font-semibold mb-4">
                    {program.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-4 text-muted-foreground font-body">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{program.maxParticipants} max</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground font-body mb-4">
                    {program.description}
                  </p>

                  {selectedProgram === program.id && (
                    <div className="space-y-4 animate-fade-in-up">
                      {/* Benefits */}
                      <div>
                        <h4 className="font-athletic font-bold text-foreground mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {program.benefits.map((benefit, i) => (
                            <li key={i} className="text-muted-foreground font-body flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Schedule */}
                      <div>
                        <h4 className="font-athletic font-bold text-foreground mb-2">Schedule:</h4>
                        <div className="space-y-1">
                          {program.schedule.map((time, i) => (
                            <p key={i} className="text-muted-foreground font-body">
                              {time}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-primary font-athletic font-bold text-xl">
                          {program.price}
                        </div>
                        <Button className="red-gradient font-athletic font-bold hover-lift">
                          JOIN PROGRAM
                        </Button>
                      </div>
                    </div>
                  )}

                  {selectedProgram !== program.id && (
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-athletic font-bold text-xl">
                        {program.price}
                      </div>
                      <Button variant="outline" className="font-athletic font-semibold">
                        Learn More
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl-dynamic font-athletic font-bold text-foreground mb-6">
            NOT SURE WHICH PROGRAM IS RIGHT FOR YOU?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
            Schedule a free consultation with one of our expert trainers to find the perfect program for your goals.
          </p>
          <Button 
            variant="default" 
            className="red-gradient font-athletic font-bold px-8 py-4 text-lg hover-lift"
          >
            FREE CONSULTATION
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Programs;