







// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface Story {
//   id: number;
//   name: string;
//   achievement: string;
//   rank: string;
//   location: string;
//   photo: string;
// }

// // Update all photo paths to match your files.
// const stories: Story[] = [
//   { id: 1, name: 'ERSHIK K.', achievement: 'JEE AIR', rank: '8974', location: 'IIT ROORKEE', photo: '/assets/Eshika.jpg' },
//   { id: 2, name: 'ADITYA K.', achievement: 'JEE AIR', rank: '2890', location: 'IIT PATNA', photo: '/assets/Aditya.jpg' },
//   { id: 3, name: 'PURVESH S.', achievement: 'JEE AIR', rank: '5621', location: 'IIT PATNA', photo: '/assets/Purvesh.jpg' },
//   { id: 4, name: 'AAYUSH U.', achievement: 'JEE AIR', rank: '7845', location: 'IIT HYDERABAD', photo: '/assets/Ayush.jpg' },
//   { id: 5, name: 'Student 5', achievement: 'JEE AIR', rank: 'XXXX', location: 'IIT BHU', photo: '/assets/Kanay.jpg' },
//   { id: 6, name: 'Student 6', achievement: 'JEE AIR', rank: 'YYYY', location: 'IIT DELHI', photo: '/assets/Piyush.jpg' },
//   { id: 7, name: 'Student 6', achievement: 'JEE AIR', rank: 'YYYY', location: 'IIT DELHI', photo: '/assets/Chaitanya.jpg' },
// ];

