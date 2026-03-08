"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle2, UserPlus, Utensils } from "lucide-react";

export function RSVPForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast({
      title: "RSVP Sent!",
      description: "Thank you for confirming your attendance. We can't wait to see you!",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="rsvp" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md overflow-hidden">
            <div className="h-2 bg-primary w-full" />
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-4xl font-headline text-primary">Join Our Celebration</CardTitle>
              <CardDescription className="text-lg italic">Please RSVP by March 30th, 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8 py-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" required className="bg-white/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required className="bg-white/50" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Will you attend?</Label>
                    <RadioGroup defaultValue="yes" className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center space-x-2 bg-white/50 p-3 rounded-lg flex-1 border border-border">
                        <RadioGroupItem value="yes" id="attending" />
                        <Label htmlFor="attending" className="flex-1 cursor-pointer">Yes, I'll be there!</Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/50 p-3 rounded-lg flex-1 border border-border">
                        <RadioGroupItem value="no" id="not-attending" />
                        <Label htmlFor="not-attending" className="flex-1 cursor-pointer">Regretfully, I can't come</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="flex items-center gap-2">
                        <UserPlus size={16} className="text-accent" /> Number of Guests
                      </Label>
                      <Input id="guests" type="number" min="1" max="10" defaultValue="1" className="bg-white/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dietary" className="flex items-center gap-2">
                        <Utensils size={16} className="text-accent" /> Dietary Restrictions
                      </Label>
                      <Input id="dietary" placeholder="e.g. Vegetarian, Nut Allergy" className="bg-white/50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Note for the Couple</Label>
                    <Textarea id="message" placeholder="Optional: Any additional details..." className="bg-white/50 min-h-[100px]" />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg font-semibold rounded-xl shadow-lg transition-all active:scale-[0.98]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle2 size={20} />
                      Send RSVP
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}