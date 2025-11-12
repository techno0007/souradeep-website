import { Card, CardContent } from "@/components/ui/card";
import weddingImg from "@assets/generated_images/Wedding_ceremony_venue_d4607d0d.png";
import preWeddingImg from "@assets/generated_images/Pre-wedding_couple_photoshoot_ac1ab4d9.png";
import albumImg from "@assets/generated_images/Wedding_album_design_c43c8940.png";

export default function ServicesSection() {
  const services = [
    {
      title: "Wedding Photography",
      image: weddingImg,
      description: "Comprehensive coverage of your wedding day, from preparation to reception. Capturing every emotion, every detail, and every precious moment of your celebration.",
    },
    {
      title: "Pre-Wedding Shoots",
      image: preWeddingImg,
      description: "Beautiful engagement and pre-wedding photo sessions in stunning locations. Create timeless memories before your big day with personalized shoots.",
    },
    {
      title: "Album Design",
      image: albumImg,
      description: "Exquisite custom-designed wedding albums that tell your love story. Premium quality prints and elegant layouts to treasure for a lifetime.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="overflow-hidden hover-elevate" data-testid={`card-service-${index}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-testid={`img-service-${index}`}
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
