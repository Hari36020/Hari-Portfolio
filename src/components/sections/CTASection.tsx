import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onContact: () => void;
  onDownloadResume: () => void;
}

const CTASection = ({ onContact, onDownloadResume }: CTASectionProps) => (
  <section className="py-20 px-6 bg-primary text-primary-foreground">
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
          onClick={onContact}
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
        >
          📩 Contact Me
        </Button>
        <Button
          onClick={onDownloadResume}
          variant="outline"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg font-medium transition-all duration-200"
        >
          📄 Download Resume
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
