import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "Make Your Wedding Canvas",
    "Capturing Forever Moments",
    "Your Love Story in Frames",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="h-32 md:h-40 flex items-center justify-center">
          {slides.map((slide, index) => (
            <h1
              key={slide}
              className={`absolute text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground uppercase tracking-wider transition-all duration-1000 ${
                currentSlide === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              data-testid={`text-hero-slide-${index}`}
            >
              {slide}
            </h1>
          ))}
        </div>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Professional photography for weddings, celebrations, and life's precious moments
        </p>
      </div>
    </section>
  );
}
