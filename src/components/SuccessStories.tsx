
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';

// interface Story {
//   id: number;
//   name: string;
//   achievement: string;
//   rank: string;
//   location: string;
// }

// const stories: Story[] = [
//   { id: 1, name: 'ERSHIK A.', achievement: 'JEE AIR', rank: '8974', location: 'IIT ROORKEE' },
//   { id: 2, name: 'ADITYA K.', achievement: 'JEE AIR', rank: '2890', location: 'IIT PATNA' },
//   { id: 3, name: 'PUREYUSH S.', achievement: 'JEE AIR', rank: '5621', location: 'IIT PATNA' },
//   { id: 4, name: 'AAYUSH U.', achievement: 'JEE AIR', rank: '7845', location: 'IIT HYDR' },
// ];

// export default function SuccessStories() {
//   const DEEP_TEAL = '#207C97'; // rgb(32,124,151)
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const touchStartX = useRef<number | null>(null);
//   const touchEndX = useRef<number | null>(null);
//   const radiusPx = 20; // keeps rounded corners consistent during transforms

//   useEffect(() => {
//     // optional autoplay (comment out if undesired)
//     const t = setInterval(() => {
//       setCurrentIndex((s) => (s + 1) % stories.length);
//     }, 6000);
//     return () => clearInterval(t);
//   }, []);

//   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
//   const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

//   // touch handlers for mobile swipe
//   const onTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//     touchEndX.current = null;
//   };
//   const onTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.touches[0].clientX;
//   };
//   const onTouchEnd = () => {
//     if (touchStartX.current === null || touchEndX.current === null) return;
//     const dx = touchStartX.current - touchEndX.current;
//     const threshold = 40;
//     if (dx > threshold) nextSlide();
//     else if (dx < -threshold) prevSlide();
//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   // keyboard navigation
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') prevSlide();
//       if (e.key === 'ArrowRight') nextSlide();
//     };
//     window.addEventListener('keydown', handler);
//     return () => window.removeEventListener('keydown', handler);
//   }, []);

//   // helper to wrap indices
//   const idx = (i: number) => (i + stories.length) % stories.length;
//   const visible = [idx(currentIndex - 1), idx(currentIndex), idx(currentIndex + 1)];

//   return (
//     <section id="success" className="py-16" style={{ background: 'linear-gradient(180deg,#eaf8fb,#ffffff)' }}>
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: DEEP_TEAL }}>
//           SUCCESS STORIES
//         </h2>

//         <div className="relative">
//           {/* viewport */}
//           <div
//             className="overflow-hidden"
//             onTouchStart={onTouchStart}
//             onTouchMove={onTouchMove}
//             onTouchEnd={onTouchEnd}
//             aria-roledescription="carousel"
//           >
//             <div className="flex items-center justify-center gap-6 transition-all duration-500 ease-out">
//               {visible.map((storyIndex, vIdx) => {
//                 const story = stories[storyIndex];
//                 const isCenter = vIdx === 1;

//                 // wrapper style: keep borderRadius locked so scaling never reveals squared corners
//                 const wrapperStyle: React.CSSProperties = {
//                   borderRadius: `${radiusPx}px`,
//                   transformOrigin: 'center center',
//                 };

//                 const glowStyle: React.CSSProperties = {
//                   boxShadow: isCenter
//                     ? '0 20px 60px rgba(32,124,151,0.45)'
//                     : '0 10px 30px rgba(32,124,151,0.22)',
//                   borderRadius: `${radiusPx}px`,
//                 };

//                 // responsive: on small screens hide the side cards and make center full width
//                 const mobileClass = isCenter ? 'w-full sm:w-64 md:w-72' : 'hidden sm:block w-56 md:w-64 flex-shrink-0';

