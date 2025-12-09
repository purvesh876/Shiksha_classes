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

//   // Smooth cubic-bezier for fluid animations
//   const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

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
//     }, 4000);
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
//     const leftEdgeIndex = (currentIndex - 2 + stories.length) % stories.length;
//     const leftIndex = (currentIndex - 1 + stories.length) % stories.length;
//     const centerIndex = currentIndex;
//     const rightIndex = (currentIndex + 1) % stories.length;
//     const rightEdgeIndex = (currentIndex + 2) % stories.length;
//     return { leftEdgeIndex, leftIndex, centerIndex, rightIndex, rightEdgeIndex };
//   };
//   const { leftEdgeIndex, leftIndex, centerIndex, rightIndex, rightEdgeIndex } = getVisibleIndices();

//   // Card component unchanged (keeps your design)
//   const Card = ({ story, position }: { story: Story; position: 'leftEdge' | 'left' | 'center' | 'right' | 'rightEdge' }) => {
//     const isCenter = position === 'center';
//     const isLeft = position === 'left';
//     const isRight = position === 'right';
//     const [isHovered, setIsHovered] = useState(false);

//     const baseSize = cardSize;
//     const centerSize = baseSize;
//     const sideSize = Math.floor(baseSize * 0.85); // 85% of center
//     const edgeSize = Math.floor(baseSize * 0.7); // 70% of center

//     const size = isCenter ? centerSize : (isLeft || isRight) ? sideSize : edgeSize;

//     const baseScale = isCenter ? 1 : (isLeft || isRight) ? 0.88 : 0.72;
//     const hoverScale = isCenter ? 1.03 : (isLeft || isRight) ? 0.92 : 0.76;
//     const scale = isHovered && !isMobile ? hoverScale : baseScale;

//     const opacity = isCenter ? 1 : (isLeft || isRight) ? 0.8 : 0.6;

//     const zIndex = isCenter ? 50 : (isLeft || isRight) ? 40 : 30;

//     return (
//       <motion.article
//         initial={{ scale: isMobile ? 1 : baseScale, opacity }}
//         animate={{
//           scale: isMobile ? 1 : scale,
//           opacity,
//           filter: isCenter ? 'brightness(1) saturate(1)' : 'brightness(0.8) saturate(0.9)',
//         }}
//         whileHover={!isMobile ? {
//           scale: hoverScale,
//           y: isCenter ? -8 : -4,
//           transition: { duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }
//         } : {}}
//         onHoverStart={() => !isMobile && setIsHovered(true)}
//         onHoverEnd={() => !isMobile && setIsHovered(false)}
//         transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1], type: 'tween' }}
//         className="relative rounded-3xl shadow-2xl flex-shrink-0 overflow-hidden cursor-pointer"
//         style={{
//           width: size,
//           height: size,
//           borderRadius: 24,
//           zIndex,
//           background: PRIMARY,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: isCenter
//             ? '0 30px 80px rgba(22,130,135,0.5), 0 0 50px rgba(22,130,135,0.3)'
//             : (isLeft || isRight)
//               ? '0 20px 50px rgba(22,130,135,0.35)'
//               : '0 12px 35px rgba(22,130,135,0.25)',
//         }}
//         role="group"
//         aria-label={`${story.name} — ${story.achievement}`}
//       >
//         <motion.img
//           src={story.photo}
//           alt={story.name}
//           initial={{ scale: 1 }}
//           animate={{ scale: isHovered && !isMobile && isCenter ? 1.08 : 1 }}
//           transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             borderRadius: 24,
//           }}
//         />
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background: isCenter
//               ? 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.4) 100%)'
//               : 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0,0,0,0.3) 100%)',
//             borderRadius: 24,
//           }}
//         />
//         <motion.div
//           className="absolute top-3 right-3 z-20"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.4 }}
//         >
//           <div
//             className="px-3 py-1 rounded-full border border-white/40 backdrop-blur-lg text-xs shadow-xl"
//             style={{ background: 'rgba(22,130,135,0.9)' }}
//           >
//             <p className="text-white font-semibold drop-shadow-md">{story.location}</p>
//           </div>
//         </motion.div>
//         {isCenter && (
//           <motion.div
//             className="absolute bottom-3 left-3 right-3 z-20"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
//           >
//             <div
//               className="px-4 py-2.5 rounded-xl border border-white/40 backdrop-blur-lg shadow-2xl"
//               style={{ background: 'rgba(22,130,135,0.92)' }}
//             >
//               <p className="text-white font-bold text-sm drop-shadow-md mb-0.5">{story.name}</p>
//               <p className="text-white/95 text-xs drop-shadow">{story.achievement} {story.rank}</p>
//             </div>
//           </motion.div>
//         )}
//       </motion.article>
//     );
//   };

