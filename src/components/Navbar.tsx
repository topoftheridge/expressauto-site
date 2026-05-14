"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronDown, Phone } from "lucide-react";

const areas = [
  "Warrington", "Doylestown", "Horsham", "Lansdale", "Chalfont", "Montgomeryville",
  "Newtown", "Yardley", "Quakertown", "Levittown", "Bristol", "Bensalem",
];

const services = [
  { label: "Full Detail Packages", href: "#services" },
  { label: "Interior Detailing", href: "#services" },
  { label: "Exterior Detailing", href: "#services" },
  { label: "Paint Enhancement & Protection", href: "#paint-correction" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-20">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src="/expressheaderlogo.png" alt="Express Auto Detail" width={170} height={100} className="h-14 lg:h-[72px] w-auto" priority />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-end flex-1 ml-12">
              <div className="flex items-center gap-10 mr-auto ml-8">
                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="text-white text-lg hover:text-primary transition font-medium tracking-wide flex items-center gap-1">
                    Services <ChevronDown className="w-4 h-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-0 pt-2">
                      <div className="bg-dark-lighter border border-white/10 rounded-lg shadow-xl py-2 w-64">
                        {services.map((s) => (
                          <a key={s.label} href={s.href} className="block px-4 py-2.5 text-base text-gray-300 hover:bg-primary/20 hover:text-primary transition">{s.label}</a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Areas Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setAreasOpen(true)}
                  onMouseLeave={() => setAreasOpen(false)}
                >
                  <button className="text-white text-lg hover:text-primary transition font-medium tracking-wide flex items-center gap-1">
                    Areas <ChevronDown className="w-4 h-4" />
                  </button>
                  {areasOpen && (
                    <div className="absolute top-full left-0 mt-0 pt-2">
                      <div className="bg-dark-lighter border border-white/10 rounded-lg shadow-xl py-2 w-[420px] grid grid-cols-2">
                        {areas.map((area) => (
                          <a key={area} href="#areas" className="block px-4 py-2 text-base text-gray-300 hover:bg-primary/20 hover:text-primary transition">{area}, PA</a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a href="#about" className="text-white text-lg hover:text-primary transition font-medium tracking-wide">About</a>
                <a href="/get-quote" className="text-white text-lg hover:text-primary transition font-medium tracking-wide">Contact</a>
              </div>

              <div className="flex items-center gap-5">
                <a href="tel:+12673265093" className="flex items-center gap-2 text-primary hover:text-primary-dark transition">
                  <Phone className="w-5 h-5" />
                  <span className="text-xl font-bold">(267) 326-5093</span>
                </a>
                <a
                  href="/get-quote"
                  className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition shadow-sm text-lg"
                >
                  BOOK NOW
                </a>
              </div>
            </div>

            {/* Mobile: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <a href="tel:+12673265093" className="text-primary">
                <Phone className="w-6 h-6" />
              </a>
              <button className="p-2 text-white relative w-10 h-10 flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                <span className="flex flex-col items-center justify-center w-6 h-5 relative">
                  <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute ${mobileOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`} />
                  <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute top-1/2 -translate-y-1/2 ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"}`} />
                  <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 absolute ${mobileOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[300px] bg-black/95 backdrop-blur-lg border-l border-white/10 z-[70] transform transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}>
        <div className="flex items-center justify-end p-5">
          <button className="p-2 text-white" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-6 pb-8 space-y-1">
          {/* Phone */}
          <a href="tel:+12673265093" className="flex items-center gap-2 py-3 text-primary font-bold text-xl border-b border-white/5">
            <Phone className="w-5 h-5" />
            (267) 326-5093
          </a>

          {/* Services Accordion */}
          <div className="border-b border-white/5">
            <button className="w-full py-3 font-medium text-lg text-white hover:text-primary transition flex items-center justify-between" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
              Services
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-60 pb-3" : "max-h-0"}`}>
              <div className="pl-4 space-y-2">
                {services.map((s) => (
                  <a key={s.label} href={s.href} className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>{s.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Areas Accordion */}
          <div className="border-b border-white/5">
            <button className="w-full py-3 font-medium text-lg text-white hover:text-primary transition flex items-center justify-between" onClick={() => setMobileAreasOpen(!mobileAreasOpen)}>
              Areas
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileAreasOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileAreasOpen ? "max-h-96 pb-3" : "max-h-0"}`}>
              <div className="pl-4 space-y-2">
                {areas.map((area) => (
                  <a key={area} href="#areas" className="block text-base text-gray-400 hover:text-primary transition" onClick={() => setMobileOpen(false)}>{area}, PA</a>
                ))}
              </div>
            </div>
          </div>

          <a href="#about" className="block py-3 font-medium text-lg text-white hover:text-primary transition border-b border-white/5" onClick={() => setMobileOpen(false)}>About</a>
          <a href="/get-quote" className="block py-3 font-medium text-lg text-white hover:text-primary transition border-b border-white/5" onClick={() => setMobileOpen(false)}>Contact</a>

          <div className="pt-4 space-y-3">
            <a href="/get-quote" className="block text-center bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-dark transition" onClick={() => setMobileOpen(false)}>BOOK NOW</a>
          </div>
        </div>
      </div>
    </>
  );
}
