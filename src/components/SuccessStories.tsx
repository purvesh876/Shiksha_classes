


// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';


// interface Story {
//   id: number;
//   name: string;
//   achievement: string;
//   rank: string;
//   location: string;
// }


// const stories: Story[] = [
//   { id: 1, name: 'ERSHIK K.', achievement: 'JEE AIR', rank: '8974', location: 'IIT ROORKEE' },
//   { id: 2, name: 'ADITYA K.', achievement: 'JEE AIR', rank: '2890', location: 'IIT PATNA' },
//   { id: 3, name: 'PURVESH S.', achievement: 'JEE AIR', rank: '5621', location: 'IIT PATNA' },
//   { id: 4, name: 'AAYUSH U.', achievement: 'JEE AIR', rank: '7845', location: 'IIT HYDERABAD' },
// ];


// export default function SuccessStories() {
//   const DEEP_TEAL = '#207C97';
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const pauseRef = useRef(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const touchStartX = useRef<number>(0);
//   const touchEndX = useRef<number>(0);


//   // Detect mobile screen
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);


//   // Autoplay functionality
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (!pauseRef.current) {
//         setDirection(1);
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
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


//   // Touch handlers
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
//       if (distance > 0) {
//         next();
//       } else {
//         prev();
//       }
//     }

//     touchStartX.current = 0;
//     touchEndX.current = 0;
//     setTimeout(() => (pauseRef.current = false), 800);
//   };


//   // Get indices for left, center, and right cards
//   const getVisibleIndices = () => {
//     const leftIndex = (currentIndex - 1 + stories.length) % stories.length;
//     const centerIndex = currentIndex;
//     const rightIndex = (currentIndex + 1) % stories.length;
//     return { leftIndex, centerIndex, rightIndex };
//   };


//   const { leftIndex, centerIndex, rightIndex } = getVisibleIndices();


//   // Slide variants for mobile
//   const slideVariants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (dir: number) => ({
//       x: dir > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };


//   // Card component
//   const Card = ({ story, position }: { story: Story; position: 'left' | 'center' | 'right' }) => {
//     const isCenter = position === 'center';
//     const scale = isCenter ? 1 : 0.85;
//     const opacity = isCenter ? 1 : 0.6;
//     const zIndex = isCenter ? 20 : 10;


//     return (
//       <motion.article
//         initial={{ scale: isMobile ? 1 : 0.85, opacity: isMobile ? 1 : 0.6 }}
//         animate={{ scale: isMobile ? 1 : scale, opacity: isMobile ? 1 : opacity }}
//         transition={{ duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}
//         className="relative rounded-3xl overflow-hidden shadow-2xl flex-shrink-0"
//         style={{
//           width: isMobile ? '100%' : (isCenter ? '340px' : '300px'),
//           height: isMobile ? '260px' : (isCenter ? '300px' : '260px'),
//           maxWidth: isMobile ? '400px' : 'none',
//           borderRadius: 24,
//           background: `linear-gradient(135deg, rgba(32,124,151,0.95), rgba(20,96,116,0.95))`,
//           zIndex,
//         }}
//         role="group"
//         aria-label={`${story.name} — ${story.achievement}`}
//       >
//         {/* Top-right badge */}
//         <div className="absolute top-3 right-3 z-20">
//           <div
//             className="px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm text-xs"
//             style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
//           >
//             <p className="text-white/95 font-semibold">{story.location}</p>
//           </div>
//         </div>


//         {/* Left side: Avatar */}
//         <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
//           <motion.div
//             initial={{ scale: 0.98 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="rounded-full overflow-hidden border-4 border-white/25 backdrop-blur-md flex items-center justify-center shadow-lg"
//             style={{
//               width: isMobile ? '100px' : (isCenter ? '120px' : '100px'),
//               height: isMobile ? '100px' : (isCenter ? '120px' : '100px'),
//               background: 'rgba(255,255,255,0.15)',
//             }}
//           >
//             <div className={`select-none ${isMobile ? 'text-5xl' : (isCenter ? 'text-6xl' : 'text-5xl')}`}>👤</div>
//           </motion.div>
//         </div>


//         {/* Gradient overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)',
//           }}
//         />


//         {/* Right side: Card content */}
//         <div className="absolute right-0 top-0 bottom-0 left-0 flex items-center justify-end pr-6 pl-32 md:pl-36 text-white z-30">
//           <div className="text-right w-full">
//             <div className="mb-3">
//               <p className="text-xs opacity-75 mb-1">{story.achievement}</p>
//               <p className={`font-extrabold tracking-tight ${isMobile ? 'text-3xl' : (isCenter ? 'text-4xl' : 'text-3xl')}`}>
//                 {story.rank}
//               </p>
//             </div>


//             <div className="border-t border-white/20 pt-3">
//               <p className={`font-bold leading-tight ${isMobile ? 'text-xl' : (isCenter ? 'text-2xl' : 'text-xl')}`}>
//                 {story.name}
//               </p>
//               <p className="text-sm opacity-85 mt-1">{story.location}</p>
//             </div>
//           </div>
//         </div>


//         {/* Ambient glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{ boxShadow: isCenter ? '0 25px 60px rgba(32,124,151,0.35)' : '0 15px 40px rgba(32,124,151,0.25)', borderRadius: 24 }}
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
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12" style={{ color: DEEP_TEAL }}>
//           RESULTS
//         </h2>


//         <div className="relative w-full max-w-6xl mx-auto">
//           {/* Carousel viewport */}
//           <div
//             className="relative overflow-hidden"
//             onMouseEnter={() => (pauseRef.current = true)}
//             onMouseLeave={() => (pauseRef.current = false)}
//             role="region"
//             aria-roledescription="carousel"
//             aria-label="Student success stories"
//           >
//             {/* Cards container */}
//             <div className="flex items-center justify-center py-8">
//               {isMobile ? (
//                 // Mobile: Single card with swipe - FIXED POSITIONING
//                 <div
//                   className="w-full max-w-md px-4"
//                   style={{ touchAction: 'pan-y' }}
//                 >
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
//                           x: { type: "spring", stiffness: 300, damping: 30 },
//                           opacity: { duration: 0.2 }
//                         }}
//                         style={{ 
//                           position: 'absolute', 
//                           width: '100%', 
//                           left: 0, 
//                           right: 0,
//                           top: 0
//                         }}
//                       >
//                         <Card story={stories[currentIndex]} position="center" />
//                       </motion.div>
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               ) : (
//                 // Desktop: Three cards
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
//                       initial={{ scale: 0.85, opacity: 0.6 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0.85, opacity: 0.6 }}
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


//             {/* Navigation buttons */}
//             <button
//               onClick={() => {
//                 pauseRef.current = true;
//                 prev();
//                 setTimeout(() => (pauseRef.current = false), 1000);
//               }}
//               aria-label="Previous"
//               className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
//               style={{ background: DEEP_TEAL, boxShadow: '0 10px 30px rgba(32,124,151,0.35)' }}
//             >
//               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>


//             <button
//               onClick={() => {
//                 pauseRef.current = true;
//                 next();
//                 setTimeout(() => (pauseRef.current = false), 1000);
//               }}
//               aria-label="Next"
//               className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
//               style={{ background: DEEP_TEAL, boxShadow: '0 10px 30px rgba(32,124,151,0.35)' }}
//             >
//               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>


//             {/* Indicators */}
//             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40">
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
//                     background: i === currentIndex ? DEEP_TEAL : 'rgba(32,124,151,0.3)',
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
}

