import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">

      {/* CTA Banner */}
      <div style={{ background: "linear-gradient(135deg, #e87722 0%, #c45f0a 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-white/70 font-semibold mb-1">Start Today</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Start Your Journey with Jobjag Today
            </h3>
          </div>
          <a
            href="mailto:jobjaghr@gmail.com"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-orange-700 font-bold text-sm px-7 py-3.5 rounded-full hover:bg-orange-50 transition-colors shadow-lg"
          >
            Email Us Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-5">
              <Image src="/logo.png" alt="Jobjag" width={140} height={56} className="h-12 w-auto object-contain brightness-0 invert" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-medium">
              A dynamic human capital development firm dedicated to bridging the gap
              between talent and opportunity. Serving individuals and organisations
              across Nigeria.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: "✉", value: "jobjaghr@gmail.com", href: "mailto:jobjaghr@gmail.com" },
                { icon: "📞", value: "09055657430 / 09069033390", href: "tel:09055657430" },
                { icon: "📍", value: "No 20, Tony Ijohor Way, High Level, Makurdi", href: "#" },
              ].map((c) => (
                <a key={c.value} href={c.href}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-orange-400 transition-colors font-medium">
                  <span>{c.icon}</span>{c.value}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-slate-500 font-bold mb-5">Services</h4>
            <ul className="space-y-3">
              {["Career Guidance", "Professional Branding", "Interview Readiness", "Job Placement", "HR Consulting"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-slate-400 hover:text-orange-400 transition-colors font-medium">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-slate-500 font-bold mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us",   href: "#about" },
                { label: "Our Values", href: "#about" },
                { label: "Why Jobjag", href: "#why-us" },
                { label: "Contact",    href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-orange-400 transition-colors font-medium">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 font-medium">
            © {year} Jobjag. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
            <span className="text-orange-500">Guiding Careers</span>
            <span className="text-slate-600">·</span>
            <span className="text-green-600">Building Futures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
