import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-box">
                <span className="text-xl font-bold text-primary-foreground">AI</span>
              </div>
              <span className="text-lg font-bold">Vehicle Safety</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Revolutionizing road safety with artificial intelligence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/technology" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@aivehiclesafety.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 AI Vehicle Safety & Monitoring System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
