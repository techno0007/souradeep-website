import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import img1 from "@assets/generated_images/Wedding_couple_dancing_aae43e6e.png";
import img2 from "@assets/generated_images/Wedding_rings_detail_f0423d52.png";
import img3 from "@assets/generated_images/Bride_getting_ready_06faebc4.png";
import img4 from "@assets/generated_images/Bouquet_toss_moment_74b7dec7.png";
import img5 from "@assets/generated_images/Baby_rice_ceremony_71d3c52e.png";
import img6 from "@assets/generated_images/Birthday_celebration_fe1505c5.png";
import img7 from "@assets/generated_images/Wedding_table_setting_60309baa.png";
import img8 from "@assets/generated_images/Wedding_couple_sunset_hero_007175e1.png";

export default function GallerySection() {
  const galleryItems = [
    { image: img1, title: "First Dance", category: "Wedding" },
    { image: img2, title: "Wedding Rings", category: "Wedding" },
    { image: img3, title: "Bridal Preparation", category: "Wedding" },
    { image: img4, title: "Bouquet Toss", category: "Wedding" },
    { image: img5, title: "Rice Ceremony", category: "Baby Rice Ceremony" },
    { image: img6, title: "Birthday Celebration", category: "Birthday" },
    { image: img7, title: "Reception Details", category: "Wedding" },
    { image: img8, title: "Sunset Portrait", category: "Pre-Wedding" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Our World Class Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group cursor-pointer hover-elevate"
              data-testid={`card-gallery-${index}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-gallery-${index}`}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-white font-serif text-xl mb-2">{item.title}</h4>
                  <Badge variant="secondary" className="bg-white/90">
                    {item.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
