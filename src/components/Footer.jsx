import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">Aryan Devra</h3>

            <p className="text-sm text-slate-400">Web Developer</p>
          </div>

          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/aryandevra24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/aryandevra24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-[#0A66C2]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/918445826855"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-[#25D366]"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Aryan Devra. All Rights Reserved.
        </div>

        <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm text-slate-600">
          Made with <FaHeart className="animate-pulse text-red-400" /> by Aryan
          Devra
        </p>
      </div>
    </footer>
  );
}

export default Footer;
