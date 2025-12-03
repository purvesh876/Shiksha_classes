


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

// const stories: Story[] = [
//   { id: 1, name: 'ERSHIK K.', achievement: 'JEE AIR', rank: '8974', location: 'IIT ROORKEE', photo: '/assets/Eshika.jpg' },
//   { id: 2, name: 'ADITYA K.', achievement: 'JEE AIR', rank: '2890', location: 'IIT PATNA', photo: '/assets/Aditya.jpg' },
//   { id: 3, name: 'PURVESH S.', achievement: 'JEE AIR', rank: '5621', location: 'IIT PATNA', photo: '/assets/Purvesh.jpg' },
//   { id: 4, name: 'AAYUSH U.', achievement: 'JEE AIR', rank: '7845', location: 'IIT HYDERABAD', photo: '/assets/Ayush.jpg' },
//   { id: 5, name: 'KANAY S.', achievement: 'JEE AIR', rank: 'XXXX', location: 'IIT BHU', photo: '/assets/Kanay.jpg' },
//   { id: 6, name: 'PIYUSH C.', achievement: 'JEE AIR', rank: 'YYYY', location: 'IIT DELHI', photo: '/assets/Piyush.jpg' },
//   { id: 7, name: 'CHAITANYA M.', achievement: 'JEE AIR', rank: 'ZZZZ', location: 'IIT GUWAHATI', photo: '/assets/Chaitanya.jpg' },
// ];

