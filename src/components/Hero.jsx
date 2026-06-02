import profileImg from '../assets/aryan.png'
import resume from '../assets/Aryan_Devra_Resume.pdf'

function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

                            <img
                                src={profileImg}
                                alt="Profile"
                                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl animate-float"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-slate-400 mb-3">
                            Hello, I'm
                        </p>

                        <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Aryan Devra
                        </h1>

                        <h2 className="text-2xl md:text-4xl text-slate-400 mb-6">
                            Web Developer
                        </h2>

                        <p className="max-w-xl text-slate-400 text-lg mb-8">
                            I build fast, scalable and beautiful web applications
                            using React, Tailwind CSS, JavaScript and modern
                            frontend technologies.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition"
                            >
                                View Projects
                            </a>

                            <a
                                href={resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
                            >
                                View CV
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;