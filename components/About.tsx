export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-0.5 bg-orange-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-600">
            About Jobjag
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight mb-6">
              Bridging the Gap Between{" "}
              <span className="text-green-600">Talent</span>{" "}
              &amp; Opportunity
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              Jobjag is a dynamic human capital development firm dedicated to
              connecting the right people to the right opportunities. We serve
              individuals at every career stage — from fresh graduates to
              seasoned professionals — and organisations seeking to build
              high-performing teams.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We combine deep industry knowledge with personalised coaching and
              strategic HR consulting to deliver measurable outcomes. Whether
              you&apos;re navigating a career transition, polishing your
              professional brand, or building organisational capacity, Jobjag is
              your trusted partner.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-5 py-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
                Guiding Careers · Building Futures
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-5">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                text: "To empower individuals and organisations with the tools, skills, and strategies needed to thrive in today's competitive job market and workplace environment.",
                bg: "bg-orange-50",
                border: "border-orange-200",
                titleColor: "text-blue-700",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                text: "To be Nigeria's most trusted career development and HR consulting partner, transforming lives and building organisations one placement at a time.",
                bg: "bg-green-50",
                border: "border-green-200",
                titleColor: "text-green-700",
              },
              {
                icon: "✦",
                title: "Our Values — EPIC",
                text: "Excellence · People-First · Integrity · Innovation · Impact-Driven · Confidentiality · Continuous Learning",
                bg: "bg-blue-600",
                border: "border-blue-500",
                titleColor: "text-white",
                dark: true,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`${card.bg} ${card.border} border rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{card.icon}</span>
                  <div>
                    <h3 className={`font-bold text-lg mb-1.5 ${card.titleColor}`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${card.dark ? "text-white/75" : "text-slate-600"}`}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