// export default function SuccessStories() {
//   const PRIMARY = '#168287';

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const pauseRef = useRef(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [cardSize, setCardSize] = useState(320);

//   const touchStartX = useRef<number>(0);
//   const touchEndX = useRef<number>(0);

//   useEffect(() => {
//     const setResponsiveCardSize = () => {
//       if (window.innerWidth < 480) {
//         setCardSize(Math.min(window.innerWidth - 32, 260));
//         setIsMobile(true);
//       } else if (window.innerWidth < 992) {
//         setCardSize(300);
//         setIsMobile(false);
//       } else {
//         setCardSize(340);
//         setIsMobile(false);
//       }
//     };
//     setResponsiveCardSize();
//     window.addEventListener('resize', setResponsiveCardSize);
//     return () => window.removeEventListener('resize', setResponsiveCardSize);
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

//   // Shared smooth easing
//   const smoothEase: [number, number, number, number] = [0.32, 0.72, 0, 1];

//   const slideVariants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? cardSize : -cardSize,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         x: { type: 'tween', duration: 0.55, ease: smoothEase },
//         opacity: { duration: 0.35, ease: 'easeOut' },
//       },
//     },
//     exit: (dir: number) => ({
//       x: dir > 0 ? -cardSize : cardSize,
//       opacity: 0,
//       transition: {
//         x: { type: 'tween', duration: 0.55, ease: smoothEase },
//         opacity: { duration: 0.3, ease: 'easeIn' },
//       },
//     }),
//   };

//   const Card = ({ story, position }: { story: Story; position: 'left' | 'center' | 'right' }) => {
//     const isCenter = position === 'center';
//     const scale = isCenter ? 1 : 0.92;
//     const opacity = isCenter ? 1 : 0.75;
//     const zIndex = isCenter ? 20 : 10;
//     const size = isCenter ? cardSize : Math.floor(cardSize * 0.92);

//     return (
//       <motion.article
//         initial={{ scale: isMobile ? 1 : scale, opacity }}
//         animate={{ scale: isMobile ? 1 : scale, opacity }}
//         transition={{ duration: 0.45, ease: smoothEase }}
//         className="relative rounded-3xl shadow-xl flex-shrink-0 overflow-hidden"
//         style={{
//           width: size,
//           height: size,
//           borderRadius: 24,
//           zIndex,
//           background: PRIMARY,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           margin: '0 auto',
//         }}
//         role="group"
//         aria-label={`${story.name} — ${story.achievement}`}
//       >
//         <img
//           src={story.photo}
//           alt={story.name}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             borderRadius: 24,
//             zIndex: 10,
//           }}
//         />
//         <div className="absolute top-3 right-3 z-20">
//           <div
//             className="px-3 py-1 rounded-full border border-white/25 backdrop-blur-sm text-xs shadow"
//             style={{ background: PRIMARY }}
//           >
//             <p className="text-white font-semibold drop-shadow">{story.location}</p>
//           </div>
//         </div>
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
//             <div className="flex items-center justify-center py-8 w-full">
//               {isMobile ? (
//                 <div
//                   className="w-full flex items-center justify-center"
//                   style={{ minHeight: cardSize }}
//                 >
//                   <div
//                     className="relative"
//                     style={{
//                       height: cardSize,
//                       width: cardSize,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       margin: '0 auto',
//                       overflow: 'hidden',
//                     }}
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
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           position: 'absolute',
//                           left: 0,
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
//                       initial={{ x: -20, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       exit={{ x: -20, opacity: 0 }}
//                       transition={{ duration: 0.6, ease: smoothEase }}
//                       className="hidden md:block"
//                     >
//                       <Card story={stories[leftIndex]} position="left" />
//                     </motion.div>
//                     <motion.div
//                       key={`center-${centerIndex}`}
//                       initial={{ scale: 0.94, opacity: 0.8 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0.94, opacity: 0.8 }}
//                       transition={{ duration: 0.45, ease: smoothEase }}
//                     >
//                       <Card story={stories[centerIndex]} position="center" />
//                     </motion.div>
//                     <motion.div
//                       key={`right-${rightIndex}`}
//                       initial={{ x: 20, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       exit={{ x: 20, opacity: 0 }}
//                       transition={{ duration: 0.6, ease: smoothEase }}
//                       className="hidden md:block"
//                     >
//                       <Card story={stories[rightIndex]} position="right" />
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               )}
//             </div>

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
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     i === currentIndex ? 'w-8' : 'w-2'
//                   }`}
//                   style={{
//                     background:
//                       i === currentIndex
//                         ? PRIMARY
//                         : 'rgba(22,130,135,0.24)',
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
  const [cardSize, setCardSize] = useState(320);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // slightly softer cubic-bezier
  const smoothEase: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

  useEffect(() => {
    const setResponsiveCardSize = () => {
      if (window.innerWidth < 480) {
        setCardSize(Math.min(window.innerWidth - 32, 260));
        setIsMobile(true);
      } else if (window.innerWidth < 992) {
        setCardSize(300);
        setIsMobile(false);
      } else {
        setCardSize(340);
        setIsMobile(false);
      }
    };
    setResponsiveCardSize();
    window.addEventListener('resize', setResponsiveCardSize);
    return () => window.removeEventListener('resize', setResponsiveCardSize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!pauseRef.current) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % stories.length);
      }
    }, 3200);
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
      x: dir > 0 ? cardSize : -cardSize,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'tween', duration: 0.6, ease: smoothEase },
        opacity: { duration: 0.4, ease: 'easeOut' },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -cardSize : cardSize,
      opacity: 0,
      transition: {
        x: { type: 'tween', duration: 0.6, ease: smoothEase },
        opacity: { duration: 0.35, ease: 'easeIn' },
      },
    }),
  };

  const Card = ({ story, position }: { story: Story; position: 'left' | 'center' | 'right' }) => {
    const isCenter = position === 'center';
    const scale = isCenter ? 1 : 0.94;
    const opacity = isCenter ? 1 : 0.8;
    const zIndex = isCenter ? 20 : 10;
    const size = isCenter ? cardSize : Math.floor(cardSize * 0.94);

    return (
      <motion.article
        initial={{ scale: isMobile ? 1 : scale, opacity }}
        animate={{ scale: isMobile ? 1 : scale, opacity }}
        transition={{ duration: 0.5, ease: smoothEase, type: 'tween' }}
        className="relative rounded-3xl shadow-xl flex-shrink-0 overflow-hidden"
        style={{
          width: size,
          height: size,
          borderRadius: 24,
          zIndex,
          background: PRIMARY,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
        }}
        role="group"
        aria-label={`${story.name} — ${story.achievement}`}
      >
        <img
          src={story.photo}
          alt={story.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 24,
            zIndex: 10,
          }}
        />
        <div className="absolute top-3 right-3 z-20">
          <div
            className="px-3 py-1 rounded-full border border-white/25 backdrop-blur-sm text-xs shadow"
            style={{ background: PRIMARY }}
          >
            <p className="text-white font-semibold drop-shadow">{story.location}</p>
          </div>
        </div>
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
            <div className="flex items-center justify-center py-8 w-full">
              {isMobile ? (
                // MOBILE: 1 card with slide animation
                <div
                  className="w-full flex items-center justify-center"
                  style={{ minHeight: cardSize }}
                >
                  <div
                    className="relative"
                    style={{
                      height: cardSize,
                      width: cardSize,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      overflow: 'hidden',
                    }}
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
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          left: 0,
                          top: 0,
                        }}
                      >
                        <Card story={stories[currentIndex]} position="center" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                // DESKTOP: 3 cards, all tweened
                <div className="flex items-center justify-center gap-6">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={`left-${leftIndex}`}
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -40, opacity: 0 }}
                      transition={{ duration: 0.7, ease: smoothEase, type: 'tween' }}
                      className="hidden md:block"
                    >
                      <Card story={stories[leftIndex]} position="left" />
                    </motion.div>

                    <motion.div
                      key={`center-${centerIndex}`}
                      initial={{ scale: 0.95, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0.8 }}
                      transition={{ duration: 0.7, ease: smoothEase, type: 'tween' }}
                    >
                      <Card story={stories[centerIndex]} position="center" />
                    </motion.div>

                    <motion.div
                      key={`right-${rightIndex}`}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 40, opacity: 0 }}
                      transition={{ duration: 0.7, ease: smoothEase, type: 'tween' }}
                      className="hidden md:block"
                    >
                      <Card story={stories[rightIndex]} position="right" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>

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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8' : 'w-2'
                  }`}
                  style={{
                    background: i === currentIndex ? PRIMARY : 'rgba(22,130,135,0.24)',
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
