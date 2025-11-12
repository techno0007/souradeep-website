import { Button } from "@/components/ui/button";
import photographerImg from "@assets/generated_images/Wedding_photographer_portrait_3f252758.png";

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={photographerImg}
              alt="Professional Wedding Photographer"
              className="w-full h-auto rounded-lg shadow-lg"
              data-testid="img-photographer"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              Get to know Me
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Get to Know me Better
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate wedding photographer dedicated to capturing the magic of your special moments. 
              With years of experience in wedding photography, pre-wedding shoots, and celebration events, 
              I bring a unique artistic vision to every project.
            </p>
            <p className="italic text-foreground/90 font-serif text-lg">
              "Finding new perspectives and breathing life into precious moments is what inspires me"
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every love story is unique, and I believe your wedding photos should reflect that. From intimate 
              ceremonies to grand celebrations, I'm here to document your journey with creativity, professionalism, 
              and attention to every beautiful detail.
            </p>
            <Button 
              size="lg" 
              className="mt-4"
              onClick={scrollToContact}
              data-testid="button-contact-me"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
