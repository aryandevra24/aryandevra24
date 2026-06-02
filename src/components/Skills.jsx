const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "Git",
    "GitHub",
    "Appwrite"
    // "TypeScript",
    // "Next.js",
    // "Node.js",
];

function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10">Skills</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 transition"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;