// export default function SuccessStories() {
//   const PRIMARY = '#168287';

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const pauseRef = useRef(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const touchStartX = useRef<number>(0);
//   const touchEndX = useRef<number>(0);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (!pauseRef.current) {
//         setDirection(1);
//         setCurrentIndex((prev) => (prev + 1) % stories.length);
//       }
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const next = () => {
//     setDirection(1);
//     setCurrentIndex((i) => (i + 1) % stories.length);
//   };
//   const prev = () => {
//     setDirection(-1);
//     setCurrentIndex((i) => (i - 1 + stories.length) % stories.length);
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//     pauseRef.current = true;
//   };
//   const handleTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.touches[0].clientX;
//   };
//   const handleTouchEnd = () => {
//     const distance = touchStartX.current - touchEndX.current;
//     const minSwipeDistance = 50;
//     if (Math.abs(distance) > minSwipeDistance) {
//       distance > 0 ? next() : prev();
//     }
//     touchStartX.current = 0;
//     touchEndX.current = 0;
//     setTimeout(() => (pauseRef.current = false), 800);
//   };

//   const getVisibleIndices = () => {
//     const leftIndex = (currentIndex - 1 + stories.length) % stories.length;
//     const centerIndex = currentIndex;
//     const rightIndex = (currentIndex + 1) % stories.length;
//     return { leftIndex, centerIndex, rightIndex };
//   };
//   const { leftIndex, centerIndex, rightIndex } = getVisibleIndices();

//   const slideVariants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? 300 : -300, opacity: 0,
//     }),
//     center: { x: 0, opacity: 1 },
//     exit: (dir: number) => ({
//       x: dir > 0 ? -300 : 300, opacity: 0,
//     }),
//   };

//   // Card UI: The photo takes the entire area, with overlays for text and gradients
//   const Card = ({ story, position }: { story: Story; position: 'left' | 'center' | 'right' }) => {
//     const isCenter = position === 'center';
//     const scale = isCenter ? 1 : 0.92;
//     const opacity = isCenter ? 1 : 0.7;
//     const zIndex = isCenter ? 20 : 10;
//     const cardHeight = isMobile ? 260 : isCenter ? 300 : 260;
//     const cardWidth = isMobile ? '100%' : isCenter ? 340 : 300;

//     return (
//       <motion.article
//         initial={{ scale: isMobile ? 1 : 0.92, opacity: isMobile ? 1 : 0.7 }}
//         animate={{ scale: isMobile ? 1 : scale, opacity }}
//         transition={{ duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}
//         className="relative rounded-3xl shadow-xl flex-shrink-0 overflow-hidden"
//         style={{
//           width: cardWidth,
//           height: cardHeight,
//           maxWidth: isMobile ? 400 : undefined,
//           borderRadius: 24,
//           zIndex,
//           // Background image for the card!
//           background: `url(${story.photo}) center center/cover no-repeat`,
//         }}
//         role="group"
//         aria-label={`${story.name} — ${story.achievement}`}
//       >
//         {/* Dim and gradient overlay for text readability */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: 'linear-gradient(120deg,rgba(14,26,36,0.36) 55%,rgba(25,69,72,0.10) 100%)',
//             zIndex: 1,
//           }}
//         />

//         {/* Top-Right badge */}
//         <div className="absolute top-3 right-3 z-20">
//           <div
//             className="px-3 py-1 rounded-full border border-white/25 backdrop-blur-sm text-xs shadow"
//             style={{ background: 'rgba(22,130,135,0.82)' }}
//           >
//             <p className="text-white font-semibold drop-shadow">{story.location}</p>
//           </div>
//         </div>

//         {/* Card main content */}
//         <div className="absolute inset-0 flex flex-col justify-end z-20 p-6">
//           <div>
//             <p className="text-xs font-medium text-white/90 drop-shadow">{story.achievement}</p>
//             <p className={`font-extrabold tracking-tight text-white drop-shadow-lg ${isMobile ? 'text-3xl' : isCenter ? 'text-4xl' : 'text-3xl'}`}>
//               {story.rank}
//             </p>
//           </div>
//           <div className="pt-3 border-t border-white/25 mt-3">
//             <p className={`font-bold leading-tight text-white drop-shadow-lg ${isMobile ? 'text-xl' : isCenter ? 'text-2xl' : 'text-xl'}`}>
//               {story.name}
//             </p>
//             <p className="text-sm text-white/90 mt-1">{story.location}</p>
//           </div>
//         </div>

//         {/* Subtle ambient glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             boxShadow: isCenter
//               ? `0 18px 62px rgba(22,130,135,0.17)`
//               : `0 10px 22px rgba(22,130,135,0.11)`,
//             borderRadius: 24,
//           }}
//         />
//       </motion.article>
//     );
//   };

//   return (
//     <section
//       id="success"
//       className="py-16 overflow-hidden"
//       style={{ background: 'linear-gradient(180deg,#eaf8fb,#ffffff)' }}
//       aria-label="Success stories carousel"
//     >
//       <div className="container mx-auto px-4 sm:px-6">
//         <h2
//           className="text-3xl sm:text-4xl font-extrabold text-center mb-14 drop-shadow"
//           style={{ color: PRIMARY, letterSpacing: 1 }}
//         >
//           RESULTS
//         </h2>
//         <div className="relative w-full max-w-6xl mx-auto">
//           <div
//             className="relative overflow-hidden"
//             onMouseEnter={() => (pauseRef.current = true)}
//             onMouseLeave={() => (pauseRef.current = false)}
//             role="region"
//             aria-roledescription="carousel"
//             aria-label="Student success stories"
//           >
//             <div className="flex items-center justify-center py-8">
//               {isMobile ? (
//                 <div className="w-full max-w-md px-2" style={{ touchAction: 'pan-y' }}>
//                   <div
//                     className="relative"
//                     style={{ height: '280px' }}
//                     onTouchStart={handleTouchStart}
//                     onTouchMove={handleTouchMove}
//                     onTouchEnd={handleTouchEnd}
//                   >
//                     <AnimatePresence initial={false} custom={direction}>
//                       <motion.div
//                         key={`card-${currentIndex}`}
//                         custom={direction}
//                         variants={slideVariants}
//                         initial="enter"
//                         animate="center"
//                         exit="exit"
//                         transition={{
//                           x: { type: 'spring', stiffness: 300, damping: 30 },
//                           opacity: { duration: 0.18 },
//                         }}
//                         style={{
//                           position: 'absolute',
//                           width: '100%',
//                           left: 0,
//                           right: 0,
//                           top: 0,
//                         }}
//                       >
//                         <Card story={stories[currentIndex]} position="center" />
//                       </motion.div>
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-center gap-6">
//                   <AnimatePresence mode="popLayout">
//                     <motion.div
//                       key={`left-${leftIndex}`}
//                       initial={{ x: -100, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       exit={{ x: -100, opacity: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="hidden md:block"
//                     >
//                       <Card story={stories[leftIndex]} position="left" />
//                     </motion.div>
//                     <motion.div
//                       key={`center-${centerIndex}`}
//                       initial={{ scale: 0.92, opacity: 0.7 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0.92, opacity: 0.7 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       <Card story={stories[centerIndex]} position="center" />
//                     </motion.div>
//                     <motion.div
//                       key={`right-${rightIndex}`}
//                       initial={{ x: 100, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       exit={{ x: 100, opacity: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="hidden md:block"
//                     >
//                       <Card story={stories[rightIndex]} position="right" />
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               )}
//             </div>
//             {/* Navigation Buttons */}
//             <button
//               onClick={() => {
//                 pauseRef.current = true;
//                 prev();
//                 setTimeout(() => (pauseRef.current = false), 1000);
//               }}
//               aria-label="Previous"
//               className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
//               style={{ background: PRIMARY, boxShadow: '0 10px 30px rgba(22,130,135,0.24)' }}
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={() => {
//                 pauseRef.current = true;
//                 next();
//                 setTimeout(() => (pauseRef.current = false), 1000);
//               }}
//               aria-label="Next"
//               className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
//               style={{ background: PRIMARY, boxShadow: '0 10px 30px rgba(22,130,135,0.24)' }}
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//             {/* Indicators */}
//             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40">
//               {stories.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => {
//                     setDirection(i > currentIndex ? 1 : -1);
//                     setCurrentIndex(i);
//                     pauseRef.current = true;
//                     setTimeout(() => (pauseRef.current = false), 1000);
//                   }}
//                   aria-label={`Go to story ${i + 1}`}
//                   className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8' : 'w-2'}`}
//                   style={{
//                     background: i === currentIndex
//                       ? PRIMARY
//                       : 'rgba(22,130,135,0.24)',
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
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
  photo: string;
}

// Update photo paths to match your files in public/assets/
const stories: Story[] = [
  { id: 1, name: 'ERSHIK K.', achievement: 'JEE AIR', rank: '8974', location: 'IIT ROORKEE', photo: '/assets/Eshika.jpg' },
  { id: 2, name: 'ADITYA K.', achievement: 'JEE AIR', rank: '2890', location: 'IIT PATNA', photo: '/assets/Aditya.jpg' },
  { id: 3, name: 'PURVESH S.', achievement: 'JEE AIR', rank: '5621', location: 'IIT PATNA', photo: '/assets/Purvesh.jpg' },
  { id: 4, name: 'AAYUSH U.', achievement: 'JEE AIR', rank: '7845', location: 'IIT HYDERABAD', photo: '/assets/Ayush.jpg' },
  { id: 5, name: 'KANAY S.', achievement: 'JEE AIR', rank: 'XXXX', location: 'IIT BHU', photo: '/assets/Kanay.jpg' },
  { id: 6, name: 'PIYUSH C.', achievement: 'JEE AIR', rank: 'YYYY', location: 'IIT DELHI', photo: '/assets/Piyush.jpg' },
  { id: 7, name: 'CHAITANYA M.', achievement: 'JEE AIR', rank: 'ZZZZ', location: 'IIT GUWAHATI', photo: '/assets/Chaitanya.jpg' },
];

export default function SuccessStories() {
  const PRIMARY = '#168287';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const pauseRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!pauseRef.current) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % stories.length);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % stories.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i - 1 + stories.length) % stories.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    pauseRef.current = true;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (Math.abs(distance) > minSwipeDistance) {
      distance > 0 ? next() : prev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
    setTimeout(() => (pauseRef.current = false), 800);
  };

  const getVisibleIndices = () => {
    const leftIndex = (currentIndex - 1 + stories.length) % stories.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % stories.length;
    return { leftIndex, centerIndex, rightIndex };
  };
  const { leftIndex, centerIndex, rightIndex } = getVisibleIndices();

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300, opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300, opacity: 0,
    }),
  };

  // Card component: photo comes in front, text overlays on bottom right
  const Card = ({ story, position }: { story: Story; position: 'left' | 'center' | 'right' }) => {
    const isCenter = position === 'center';
    const scale = isCenter ? 1 : 0.92;
    const opacity = isCenter ? 1 : 0.75;
    const zIndex = isCenter ? 20 : 10;
    const cardHeight = isMobile ? 260 : isCenter ? 300 : 260;
    const cardWidth = isMobile ? '100%' : isCenter ? 340 : 300;

    return (
      <motion.article
        initial={{ scale: isMobile ? 1 : scale, opacity }}
        animate={{ scale: isMobile ? 1 : scale, opacity }}
        transition={{ duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}
        className="relative rounded-3xl shadow-xl flex-shrink-0 overflow-hidden"
        style={{
          width: cardWidth,
          height: cardHeight,
          maxWidth: isMobile ? 400 : undefined,
          borderRadius: 24,
          zIndex,
          background: PRIMARY,
        }}
        role="group"
        aria-label={`${story.name} — ${story.achievement}`}
      >
        {/* Photo fills the card */}
        <img
          src={story.photo}
          alt={story.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ borderRadius: 24, zIndex: 10 }}
        />

        {/* Location badge (top right) */}
        <div className="absolute top-3 right-3 z-20">
          <div
            className="px-3 py-1 rounded-full border border-white/25 backdrop-blur-sm text-xs shadow"
            style={{ background: PRIMARY }}
          >
            <p className="text-white font-semibold drop-shadow">{story.location}</p>
          </div>
        </div>

        {/* Achievement and info box at bottom right */}
        {/* <div
          className="absolute right-6 bottom-0.5 z-30 text-right"
          style={{
            maxWidth: '69%',
            background: 'rgba(22,130,135,0.16)',
            borderRadius: 14,
            padding: '11px 17px',
            
            backdropFilter: 'blur(2px)',
          }}
        >
          <p className="text-sm font-medium text-white/95">{story.achievement}</p>
          <p className="font-extrabold text-white text-2xl leading-tight">{story.rank}</p>
          <p className="font-bold text-white mt-1">{story.name}</p>
          <p className="text-xs text-white">{story.location}</p>
        </div> */}
      </motion.article>
    );
  };

  return (
    <section
      id="success"
      className="py-16 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#eaf8fb,#ffffff)' }}
      aria-label="Success stories carousel"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-14 drop-shadow"
          style={{ color: PRIMARY, letterSpacing: 1 }}
        >
          RESULTS
        </h2>
        <div className="relative w-full max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => (pauseRef.current = true)}
            onMouseLeave={() => (pauseRef.current = false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Student success stories"
          >
            <div className="flex items-center justify-center py-8">
              {isMobile ? (
                <div className="w-full max-w-md px-2" style={{ touchAction: 'pan-y' }}>
                  <div
                    className="relative"
                    style={{ height: '280px' }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={`card-${currentIndex}`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: 'spring', stiffness: 300, damping: 30 },
                          opacity: { duration: 0.18 },
                        }}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          left: 0,
                          right: 0,
                          top: 0,
                        }}
                      >
                        <Card story={stories[currentIndex]} position="center" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-6">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={`left-${leftIndex}`}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="hidden md:block"
                    >
                      <Card story={stories[leftIndex]} position="left" />
                    </motion.div>
                    <motion.div
                      key={`center-${centerIndex}`}
                      initial={{ scale: 0.92, opacity: 0.75 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.92, opacity: 0.75 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card story={stories[centerIndex]} position="center" />
                    </motion.div>
                    <motion.div
                      key={`right-${rightIndex}`}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="hidden md:block"
                    >
                      <Card story={stories[rightIndex]} position="right" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>
            {/* Navigation Buttons */}
            <button
              onClick={() => {
                pauseRef.current = true;
                prev();
                setTimeout(() => (pauseRef.current = false), 1000);
              }}
              aria-label="Previous"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
              style={{ background: PRIMARY, boxShadow: '0 10px 30px rgba(22,130,135,0.24)' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                pauseRef.current = true;
                next();
                setTimeout(() => (pauseRef.current = false), 1000);
              }}
              aria-label="Next"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
              style={{ background: PRIMARY, boxShadow: '0 10px 30px rgba(22,130,135,0.24)' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            {/* Indicators */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                    pauseRef.current = true;
                    setTimeout(() => (pauseRef.current = false), 1000);
                  }}
                  aria-label={`Go to story ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8' : 'w-2'}`}
                  style={{
                    background: i === currentIndex
                      ? PRIMARY
                      : 'rgba(22,130,135,0.24)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
