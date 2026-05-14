"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowLeft, ArrowRight, Check, Calendar, Sparkles, Car, Paintbrush, Shield } from "lucide-react";

const serviceOptions = [
  { id: "interior", label: "Interior Detailing", icon: Sparkles, desc: "Deep clean seats, carpets, dash & more" },
  { id: "exterior", label: "Exterior Detailing", icon: Car, desc: "Wash, clay, wax & tire shine" },
  { id: "full", label: "Full Detail Package", icon: Shield, desc: "Complete interior + exterior detail" },
  { id: "paint", label: "Paint Enhancement & Protection", icon: Paintbrush, desc: "Polish, correction & ceramic coating" },
];

const conditionOptions = [
  { id: "light", label: "Light cleaning", desc: "Regular maintenance, mostly clean" },
  { id: "moderate", label: "Moderate cleaning", desc: "Some buildup, needs a good detail" },
  { id: "heavy", label: "Heavy dirt / stains", desc: "Significant grime, stains, or neglect" },
  { id: "unsure", label: "Not sure?", desc: "We'll figure it out together" },
];

const addonOptions = [
  "Car Wax",
  "Seat Extraction",
  "Pet Hair Removal",
  "Engine Bay Cleaning",
  "Trim Restoration",
  "Headlight Restoration",
];

export default function GetQuotePage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [condition, setCondition] = useState("");
  const [addons, setAddons] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhoneVal] = useState("");
  const [zip, setZip] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleAddon = (a: string) => setAddons((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);

  const canNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!condition;
    if (step === 3) return true;
    if (step === 4) return name.trim() && phone.trim() && zip.trim();
    return false;
  };

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <div className="min-h-screen bg-dark flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Quote Request Received!</h2>
            <p className="text-gray-400 mb-6">
              Thank you, {name}! The Express Auto Detail team will reach out shortly with your personalized quote.
            </p>
            <p className="text-gray-400 mb-8">
              Need it sooner? Call us at{" "}
              <a href="tel:+12673265093" className="text-primary font-bold">(267) 326-5093</a>
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`h-2 rounded-full transition-all ${s === step ? "w-12 bg-primary" : s < step ? "w-8 bg-primary/50" : "w-8 bg-white/10"}`} />
            ))}
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">What service do you need?</h2>
              <p className="text-gray-400 text-center mb-8">Select one to get started</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {serviceOptions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`p-6 rounded-xl border text-left transition ${service === s.id ? "border-primary bg-primary/10" : "border-white/10 bg-dark-light hover:border-primary/50"}`}
                  >
                    <s.icon className={`w-6 h-6 mb-3 ${service === s.id ? "text-primary" : "text-gray-400"}`} />
                    <h3 className="text-white font-semibold text-lg">{s.label}</h3>
                    <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">How&apos;s your vehicle&apos;s condition?</h2>
              <p className="text-gray-400 text-center mb-8">This helps us give you an accurate quote</p>
              <div className="space-y-3">
                {conditionOptions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCondition(c.id)}
                    className={`w-full p-5 rounded-xl border text-left transition ${condition === c.id ? "border-primary bg-primary/10" : "border-white/10 bg-dark-light hover:border-primary/50"}`}
                  >
                    <h3 className="text-white font-semibold">{c.label}</h3>
                    <p className="text-gray-400 text-sm mt-1">{c.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">Any add-ons?</h2>
              <p className="text-gray-400 text-center mb-8">Optional — select as many as you&apos;d like</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonOptions.map((a) => (
                  <button
                    key={a}
                    onClick={() => toggleAddon(a)}
                    className={`p-4 rounded-xl border text-left transition flex items-center gap-3 ${addons.includes(a) ? "border-primary bg-primary/10" : "border-white/10 bg-dark-light hover:border-primary/50"}`}
                  >
                    <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${addons.includes(a) ? "bg-primary border-primary" : "border-white/20"}`}>
                      {addons.includes(a) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-white font-medium">{a}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">Almost done!</h2>
              <p className="text-gray-400 text-center mb-8">How can we reach you?</p>
              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Name *</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-dark-light border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Phone *</label>
                  <input type="tel" value={phone} onChange={(e) => setPhoneVal(e.target.value)} className="w-full bg-dark-light border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Zip Code *</label>
                  <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full bg-dark-light border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder="18974" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Preferred Date (optional)</label>
                  <div className="relative">
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-dark-light border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" />
                    <Calendar className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                <ArrowLeft className="w-4 h-4" /> Home
              </Link>
            )}
            {step < 4 ? (
              <button
                onClick={() => canNext() && setStep(step + 1)}
                disabled={!canNext()}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${canNext() ? "bg-primary text-white hover:bg-primary-dark" : "bg-white/10 text-gray-500 cursor-not-allowed"}`}
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => canNext() && handleSubmit()}
                disabled={!canNext()}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${canNext() ? "bg-primary text-white hover:bg-primary-dark" : "bg-white/10 text-gray-500 cursor-not-allowed"}`}
              >
                Submit Quote Request
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-white/10 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/expressheaderlogo.png" alt="Express Auto Detail" width={140} height={80} className="h-10 w-auto" />
        </Link>
        <a href="tel:+12673265093" className="flex items-center gap-2 text-primary hover:text-primary-dark transition">
          <Phone className="w-4 h-4" />
          <span className="font-bold text-lg">(267) 326-5093</span>
        </a>
      </div>
    </header>
  );
}
