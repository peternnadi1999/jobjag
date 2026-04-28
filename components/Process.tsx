const steps = [
  {
    num: "01",
    title: "Assessment",
    desc: "We evaluate your current interview skills, identify gaps and understand the role you are targeting.",
    icon: "🔍",
    color: "border-orange-400 text-orange-600",
    bg: "bg-orange-50",
  },
  {
    num: "02",
    title: "Coaching Sessions",
    desc: "Structured coaching covering answering techniques, STAR method, behavioural and competency-based interviews.",
    icon: "🎓",
    color: "border-green-500 text-green-700",
    bg: "bg-green-50",
  },
  {
    num: "03",
    title: "Mock Interviews",
    desc: "Realistic practice sessions simulating actual interview conditions — with detailed feedback and scoring.",
    icon: "🎤",
    color: "border-blue-500 text-blue-700",
    bg: "bg-blue-50",
  },
  {
    num: "04",
    title: "Application Strategy",
    desc: "Guidance on job search, cover letters, follow-up etiquette and negotiating offers confidently.",
    icon: "🚀",
    color: "border-orange-500 text-orange-700",
    bg: "bg-orange-50",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(26,61,110,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,61,110,0.05) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-0.5 bg-green-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-green-600">
            Interview Readiness
          </span>
        </div>

        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">
            Our 4-Step Interview{" "}
            <span className="text-green-600">Coaching Process</span>
          </h2>
          <p className="text-slate-500 text-lg mt-4 leading-relaxed font-medium">
            A structured, proven approach that takes you from unsure to
            unstoppable in the interview room.
          </p>
        </div>

        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5"
            style={{ background: "linear-gradient(90deg, #e87722, #2e7d32, #1a3d6e, #e87722)" }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                {/* Circle */}
                <div className={`relative z-10 w-14 h-14 rounded-full ${s.bg} border-2 ${s.color} flex items-center justify-center mb-6 shadow-md`}>
                  <span className={`font-extrabold text-sm ${s.color.split(" ")[1]}`}>{s.num}</span>
                </div>
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-bold text-lg text-blue-700 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
