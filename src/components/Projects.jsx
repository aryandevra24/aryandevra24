import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import blog from "../assets/blog.png";
import agencyAI from "../assets/agency-ai.png";
import weatherForecast from "../assets/weather-forecast.png";

function Projects() {
    const projects = [
        {
            title: "Blogify",
            desc: "Full-stack blogging platform with authentication, CRUD operations, image uploads, and rich-text editing using React and Appwrite.",
            image: blog,
            github: "https://github.com/aryandevra24/Blog",
            demo: "https://bloging24.netlify.app/",
        },
        {
            title: "Agency AI Website",
            desc: "Modern AI agency website built with React and Tailwind CSS featuring responsive design, themes, and contact integration.",
            image: agencyAI,
            github: "https://github.com/aryandevra24/Agency-AI",
            demo: "https://agency-ai24.netlify.app/",
        },
        {
            title: "Weather Forecast App",
            desc: "Real-time weather application using OpenWeather API with location search, dynamic updates, and error handling.",
            image: weatherForecast,
            github: "https://github.com/aryandevra24/Weather-Forecasting",
            demo: "https://weather-forecasting24.netlify.app/",
        },
    ];

    return (
        <section id="projects" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group flex flex-col h-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.desc}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                                    >
                                        <FaGithub />
                                        Code
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition"
                                    >
                                        <FaExternalLinkAlt />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;