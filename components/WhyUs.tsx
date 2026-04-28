const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "End-to-End Support",
    desc: "We accompany clients from initial career assessment right through to job placement and beyond.",
    iconBg: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Personalised Approach",
    desc: "No generic templates. Every client receives bespoke strategies tailored to their unique situation and goals.",
    iconBg: "bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Dual Focus",
    desc: "We serve both individuals seeking career growth and organisations building capable, high-performing teams.",
    iconBg: "bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Industry Insight",
    desc: "Our consultants bring real-world HR and recruitment experience, keeping you ahead of hiring trends.",
    iconBg: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Results-Oriented",
    desc: "From improved CVs that get interviews to placements that stick — we measure success by your outcomes.",
    iconBg: "bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Confidential & Trusted",
    desc: "We handle every engagement with the highest levels of professionalism, discretion and integrity.",
    iconBg: "bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #1a3d6e 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-0.5 bg-blue-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
            Why Jobjag
          </span>
        </div>

        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">
            Why Choose{" "}
            <span className="text-orange-600">Jobjag?</span>
          </h2>
          <p className="text-slate-500 text-lg mt-4 leading-relaxed font-medium">
            Six reasons our clients trust us with their most important career
            and workforce decisions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group p-8 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${r.iconBg}`}>
                {r.icon}
              </div>
              <h3 className="font-bold text-lg text-blue-700 mb-2">{r.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
