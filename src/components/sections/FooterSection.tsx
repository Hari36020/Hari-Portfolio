import { Button } from "@/components/ui/button";

const FooterSection = () => (
  <footer className="bg-muted py-12 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-muted-foreground mb-4">
        © 2025 Hari Krishna Sangakari. Built with love, code, and coffee.
      </p>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        variant="ghost"
        className="text-primary hover:text-primary/80"
        aria-label="Scroll to top"
      >
        ↑ Back to Top
      </Button>
    </div>
  </footer>
);

export default FooterSection;
