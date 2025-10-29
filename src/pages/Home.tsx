import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Activity, AlertTriangle, BarChart3, Cpu, Eye } from "lucide-react";
import heroImage from "@/assets/hero-vehicle-ai.jpg";

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Real-time Vehicle Tracking",
      description: "Monitor your fleet in real-time with GPS and IoT integration for complete visibility."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Driver Fatigue Detection",
      description: "AI-powered analysis of driver behavior to detect signs of fatigue and prevent accidents."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Collision Alerts",
      description: "Advanced sensors detect obstacles and potential collisions, alerting drivers instantly."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics Dashboard",
      description: "Comprehensive insights into vehicle performance, driver behavior, and safety metrics."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Behavior Analysis",
      description: "Machine learning algorithms analyze driving patterns to improve safety over time."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Cutting-edge artificial intelligence for predictive safety and smart decision-making."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
          <img 
            src={heroImage} 
            alt="AI-powered vehicle dashboard with futuristic interface" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Revolutionizing Road Safety
            <br />
            <span className="text-gradient">with Artificial Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced AI-powered vehicle monitoring, real-time driver analysis, and intelligent accident prevention for a safer tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
              asChild
            >
              <Link to="/features">
                Learn More <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Intelligent <span className="text-gradient">Safety Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology designed to protect drivers, passengers, and pedestrians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary card-hover group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-smooth">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform <span className="text-gradient">Vehicle Safety?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the revolution in intelligent transportation safety systems.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
            asChild
          >
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
