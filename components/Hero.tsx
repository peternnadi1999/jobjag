import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2548 0%, #1a3d6e 50%, #142f56 100%)" }}>

      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Orange swoosh blob top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #e87722 0%, transparent 65%)" }} />

      {/* Green swoosh blob bottom-left */}
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #2e7d32 0%, transparent 65%)" }} />

      {/* Gold star sparkle */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-gold-500 opacity-80 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-gold-400 opacity-60 animate-pulse" style={{ animationDelay: "0.5s" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-44 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-xs text-white/80 tracking-widest uppercase font-semibold">
                Makurdi, Nigeria
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Your Strategic{" "}
              <span className="text-orange-400">Partner</span>{" "}
              in Career &amp;{" "}
              <span className="relative inline-block">
                <span className="text-green-400">Workforce</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-green-500 opacity-60" />
              </span>{" "}
              Excellence.
            </h1>

            <p className="text-lg text-white/65 leading-relaxed max-w-xl mb-10">
              From career guidance and professional branding to HR consulting and
              job placement, Jobjag delivers end-to-end human capital solutions
              for individuals and organisations across Nigeria.
            </p>

            {/* Tag line from logo */}
            <p className="text-sm font-semibold tracking-widest uppercase text-orange-400 mb-8">
              Guiding Careers · Building Futures
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange-600/30 hover:-translate-y-0.5"
              >
                Explore Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* RIGHT — logo + stats */}
          <div className="hidden lg:flex flex-col items-center gap-10">
            {/* Logo display */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Jobjag Logo"
                  width={200}
                  height={180}
                  className="w-44 h-auto object-contain drop-shadow-xl"
                />
              </div>
              {/* Orbit ring */}
              <div className="absolute inset-[-16px] rounded-full border border-dashed border-white/15 animate-spin" style={{ animationDuration: "20s" }} />
            </div>

            {/* Stats row */}
            <div className="flex gap-8">
              {[
                { value: "5+",        label: "Services" },
                { value: "End-to-End",label: "HR Solutions" },
                { value: "Dual",      label: "Client Focus" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-orange-400">{s.value}</div>
                  <div className="text-xs text-white/50 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
        <span className="text-[10px] text-white tracking-widest uppercase font-semibold">Scroll</span>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
