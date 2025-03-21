"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { SocialLink } from "./footer";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType:
    | "installation"
    | "renovation"
    | "consulting"
    | "events"
    | "other";
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "installation",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formState);

      if (result.success) {
        toast.success(result.message || "Message sent successfully!");
        // Reset form after successful submission
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
          projectType: "installation",
        });
      } else {
        // Handle error
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-primary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Ready to bring padel to your facility? Get in touch with our team to
            discuss your project needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md border border-border p-8 h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Email Us</p>
                    <a
                      href="mailto:info@ravenpadelgrowth.com"
                      className="text-accent hover:underline"
                    >
                      info@ravenpadelgrowth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Call Us</p>
                    <a
                      href="tel:+19144158800"
                      className="text-accent hover:underline"
                    >
                      +1 (914) 415-8800
                    </a>
                    <a
                      href="tel:+5692311914"
                      className="text-accent hover:underline"
                    >
                      +56 9 8231 1914
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mr-4 shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Visit Us</p>
                    <address className="text-muted-foreground not-italic">
                      We operate throughout North America with projects in
                      multiple cities.
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-medium text-primary mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <SocialLink
                    href="/"
                    icon={<Facebook size={18} />}
                    label="Facebook"
                  />
                  <SocialLink
                    href="/"
                    icon={<Instagram size={18} />}
                    label="Instagram"
                  />
                  <SocialLink
                    href="/"
                    icon={<Linkedin size={18} />}
                    label="LinkedIn"
                  />
                  <SocialLink
                    href="/"
                    icon={<Twitter size={18} />}
                    label="Twitter"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md border border-border p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    placeholder="Your phone number (optional)"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 bg-white"
                    disabled={isSubmitting}
                  >
                    <option value="installation">New Court Installation</option>
                    <option value="renovation">Court Renovation</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="events">
                      Tournament/Event Organization
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg font-medium transition-colors w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
