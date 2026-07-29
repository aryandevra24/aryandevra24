import profileImg from '../assets/aryan.png';

function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-30 blur-3xl"></div>

              <img
                src={profileImg}
                alt="Profile"
                className="animate-float relative h-72 w-72 rounded-full border-4 border-cyan-400 object-cover shadow-2xl md:h-96 md:w-96"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-slate-400">Hello, I'm</p>

            <h1 className="mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
              Aryan Devra
            </h1>

            <h2 className="mb-6 text-2xl text-slate-400 md:text-4xl">
              MERN Stack Developer
            </h2>

            <p className="mb-8 max-w-xl text-lg text-slate-400">
              I build fast, scalable and modern web applications using MongoDB,
              Express.js, React, Node.js and other full-stack technologies.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-500 px-6 py-3 transition hover:bg-cyan-400"
              >
                View Projects
              </a>

              <a
                href={
                  'https://drive.google.com/file/d/1JtyzA-Z962mG3CafifkfpEkiX8xhdl0o/view?usp=sharing'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 px-6 py-3 transition hover:border-cyan-400"
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
