import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li className="mb-2">
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors flex items-center"
    >
      <ChevronRight size={16} className="mr-1 text-secondary" />
      {children}
    </a>
  </li>
);

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
    aria-label={label}
  >
    {icon}
  </a>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Raven Padel</h3>
            <p className="text-gray-300 mb-6">
              Bringing the exciting world of padel to North America with
              passion, expertise, and vision.
            </p>

            <div className="flex space-x-3">
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook size={18} />}
                label="Facebook"
              />
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram size={18} />}
                label="Instagram"
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin size={18} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter size={18} />}
                label="Twitter"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Our Services</FooterLink>
              <FooterLink href="#projects">Recent Projects</FooterLink>
              <FooterLink href="#advantages">What Sets Us Apart</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul>
              <FooterLink href="#installation">Court Installation</FooterLink>
              <FooterLink href="#renovation">Court Renovation</FooterLink>
              <FooterLink href="#consulting">Consulting Services</FooterLink>
              <FooterLink href="#events">Tournament Organization</FooterLink>
              <FooterLink href="#community">Community Building</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <Image
              src={"/icon.png"}
              alt="Raven Padel Logo"
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Raven Padel. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
