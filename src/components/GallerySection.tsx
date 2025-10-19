
// import React from "react";

// const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8];

// // Replace these with actual image paths from your /src/assets folder
// const IMAGE_MAP: (string | null)[] = [
//   null, // '/assets/gallery1.jpg'
//   null, // '/assets/gallery2.jpg'
//   null, // '/assets/gallery3.jpg'
//   null,
//   null,
//   null,
//   null,
//   null,
// ];

// export default function GallerySection() {
//   const DEEP_TEAL = "#207C97";

//   // Duplicate enough times for smooth looping
//   const topRow = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
//   const bottomRow = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

//   return (
//     <section id="gallery" className="py-16 bg-white overflow-hidden">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-6">
//           <h2 className="text-4xl font-bold text-gray-800 mb-2">GALLERY</h2>
//           <p className="text-sm text-gray-500">
//             Our proud memories — moving endlessly in both directions.
//           </p>
//         </div>

//         {/* Animation Keyframes */}
//         <style>{`
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }

//           .marquee-track {
//             width: max-content;
//             display: flex;
//             align-items: center;
//           }

//           .marquee-track:hover {
//             animation-play-state: paused;
//           }
//         `}</style>

//         {/* === TOP ROW === */}
//         <div className="overflow-hidden mb-8">
//           <div
//             className="marquee-track gap-6"
//             style={{
//               animation: "marquee 25s linear infinite",
//             }}
//           >
//             {topRow.map((item, idx) => {
//               const img = IMAGE_MAP[idx % ITEMS.length];
//               return (
//                 <div
//                   key={`top-${idx}`}
//                   className="relative flex-shrink-0 rounded-full overflow-hidden group"
//                 >
//                   <div
//                     className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-200 flex items-center justify-center shadow-lg rounded-full transition-transform duration-300 group-hover:scale-105"
//                     style={{
//                       border: `3px solid rgba(32,124,151,0.15)`,
//                     }}
//                   >
//                     {img ? (
//                       <img
//                         src={img}
//                         alt={`Gallery ${item}`}
//                         className="w-full h-full object-cover rounded-full"
//                       />
//                     ) : (
//                       <div className="text-gray-400 text-3xl">📸</div>
//                     )}
//                   </div>

//                   <div
//                     className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-xs font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
//                     style={{
//                       background:
//                         "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35))",
//                       borderBottomLeftRadius: "9999px",
//                       borderBottomRightRadius: "9999px",
//                     }}
//                   >
//                     Gallery Image {item}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* === BOTTOM ROW === */}
//         <div className="overflow-hidden">
//           <div
//             className="marquee-track gap-6"
//             style={{
//               animation: "marquee 27s linear infinite reverse", // reverse direction instead of new keyframes
//             }}
//           >
//             {bottomRow.map((item, idx) => {
//               const img = IMAGE_MAP[idx % ITEMS.length];
//               return (
//                 <div
//                   key={`bot-${idx}`}
//                   className="relative flex-shrink-0 rounded-full overflow-hidden group"
//                 >
//                   <div
//                     className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-200 flex items-center justify-center shadow-lg rounded-full transition-transform duration-300 group-hover:scale-105"
//                     style={{
//                       border: `3px solid rgba(32,124,151,0.15)`,
//                     }}
//                   >
//                     {img ? (
//                       <img
//                         src={img}
//                         alt={`Gallery ${item}`}
//                         className="w-full h-full object-cover rounded-full"
//                       />
//                     ) : (
//                       <div className="text-gray-400 text-3xl">🎓</div>
//                     )}
//                   </div>

//                   <div
//                     className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-xs font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
//                     style={{
//                       background:
//                         "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35))",
//                       borderBottomLeftRadius: "9999px",
//                       borderBottomRightRadius: "9999px",
//                     }}
//                   >
//                     Gallery Image {item}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useState } from "react";

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8];

// Replace these with actual image paths from your /src/assets folder
const IMAGE_MAP: (string | null)[] = [
  null, // '/assets/gallery1.jpg'
  null, // '/assets/gallery2.jpg'
  null, // '/assets/gallery3.jpg'
  null,
  null,
  null,
  null,
  null,
];

export default function GallerySection() {
  const DEEP_TEAL = "#207C97";
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate for smooth looping
  const topRow = [...ITEMS, ...ITEMS, ...ITEMS];
  const bottomRow = [...ITEMS, ...ITEMS, ...ITEMS];

  const handleMouseEnter = () => {
    setIsPaused(true);
    
    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    // Resume after 2 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  return (
    <section id="gallery" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">GALLERY</h2>
          <p className="text-sm text-gray-500">
            Our proud memories — moving endlessly in both directions.
          </p>
        </div>

        {/* Animation Keyframes */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }

          .marquee-track {
            width: max-content;
            display: flex;
            align-items: center;
            animation-play-state: running;
          }

          .marquee-track.paused {
            animation-play-state: paused;
          }
        `}</style>

        {/* === TOP ROW === */}
        <div className="overflow-hidden mb-10">
          <div
            className={`marquee-track gap-8 ${isPaused ? 'paused' : ''}`}
            style={{
              animation: "marquee 50s linear infinite",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {topRow.map((item, idx) => {
              const img = IMAGE_MAP[idx % ITEMS.length];
              return (
                <div
                  key={`top-${idx}`}
                  className="relative flex-shrink-0 rounded-full overflow-hidden group cursor-pointer"
                >
                  <div
                    className="w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gray-200 flex items-center justify-center shadow-xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    style={{
                      border: `4px solid rgba(32,124,151,0.2)`,
                    }}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`Gallery ${item}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="text-gray-400 text-6xl">📸</div>
                    )}
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white text-sm font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
                      borderBottomLeftRadius: "9999px",
                      borderBottomRightRadius: "9999px",
                    }}
                  >
                    Gallery Image {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === BOTTOM ROW === */}
        <div className="overflow-hidden">
          <div
            className={`marquee-track gap-8 ${isPaused ? 'paused' : ''}`}
            style={{
              animation: "marquee 55s linear infinite reverse",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {bottomRow.map((item, idx) => {
              const img = IMAGE_MAP[idx % ITEMS.length];
              return (
                <div
                  key={`bot-${idx}`}
                  className="relative flex-shrink-0 rounded-full overflow-hidden group cursor-pointer"
                >
                  <div
                    className="w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gray-200 flex items-center justify-center shadow-xl rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    style={{
                      border: `4px solid rgba(32,124,151,0.2)`,
                    }}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`Gallery ${item}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="text-gray-400 text-6xl">🎓</div>
                    )}
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white text-sm font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
                      borderBottomLeftRadius: "9999px",
                      borderBottomRightRadius: "9999px",
                    }}
                  >
                    Gallery Image {item}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
