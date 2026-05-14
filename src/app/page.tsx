import Hero from "@/components/Hero";
import QuoteForm from "@/components/QuoteForm";
import HeroBackground from "@/components/HeroBackground";
import { Sparkles, Shield, Truck, Droplets, Car, MapPin, Phone } from "lucide-react";

const areas = [
  "Warrington", "Doylestown", "Horsham", "Lansdale", "Chalfont", "Montgomeryville",
  "Newtown", "Yardley", "Quakertown", "Levittown", "Bristol", "Bensalem",
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Express Auto Detail",
    description: "Professional mobile auto detailing services in Bucks County, PA. We come to you within a 30-mile radius.",
    url: "https://expressautodetailwash.com",
    telephone: "+12673265093",
    email: "Expressautodetailwash@gmail.com",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Bucks County, PA" },
    ],
    priceRange: "$$",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HeroBackground>
        <Hero
          title="Express Auto Detail"
          subtitle="Professional mobile auto detailing — we come to you! Serving Bucks County, PA and surrounding areas within a 30-mile radius."
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-12 -mt-16">
          <QuoteForm />
        </div>
      </HeroBackground>

      {/* Why Choose Us */}
      <section id="about" className="py-20 lg:py-32 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Express Auto Detail</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mb-16">
            Not your average<br />car wash.
          </h2>

          <div className="space-y-16">
            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Truck className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">We Come To You</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  No need to drive anywhere. Our fully equipped mobile unit comes to your home, office, or wherever your vehicle is — within 30 miles of Bucks County.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Sparkles className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Premium Products Only</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  We use professional-grade detailing products — no shortcuts, no diluted sprays. Every vehicle gets a showroom-quality finish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Shield className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Obsessive Attention to Detail</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Every inch of your vehicle is meticulously cleaned, polished, and protected. We treat your car like it&apos;s ours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 lg:gap-10">
              <div className="text-primary shrink-0 mt-1"><Droplets className="w-6 h-6" /></div>
              <div>
                <h3 className="font-bold text-white text-xl mb-2">Protection That Lasts</h3>
                <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                  Our detailing doesn&apos;t just clean — it shields your paint, interior, and investment long after we pack up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Detailing Services */}
      <section id="services" className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Mobile Auto <span className="text-primary">Detailing</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive detailing packages brought right to your door. Interior + Exterior included in every package.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Detail */}
            <div className="rounded-xl border border-white/5 hover:border-primary/50 transition bg-dark-light p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Basic Detail</h3>
              <p className="text-primary font-bold text-xl mb-4">$145 – $180</p>
              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">Exterior</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Wheel cleaning</li>
                  <li>• Body wash &amp; hand wash</li>
                  <li>• Full rinse</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">Interior</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Full wipe down</li>
                  <li>• Vacuum</li>
                  <li>• Leather/plastic conditioner</li>
                </ul>
              </div>
              <a href="#quote" className="mt-auto block text-center bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition border border-white/10">
                Get Quote
              </a>
            </div>

            {/* Express Detail */}
            <div className="rounded-xl border-2 border-primary/50 transition bg-dark-light p-8 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Express Detail</h3>
              <p className="text-primary font-bold text-xl mb-4">$155 – $215</p>
              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">Exterior</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Shampoo/conditioner w/ iron remover</li>
                  <li>• Soft brushing</li>
                  <li>• Hybrid ceramic wax</li>
                  <li>• Trim shine &amp; tire shine</li>
                  <li>• Rain-X application</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">Interior</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Deep vacuum</li>
                  <li>• Brushing floors, seats &amp; door panels</li>
                  <li>• Conditioner/protection/natural shine</li>
                </ul>
              </div>
              <a href="#quote" className="mt-auto block text-center bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition">
                Get Quote
              </a>
            </div>

            {/* Diamond Detail */}
            <div className="rounded-xl border border-white/5 hover:border-primary/50 transition bg-dark-light p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Diamond Detail</h3>
              <p className="text-primary font-bold text-xl mb-4">$165 – $250</p>
              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">Exterior</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Pre wash &amp; shampoo w/ iron remover</li>
                  <li>• Clay bar touch ups</li>
                  <li>• Hybrid ceramic wax</li>
                  <li>• Tire shine &amp; trim restoration</li>
                  <li>• Rain-X application</li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">Interior</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Drill brushing floors with chemicals</li>
                  <li>• Deep vacuum</li>
                  <li>• Brushing seats &amp; door panels</li>
                  <li>• Conditioner/protection/shine</li>
                </ul>
              </div>
              <a href="#quote" className="mt-auto block text-center bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition border border-white/10">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Paint Correction */}
      <section id="paint-correction" className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Paint <span className="text-primary">Correction</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Professional paint correction to restore your vehicle&apos;s finish. Interior detailing is not included in these packages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/5 hover:border-primary/50 transition bg-dark p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">Step 1</h3>
              </div>
              <p className="text-primary font-bold text-xl mb-4">$340 – $420</p>
              <ul className="text-gray-400 text-sm space-y-1.5 mb-6">
                <li>• Full exterior detail</li>
                <li>• Iron decontamination</li>
                <li>• Clay bar treatment</li>
                <li>• 1-step polish</li>
              </ul>
              <a href="#quote" className="mt-auto block text-center bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition border border-white/10">
                Get Quote
              </a>
            </div>

            <div className="rounded-xl border border-white/5 hover:border-primary/50 transition bg-dark p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">Step 2</h3>
              </div>
              <p className="text-primary font-bold text-xl mb-4">$460 – $550</p>
              <ul className="text-gray-400 text-sm space-y-1.5 mb-6">
                <li>• Full exterior detail</li>
                <li>• Iron decontamination</li>
                <li>• Clay bar treatment</li>
                <li>• Compound &amp; polish 2-step with polisher</li>
                <li>• Carnauba wax finish</li>
              </ul>
              <a href="#quote" className="mt-auto block text-center bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition border border-white/10">
                Get Quote
              </a>
            </div>

            <div className="rounded-xl border border-white/5 hover:border-primary/50 transition bg-dark p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">Step 3</h3>
              </div>
              <p className="text-primary font-bold text-xl mb-4">$500 – $700</p>
              <ul className="text-gray-400 text-sm space-y-1.5 mb-6">
                <li>• Full exterior detail</li>
                <li>• Iron decontamination</li>
                <li>• Clay bar treatment</li>
                <li>• Wool pad scratch removal</li>
                <li>• Wuffle pad polish</li>
                <li>• Carnauba wax finish</li>
              </ul>
              <a href="#quote" className="mt-auto block text-center bg-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition border border-white/10">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section id="areas" className="py-16 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Proudly Serving <span className="text-primary">Bucks County</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Our mobile auto detailing team comes directly to you across Bucks County, PA and surrounding areas. No matter where you are, we&apos;ll make your vehicle shine.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div key={area} className="group rounded-xl border border-white/5 hover:border-primary/50 transition bg-dark-light p-5 text-center">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold text-base">{area}, PA</h3>
                <p className="text-gray-500 text-xs mt-1">Auto Detailing in {area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready for the <span className="text-primary">Express Treatment</span>?
          </h2>
          <p className="text-gray-400 mb-6">
            We bring professional detailing right to your door. Fill out the form above for a free, no-obligation quote — or give us a call!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Contact Us
            </a>
            <a href="tel:+12673265093" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              <Phone className="w-5 h-5" />
              Call (267) 326-5093
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>Mobile Detailing · Bucks County, PA &amp; 30-Mile Radius</p>
          </div>
        </div>
      </section>
    </>
  );
}
