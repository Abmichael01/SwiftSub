import React from "react";
import { Facebook, Twitter, Instagram, Mail, PhoneCall, MapPin } from "lucide-react";
import SectionPadding from "@/layouts/SectionPadding";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <SectionPadding className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold">VTU Hub</h3>
            <p className="mt-2 text-sm text-gray-400">
              Your trusted platform for quick and secure bill payments, airtime, and data purchases.
            </p>
            <div className="mt-4 space-y-2 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                Osun State, Nigeria
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                support@vtuhub.com
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall size={18} />
                +234 812 345 6789
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-medium">Follow Us</h3>
            <p className="mt-2 text-sm text-gray-400">Stay connected on our social platforms.</p>
            <div className="flex items-center mt-3 gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} VTU Hub. All rights reserved.
        </div>
      </SectionPadding>
    </footer>
  );
};

export default Footer;
