import { Card } from "@/components/ui/card";
import { Brain, Cpu, Cloud, Smartphone, Database, Zap } from "lucide-react";
import techBackground from "@/assets/tech-background.jpg";

const Technology = () => {
  const techStack = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Artificial Intelligence",
      description: "Deep learning neural networks powered by TensorFlow and PyTorch for real-time image recognition, behavior prediction, and anomaly detection.",
      technologies: ["Computer Vision", "Natural Language Processing", "Reinforcement Learning", "Pattern Recognition"]
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "IoT Sensor Network",
      description: "Distributed sensor ecosystem including GPS modules, accelerometers, gyroscopes, camera systems, and radar arrays for comprehensive data collection.",
      technologies: ["GPS Trackers", "Multi-Camera Arrays", "LiDAR Systems", "Motion Sensors"]
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Computing",
      description: "Scalable infrastructure on AWS and Google Cloud Platform enabling real-time processing of millions of data points with sub-second latency.",
      technologies: ["AWS Lambda", "Google Cloud AI", "Edge Computing", "CDN Distribution"]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Big Data Analytics",
      description: "Advanced data pipelines processing terabytes of driving data daily to extract meaningful insights and power predictive models.",
      technologies: ["Apache Kafka", "MongoDB", "PostgreSQL", "Apache Spark"]
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Edge Processing",
      description: "On-device computation using specialized AI chips for instant decision-making without cloud dependency, ensuring safety even offline.",
      technologies: ["NVIDIA Jetson", "Intel Movidius", "Coral Edge TPU", "Custom ASICs"]
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Real-time Communication",
      description: "WebSocket and MQTT protocols enable instantaneous data transmission between vehicles, servers, and mobile applications.",
      technologies: ["MQTT Protocol", "WebSocket", "5G Connectivity", "V2X Communication"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Powering Innovation with <span className="text-gradient">Advanced Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge AI, IoT sensors, and cloud infrastructure to deliver unparalleled vehicle safety and monitoring capabilities.
          </p>
        </div>

        {/* Technology Architecture */}
        <div className="relative mb-20 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-10" />
          <img 
            src={techBackground} 
            alt="Technology architecture with neural networks and circuit patterns" 
            className="w-full h-96 object-cover opacity-30"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-4xl font-bold mb-4">Integrated Technology Stack</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Every component works in harmony to create a seamless, intelligent safety ecosystem
              </p>
            </div>
          </div>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-smooth">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {tech.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.technologies.map((item, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* System Architecture */}
        <div className="mt-20">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-3xl font-bold mb-6 text-center">How It All Works Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-box">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Data Collection</h3>
                <p className="text-sm text-muted-foreground">
                  IoT sensors continuously gather vehicle telemetry, driver behavior, and environmental data
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-box">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Machine learning models analyze data in real-time to detect patterns, anomalies, and potential risks
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center glow-box">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Intelligent Response</h3>
                <p className="text-sm text-muted-foreground">
                  Instant alerts, predictive insights, and automated safety interventions protect drivers proactively
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Technology;
