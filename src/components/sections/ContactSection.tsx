import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { contact } from "@/data/portfolio";

interface ContactSectionProps {
  onDownloadResume: () => void;
}

const ContactSection = ({ onDownloadResume }: ContactSectionProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message.length >= 30) {
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Please fill all fields. Message must be at least 30 characters.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 tracking-tight">
          Get <span className="font-semibold">In Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12"
              required
            />
            <Input
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12"
              required
            />
            <Textarea
              placeholder="Your Message * (minimum 30 characters)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-32"
              required
            />
            <Button type="submit" className="w-full h-12 font-medium transition-all duration-200 hover:shadow-lg">
              Send Message
            </Button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                  <span>GitHub</span>
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Direct Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  <span>{contact.phone}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={onDownloadResume}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 w-full h-12 font-medium"
            >
              📄 Download Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
