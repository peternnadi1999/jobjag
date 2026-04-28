const services = [
  {
    num: "01",
    title: "Career Guidance & Transition",
    tagline: "Direction-setting, outplacement & career change support",
    items: [
      "Personalised career assessments and path-mapping",
      "Identifying strengths, skills gaps and growth opportunities",
      "Strategic career planning aligned to your goals",
      "Outplacement support for exiting employees",
      "Career change navigation and industry transition coaching",
    ],
    accentBg: "bg-orange-600",
    dotColor: "bg-orange-400",
  },
  {
    num: "02",
    title: "Professional Branding",
    tagline: "CV/Resume writing, LinkedIn profile & personal brand development",
    items: [
      "Crafting compelling, ATS-optimised CVs",
      "Tailored for specific roles and industries",
      "Highlighting achievements and quantifiable impact",
      "In-depth resume reviews and critiques",
      "LinkedIn headline, summary and skills optimisation",
    ],
    accentBg: "bg-green-600",
    dotColor: "bg-green-400",
  },
  {
    num: "03",
    title: "Interview Readiness",
    tagline: "Coaching, mock interviews & job application strategies",
    items: [
      "Assessment of current interview skills",
      "STAR method and competency-based coaching",
      "Realistic mock interview sessions with feedback",
      "Job search guidance and cover letter support",
      "Offer negotiation strategy",
    ],
    accentBg: "bg-orange-700",
    dotColor: "bg-orange-400",
  },
  {
    num: "04",
    title: "Job Placement Services",
    tagline: "Active matching and placement of candidates into suitable roles",
    items: [
      "Deep understanding of each candidate's skills and goals",
      "Active network of employer partners across sectors",
      "Matching candidates to roles that fit their potential",
      "Pre-placement preparation and employer briefings",
      "Post-placement follow-up and onboarding support",
    ],
    accentBg: "bg-green-700",
    dotColor: "bg-green-400",
  },
  {
    num: "05",
    title: "HR Consulting & Workforce Dev.",
    tagline: "Policy development, staff recruitment, management & training",
    items: [
      "HR strategy design and implementation",
      "Policy and procedure manual development",
      "End-to-end recruitment process management",
      "Performance management frameworks",
      "Customised training programmes and capacity building",
    ],
    accentBg: "bg-blue-500",
    dotColor: "bg-blue-300",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "linear-gradient(180deg, #0f2548 0%, #1a3d6e 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-0.5 bg-orange-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-400">
            Our Services
          </span>
        </div>
        <div className="mb-16 flex flex-col md:flex-row md:items-end gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight flex-1">
            Five Integrated{" "}
            <span className="text-orange-400">Areas of Expertise</span>
          </h2>
          <p className="text-slate-400 text-base max-w-sm font-medium">
            Designed around your career journey and your organisation&apos;s
            needs — from first step to full placement.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.num}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Number badge */}
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${svc.accentBg} text-white font-extrabold text-sm mb-6 shadow-md`}>
                {svc.num}
              </div>

              <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                {svc.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed font-medium">
                {svc.tagline}
              </p>

              <ul className="space-y-2.5">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${svc.dotColor} flex-shrink-0`} />
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(circle at top left, rgba(232,119,34,0.07) 0%, transparent 60%)" }} />
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl p-8 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #e87722 0%, #c45f0a 100%)" }}>
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-6 text-xl">⭐</div>
              <h3 className="font-extrabold text-xl text-white leading-tight mb-4">
                Ready to start your journey?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">
                Book a free discovery call and find out how Jobjag can help you
                achieve your career or workforce goals.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-white text-orange-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-orange-50 transition-colors self-start shadow-md"
            >
              Let&apos;s Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
