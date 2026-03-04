"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Send, MessageSquareHeart } from "lucide-react";
import { aiGreetingAssistant } from "@/ai/flows/ai-greeting-assistant";
import { ScrollReveal } from "./ScrollReveal";
import { useToast } from "@/hooks/use-toast";

interface Wish {
  id: string;
  name: string;
  message: string;
  date: string;
}

export function WishesWall() {
  const { toast } = useToast();
  const [wishes, setWishes] = useState<Wish[]>([
    { id: "1", name: "Sarah & Mike", message: "Congratulations to the beautiful couple! Wishing you a lifetime of happiness together.", date: "Today" },
    { id: "2", name: "Aunt Martha", message: "We are so thrilled for you both. Can't wait for the big day!", date: "Yesterday" },
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [keywords, setKeywords] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestedMessages, setSuggestedMessages] = useState<string[]>([]);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    
    const newWish = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      message,
      date: "Just now"
    };
    
    setWishes([newWish, ...wishes]);
    setName("");
    setMessage("");
    toast({
      title: "Wish Posted!",
      description: "Your message has been added to the wall.",
    });
  };

  const handleGenerateAI = async () => {
    if (!keywords) {
      toast({ title: "Keywords needed", description: "Please enter some keywords or a sentiment." });
      return;
    }
    setIsGenerating(true);
    try {
      const result = await aiGreetingAssistant({ keywordsOrSentiments: keywords });
      setSuggestedMessages(result.suggestedMessages);
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "AI Error", description: "Could not generate messages. Please try again." });
    } finally {
      setIsGenerating(false);
    }
  };

  const useSuggestion = (msg: string) => {
    setMessage(msg);
    setSuggestedMessages([]);
    setKeywords("");
  };

  return (
    <section className="py-12 md:py-24 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline text-primary flex items-center gap-3 group">
              <MessageSquareHeart className="text-accent group-hover:scale-110 transition-transform" />
              Wishes Wall
            </h2>
            <p className="text-muted-foreground italic">
              Leave a beautiful message for the happy couple.
            </p>

            <form onSubmit={handleAddWish} className="space-y-4 bg-white/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-2 group/input">
                <Label htmlFor="wish-name" className="group-hover/input:text-accent transition-colors">Your Name</Label>
                <Input 
                  id="wish-name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="How should we call you?"
                  required 
                  className="bg-white/50 focus:bg-white transition-colors"
                />
              </div>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                  <Label htmlFor="wish-message">Message</Label>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Input 
                      placeholder="Keywords..." 
                      className="h-8 text-xs flex-1 sm:w-40 bg-white" 
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                    <Button 
                      type="button" 
                      size="sm" 
                      variant="outline" 
                      onClick={handleGenerateAI}
                      disabled={isGenerating}
                      className="h-8 text-xs flex gap-1 border-accent/20 hover:bg-accent/5 transition-all whitespace-nowrap"
                    >
                      <Sparkles size={14} className="text-accent group-hover:animate-pulse" />
                      {isGenerating ? "..." : "AI Suggest"}
                    </Button>
                  </div>
                </div>
                {suggestedMessages.length > 0 && (
                  <div className="animate-fade-in space-y-2 mb-2 p-3 bg-accent/5 rounded-lg border border-accent/10">
                    <p className="text-xs font-semibold text-accent mb-1 uppercase tracking-wider">AI Suggestions:</p>
                    <div className="flex flex-col gap-2">
                      {suggestedMessages.map((msg, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => useSuggestion(msg)}
                          className="text-left text-sm p-2 hover:bg-accent/10 rounded border border-transparent hover:border-accent/20 transition-all italic text-muted-foreground"
                        >
                          "{msg}"
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <Textarea 
                  id="wish-message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="Share your love and congratulations..."
                  className="min-h-[120px] bg-white/50 focus:bg-white transition-colors"
                  required 
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold transition-all hover:scale-[1.01]">
                <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Post My Wish
              </Button>
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-white p-4 rounded-2xl shadow-inner h-[400px] md:h-[500px]">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {wishes.map((wish) => (
                  <Card key={wish.id} className="border-none shadow-sm bg-background/50 group hover:bg-white hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-headline font-bold text-primary group-hover:text-accent transition-colors">{wish.name}</span>
                        <span className="text-xs text-muted-foreground uppercase opacity-60 group-hover:opacity-100">{wish.date}</span>
                      </div>
                      <p className="text-sm italic text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        "{wish.message}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
