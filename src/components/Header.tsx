// import { Star } from 'lucide-react';

// export default function Header() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="bg-gradient-to-r from-cyan-500 to-blue-500 sticky top-0 z-50 shadow-lg">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
//               <Star className="w-8 h-8 text-blue-500" fill="currentColor" />
//             </div>
//             <div>
//               <h1 className="text-white font-bold text-xl">SHIKSHA CLASSES</h1>
//               <p className="text-white text-xs opacity-90">Believe and Achieve</p>
//             </div>
//           </div>

//           <nav className="hidden md:flex space-x-8">
//             <button
//               onClick={() => scrollToSection('home')}
//               className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
//             >
//               HOME
//             </button>
//             <button
//               onClick={() => scrollToSection('courses')}
//               className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
//             >
//               PROGRAM
//             </button>
//             <button
//               onClick={() => scrollToSection('faculty')}
//               className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
//             >
//               FACULTY
//             </button>
//             <button
//               onClick={() => scrollToSection('success')}
//               className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
//             >
//               ACHIEVEMENTS
//             </button>
//             <button
//               onClick={() => scrollToSection('gallery')}
//               className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
//             >
//               GALLERY
//             </button>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
//             >
//               CONTACT US
//             </button>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// import { Star, Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <header
//     className="
//     fixed top-0 left-0 w-full z-50
//     backdrop-blur-md
//     bg-[rgba(0,128,128,0.25)] dark:bg-[rgba(0,128,128,0.35)]
//     border-b border-[rgba(255,255,255,0.3)]
//     shadow-[0_8px_32px_rgba(0,128,128,0.4)]
//     transition-all duration-300
//   "
//     >
//       <div className="container mx-auto px-6 py-1.5 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <div
//             className="
//               w-12 h-12 rounded-xl
//               bg-gradient-to-br from-cyan-400 to-blue-600
//               flex items-center justify-center
//               shadow-lg shadow-blue-500/40
//               hover:scale-105 transition-transform duration-300
//             "
//           >
//             <Star className="w-7 h-7 text-white" fill="currentColor" />
//           </div>
//           <div>
//             <h1 className="text-white font-extrabold text-xl tracking-wide drop-shadow-md">
//               SHIKSHA CLASSES
//             </h1>
//             <p className="text-white/80 text-xs italic">Believe and Achieve</p>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav
//           className={`
//             ${menuOpen ? 'flex' : 'hidden'}
//             md:flex flex-col md:flex-row absolute md:static
//             top-full left-0 w-full md:w-auto
//             bg-white/20 dark:bg-gray-900/50 backdrop-blur-md
//             md:bg-transparent md:backdrop-blur-0
//             md:space-x-8 space-y-4 md:space-y-0
//             py-4 md:py-0
//             items-center justify-center
//             shadow-lg md:shadow-none
//             transition-all duration-300
//           `}
//         >
//           {[
//             ['home', 'HOME'],
//             ['courses', 'PROGRAM'],
//             ['faculty', 'FACULTY'],
//             ['success', 'ACHIEVEMENTS'],
//             ['gallery', 'GALLERY'],
//             ['contact', 'CONTACT US'],
//           ].map(([id, label]) => (
//             <button
//               key={id}
//               onClick={() => scrollToSection(id)}
//               className="
//                 text-white font-medium tracking-wide
//                 relative transition duration-300
//                 hover:text-yellow-300
//                 after:content-[''] after:absolute after:bottom-0 after:left-0
//                 after:w-0 hover:after:w-full after:h-[2px]
//                 after:bg-yellow-300 after:transition-all after:duration-300
//               "
//             >
//               {label}
//             </button>
//           ))}
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-white hover:text-yellow-300 transition-transform duration-300"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>
//     </header>
//   );
// }
// import { Star, Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <header
//       className="
//         fixed top-0 left-0 w-full z-50
//         backdrop-blur-md
//         bg-[rgba(32,124,151,0.25)] dark:bg-[rgba(32,124,151,0.35)]
//         border-b border-[rgba(255,255,255,0.3)]
//         shadow-[0_8px_32px_rgba(32,124,151,0.4)]
//         transition-all duration-300
//       "
//     >
//       <div className="container mx-auto px-6 py-1.5 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <div
//             className="
//               w-12 h-12 rounded-xl
//               bg-gradient-to-br from-[#3FA8C0] to-[#207C97]
//               flex items-center justify-center
//               shadow-lg shadow-[rgba(32,124,151,0.4)]
//               hover:scale-105 transition-transform duration-300
//             "
//           >
//             <Star className="w-7 h-7 text-white" fill="currentColor" />
//           </div>
//           <div>
//             <h1 className="text-white font-extrabold text-xl tracking-wide drop-shadow-md">
//               SHIKSHA CLASSES
//             </h1>
//             <p className="text-white/80 text-xs italic">Believe and Achieve</p>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav
//           className={`
//             ${menuOpen ? 'flex' : 'hidden'}
//             md:flex flex-col md:flex-row absolute md:static
//             top-full left-0 w-full md:w-auto
//             bg-white/20 dark:bg-gray-900/50 backdrop-blur-md
//             md:bg-transparent md:backdrop-blur-0
//             md:space-x-8 space-y-4 md:space-y-0
//             py-4 md:py-0
//             items-center justify-center
//             shadow-lg md:shadow-none
//             transition-all duration-300
//           `}
//         >
//           {[
//             ['home', 'HOME'],
//             ['courses', 'PROGRAM'],
//             ['faculty', 'FACULTY'],
//             ['success', 'ACHIEVEMENTS'],
//             ['gallery', 'GALLERY'],
//             ['contact', 'CONTACT US'],
//           ].map(([id, label]) => (
//             <button
//               key={id}
//               onClick={() => scrollToSection(id)}
//               className="
//                 text-white font-medium tracking-wide
//                 relative transition duration-300
//                 hover:text-[#FFE066]
//                 after:content-[''] after:absolute after:bottom-0 after:left-0
//                 after:w-0 hover:after:w-full after:h-[2px]
//                 after:bg-[#FFE066] after:transition-all after:duration-300
//               "
//             >
//               {label}
//             </button>
//           ))}
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-white hover:text-[#FFE066] transition-transform duration-300"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>
//     </header>
//   );
// }
import { Star, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const DEEP_TEAL = '#207C97';
  const DARK_TEAL = '#145E74';

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48); // threshold
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

  // Slightly less transparent when scrolled (stronger teal tint)
  const headerStyle = scrolled
    ? {
        background: 'rgba(32,124,151,0.60)', // increased opacity from 0.12 -> 0.18
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
        paddingTop: '0.9rem',
        paddingBottom: '0.9rem',
      };

  const logoScale = scrolled ? 0.95 : 1.0;
  const titleOpacity = scrolled ? 0.95 : 1;

  return (
    <>
      {/* Inline CSS for the center-out underline animation */}
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

        /* underline element using pseudo-element */
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

        /* subtle focus ring for keyboard users */
        .nav-link:focus-visible {
          box-shadow: 0 0 0 4px rgba(255,224,102,0.10);
          border-radius: 6px;
        }

        /* Desktop nav container spacing tweak */
        .desktop-nav { gap: 1.25rem; } /* ~20px */
      `}</style>

      <header
        style={headerStyle}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out will-change-transform will-change-opacity"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo + brand */}
          <div className="flex items-center gap-3">
            <div
              className="rounded-xl flex items-center justify-center transform transition-all duration-300"
              style={{
                width: 48,
                height: 48,
                transform: `scale(${logoScale})`,
                background: scrolled
                  ? 'linear-gradient(135deg, rgba(32,124,151,0.22), rgba(20,94,116,0.18))'
                  : `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
                boxShadow: scrolled
                  ? '0 6px 18px rgba(32,124,151,0.12)'
                  : '0 10px 30px rgba(32,124,151,0.22)',
              }}
              aria-hidden
            >
              <Star className="w-6 h-6 text-white" fill="currentColor" />
            </div>

            <div>
              <h1
                className="font-extrabold tracking-wide leading-none"
                style={{
                  color: 'white',
                  fontSize: 16,
                  opacity: titleOpacity,
                  transition: 'opacity 300ms',
                  textShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.05)' : '0 2px 8px rgba(0,0,0,0.12)',
                }}
              >
                SHIKSHA CLASSES
              </h1>
              <p
                className="text-xs leading-none"
                style={{
                  color: 'rgba(255,255,255,0.92)',
                  fontStyle: 'italic',
                  marginTop: 2,
                  opacity: scrolled ? 0.92 : 0.95,
                }}
              >
                Believe and Achieve
              </p>
            </div>
          </div>

          {/* Nav (desktop) */}
          <nav className="hidden md:flex desktop-nav items-center text-white font-medium" role="navigation" aria-label="Primary">
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
          className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
          style={{
            background: menuOpen ? 'linear-gradient(180deg, rgba(32,124,151,0.16), rgba(20,94,116,0.10))' : undefined, // slightly stronger than before
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