//   return (
//     <section
//       id="success"
//       className="py-16"
//       style={{ background: 'linear-gradient(180deg,#eaf8fb,#ffffff)', overflowX: 'hidden', overflowY: 'visible' }}
//       aria-label="Success stories carousel"
//     >
//       <div className="container mx-auto px-4 sm:px-6">
//         <h2
//           className="text-3xl sm:text-4xl font-extrabold text-center mb-14 drop-shadow"
//           style={{ color: PRIMARY, letterSpacing: 1 }}
//         >
//           RESULTS
//         </h2>
//         <div className="relative w-full max-w-7xl mx-auto">
//           <div
//             className="relative"
//             style={{ overflow: 'visible' }}
//             onMouseEnter={() => (pauseRef.current = true)}
//             onMouseLeave={() => (pauseRef.current = false)}
//             role="region"
//             aria-roledescription="carousel"
//             aria-label="Student success stories"
//           >
//             <div className="flex items-center justify-center py-8 w-full">
//               {isMobile ? (
//                 // MOBILE: keep the single-card slide but make it smoother
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
//                         initial={{ x: direction > 0 ? cardSize : -cardSize, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1, transition: { duration: 0.65, ease: smoothEase } }}
//                         exit={{ x: direction > 0 ? -cardSize : cardSize, opacity: 0, transition: { duration: 0.55, ease: smoothEase } }}
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
//                 // DESKTOP: render 5 cards always and animate their x positions (no pop)
//                 <div
//                   className="relative flex items-center justify-center"
//                   style={{
//                     minHeight: cardSize + 40,
//                     width: '100%',
//                     position: 'relative'
//                   }}
//                 >
//                   {(() => {
//                     // spacing controls how far cards travel and overlap
//                     const spacing = Math.round(cardSize * 0.6); // tweak this to increase/decrease overlap
//                     // offsets in px for leftEdge, left, center, right, rightEdge
//                     const offsets = [
//                       -2 * spacing, // leftEdge
//                       -1 * spacing, // left
//                       0,            // center
//                       1 * spacing,  // right
//                       2 * spacing,  // rightEdge
//                     ];

//                     // sizes for computing left positions (kept for readability only)
//                     const centerSize = cardSize;
//                     const sideSize = Math.floor(cardSize * 0.85);
//                     const edgeSize = Math.floor(cardSize * 0.7);

//                     // transitions for smooth movement
//                     // const smoothTransition = {
//                     //   duration: 0.72,
//                     //   ease: smoothEase,
//                     //   type: 'tween' as const
//                     // };
//                     // slower, smoother glide
//                   const smoothTransition = {
//                     duration: 1.1,                       // was 0.72 -> slower
//                     ease: [0.2, 0.8, 0.2, 1] as [number,number,number,number], // softer easeInOut
//                     type: 'tween' as const,
//                   };


//                     // helper to compute dynamic zIndex and scale based on distance from center
//                     const getVisualProps = (posIndex: number) => {
//                       // posIndex: 0:leftEdge 1:left 2:center 3:right 4:rightEdge
//                       const dist = Math.abs(posIndex - 2); // distance from center index 2
//                       const scale = dist === 0 ? 1 : dist === 1 ? 0.88 : 0.72;
//                       const opacity = dist === 0 ? 1 : dist === 1 ? 0.8 : 0.6;
//                       const zIndex = dist === 0 ? 50 : dist === 1 ? 40 : 30;
//                       return { scale, opacity, zIndex };
//                     };

//                     // position index order and their corresponding story index
//                     const posAndStory = [
//                       { pos: 'leftEdge', storyIndex: leftEdgeIndex, posIndex: 0 },
//                       { pos: 'left', storyIndex: leftIndex, posIndex: 1 },
//                       { pos: 'center', storyIndex: centerIndex, posIndex: 2 },
//                       { pos: 'right', storyIndex: rightIndex, posIndex: 3 },
//                       { pos: 'rightEdge', storyIndex: rightEdgeIndex, posIndex: 4 },
//                     ];

