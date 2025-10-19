
// import { Star, Menu, X } from 'lucide-react';
// import { useEffect, useState } from 'react';

// export default function Header() {
//   const DEEP_TEAL = '#207C97';
//   const DARK_TEAL = '#145E74';

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 48); // threshold
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

//   // Slightly less transparent when scrolled (stronger teal tint)
//   const headerStyle = scrolled
//     ? {
//         background: 'rgba(32,124,151,0.60)', // increased opacity from 0.12 -> 0.18
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
//         paddingTop: '0.9rem',
//         paddingBottom: '0.9rem',
//       };

//   const logoScale = scrolled ? 0.95 : 1.0;
//   const titleOpacity = scrolled ? 0.95 : 1;

//   return (
//     <>
//       {/* Inline CSS for the center-out underline animation */}
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

//         /* underline element using pseudo-element */
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

//         /* subtle focus ring for keyboard users */
//         .nav-link:focus-visible {
//           box-shadow: 0 0 0 4px rgba(255,224,102,0.10);
//           border-radius: 6px;
//         }

//         /* Desktop nav container spacing tweak */
//         .desktop-nav { gap: 1.25rem; } /* ~20px */
//       `}</style>

//       <header
//         style={headerStyle}
//         className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out will-change-transform will-change-opacity"
//         aria-label="Main navigation"
//       >
//         <div className="container mx-auto px-6 flex items-center justify-between">
//           {/* Logo + brand */}
//           <div className="flex items-center gap-3">
//             <div
//               className="rounded-xl flex items-center justify-center transform transition-all duration-300"
//               style={{
//                 width: 48,
//                 height: 48,
//                 transform: `scale(${logoScale})`,
//                 background: scrolled
//                   ? 'linear-gradient(135deg, rgba(32,124,151,0.22), rgba(20,94,116,0.18))'
//                   : `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//                 boxShadow: scrolled
//                   ? '0 6px 18px rgba(32,124,151,0.12)'
//                   : '0 10px 30px rgba(32,124,151,0.22)',
//               }}
//               aria-hidden
//             >
//               <Star className="w-6 h-6 text-white" fill="currentColor" />
//             </div>

//             <div>
//               <h1
//                 className="font-extrabold tracking-wide leading-none"
//                 style={{
//                   color: 'white',
//                   fontSize: 16,
//                   opacity: titleOpacity,
//                   transition: 'opacity 300ms',
//                   textShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.05)' : '0 2px 8px rgba(0,0,0,0.12)',
//                 }}
//               >
//                 SHIKSHA CLASSES
//               </h1>
//               <p
//                 className="text-xs leading-none"
//                 style={{
//                   color: 'rgba(255,255,255,0.92)',
//                   fontStyle: 'italic',
//                   marginTop: 2,
//                   opacity: scrolled ? 0.92 : 0.95,
//                 }}
//               >
//                 Believe and Achieve
//               </p>
//             </div>
//           </div>

//           {/* Nav (desktop) */}
//           <nav className="hidden md:flex desktop-nav items-center text-white font-medium" role="navigation" aria-label="Primary">
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
//           className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
//           style={{
//             background: menuOpen ? 'linear-gradient(180deg, rgba(32,124,151,0.16), rgba(20,94,116,0.10))' : undefined, // slightly stronger than before
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
  const DEEP_TEAL = '#207C97';
  const DARK_TEAL = '#145E74';

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
        background: 'rgba(32,124,151,0.60)',
        backdropFilter: 'blur(10px) saturate(120%)',
        boxShadow: '0 6px 20px rgba(32,124,151,0.10)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '0.45rem',
        paddingBottom: '0.45rem',
      }
    : {
        background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
        backdropFilter: 'none',
        boxShadow: '0 14px 50px rgba(32,124,151,0.28)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
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
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out will-change-transform will-change-opacity"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* 🔹 Logo only (no text) */}
          <div className="flex items-center">
            <img
              src="/assets/shiksha_logo.png"
              alt="Shiksha Classes Logo"
              className="transition-transform duration-300"
              style={{
                width: 120, // adjust logo size as needed
                height: 'auto',
                transform: `scale(${logoScale})`,
                filter: scrolled ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))',
              }}
            />
          </div>

          {/* Nav (desktop) */}
          <nav className="hidden md:flex desktop-nav items-center text-white font-medium" role="navigation" aria-label="Primary">
            {[
              ['home', 'HOME'],
              ['courses', 'COURSES'],
              ['faculty', 'ABOUT'],
              ['success', 'RESULTS'],
              ['gallery', 'GALLERY'],
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
              ? 'linear-gradient(180deg, rgba(32,124,151,0.16), rgba(20,94,116,0.10))'
              : undefined,
            backdropFilter: menuOpen ? 'blur(8px) saturate(120%)' : undefined,
            borderTop: menuOpen ? '1px solid rgba(255,255,255,0.06)' : undefined,
          }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col items-center gap-3">
            {[
              ['home', 'HOME'],
              ['courses', 'PROGRAM'],
              ['faculty', 'FACULTY'],
              ['success', 'RESULTS'],
              ['gallery', 'GALLERY'],
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
                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-white text-[rgb(32,124,151)] font-semibold shadow-sm hover:scale-105 transition-transform duration-200"
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
