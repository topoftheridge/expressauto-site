import Image from "next/image";
import { MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image src="/expressautoheaderlogo.jpg" alt="Express Auto Detail" width={170} height={100} className="h-16 w-auto" />
            </div>
            <p className="text-sm mb-4">Professional mobile auto detailing serving Bucks County, PA and surrounding areas within a 30-mile radius. We come to you!</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Bucks County, PA (30-mile radius)</div>
              <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> <a href="https://expressautodetailwash.com" className="hover:text-primary transition">expressautodetailwash.com</a></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary transition">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition">Services</a></li>
              <li><a href="#paint-correction" className="hover:text-primary transition">Paint Correction</a></li>
              <li><a href="#quote" className="hover:text-primary transition">Get a Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-primary transition">Basic Detail</a></li>
              <li><a href="#services" className="hover:text-primary transition">Express Detail</a></li>
              <li><a href="#services" className="hover:text-primary transition">Diamond Detail</a></li>
              <li><a href="#paint-correction" className="hover:text-primary transition">Paint Correction</a></li>
              <li><a href="#addons" className="hover:text-primary transition">Add-Ons</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Express Auto Detail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
