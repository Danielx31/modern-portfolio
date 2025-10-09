"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! This is a demo form.");
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <div>
              <h3 className="mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <h4>Find me on</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {link.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t">
              <p className="text-muted-foreground">
                <strong>Location:</strong> Santa Maria, Bulacan
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Availability:</strong> Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