const stories: Story[] = [
  { id: 1, name: 'ERSHIK K.', achievement: 'JEE AIR', rank: '8974', location: 'IIT ROORKEE' },
  { id: 2, name: 'ADITYA K.', achievement: 'JEE AIR', rank: '2890', location: 'IIT PATNA' },
  { id: 3, name: 'PURVESH S.', achievement: 'JEE AIR', rank: '5621', location: 'IIT PATNA' },
  { id: 4, name: 'AAYUSH U.', achievement: 'JEE AIR', rank: '7845', location: 'IIT HYDERABAD' },
];

export default function SuccessStories() {
  const PRIMARY = '#168287';
  const PRIMARY_DARK = '#11616a';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const pauseRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const Card = ({ story, position }: { story: Story; position: 'left' | 'center' | 'right' }) => {
    const isCenter = position === 'center';
    const scale = isCenter ? 1 : 0.85;
    const opacity = isCenter ? 1 : 0.6;
    const zIndex = isCenter ? 20 : 10;

    return (
      <motion.article
        initial={{ scale: isMobile ? 1 : 0.85, opacity: isMobile ? 1 : 0.6 }}
        animate={{ scale: isMobile ? 1 : scale, opacity }}
        transition={{ duration: 0.5, ease: [0.22, 0.8, 0.2, 1] }}
        className="relative rounded-3xl overflow-hidden shadow-2xl flex-shrink-0"
        style={{
          width: isMobile ? '100%' : isCenter ? 340 : 300,
          height: isMobile ? 260 : isCenter ? 300 : 260,
          maxWidth: isMobile ? 400 : undefined,
          borderRadius: 24,
          background: `linear-gradient(135deg, ${PRIMARY}dd, ${PRIMARY_DARK}dd)`,
          zIndex,
          color: 'white',
        }}
        role="group"
        aria-label={`${story.name} — ${story.achievement}`}
      >
        {/* Badge */}
        <div className="absolute top-3 right-3 z-20">
          <div
            className="px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm text-xs"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <p className="text-white/95 font-semibold">{story.location}</p>
          </div>
        </div>

        {/* Avatar */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
          <motion.div
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-full overflow-hidden border-4 border-white/25 backdrop-blur-md flex items-center justify-center shadow-lg"
            style={{
              width: isMobile ? 100 : isCenter ? 120 : 100,
              height: isMobile ? 100 : isCenter ? 120 : 100,
              background: 'rgba(255,255,255,0.15)',
            }}
          >
            <div
              className={`select-none ${isMobile ? 'text-5xl' : isCenter ? 'text-6xl' : 'text-5xl'}`}
            >
              👤
            </div>
          </motion.div>
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)',
          }}
        />

        {/* Card content */}
        <div className="absolute inset-0 flex items-center justify-end pr-6 pl-32 md:pl-36 z-30">
          <div className="text-right w-full text-white">
            <div className="mb-3">
              <p className="text-xs opacity-75 mb-1">{story.achievement}</p>
              <p
                className={`font-extrabold tracking-tight ${
                  isMobile ? 'text-3xl' : isCenter ? 'text-4xl' : 'text-3xl'
                }`}
              >
                {story.rank}
              </p>
            </div>
            <div className="border-t border-white/20 pt-3">
              <p
                className={`font-bold leading-tight ${
                  isMobile ? 'text-xl' : isCenter ? 'text-2xl' : 'text-xl'
                }`}
              >
                {story.name}
              </p>
              <p className="text-sm opacity-85 mt-1">{story.location}</p>
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: isCenter
              ? `0 25px 60px rgba(22,130,135,0.35)`
              : `0 15px 40px rgba(22,130,135,0.25)`,
            borderRadius: 24,
          }}
        />
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
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
          style={{ color: PRIMARY }}
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
                <div className="w-full max-w-md px-4" style={{ touchAction: 'pan-y' }}>
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
                          opacity: { duration: 0.2 },
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
                      initial={{ scale: 0.85, opacity: 0.6 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.85, opacity: 0.6 }}
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

            {/* Navigation buttons */}
            <button
              onClick={() => {
                pauseRef.current = true;
                prev();
                setTimeout(() => (pauseRef.current = false), 1000);
              }}
              aria-label="Previous"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
              style={{ background: PRIMARY, boxShadow: '0 10px 30px rgba(22,130,135,0.35)' }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={() => {
                pauseRef.current = true;
                next();
                setTimeout(() => (pauseRef.current = false), 1000);
              }}
              aria-label="Next"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-2 sm:p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-40 focus:outline-none"
              style={{ background: PRIMARY, boxShadow: '0 10px 30px rgba(22,130,135,0.35)' }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40">
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8' : 'w-2'
                  }`}
                  style={{ background: i === currentIndex ? PRIMARY : 'rgba(22,130,135,0.3)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
