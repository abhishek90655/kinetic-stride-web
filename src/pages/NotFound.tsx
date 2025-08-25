import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Dumbbell } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-24">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="p-6 red-gradient rounded-full inline-flex animate-fitness-pulse">
            <Dumbbell className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-hero font-athletic font-black text-foreground mb-4">
          404
        </h1>
        <h2 className="text-lg-dynamic font-athletic font-bold text-primary mb-4">
          WORKOUT NOT FOUND
        </h2>
        <p className="text-muted-foreground mb-8 font-body">
          Looks like this page skipped leg day and disappeared! 
          Let's get you back to your fitness journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="red-gradient font-athletic font-bold px-6 py-3 hover-lift">
              <Home className="w-4 h-4 mr-2" />
              BACK TO HOME
            </Button>
          </Link>
          <Link to="/programs">
            <Button variant="outline" className="font-athletic font-semibold px-6 py-3 hover:bg-primary hover:text-white transition-smooth">
              VIEW PROGRAMS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
