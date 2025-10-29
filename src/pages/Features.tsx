import { Card } from "@/components/ui/card";
import { MapPin, Eye, AlertTriangle, BarChart3, Brain, Wifi } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Real-time Vehicle Tracking",
      description: "Advanced GPS and IoT integration provides continuous monitoring of vehicle location, speed, and route optimization. Track your entire fleet on a unified dashboard with live updates every second.",
      benefits: [
        "Live location tracking with sub-meter accuracy",
        "Historical route playback and analysis",
        "Geofencing alerts for unauthorized movements",
        "Multi-vehicle fleet management interface"
      ]
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Driver Fatigue Detection",
      description: "Computer vision and machine learning algorithms monitor driver alertness through eye movement tracking, head position analysis, and steering pattern recognition to detect early signs of fatigue.",
      benefits: [
        "Real-time drowsiness detection using facial recognition",
        "Blink rate and eye closure monitoring",
        "Steering wheel grip pattern analysis",
        "Instant audio-visual alerts to driver"
      ]
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Obstacle & Collision Alerts",
      description: "Multi-sensor fusion combining radar, LiDAR, and camera systems creates a 360-degree awareness zone around the vehicle, detecting potential hazards and calculating collision probability in milliseconds.",
      benefits: [
        "Forward collision warning with brake assist",
        "Blind spot detection and lane departure alerts",
        "Pedestrian and cyclist detection",
        "Adaptive cruise control integration"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Analytics Dashboard",
      description: "Comprehensive visualization and reporting tools transform raw sensor data into actionable insights. Monitor KPIs, track safety scores, and identify trends across your entire operation.",
      benefits: [
        "Customizable real-time dashboards",
        "Automated safety reports and compliance logs",
        "Driver performance scoring and rankings",
        "Predictive maintenance recommendations"
      ]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Behavior Analysis",
      description: "Deep learning models analyze millions of driving events to build behavioral profiles, detect anomalies, and predict risky patterns before they lead to incidents.",
      benefits: [
        "Harsh braking and acceleration detection",
        "Cornering and lane change analysis",
        "Speed limit compliance monitoring",
        "Personalized driver coaching recommendations"
      ]
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Cloud-Connected Infrastructure",
      description: "Secure, scalable cloud architecture ensures your data is always accessible, automatically backed up, and protected with enterprise-grade encryption.",
      benefits: [
        "Real-time data synchronization across devices",
        "Automatic firmware and AI model updates",
        "99.9% uptime SLA guarantee",
        "GDPR and ISO 27001 compliant data handling"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Advanced <span className="text-gradient">Safety Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our intelligent system protects drivers, reduces accidents, and transforms vehicle safety through cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-smooth">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Benefits:</h3>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
