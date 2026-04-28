export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2548 0%, #1a3d6e 60%, #1b5e20 100%)" }}>

      {/* Dot texture */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      {/* Orange glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #e87722 0%, transparent 65%)" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-0.5 bg-orange-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-400">
            Get in Touch
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to take your{" "}
              <span className="text-orange-400">next step?</span>
              <br />Let&apos;s talk.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 font-medium">
              Whether you&apos;re an individual seeking career clarity or an
              organisation looking to build a stronger team, we&apos;re here to
              help. Reach out and let&apos;s start the conversation.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "jobjaghr@gmail.com",
                  href: "mailto:jobjaghr@gmail.com",
                  iconBg: "bg-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "09055657430 / 09069033390",
                  href: "tel:09055657430",
                  iconBg: "bg-green-500/20 text-green-400 group-hover:bg-green-600 group-hover:text-white",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Address",
                  value: "No 20, Tony Ijohor Way, 7th Avenue, Ugbokolo Street, High Level, Makurdi",
                  href: "#",
                  iconBg: "bg-blue-400/20 text-blue-300 group-hover:bg-blue-500 group-hover:text-white",
                },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-4 group">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${c.iconBg}`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{c.label}</p>
                    <p className="text-base text-white font-medium group-hover:text-orange-300 transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/8 border border-white/15 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="font-bold text-2xl text-white mb-6">Send us a message</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((ph) => (
                  <div key={ph}>
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-bold block mb-2">{ph}</label>
                    <input
                      type="text"
                      placeholder={ph === "First Name" ? "John" : "Doe"}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition-colors font-medium"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider font-bold block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition-colors font-medium"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider font-bold block mb-2">I&apos;m interested in</label>
                <select className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-orange-400 transition-colors font-medium appearance-none">
                  <option value="" className="bg-blue-900">Select a service</option>
                  <option value="career" className="bg-blue-900">Career Guidance &amp; Transition</option>
                  <option value="branding" className="bg-blue-900">Professional Branding</option>
                  <option value="interview" className="bg-blue-900">Interview Readiness</option>
                  <option value="placement" className="bg-blue-900">Job Placement</option>
                  <option value="hr" className="bg-blue-900">HR Consulting</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider font-bold block mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-400 transition-colors resize-none font-medium"
                />
              </div>
              <a
                href="mailto:jobjaghr@gmail.com"
                className="block w-full text-center font-bold text-base text-white px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #e87722 0%, #c45f0a 100%)" }}
              >
                Start Your Journey →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
