


// import { Menu, X } from 'lucide-react';
// import { useEffect, useState } from 'react';

// export default function Header() {
//   const DEEP_TEAL = '#207C97';
//   const DARK_TEAL = '#145E74';

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 48);
//     };
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth' });
//       setMenuOpen(false);
//     }
//   };

//   const headerStyle = scrolled
//     ? {
//         background: 'rgba(32,124,151,0.60)',
//         backdropFilter: 'blur(10px) saturate(120%)',
//         boxShadow: '0 6px 20px rgba(32,124,151,0.10)',
//         borderBottom: '1px solid rgba(255,255,255,0.06)',
//         paddingTop: '0.45rem',
//         paddingBottom: '0.45rem',
//       }
//     : {
//         background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//         backdropFilter: 'none',
//         boxShadow: '0 14px 50px rgba(32,124,151,0.28)',
//         borderBottom: '1px solid rgba(255,255,255,0.08)',
//         paddingTop: '0.4rem',
//         paddingBottom: '0.4rem',
//       };

//   const logoScale = scrolled ? 0.95 : 1.0;

//   return (
//     <>
//       <style>{`
//         .nav-link {
//           position: relative;
//           padding: 6px 2px;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//           color: inherit;
//         }
//         .nav-link:focus { outline: none; }

//         .nav-link::after {
//           content: '';
//           position: absolute;
//           left: 50%;
//           bottom: 0;
//           height: 2px;
//           width: 100%;
//           background: #FFE066;
//           transform: translateX(-50%) scaleX(0);
//           transform-origin: center;
//           transition: transform 260ms cubic-bezier(.2,.9,.2,1);
//           border-radius: 2px;
//           pointer-events: none;
//           opacity: 0.95;
//         }

//         .nav-link:hover::after,
//         .nav-link:focus::after {
//           transform: translateX(-50%) scaleX(1);
//         }

//         .nav-link:focus-visible {
//           box-shadow: 0 0 0 4px rgba(255,224,102,0.10);
//           border-radius: 6px;
//         }

//         .desktop-nav { gap: 1.25rem; }
//       `}</style>

//       <header
//         style={headerStyle}
//         className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out will-change-transform will-change-opacity"
//         aria-label="Main navigation"
//       >
//         <div className="container mx-auto px-6 flex items-center justify-between">
//           {/* 🔹 Logo only (no text) */}
//           <div className="flex items-center">
//             <img
//               src="/assets/shiksha_logo.png"
//               alt="Shiksha Classes Logo"
//               className="transition-transform duration-300"
//               style={{
//                 width: 120, // adjust logo size as needed
//                 height: 'auto',
//                 transform: `scale(${logoScale})`,
//                 filter: scrolled ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))',
//               }}
//             />
//           </div>

//           {/* Nav (desktop) */}
//           <nav className="hidden md:flex desktop-nav items-center text-white font-medium" role="navigation" aria-label="Primary">
//             {[
//               ['home', 'HOME'],
//               ['courses', 'COURSES'],
//               ['faculty', 'ABOUT'],
//               ['success', 'RESULTS'],
//               ['gallery', 'GALLERY'],
//               ['contact', 'CONTACT US'],
//             ].map(([id, label]) => (
//               <button
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className="nav-link"
//                 aria-label={String(label)}
//               >
//                 <span className="nav-label">{label}</span>
//               </button>
//             ))}
//           </nav>

