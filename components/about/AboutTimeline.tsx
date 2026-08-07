export default function AboutTimeline() {
  const experiences = [
    {
      period: "12/2025 - Present",
      role: "Full Stack Engineer",
      company: "Keasbrain Technologies Pvt Ltd",
    },
    {
      period: "06/2024 - 11/2025",
      role: "Front-End Developer",
      company: "Aladinn Digital Solutions",
    },
  ];

  const education = [
    {
      period: "2021 - 2024",
      degree: "B.S. in Computer Applications (BCA)",
      institution: "S.S. Jain Subodh P.G. College",
    },
    {
      period: "2021 | 90%",
      degree: "High School (Class 12 - PCM)",
      institution: "Govt. Sr. Sec. School, RBSE",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
      {/* Experience Card */}
      <div className="shadow-box p-8 flex flex-col justify-between relative group min-h-[260px]">
        <div>
          <span className="text-xs tracking-[0.2em] text-zinc-400 font-semibold mb-6 block">
            Experience
          </span>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-xs text-zinc-500">{exp.period}</span>
                <h3 className="text-base font-bold text-white/90">{exp.role}</h3>
                <p className="text-sm text-indigo-400 font-medium">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Card */}
      <div className="shadow-box p-8 flex flex-col justify-between relative group min-h-[260px]">
        <div>
          <span className="text-xs tracking-[0.2em] text-zinc-400 font-semibold mb-6 block">
            Education
          </span>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-xs text-zinc-500">{edu.period}</span>
                <h3 className="text-base font-bold text-white/90">{edu.degree}</h3>
                <p className="text-sm text-purple-400 font-medium">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