//                 return (
//                   <div key={story.id} className={`${mobileClass} flex-shrink-0`} style={wrapperStyle}>
//                     {/* outermost element keeps rounded corners and overflow-hidden */}
//                     <div
//                       className={`
//                         relative h-80 rounded-2xl overflow-hidden
//                         transition-all duration-500 transform-gpu
//                         ${isCenter ? 'scale-105 z-20 opacity-100' : 'scale-95 z-10 opacity-60'}
//                         hover:scale-110 hover:opacity-100
//                         cursor-pointer
//                       `}
//                       style={{ borderRadius: `${radiusPx}px` }}
//                       aria-hidden={!isCenter}
//                       role="group"
//                     >
//                       {/* Background gradient layer - must have same rounded corners */}
//                       <div
//                         className="absolute inset-0 rounded-2xl"
//                         style={{
//                           // gradient tuned to your deep teal: lighter -> deeper
//                           background: `linear-gradient(135deg, rgba(32,124,151,0.95), rgba(20,96,116,0.95))`,
//                           borderRadius: `${radiusPx}px`,
//                         }}
//                       />

//                       {/* subtle glass overlay - keeps rounded corners */}
//                       <div
//                         className="absolute inset-0 rounded-2xl backdrop-blur-sm"
//                         style={{ background: 'rgba(255,255,255,0.05)', borderRadius: `${radiusPx}px` }}
//                       />

//                       {/* ambient glow container (keeps within rounded mask) */}
//                       <div
//                         className="absolute inset-0 pointer-events-none rounded-2xl"
//                         style={glowStyle}
//                       />

//                       {/* circular avatar area (centered) */}
//                       <div className="absolute inset-0 flex items-center justify-center z-10">
//                         <div
//                           className={`
//                             w-32 h-32 rounded-full overflow-hidden border-4
//                             border-white/20 backdrop-blur-md flex items-center justify-center
//                             ${isCenter ? 'bg-white/30' : 'bg-white/12'}
//                             shadow-md
//                           `}
//                           style={{ borderRadius: '9999px' }}
//                         >
//                           <div className="w-full h-full flex items-center justify-center text-6xl select-none">👤</div>
//                         </div>
//                       </div>

//                       {/* top-right pill (keeps rounded corners) */}
//                       <div className="absolute top-4 right-4 z-20">
//                         <div
//                           className="px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm"
//                           style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}
//                         >
//                           <p className="text-xs text-white/90 font-semibold">{story.location}</p>
//                         </div>
//                       </div>

//                       {/* readability gradient - also rounded */}
//                       <div
//                         className="absolute inset-0 rounded-2xl"
//                         style={{
//                           background:
//                             'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.04) 40%, transparent 100%)',
//                           borderRadius: `${radiusPx}px`,
//                         }}
//                       />

//                       {/* bottom content */}
//                       <div className="absolute bottom-0 left-0 right-0 p-5 z-30 text-white">
//                         <div className="mb-2 text-right">
//                           <p className="text-xs opacity-80">{story.achievement}</p>
//                           <p className="text-2xl font-extrabold tracking-tight">{story.rank}</p>
//                         </div>

//                         <div className="border-t border-white/20 pt-3">
//                           <p className="text-xl font-bold leading-snug">{story.name}</p>
//                           <p className="text-sm opacity-90">{story.location}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Prev / Next Buttons - solid deep teal so icon is visible */}
//           <button
//             onClick={prevSlide}
//             aria-label="Previous"
//             className="absolute left-0 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-30 focus:outline-none"
//             style={{
//               background: DEEP_TEAL,
//               boxShadow: '0 10px 30px rgba(32,124,151,0.35)',
//             }}
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <button
//             onClick={nextSlide}
//             aria-label="Next"
//             className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-30 focus:outline-none"
//             style={{
//               background: DEEP_TEAL,
//               boxShadow: '0 10px 30px rgba(32,124,151,0.35)',
//             }}
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* indicators */}
//         <div className="mt-8 flex items-center justify-center gap-3">
//           {stories.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentIndex(i)}
//               aria-label={`Go to story ${i + 1}`}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'scale-110' : ''}`}
//               style={{ background: i === currentIndex ? DEEP_TEAL : 'rgba(32,124,151,0.25)' }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Story {
  id: number;
  name: string;
  achievement: string;
  rank: string;
  location: string;
}

