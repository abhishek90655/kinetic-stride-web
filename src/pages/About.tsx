import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatsCounter from "@/components/StatsCounter";
import { Award, Heart, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Every program is designed with measurable outcomes and proven methodologies to ensure you reach your goals."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community First",
      description: "We believe fitness is better together. Our supportive community motivates and celebrates each member's journey."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "From our certified trainers to state-of-the-art equipment, we maintain the highest standards in everything we do."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusive",
      description: "FitLife welcomes everyone, regardless of fitness level, age, or background. Your journey starts here."
    }
  ];

  const trainers = [
    {
      name: "Mike Johnson",
      title: "Head CrossFit Trainer",
      experience: "8+ years",
      certifications: "CrossFit Level 3, NASM-CPT"
    },
    {
      name: "Sarah Davis",
      title: "Yoga & Mindfulness Coach",
      experience: "6+ years",
      certifications: "RYT-500, Mindfulness Certified"
    },
    {
      name: "Alex Rodriguez",
      title: "HIIT & Cardio Specialist",
      experience: "5+ years",
      certifications: "ACSM-CPT, TRX Certified"
    },
    {
      name: "David Wilson",
      title: "Strength & Conditioning",
      experience: "10+ years",
      certifications: "CSCS, USAW Sports Performance"
    }
  ];

  return (
    <main className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-hero font-athletic font-black text-foreground mb-6">
            ABOUT
            <span className="block text-primary">FITLIFE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-body leading-relaxed">
            Founded in 2009, FitLife has been transforming lives through fitness for over 15 years. 
            What started as a small community gym has grown into a premier fitness destination, 
            but our core mission remains the same: to help every member achieve their personal best.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl-dynamic font-athletic font-bold text-foreground mb-6">
                OUR STORY
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-lg">
                <p>
                  FitLife began with a simple belief: fitness should be accessible, enjoyable, and transformative. 
                  Our founders, both fitness enthusiasts and former athletes, saw the need for a gym that went 
                  beyond just equipment and weights.
                </p>
                <p>
                  We envisioned a space where people could not only work out but truly transform their lives – 
                  physically, mentally, and emotionally. Today, we're proud to have helped over 10,000 members 
                  achieve their fitness goals and discover their strongest selves.
                </p>
                <p>
                  From beginners taking their first steps toward a healthier lifestyle to elite athletes 
                  pushing their limits, FitLife is where transformation happens every day.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="hero-gradient p-8 rounded-2xl">
                <div className="text-center text-white">
                  <h3 className="text-lg-dynamic font-athletic font-bold mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg font-body">
                    "To empower individuals to transform their lives through fitness, 
                    creating a supportive community where everyone can achieve their personal best."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl-dynamic font-athletic font-bold text-foreground mb-4">
              OUR VALUES
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              These core principles guide everything we do at FitLife
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient border-border hover-lift group text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center text-primary group-hover:animate-fitness-pulse">
                    {value.icon}
                  </div>
                  <h3 className="font-athletic font-bold text-lg mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl-dynamic font-athletic font-bold text-foreground mb-4">
              MEET OUR EXPERT TRAINERS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
              Our certified professionals are here to guide your fitness journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="card-gradient border-border hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-smooth">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-athletic font-bold text-lg text-foreground mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-athletic font-semibold mb-2">
                    {trainer.title}
                  </p>
                  <p className="text-sm text-muted-foreground font-body mb-2">
                    {trainer.experience} Experience
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {trainer.certifications}
                  </p>
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
            READY TO JOIN THE FITLIFE FAMILY?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
            Experience the difference that expert training, premium facilities, and a supportive community can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              className="red-gradient font-athletic font-bold px-8 py-4 text-lg hover-lift"
            >
              START YOUR JOURNEY
            </Button>
            <Button 
              variant="outline" 
              className="font-athletic font-bold px-8 py-4 text-lg hover:bg-primary hover:text-white transition-smooth"
            >
              SCHEDULE TOUR
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;