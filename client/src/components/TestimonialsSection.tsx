import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import avatar1 from "@assets/generated_images/Happy_bride_testimonial_99b0b1c4.png";
import avatar2 from "@assets/generated_images/Happy_groom_testimonial_cceb9f3a.png";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      avatar: avatar1,
      name: "Sarah & Michael",
      text: "Absolutely stunning work! Every photo captured the emotion and beauty of our special day. The attention to detail and creative compositions exceeded all our expectations. Highly recommended!",
    },
    {
      avatar: avatar2,
      name: "Priya & Rahul",
      text: "Our wedding photos are beyond beautiful! The photographer made us feel comfortable and captured such natural, candid moments. The album design is exquisite and we'll treasure it forever.",
    },
    {
      avatar: avatar1,
      name: "Emily & James",
      text: "Professional, creative, and so easy to work with! Our pre-wedding shoot was amazing and the wedding day coverage was flawless. Every image tells our love story perfectly.",
    },
    {
      avatar: avatar2,
      name: "Amit & Neha",
      text: "The best decision we made for our wedding! Beautiful compositions, perfect timing, and the final photos are absolutely breathtaking. Thank you for capturing our memories so wonderfully!",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Trusted by 100+ Happy Couples
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Our Customers
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <Card 
                    key={index} 
                    className={`${offset === 1 ? '' : 'hidden md:block'}`}
                    data-testid={`card-testimonial-${index}`}
                  >
                    <CardContent className="p-8 text-center space-y-6">
                      <Avatar className="w-24 h-24 mx-auto">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="text-muted-foreground italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              data-testid="button-testimonial-next"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