//                     // For smooth looping: animate each container's translateX based on offsets
//                     return posAndStory.map(({ pos, storyIndex, posIndex }) => {
//                       const { scale, opacity, zIndex } = getVisualProps(posIndex);
//                       // compute left so cards are centered relative to container center
//                       const cardWidth = pos === 'center' ? centerSize : (pos === 'left' || pos === 'right') ? sideSize : edgeSize;
//                       const baseLeft = `calc(50% - ${cardWidth / 2}px)`;
//                       // we'll animate using translateX so 'left' stays centered
//                       return (
//                         <motion.div
//                           key={`${pos}-${storyIndex}`}
//                           animate={{
//                             x: offsets[posIndex],
//                             // keep subtle vertical alignment difference for depth (optional)
//                             y: posIndex === 2 ? -2 : posIndex === 1 || posIndex === 3 ? 0 : 2,
//                           }}
//                           transition={smoothTransition}
//                           style={{
//                             position: 'absolute',
//                             left: baseLeft,
//                             zIndex,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             pointerEvents: pos === 'center' ? 'auto' : 'none'
//                           }}
//                         >
//                           {/* Wrap Card in another motion to animate scale & opacity smoothly */}
//                           <motion.div
//                             animate={{ scale, opacity }}
//                             transition={smoothTransition}
//                             style={{ display: 'inline-block' }}
//                           >
//                             <Card story={stories[storyIndex]} position={pos as any} />
//                           </motion.div>
//                         </motion.div>
//                       );
//                     });
//                   })()}
//                 </div>
//               )}
//             </div>

//             <motion.button
//               onClick={() => {
//                 pauseRef.current = true;
//                 prev();
//                 setTimeout(() => (pauseRef.current = false), 1000);
//               }}
//               aria-label="Previous"
//               whileHover={{ scale: 1.15, x: -3 }}
//               whileTap={{ scale: 0.95 }}
//               className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-2xl z-40 focus:outline-none backdrop-blur-sm"
//               style={{
//                 background: PRIMARY,
//                 boxShadow: '0 15px 40px rgba(22,130,135,0.4)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//               }}
//             >
//               <motion.div
//                 animate={{ x: [0, -3, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </motion.div>
//             </motion.button>
//             <motion.button
//               onClick={() => {
//                 pauseRef.current = true;
//                 next();
//                 setTimeout(() => (pauseRef.current = false), 1000);
//               }}
//               aria-label="Next"
//               whileHover={{ scale: 1.15, x: 3 }}
//               whileTap={{ scale: 0.95 }}
//               className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-2xl z-40 focus:outline-none backdrop-blur-sm"
//               style={{
//                 background: PRIMARY,
//                 boxShadow: '0 15px 40px rgba(22,130,135,0.4)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//               }}
//             >
//               <motion.div
//                 animate={{ x: [0, 3, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </motion.div>
//             </motion.button>

//             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40">
//               {stories.map((_, i) => (
//                 <motion.button
//                   key={i}
//                   onClick={() => {
//                     setDirection(i > currentIndex ? 1 : -1);
//                     setCurrentIndex(i);
//                     pauseRef.current = true;
//                     setTimeout(() => (pauseRef.current = false), 1000);
//                   }}
//                   aria-label={`Go to story ${i + 1}`}
//                   whileHover={{ scale: 1.3 }}
//                   whileTap={{ scale: 0.9 }}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     i === currentIndex ? 'w-8' : 'w-2'
//                   }`}
//                   animate={{
//                     width: i === currentIndex ? 32 : 8,
//                     opacity: i === currentIndex ? 1 : 0.5,
//                   }}
//                   style={{
//                     background: i === currentIndex ? PRIMARY : 'rgba(22,130,135,0.3)',
//                     boxShadow: i === currentIndex
//                       ? '0 0 10px rgba(22,130,135,0.5)'
//                       : 'none',
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

//   // slower, gentler easing
//   const smoothEase: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

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
//     }, 3700); // a longer pause between automatic moves
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
//     const leftEdgeIndex = (currentIndex - 2 + stories.length) % stories.length;
//     const leftIndex = (currentIndex - 1 + stories.length) % stories.length;
//     const centerIndex = currentIndex;
//     const rightIndex = (currentIndex + 1) % stories.length;
//     const rightEdgeIndex = (currentIndex + 2) % stories.length;
//     return { leftEdgeIndex, leftIndex, centerIndex, rightIndex, rightEdgeIndex };
//   };
//   const { leftEdgeIndex, leftIndex, centerIndex, rightIndex, rightEdgeIndex } = getVisibleIndices();

