import { Button } from "@/components/ui/button";
import featuredImg from "@assets/generated_images/Beach_pre-wedding_shoot_b9e12792.png";

export default function FeaturedPortfolio() {
  const scrollToGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              100+ high quality images
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Wedding & Celebrations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every wedding tells a unique love story. Through my lens, I capture the emotions, 
              the laughter, the tears of joy, and all the beautiful moments that make your day unforgettable. 
              From intimate ceremonies to grand celebrations, each photograph is crafted with artistic vision 
              and attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines candid moments with carefully composed portraits, ensuring that 
              every important detail and genuine emotion is preserved for you to cherish forever.
            </p>
            <Button 
              size="lg"
              onClick={scrollToGallery}
              data-testid="button-view-gallery"
            >
              View Gallery
            </Button>
          </div>
          
          <div className="md:col-span-3">
            <img
              src={featuredImg}
              alt="Featured Wedding Photography"
              className="w-full h-auto rounded-lg shadow-xl"
              data-testid="img-featured-portfolio"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
