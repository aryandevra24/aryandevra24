function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-950/60 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="font-bold text-xl text-cyan-400">
                    Aryan Devra
                </h1>

                <div className="hidden md:flex gap-8">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-cyan-400 transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;