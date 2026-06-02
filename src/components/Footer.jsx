import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaHeart
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="border-t border-slate-800 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-white">
                            Aryan Devra
                        </h3>

                        <p className="text-slate-400 text-sm">
                            Web Developer
                        </p>
                    </div>

                    <div className="flex gap-6 text-xl">

                        <a
                            href="https://github.com/aryandevra24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/aryandevra24"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#0A66C2] transition"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://wa.me/918445826855"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#25D366] transition"
                        >
                            <FaWhatsapp />
                        </a>

                    </div>

                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} Aryan Devra. All Rights Reserved.
                </div>

                <p className="text-center text-slate-600 text-sm mt-3 flex items-center justify-center gap-2">
                    Made with <FaHeart className="text-red-400 animate-pulse" /> by Aryan Devra
                </p>

            </div>
        </footer>
    );
}

export default Footer;