//           {/* Mobile menu toggle */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen((s) => !s)}
//               aria-expanded={menuOpen}
//               aria-controls="mobile-menu"
//               className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
//             >
//               {menuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile menu overlay */}
//         <div
//           id="mobile-menu"
//           className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
//             menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
//           }`}
//           style={{
//             background: menuOpen
//               ? 'linear-gradient(180deg, rgba(32,124,151,0.16), rgba(20,94,116,0.10))'
//               : undefined,
//             backdropFilter: menuOpen ? 'blur(8px) saturate(120%)' : undefined,
//             borderTop: menuOpen ? '1px solid rgba(255,255,255,0.06)' : undefined,
//           }}
//         >
//           <div className="container mx-auto px-6 py-4 flex flex-col items-center gap-3">
//             {[
//               ['home', 'HOME'],
//               ['courses', 'PROGRAM'],
//               ['faculty', 'FACULTY'],
//               ['success', 'RESULTS'],
//               ['gallery', 'GALLERY'],
//               ['contact', 'CONTACT US'],
//             ].map(([id, label]) => (
//               <button
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className="w-full text-left text-white/95 px-4 py-3 rounded-lg hover:bg-white/6 transition-colors duration-200"
//               >
//                 {label}
//               </button>
//             ))}
//             <div className="w-full flex justify-center mt-2">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white text-[rgb(32,124,151)] font-semibold shadow-sm hover:scale-105 transition-transform duration-200"
//               >
//                 Request Callback
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }




import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const PRIMARY = '#168287';
  const PRIMARY_DARK = '#11616a';
  const PRIMARY_LIGHT = '#1ca9a6';

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const headerStyle = scrolled
    ? {
        background: 'rgba(22,130,135,0.70)',
        backdropFilter: 'blur(12px) saturate(120%)',
        boxShadow: '0 6px 24px rgba(22,130,135,0.12)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '0.45rem',
        paddingBottom: '0.45rem',
      }
    : {
        background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
        backdropFilter: 'none',
        boxShadow: '0 14px 50px rgba(22,130,135,0.22)',
        borderBottom: '1px solid rgba(255,255,255,0.10)',
        paddingTop: '0.4rem',
        paddingBottom: '0.4rem',
      };

  const logoScale = scrolled ? 0.95 : 1.0;

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          padding: 6px 2px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: inherit;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-link:focus { outline: none; }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          height: 2px;
          width: 100%;
          background: #FFE066;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          transition: transform 260ms cubic-bezier(.2,.9,.2,1);
          border-radius: 2px;
          pointer-events: none;
          opacity: 0.95;
        }
        .nav-link:hover::after,
        .nav-link:focus::after {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-link:focus-visible {
          box-shadow: 0 0 0 4px rgba(255,224,102,0.10);
          border-radius: 6px;
        }
        .desktop-nav { gap: 1.25rem; }
      `}</style>

      <header
        style={headerStyle}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/shiksha_logo.png"
              alt="Shiksha Classes Logo"
              className="transition-transform duration-300"
              style={{
                width: 120,
                height: 'auto',
                transform: `scale(${logoScale})`,
                filter: scrolled
                  ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))'
                  : 'drop-shadow(0 4px 10px rgba(0,0,0,0.13))',
              }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex desktop-nav items-center text-white font-medium" role="navigation" aria-label="Primary">
            {[
              ['home', 'HOME'],
              ['courses', 'COURSES'],
              ['faculty', 'ABOUT'],
              ['success', 'RESULTS'],
              // ['gallery', 'GALLERY'],
              ['contact', 'CONTACT US'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="nav-link"
                aria-label={String(label)}
              >
                <span className="nav-label">{label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
            menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          style={{
            background: menuOpen
              ? 'linear-gradient(180deg, rgba(22,130,135,0.16), rgba(20,97,106,0.10))'
              : undefined,
            backdropFilter: menuOpen ? 'blur(8px) saturate(120%)' : undefined,
            borderTop: menuOpen ? '1px solid rgba(255,255,255,0.06)' : undefined,
          }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col items-center gap-3">
            {[
              ['home', 'HOME'],
              ['courses', 'PROGRAM'],
              ['faculty', 'ABOUT'],
              ['success', 'RESULTS'],
              // ['gallery', 'GALLERY'],
              ['contact', 'CONTACT US'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="w-full text-left text-white/95 px-4 py-3 rounded-lg hover:bg-white/6 transition-colors duration-200"
              >
                {label}
              </button>
            ))}
            <div className="w-full flex justify-center mt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white text-[#168287] font-semibold shadow-sm hover:scale-105 transition-transform duration-200"
              >
                Request Callback
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