//   // Card visual component kept same design; no change to visuals
//   const CardVisual = ({ story, isCenter }: { story: Story; isCenter: boolean }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     const baseSize = cardSize;
//     const centerSize = baseSize;
//     const sideSize = Math.floor(baseSize * 0.85);
//     const edgeSize = Math.floor(baseSize * 0.7);

//     const size = isCenter ? centerSize : (isHovered ? sideSize : (isCenter ? centerSize : sideSize));
//     const baseScale = isCenter ? 1 : 0.88;
//     const hoverScale = isCenter ? 1.03 : 0.92;

//     return (
//       <motion.article
//         initial={{ scale: baseScale }}
//         animate={{ scale: isHovered ? hoverScale : baseScale }}
//         transition={{ duration: 0.35, ease: smoothEase as any }}
//         onHoverStart={() => !isMobile && setIsHovered(true)}
//         onHoverEnd={() => !isMobile && setIsHovered(false)}
//         className="relative rounded-3xl shadow-2xl flex-shrink-0 overflow-hidden cursor-pointer"
//         style={{
//           width: size,
//           height: size,
//           borderRadius: 24,
//           background: PRIMARY,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: isCenter
//             ? '0 30px 80px rgba(22,130,135,0.5), 0 0 50px rgba(22,130,135,0.3)'
//             : '0 20px 50px rgba(22,130,135,0.35)',
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
//           }}
//         />
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background: isCenter
//               ? 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.4) 100%)'
//               : 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0,0,0,0.3) 100%)',
//             borderRadius: 24,
//           }}
//         />
//         {/* <div className="absolute top-3 right-3 z-20">
//           <div
//             className="px-3 py-1 rounded-full border border-white/40 backdrop-blur-lg text-xs shadow-xl"
//             style={{ background: 'rgba(22,130,135,0.9)' }}
//           >
//             <p className="text-white font-semibold drop-shadow-md">{story.location}</p>
//           </div>
//         </div> */}

//         {/* {isCenter && (
//           <div className="absolute bottom-3 left-3 right-3 z-20">
//             <div
//               className="px-4 py-2.5 rounded-xl border border-white/40 backdrop-blur-lg shadow-2xl"
//               style={{ background: 'rgba(22,130,135,0.92)' }}
//             >
//               <p className="text-white font-bold text-sm drop-shadow-md mb-0.5">{story.name}</p>
//               <p className="text-white/95 text-xs drop-shadow">{story.achievement} {story.rank}</p>
//             </div>
//           </div>
//         )} */}
//       </motion.article>
//     );
//   };

//   // desktop transition for the outer position wrappers - longer duration
//   const outerTransition = { duration: 1.2, ease: smoothEase as any, type: 'tween' as const };

