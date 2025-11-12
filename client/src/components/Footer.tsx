import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { SiPinterest } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Make Your Wedding Canvas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Creating timeless memories through the art of photography. 
              Specializing in weddings, celebrations, and life's precious moments.
            </p>
            <div className="flex gap-4">
              <button 
                className="hover-elevate rounded-full p-2"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="text-foreground" />
              </button>
              <button 
                className="hover-elevate rounded-full p-2"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="text-foreground" />
              </button>
              <button 
                className="hover-elevate rounded-full p-2"
                aria-label="Pinterest"
                data-testid="link-pinterest"
              >
                <SiPinterest className="text-foreground w-6 h-6" />
              </button>
              <button 
                className="hover-elevate rounded-full p-2"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <Youtube className="text-foreground" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${item.toLowerCase()}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Wedding Photography</li>
              <li>Pre-Wedding Shoots</li>
              <li>Baby Rice Ceremony</li>
              <li>Birthday Parties</li>
              <li>Album Design</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Make Your Wedding Canvas. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
