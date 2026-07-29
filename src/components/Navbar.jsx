import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const links = ['About', 'Skills', 'Projects', 'Contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/60 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-cyan-400">
          Aryan Devra
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer rounded-md p-2 text-slate-200 transition hover:text-cyan-400 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>

        <div className="hidden gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-cyan-400"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? 'max-h-60' : 'max-h-0'}`}
      >
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-4">
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-center transition hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
