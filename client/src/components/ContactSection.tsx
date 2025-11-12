import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 48 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            We'll contact you in 48 hours
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Write to us
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="input-message"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                We'll be with you
              </p>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
                Contact Us
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Let's create beautiful memories together. Whether it's your wedding day, 
                a pre-wedding shoot, or a special celebration, we're here to capture every moment.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+(1) 123-657-8969</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">info@makeyourweddingcanvas.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">24 Photography Street, Studio District</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
