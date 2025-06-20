
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message.length >= 30) {
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error("Please fill all fields. Message must be at least 30 characters.");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    'Flutter', 'React', 'Kotlin', 'TypeScript', 'GraphQL', 'Firebase', 
    'AWS', 'NodeJS', 'REST', 'Agile', 'Dart', 'PostgreSQL', 'Celigo'
  ];

  const experiences = [
    {
      company: "Serole Technologies",
      period: "Nov 2021 – Aug 2024",
      role: "Senior Flutter Developer",
      description: "Led insurance app development (PolicyFest), mentored juniors, ran agile sprints with clients"
    },
    {
      company: "Rosemallow Technologies", 
      period: "Aug 2021 – Oct 2021",
      role: "Flutter Developer",
      description: "Delivered courier & food delivery app with real-time order tracking"
    },
    {
      company: "WalkingTree Technologies",
      period: "May 2019 – Aug 2021", 
      role: "Associate Software Developer",
      description: "Full stack dev using ExtJS, ReactJS, and Flutter. Handled internal tools and cloud integration"
    }
  ];

  const projects = [
    {
      title: "PolicyFest & Just Insurance",
      description: "Cross-platform apps for buying health, motor, and vehicle insurance policies",
      tech: "Flutter, GraphQL, Firebase, Secure Payments",
      role: "Lead Developer | 2-person agile team | Live product",
      link: "https://policyfest.com"
    },
    {
      title: "Courier Delivery App",
      description: "Real-time courier and food delivery system with live tracking & BLoC state",
      tech: "Flutter, Google Maps API, WebSocket, Firebase",
      role: "Built and deployed MVP in 4 weeks with full location-based logistics"
    },
    {
      title: "Flutter Advertisement Framework",
      description: "Modular ad widgets (Carousel, Banner, Inline) with API refresh",
      tech: "Flutter, State Management, REST API, Animation",
      link: "https://github.com/Hari36020/FlutterAdvertisementFramework"
    },
    {
      title: "RubyRibbon Data Integration",
      description: "Shopify + Thatcher APIs into AWS Redshift via Celigo",
      tech: "Celigo, AWS Glue, S3, ETL, Python",
      role: "Automated daily data flow to power executive dashboards"
    },
    {
      title: "SafeSure Incident Manager",
      description: "Flutter app for factory incidents with role-based ticket workflow",
      tech: "Flutter, Provider, REST API, Push Notifications"
    },
    {
      title: "EngazeWell",
      description: "Internal org tool for nominations, timesheets, device tracking",
      tech: "ReactJS, Redux, PostgreSQL, Node.js",
      link: "https://engazewell.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            HK
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Hi, I'm <span className="font-semibold">Hari Krishna Sangakari</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Full Stack Developer | Flutter Architect | Scalable Product Builder
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Delivering Clean Code & Seamless User Experiences Across Platforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              🔍 View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
            >
              📄 Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light tracking-tight">
                A Developer Who <span className="font-semibold">Builds With Purpose</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                I'm a Full Stack Developer with 5.5+ years of experience building high-performance mobile and web applications. 
                My expertise spans Flutter, React, Kotlin, Node.js, and scalable cloud services.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I've worked on cross-platform insurance platforms, real-time courier systems, and data integration pipelines, 
                always focused on performance and clean architecture.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I thrive in agile teams and fast-moving environments, turning requirements into reliable digital products.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
            Professional <span className="font-semibold">Journey</span>
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-blue-600">{exp.company}</h3>
                    <span className="text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-xl font-medium mb-3">{exp.role}</h4>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
            Featured <span className="font-semibold">Work</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-blue-600 mb-1">Tech Stack:</p>
                    <p className="text-sm text-gray-500">{project.tech}</p>
                  </div>
                  {project.role && (
                    <p className="text-sm text-gray-600 mb-4">{project.role}</p>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      Visit Project
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
            <span className="font-semibold">Education</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  🎓
                </div>
                <h3 className="text-xl font-semibold mb-2">Masters in Computer Science</h3>
                <p className="text-gray-600 mb-2">University of Central Oklahoma</p>
                <p className="text-gray-500">2023–2025</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  🎓
                </div>
                <h3 className="text-xl font-semibold mb-2">B.Tech in Electronics & Communication</h3>
                <p className="text-gray-600 mb-2">Lovely Professional University</p>
                <p className="text-gray-500">2015–2019</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hire/Collaborate CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 tracking-tight">
            Looking to <span className="font-semibold">Hire or Collaborate?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're building the next big thing or need help optimizing an existing product — let's talk. 
            I'm currently open to full-time roles and select freelance work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
            >
              📩 Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              📄 Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
            Get <span className="font-semibold">In Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12 border-gray-300 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 border-gray-300 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message * (minimum 30 characters)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-32 border-gray-300 focus:border-blue-500"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 h-12 font-medium transition-all duration-200 hover:shadow-lg"
              >
                Send Message
              </Button>
            </form>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://github.com/Hari36020" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/hari-krishna-sangakari-517a16100" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Direct Contact</h4>
                <p className="text-gray-600">hari36020@gmail.com</p>
              </div>
              
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full h-12 font-medium"
              >
                📄 Download Resume (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            © 2025 Hari Krishna Sangakari. Built with love, code, and coffee.
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            variant="ghost"
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            aria-label="Scroll to top"
          >
            ↑ Back to Top
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