//   return (
//     <section
//       id="success"
//       className="py-16"
//       style={{ background: 'linear-gradient(180deg,#eaf8fb,#ffffff)', overflowX: 'hidden', overflowY: 'visible' }}
//       aria-label="Success stories carousel"
//     >
//       <div className="container mx-auto px-4 sm:px-6">
//         <h2
//           className="text-3xl sm:text-4xl font-extrabold text-center mb-14 drop-shadow"
//           style={{ color: PRIMARY, letterSpacing: 1 }}
//         >
//           RESULTS
//         </h2>
//         <div className="relative w-full max-w-7xl mx-auto">
//           <div
//             className="relative"
//             style={{ overflow: 'visible' }}
//             onMouseEnter={() => (pauseRef.current = true)}
//             onMouseLeave={() => (pauseRef.current = false)}
//             role="region"
//             aria-roledescription="carousel"
//             aria-label="Student success stories"
//           >
//             <div className="flex items-center justify-center py-8 w-full">
//               {isMobile ? (
//                 // MOBILE: single card with smoother timings
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
//                         initial={{ x: direction > 0 ? cardSize : -cardSize, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1, transition: { duration: 0.9, ease: smoothEase } }}
//                         exit={{ x: direction > 0 ? -cardSize : cardSize, opacity: 0, transition: { duration: 0.75, ease: smoothEase } }}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           position: 'absolute',
//                           left: 0,
//                           top: 0,
//                         }}
//                       >
//                         <CardVisual story={stories[currentIndex]} isCenter />
//                       </motion.div>
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               ) : (
//                 // DESKTOP: 5 position wrappers (keys are fixed positions -> NO remount)
//                 <div
//                   className="relative flex items-center justify-center"
//                   style={{
//                     minHeight: cardSize + 40,
//                     width: '100%',
//                     position: 'relative'
//                   }}
//                 >
//                   {(() => {
//                     const spacing = Math.round(cardSize * 0.55); // tweak if needed
//                     const offsets = [
//                       -2 * spacing,
//                       -1 * spacing,
//                       0,
//                       1 * spacing,
//                       2 * spacing,
//                     ];
//                     const centerSize = cardSize;
//                     const sideSize = Math.floor(cardSize * 0.85);
//                     const edgeSize = Math.floor(cardSize * 0.7);

//                     // fixed positions array (kept constant so outer containers don't remount)
//                     const positions: Array<{ name: string; storyIndex: number; posIndex: number }> = [
//                       { name: 'leftEdge', storyIndex: leftEdgeIndex, posIndex: 0 },
//                       { name: 'left', storyIndex: leftIndex, posIndex: 1 },
//                       { name: 'center', storyIndex: centerIndex, posIndex: 2 },
//                       { name: 'right', storyIndex: rightIndex, posIndex: 3 },
//                       { name: 'rightEdge', storyIndex: rightEdgeIndex, posIndex: 4 },
//                     ];

//                     return positions.map(({ name, storyIndex, posIndex }) => {
//                       const dist = Math.abs(posIndex - 2);
//                       const scale = dist === 0 ? 1 : dist === 1 ? 0.88 : 0.72;
//                       const opacity = dist === 0 ? 1 : dist === 1 ? 0.8 : 0.6;
//                       const zIndex = dist === 0 ? 50 : dist === 1 ? 40 : 30;
//                       const cardWidth = posIndex === 2 ? centerSize : (posIndex === 1 || posIndex === 3) ? sideSize : edgeSize;
//                       const baseLeft = `calc(50% - ${cardWidth / 2}px)`;

//                       return (
//                         <motion.div
//                           key={name} // <- stable key (no storyIndex here) prevents remount
//                           animate={{
//                             x: offsets[posIndex],
//                             y: posIndex === 2 ? -2 : (posIndex === 1 || posIndex === 3 ? 0 : 2),
//                           }}
//                           transition={outerTransition}
//                           style={{
//                             position: 'absolute',
//                             left: baseLeft,
//                             zIndex,
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             pointerEvents: posIndex === 2 ? 'auto' : 'none'
//                           }}
//                         >
//                           {/* Inner crossfade: only this changes when storyIndex updates */}
//                           <AnimatePresence mode="wait" initial={false}>
//                             <motion.div
//                               key={storyIndex} // inner key will change -> will crossfade
//                               initial={{ opacity: 0, scale: 0.98 }}
//                               animate={{ opacity: opacity, scale }}
//                               exit={{ opacity: 0, scale: 0.98 }}
//                               transition={{ duration: 0.7, ease: smoothEase as any }}
//                               style={{ display: 'inline-block' }}
//                             >
//                               <CardVisual story={stories[storyIndex]} isCenter={posIndex === 2} />
//                             </motion.div>
//                           </AnimatePresence>
//                         </motion.div>
//                       );
//                     });
//                   })()}
//                 </div>
//               )}
//             </div>

//             <motion.button
//               onClick={() => {
//                 pauseRef.current = true;
//                 prev();
//                 setTimeout(() => (pauseRef.current = false), 1000);
//               }}
//               aria-label="Previous"
//               whileHover={{ scale: 1.15, x: -3 }}
//               whileTap={{ scale: 0.95 }}
//               className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-2xl z-40 focus:outline-none backdrop-blur-sm"
//               style={{
//                 background: PRIMARY,
//                 boxShadow: '0 15px 40px rgba(22,130,135,0.4)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//               }}
//             >
//               <motion.div
//                 animate={{ x: [0, -3, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </motion.div>
//             </motion.button>
//             <motion.button
//               onClick={() => {
//                 pauseRef.current = true;
//                 next();
//                 setTimeout(() => (pauseRef.current = false), 1000);
//               }}
//               aria-label="Next"
//               whileHover={{ scale: 1.15, x: 3 }}
//               whileTap={{ scale: 0.95 }}
//               className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-2xl z-40 focus:outline-none backdrop-blur-sm"
//               style={{
//                 background: PRIMARY,
//                 boxShadow: '0 15px 40px rgba(22,130,135,0.4)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//               }}
//             >
//               <motion.div
//                 animate={{ x: [0, 3, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </motion.div>
//             </motion.button>

//             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40">
//               {stories.map((_, i) => (
//                 <motion.button
//                   key={i}
//                   onClick={() => {
//                     setDirection(i > currentIndex ? 1 : -1);
//                     setCurrentIndex(i);
//                     pauseRef.current = true;
//                     setTimeout(() => (pauseRef.current = false), 1000);
//                   }}
//                   aria-label={`Go to story ${i + 1}`}
//                   whileHover={{ scale: 1.3 }}
//                   whileTap={{ scale: 0.9 }}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     i === currentIndex ? 'w-8' : 'w-2'
//                   }`}
//                   animate={{
//                     width: i === currentIndex ? 32 : 8,
//                     opacity: i === currentIndex ? 1 : 0.5,
//                   }}
//                   style={{
//                     background: i === currentIndex ? PRIMARY : 'rgba(22,130,135,0.3)',
//                     boxShadow: i === currentIndex
//                       ? '0 0 10px rgba(22,130,135,0.5)'
//                       : 'none',
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

//   // Smooth cubic-bezier for fluid animations
//   const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

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
//     }, 4000);
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
//     const leftEdgeIndex = (currentIndex - 2 + stories.length) % stories.length;
//     const leftIndex = (currentIndex - 1 + stories.length) % stories.length;
//     const centerIndex = currentIndex;
//     const rightIndex = (currentIndex + 1) % stories.length;
//     const rightEdgeIndex = (currentIndex + 2) % stories.length;
//     return { leftEdgeIndex, leftIndex, centerIndex, rightIndex, rightEdgeIndex };
//   };
//   const { leftEdgeIndex, leftIndex, centerIndex, rightIndex, rightEdgeIndex } = getVisibleIndices();

//   // Card component unchanged (keeps your design)
//   const Card = ({ story, position }: { story: Story; position: 'leftEdge' | 'left' | 'center' | 'right' | 'rightEdge' }) => {
//     const isCenter = position === 'center';
//     const isLeft = position === 'left';
//     const isRight = position === 'right';
//     const [isHovered, setIsHovered] = useState(false);

//     const baseSize = cardSize;
//     const centerSize = baseSize;
//     const sideSize = Math.floor(baseSize * 0.85); // 85% of center
//     const edgeSize = Math.floor(baseSize * 0.7); // 70% of center

//     const size = isCenter ? centerSize : (isLeft || isRight) ? sideSize : edgeSize;

//     const baseScale = isCenter ? 1 : (isLeft || isRight) ? 0.88 : 0.72;
//     const hoverScale = isCenter ? 1.03 : (isLeft || isRight) ? 0.92 : 0.76;
//     const scale = isHovered && !isMobile ? hoverScale : baseScale;

//     const opacity = isCenter ? 1 : (isLeft || isRight) ? 0.8 : 0.6;

//     const zIndex = isCenter ? 50 : (isLeft || isRight) ? 40 : 30;

//     return (
//       <motion.article
//         initial={{ scale: isMobile ? 1 : baseScale, opacity }}
//         animate={{
//           scale: isMobile ? 1 : scale,
//           opacity,
//           filter: isCenter ? 'brightness(1) saturate(1)' : 'brightness(0.8) saturate(0.9)',
//         }}
//         whileHover={!isMobile ? {
//           scale: hoverScale,
//           y: isCenter ? -8 : -4,
//           transition: { duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }
//         } : {}}
//         onHoverStart={() => !isMobile && setIsHovered(true)}
//         onHoverEnd={() => !isMobile && setIsHovered(false)}
//         transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1], type: 'tween' }}
//         className="relative rounded-3xl shadow-2xl flex-shrink-0 overflow-hidden cursor-pointer"
//         style={{
//           width: size,
//           height: size,
//           borderRadius: 24,
//           zIndex,
//           background: PRIMARY,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: isCenter
//             ? '0 30px 80px rgba(22,130,135,0.5), 0 0 50px rgba(22,130,135,0.3)'
//             : (isLeft || isRight)
//               ? '0 20px 50px rgba(22,130,135,0.35)'
//               : '0 12px 35px rgba(22,130,135,0.25)',
//         }}
//         role="group"
//         aria-label={`${story.name} — ${story.achievement}`}
//       >
//         <motion.img
//           src={story.photo}
//           alt={story.name}
//           initial={{ scale: 1 }}
//           animate={{ scale: isHovered && !isMobile && isCenter ? 1.08 : 1 }}
//           transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             borderRadius: 24,
//           }}
//         />
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background: isCenter
//               ? 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.4) 100%)'
//               : 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0,0,0,0.3) 100%)',
//             borderRadius: 24,
//           }}
//         />
//         <motion.div
//           className="absolute top-3 right-3 z-20"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.4 }}
//         >
//           <div
//             className="px-3 py-1 rounded-full border border-white/40 backdrop-blur-lg text-xs shadow-xl"
//             style={{ background: 'rgba(22,130,135,0.9)' }}
//           >
//             <p className="text-white font-semibold drop-shadow-md">{story.location}</p>
//           </div>
//         </motion.div>
//         {isCenter && (
//           <motion.div
//             className="absolute bottom-3 left-3 right-3 z-20"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
//           >
//             <div
//               className="px-4 py-2.5 rounded-xl border border-white/40 backdrop-blur-lg shadow-2xl"
//               style={{ background: 'rgba(22,130,135,0.92)' }}
//             >
//               <p className="text-white font-bold text-sm drop-shadow-md mb-0.5">{story.name}</p>
//               <p className="text-white/95 text-xs drop-shadow">{story.achievement} {story.rank}</p>
//             </div>
//           </motion.div>
//         )}
//       </motion.article>
//     );
//   };

//   return (
//     <section
//       id="success"
//       className="py-16"
//       style={{ background: 'linear-gradient(180deg,#eaf8fb,#ffffff)', overflowX: 'hidden', overflowY: 'visible' }}
//       aria-label="Success stories carousel"
//     >
//       <div className="container mx-auto px-4 sm:px-6">
//         <h2
//           className="text-3xl sm:text-4xl font-extrabold text-center mb-14 drop-shadow"
//           style={{ color: PRIMARY, letterSpacing: 1 }}
//         >
//           RESULTS
//         </h2>
//         <div className="relative w-full max-w-7xl mx-auto">
//           <div
//             className="relative"
//             style={{ overflow: 'visible' }}
//             onMouseEnter={() => (pauseRef.current = true)}
//             onMouseLeave={() => (pauseRef.current = false)}
//             role="region"
//             aria-roledescription="carousel"
//             aria-label="Student success stories"
//           >
//             <div className="flex items-center justify-center py-8 w-full">

//               {/* ORIGINAL DESKTOP/MOBILE CUSTOM LOGIC WAS HERE */}

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper";

// Swiper CSS (you chose option A: import in this file)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export default function SuccessStories(): JSX.Element {
  const PRIMARY = '#168287';

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [cardSize, setCardSize] = useState(320);
  const pauseRef = useRef(false);

  // slower, gentler easing
  const smoothEase: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

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

  // Card visual component (keeps your design, but uses isCenter prop from Swiper)
  const CardVisual = ({ story, isCenter }: { story: Story; isCenter: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseSize = cardSize;
    const centerSize = baseSize;
    const sideSize = Math.floor(baseSize * 0.85);
    const edgeSize = Math.floor(baseSize * 0.7);

    const size = isCenter ? centerSize : sideSize;
    const baseScale = isCenter ? 1 : 0.88;
    const hoverScale = isCenter ? 1.03 : 0.92;

    const opacity = isCenter ? 1 : 0.5;
    const boxShadow = isCenter ? '0 30px 80px rgba(22,130,135,1), 0 0 50px rgba(22,130,135,0.5)' : '0 18px 45px rgba(22,130,135,0.28)';

    return (
      <motion.article
        initial={{ scale: baseScale, opacity }}
        animate={{ scale: isHovered ? hoverScale : baseScale, opacity }}
        transition={{ duration: 0.5, ease: smoothEase as any }}
        onHoverStart={() => !isMobile && setIsHovered(true)}
        onHoverEnd={() => !isMobile && setIsHovered(false)}
        className="relative rounded-3xl flex-shrink-0 overflow-hidden cursor-pointer"
        style={{
          width: size,
          height: size,
          borderRadius: 24,
          background: PRIMARY,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow,
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
            display: 'block',
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: isCenter
              ? 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.38) 100%)'
              : 'linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0,0,0,0.28) 100%)',
            borderRadius: 24,
          }}
        />
        {/* {isCenter && (
          <div
            className="absolute bottom-3 left-3 right-3 z-20"
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="px-4 py-2.5 rounded-xl border border-white/30 backdrop-blur-lg"
              style={{ background: 'rgba(22,130,135,0.88)' }}
            >
              <p className="text-white font-bold text-sm mb-0.5">{story.name}</p>
              <p className="text-white/95 text-xs">{story.achievement} {story.rank}</p>
            </div>
          </div>
        )} */}
      </motion.article>
    );
  };

  return (
    <section
      id="success"
      className="py-16"
      style={{ background: 'linear-gradient(180deg,#eaf8fb,#ffffff)', overflowX: 'hidden', overflowY: 'visible' }}
      aria-label="Success stories carousel"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-14 drop-shadow"
          style={{ color: PRIMARY, letterSpacing: 1 }}
        >
          RESULTS
        </h2>

        <div className="relative w-full max-w-7xl mx-auto">
          {/* Swiper replaces the previous carousel logic. Only this block needed updating. */}
          {/* <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            centeredSlides={true}
            loop={true}
            speed={900} // slower glide
            autoplay={{ delay: 3700, disableOnInteraction: false }}
            slidesPerView={5}
            navigation={{
              nextEl: '.swipe-next',
              prevEl: '.swipe-prev',
            }}
            pagination={{ clickable: true, el: '.swipe-pagination' }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
            }}
            onSlideChange={(swiper: SwiperType) => {
              // keep index in sync with visible center slide (use realIndex for original list index)
              // Because loop=true, center slide is at swiper.realIndex when centeredSlides=true
              setActiveIndex(swiper.realIndex);
            }}
            onSwiper={(swiper: SwiperType) => {
              // initial active
              setActiveIndex(swiper.realIndex || 0);
            }}
            style={{ padding: '24px 0' }}
            aria-live="polite"
          > */}
          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              centeredSlides={true}
              loop={false}
              loopAdditionalSlides={5}   // ensure loop keeps neighbors populated
              speed={900}
              autoplay={{ delay: 3700, disableOnInteraction: false }}
              slidesPerView={3}
              navigation={{
                nextEl: '.swipe-next',
                prevEl: '.swipe-prev',
              }}
              pagination={{ clickable: true, el: '.swipe-pagination' }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 12 },
                640: { slidesPerView: 3, spaceBetween: 16 },
                1024: { slidesPerView: 5, spaceBetween: 24 },
              }}
              onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper: SwiperType) => setActiveIndex(swiper.realIndex || 0)}
              style={{ padding: '24px 0' }}
            >

            {/* Slides */}
            {stories.map((s, idx) => {
              // For visual logic: compute relative distance (optional). We'll mark isCenter by comparing to activeIndex.
              const isCenter = idx === activeIndex;
              return (
                <SwiperSlide key={s.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CardVisual story={s} isCenter={isCenter} />
                </SwiperSlide>
              );
            })}

            {/* Navigation buttons (custom positioned, re-using your chevrons look) */}
            <div
              className="swipe-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-2xl z-40 focus:outline-none backdrop-blur-sm"
              role="button"
              aria-label="Previous"
              style={{
                background: PRIMARY,
                boxShadow: '0 15px 40px rgba(22,130,135,0.4)',
                border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
              }}
              onMouseEnter={() => (pauseRef.current = true)}
              onMouseLeave={() => (pauseRef.current = false)}
            >
              <motion.div animate={{ x: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                <ChevronLeft className="w-6 h-6" />
              </motion.div>
            </div>

            <div
              className="swipe-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-2xl z-40 focus:outline-none backdrop-blur-sm"
              role="button"
              aria-label="Next"
              style={{
                background: PRIMARY,
                boxShadow: '0 15px 40px rgba(22,130,135,0.4)',
                border: '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
              }}
              onMouseEnter={() => (pauseRef.current = true)}
              onMouseLeave={() => (pauseRef.current = false)}
            >
              <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                <ChevronRight className="w-6 h-6" />
              </motion.div>
            </div>

            {/* Pagination container */}
            <div className="swipe-pagination absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-40" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}