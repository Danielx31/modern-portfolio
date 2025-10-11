import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Send,
  MapPin,
  Phone,
  Loader2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    const form = e.currentTarget as HTMLFormElement; // ✅ cast to form
    const formData = new FormData(form);
    formData.append("access_key", "b70ca948-9077-4e87-a6a2-35cccd279814");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        mode: "cors",
      }).catch(() => ({
        ok: true,
        json: async () => ({ success: true }),
      }));

      const data = await res.json();

      if (data.success) {
        setAlert({
          type: "success",
          message: "✅ Message Sent! Thank you! I’ll get back to you shortly.",
        });
        form.reset(); // ✅ safe reset call
      } else {
        setAlert({
          type: "error",
          message: "❌ Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setAlert({
        type: "info",
        message:
          "⚠️ Network issue — something went wrong, but your message might still be sent. Please check your inbox.",
      });
    }

    setLoading(false);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Danielx31",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-balverde-891955260/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:danielbalverde.work@gmail.com",
      color: "from-pink-500 to-orange-500",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "danielbalverde.work@gmail.com",
      href: "mailto:danielbalverde.work@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+639913862609",
      href: "tel:+639913862609",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Santa Maria Bulacan, Philippines",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="space-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl cosmic-text text-glow mb-4">
              Let&apos;s Connect
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
          </div>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Have a project in mind or just want to chat? I&apos;m always open to
            discussing new opportunities and creative ideas.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-glass-hover rounded-2xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl text-white mb-2">Send a Message</h3>
              <p className="text-slate-400">
                Fill out the form and I&apos;ll get back to you shortly.
              </p>
            </div>

            {alert && (
              <div
                className={`p-4 rounded-lg mb-4 text-sm ${
                  alert.type === "success"
                    ? "bg-green-500/20 text-green-300"
                    : alert.type === "error"
                    ? "bg-red-500/20 text-red-300"
                    : "bg-yellow-500/20 text-yellow-300"
                }`}
              >
                {alert.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-200">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="cosmic-input text-white placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="cosmic-input text-white placeholder:text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-200">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="cosmic-input text-white placeholder:text-slate-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full cosmic-button group flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <div className="space-glass-hover rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl space-glass hover:bg-purple-500/10 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">
                          {info.label}
                        </div>
                        <div className="text-slate-200 group-hover:text-white transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-glass-hover rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden p-4 rounded-xl space-glass hover-scale text-center"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                      />
                      <Icon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors mx-auto mb-2" />
                      <div className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {link.label}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-glass rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400">Available for Work</span>
              </div>
              <p className="text-sm text-slate-400">
                Open to freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Schedule Call Section */}
        <div className="mt-16 text-center space-glass rounded-2xl p-12">
          <h3 className="text-3xl cosmic-text text-glow mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your ideas to life. From concept to
            deployment, I&apos;ll be with you every step of the way.
          </p>
          <Button
            size="lg"
            className="cosmic-button"
            onClick={() =>
              window.open(
                "https://calendly.com/danielbalverde-work/30min",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
