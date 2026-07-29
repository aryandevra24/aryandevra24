const education = [
  {
    degree: 'B.Tech in Computer Science',
    institute: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow',
    year: '2023 - 2027',
    details: 'Current GPA: 7',
  },
  {
    degree: 'Class 12',
    institute: 'CBSE Board',
    year: '2023',
    details: '74%',
  },
  {
    degree: 'Class 10',
    institute: 'CBSE Board',
    year: '2021',
    details: '82%',
  },
];

function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-4xl font-bold">Education</h2>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400"
            >
              <h3 className="text-xl font-bold">{edu.degree}</h3>

              <p className="mt-1 text-cyan-400">{edu.institute}</p>

              <p className="text-slate-500">{edu.year}</p>

              {/* <p className="mt-3 text-slate-400">{edu.details}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
