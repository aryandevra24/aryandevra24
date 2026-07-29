import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import blog from '../assets/blog.png';
import agencyAI from '../assets/agency-ai.png';
import weatherForecast from '../assets/weather-forecast.png';

const projects = [
  {
    title: 'Blogify',
    desc: 'Full-stack blogging platform with authentication, CRUD operations, image uploads, and rich-text editing using React and Appwrite.',
    image: blog,
    github: 'https://github.com/aryandevra24/Blog',
    demo: 'https://bloging24.netlify.app/',
  },
  {
    title: 'Agency AI Website',
    desc: 'Modern AI agency website built with React and Tailwind CSS featuring responsive design, themes, and contact integration.',
    image: agencyAI,
    github: 'https://github.com/aryandevra24/Agency-AI',
    demo: 'https://agency-ai24.netlify.app/',
  },
  {
    title: 'Weather Forecast App',
    desc: 'Real-time weather application using OpenWeather API with location search, dynamic updates, and error handling.',
    image: weatherForecast,
    github: 'https://github.com/aryandevra24/Weather-Forecasting',
    demo: 'https://weather-forecasting24.netlify.app/',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-4xl font-bold">My Projects</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

                <p className="mb-6 flex-grow text-sm leading-relaxed text-slate-400">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="mt-auto flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 transition hover:bg-slate-700"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-black transition hover:bg-cyan-400"
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