const stories: Story[] = [
  { id: 1, name: 'ERSHIK K.', achievement: 'JEE AIR', rank: '8974', location: 'IIT ROORKEE' },
  { id: 2, name: 'ADITYA K.', achievement: 'JEE AIR', rank: '2890', location: 'IIT PATNA' },
  { id: 3, name: 'PURVESH S.', achievement: 'JEE AIR', rank: '5621', location: 'IIT PATNA' },
  { id: 4, name: 'AAYUSH U.', achievement: 'JEE AIR', rank: '7845', location: 'IIT HYDERABAD' },
];

export default function SuccessStories() {
  const DEEP_TEAL = '#207C97'; // kept exactly as requested
  const [index, setIndex] = useState(0);
  const autoRef = useRef<number | null>(null);
  const pauseRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // autoplay with pause-on-interact
  useEffect(() => {
    const play = () => {
      if (pauseRef.current) return;
      setIndex((i) => (i + 1) % stories.length);
    };

    autoRef.current = window.setInterval(play, 3000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  const go = (i: number) => setIndex((_) => (i + stories.length) % stories.length);
  const next = () => setIndex((i) => (i + 1) % stories.length);
  const prev = () => setIndex((i) => (i - 1 + stories.length) % stories.length);

  // swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
    pauseRef.current = true;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      pauseRef.current = false;
      return;
    }
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (dx > threshold) next();
    else if (dx < -threshold) prev();
    touchStartX.current = null;
    touchEndX.current = null;
    // small resume delay so user doesn't accidentally trigger autoplay immediately
    setTimeout(() => (pauseRef.current = false), 800);
  };

  // keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === ' ') pauseRef.current = !pauseRef.current; // space toggles pause
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // framer-motion variants for enter/exit
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.98,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.98,
    }),
  };

  // direction used for slide animation: next -> 1, prev -> -1
  const dirRef = useRef(1);
  useEffect(() => {
    dirRef.current = 1;
  }, []);

  // compute previous/next indices for subtle side peeks
  const prevIndex = (index - 1 + stories.length) % stories.length;
  const nextIndex = (index + 1) % stories.length;

  return (
    <section
      id="success"
      className="py-16"
      style={{ background: 'linear-gradient(180deg,#eaf8fb,#ffffff)' }}
      aria-label="Success stories carousel"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8" style={{ color: DEEP_TEAL }}>
          SUCCESS STORIES
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel viewport */}
          <div
            className="relative overflow-hidden rounded-3xl"
            onMouseEnter={() => (pauseRef.current = true)}
            onMouseLeave={() => (pauseRef.current = false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            role="region"
            aria-roledescription="carousel"
            aria-label="Student success stories"
          >
            {/* Side peeks (prev/next) - positioned absolutely to left/right */}
            <div className="absolute inset-y-0 left-0 w-20 flex items-center pl-4 pointer-events-none">
              <div className="w-full h-56 rounded-2xl bg-white/6 backdrop-blur-sm shadow-inner transform -translate-x-6 scale-95 opacity-80" />
            </div>
            <div className="absolute inset-y-0 right-0 w-20 flex items-center pr-4 pointer-events-none">
              <div className="w-full h-56 rounded-2xl bg-white/6 backdrop-blur-sm shadow-inner transform translate-x-6 scale-95 opacity-80" />
            </div>

            {/* animate presence for center slide */}
            <div className="flex items-center justify-center py-8 px-6">
              <AnimatePresence initial={false} custom={dirRef.current} mode="wait">
                <motion.div
                  key={stories[index].id}
                  custom={dirRef.current}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}
                  className="relative w-full max-w-2xl"
                >
                  {/* Card */}
                  <motion.article
                    layout
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    style={{ borderRadius: 28, background: `linear-gradient(135deg, rgba(32,124,151,0.95), rgba(20,96,116,0.95))` }}
                    onClick={() => alert(`Clicked ${stories[index].name}`)}
                    role="group"
                    aria-label={`${stories[index].name} — ${stories[index].achievement}`}
                  >
                    {/* subtle multi-layered background for depth */}
                    <div className="absolute inset-0" style={{ mixBlendMode: 'normal' }} />

                    {/* Top-right badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.06)', color: '#fff' }}>
                        <p className="text-xs text-white/90 font-semibold">{stories[index].location}</p>
                      </div>
                    </div>

                    {/* Avatar + decorative ring */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                      <motion.div
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/25 backdrop-blur-md flex items-center justify-center shadow-lg"
                        style={{ background: 'rgba(255,255,255,0.12)' }}
                      >
                        <div className="text-6xl select-none">👤</div>
                      </motion.div>
                    </div>

                    {/* read-overlay for text gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.05) 48%, transparent 100%)',
                      }}
                    />

                    {/* Card content */}
                    <div className="relative z-30 p-6 pt-40 text-white">
                      <div className="mb-4 text-right">
                        <p className="text-xs opacity-80">{stories[index].achievement}</p>
                        <p className="text-3xl font-extrabold tracking-tight">{stories[index].rank}</p>
                      </div>

                      <div className="border-t border-white/15 pt-3">
                        <p className="text-2xl font-bold leading-snug">{stories[index].name}</p>
                        <p className="text-sm opacity-90">{stories[index].location}</p>
                      </div>
                    </div>

                    {/* soft ambient glow (keeps inside rounded bounds) */}
                    <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: '0 30px 80px rgba(32,124,151,0.28)', borderRadius: 28 }} />
                  </motion.article>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next controls */}
            <button
              onClick={() => {
                dirRef.current = -1;
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
              style={{ background: DEEP_TEAL, boxShadow: '0 10px 30px rgba(32,124,151,0.35)' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => {
                dirRef.current = 1;
                next();
              }}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
              style={{ background: DEEP_TEAL, boxShadow: '0 10px 30px rgba(32,124,151,0.35)' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators + progress */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => (dirRef.current = i > index ? 1 : -1) || go(i)}
                  aria-label={`Go to story ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-transform duration-300 ${i === index ? 'scale-110' : ''}`}
                  style={{ background: i === index ? DEEP_TEAL : 'rgba(32,124,151,0.22)' }}
                />
              ))}
            </div>

            {/* small progress bar showing autoplay progress */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 h-1 z-30 rounded-b-3xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <motion.div
                key={index}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                style={{ background: DEEP_TEAL, height: '100%' }}
              />
            </motion.div>
          </div>

          {/* small preview row for mobile / quick jump - optional */}
          <div className="mt-6 hidden sm:flex items-center justify-center gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  dirRef.current = -1;
                  prev();
                }}
                className="p-2 rounded-md bg-white/6"
                aria-label="Prev small"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>

              <div className="flex items-center gap-2">
                {[prevIndex, index, nextIndex].map((i, v) => (
                  <div
                    key={i}
                    className={`w-28 h-16 rounded-lg overflow-hidden flex items-center justify-center text-white text-sm font-medium ${
                      v === 1 ? 'ring-2 ring-white/30 scale-105' : 'opacity-70'
                    }`}
                    style={{ background: 'linear-gradient(135deg, rgba(32,124,151,0.9), rgba(20,96,116,0.9))' }}
                    onClick={() => go(i)}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-xs opacity-90">{stories[i].achievement}</div>
                      <div className="text-sm font-bold">{stories[i].rank}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  dirRef.current = 1;
                  next();
                }}
                className="p-2 rounded-md bg-white/6"
                aria-label="Next small"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

