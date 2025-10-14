// // export default function GallerySection() {
// //   return (
// //     <section id="gallery" className="py-16 bg-white">
// //       <div className="container mx-auto px-6">
// //         <div className="text-center mb-4">
// //           <h2 className="text-4xl font-bold text-gray-800 mb-2">GALLERY</h2>
         
// //         </div>

// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
// //           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
// //             <div
// //               key={item}
// //               className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
// //             >
// //               <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-300"></div>

// //               <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-300">
// //                 <svg
// //                   className="w-16 h-16 text-gray-400"
// //                   fill="currentColor"
// //                   viewBox="0 0 20 20"
// //                 >
// //                   <path
// //                     fillRule="evenodd"
// //                     d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
// //                     clipRule="evenodd"
// //                   />
// //                 </svg>
// //               </div>

// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

// //               <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
// //                 <p className="text-sm font-semibold">Gallery Image {item}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import React from 'react';

// const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8];
// // If you have real images, replace `null` with the image path per index.
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
//   // duplicate arrays for seamless looping
//   const topRow = [...ITEMS, ...ITEMS];
//   const bottomRow = [...ITEMS, ...ITEMS];

//   return (
//     <section id="gallery" className="py-16 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-6">
//           <h2 className="text-4xl font-bold text-gray-800 mb-2">GALLERY</h2>
//           <p className="text-sm text-gray-500">Our moments and achievements — continuously moving.</p>
//         </div>

//         {/* Inline styles: keyframes + marquee controls */}
//         <style>{`
//           /* marquee animation: move left by 50% (one copy width) */
//           @keyframes marquee-left {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           /* reverse direction */
//           @keyframes marquee-right {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(50%); }
//           }

//           /* helper to pause animation when user hovers / focuses */
//           .marquee-track:hover,
//           .marquee-track:focus-within {
//             animation-play-state: paused;
//           }
//         `}</style>

//         {/* Top row -> scroll left (images move right-to-left) */}
//         <div
//           className="overflow-hidden whitespace-nowrap mb-6"
//           aria-hidden={false}
//           aria-label="Gallery marquee top row"
//         >
//           <div
//             className="marquee-track flex items-center gap-6"
//             style={{
//               // wider tile sizes on md and up; adjust duration for speed
//               animation: 'marquee-left 26s linear infinite',
//               alignItems: 'center',
//               // ensure the inner flex won't wrap and can be measured as 2x set
//               width: 'max-content',
//             }}
//             role="list"
//             tabIndex={0}
//           >
//             {topRow.map((item, idx) => {
//               const originalIndex = (idx % ITEMS.length);
//               const img = IMAGE_MAP[originalIndex];
//               return (
//                 <article
//                   key={`top-${idx}`}
//                   role="listitem"
//                   className="flex-shrink-0 rounded-full overflow-hidden relative group"
//                 >
//                   {/* circle tile sizes responsive */}
//                   <div
//                     className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-100 flex items-center justify-center shadow-lg transition-transform duration-300 transform-gpu group-hover:scale-105"
//                     style={{
//                       borderRadius: '9999px',
//                     }}
//                     aria-hidden
//                   >
//                     {img ? (
//                       <img
//                         src={img}
//                         alt={`Gallery ${originalIndex + 1}`}
//                         className="w-full h-full object-cover rounded-full"
//                         loading="lazy"
//                       />
//                     ) : (
//                       /* placeholder gradient circle */
//                       <div className="w-full h-full rounded-full flex items-center justify-center"
//                         style={{
//                           background:
//                             'linear-gradient(135deg, rgba(32,124,151,0.12), rgba(32,124,151,0.06))',
//                         }}
//                       >
//                         <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" aria-hidden>
//                           <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v11a2 2 0 01-2 2H9l-6 3V5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                       </div>
//                     )}
//                   </div>

//                   {/* overlay caption which slides up on hover */}
//                   <div
//                     className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-xs font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
//                     style={{
//                       background: 'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35))',
//                       borderBottomLeftRadius: '9999px',
//                       borderBottomRightRadius: '9999px',
//                     }}
//                   >
//                     Gallery Image {originalIndex + 1}
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         {/* Bottom row -> scroll right (images move left-to-right): reversed direction */}
//         <div
//           className="overflow-hidden whitespace-nowrap"
//           aria-hidden={false}
//           aria-label="Gallery marquee bottom row"
//         >
//           <div
//             className="marquee-track flex items-center gap-6"
//             style={{
//               animation: 'marquee-right 30s linear infinite',
//               alignItems: 'center',
//               width: 'max-content',
//             }}
//             role="list"
//             tabIndex={0}
//           >
//             {bottomRow.map((item, idx) => {
//               const originalIndex = (idx % ITEMS.length);
//               const img = IMAGE_MAP[originalIndex];
//               return (
//                 <article
//                   key={`bot-${idx}`}
//                   role="listitem"
//                   className="flex-shrink-0 rounded-full overflow-hidden relative group"
//                 >
//                   <div
//                     className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-100 flex items-center justify-center shadow-lg transition-transform duration-300 transform-gpu group-hover:scale-105"
//                     style={{
//                       borderRadius: '9999px',
//                     }}
//                     aria-hidden
//                   >
//                     {img ? (
//                       <img
//                         src={img}
//                         alt={`Gallery ${originalIndex + 1}`}
//                         className="w-full h-full object-cover rounded-full"
//                         loading="lazy"
//                       />
//                     ) : (
//                       <div className="w-full h-full rounded-full flex items-center justify-center"
//                         style={{
//                           background:
//                             'linear-gradient(135deg, rgba(32,124,151,0.08), rgba(32,124,151,0.03))',
//                         }}
//                       >
//                         <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" aria-hidden>
//                           <path d="M4 6h16M4 12h8m-8 6h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                       </div>
//                     )}
//                   </div>

//                   <div
//                     className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-xs font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
//                     style={{
//                       background: 'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35))',
//                       borderBottomLeftRadius: '9999px',
//                       borderBottomRightRadius: '9999px',
//                     }}
//                   >
//                     Gallery Image {originalIndex + 1}
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
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
//   const topRow = [...ITEMS, ...ITEMS]; // for continuous loop
//   const bottomRow = [...ITEMS, ...ITEMS];

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
//           @keyframes marquee-left {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           @keyframes marquee-right {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(50%); }
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

//         {/* === TOP ROW: scrolls left (images move right-to-left) === */}
//         <div className="overflow-hidden mb-8">
//           <div
//             className="marquee-track gap-6"
//             style={{
//               animation: "marquee-left 25s linear infinite",
//             }}
//           >
//             {[...topRow].map((item, idx) => {
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

//         {/* === BOTTOM ROW: scrolls right (images move left-to-right) === */}
//         <div className="overflow-hidden">
//           <div
//             className="marquee-track gap-6"
//             style={{
//               animation: "marquee-right 27s linear infinite",
//             }}
//           >
//             {[...bottomRow].map((item, idx) => {
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
import React from "react";

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

  // Duplicate enough times for smooth looping
  const topRow = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  const bottomRow = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section id="gallery" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">GALLERY</h2>
          <p className="text-sm text-gray-500">
            Our proud memories — moving endlessly in both directions.
          </p>
        </div>

        {/* Animation Keyframes */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee-track {
            width: max-content;
            display: flex;
            align-items: center;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* === TOP ROW === */}
        <div className="overflow-hidden mb-8">
          <div
            className="marquee-track gap-6"
            style={{
              animation: "marquee 25s linear infinite",
            }}
          >
            {topRow.map((item, idx) => {
              const img = IMAGE_MAP[idx % ITEMS.length];
              return (
                <div
                  key={`top-${idx}`}
                  className="relative flex-shrink-0 rounded-full overflow-hidden group"
                >
                  <div
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-200 flex items-center justify-center shadow-lg rounded-full transition-transform duration-300 group-hover:scale-105"
                    style={{
                      border: `3px solid rgba(32,124,151,0.15)`,
                    }}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`Gallery ${item}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="text-gray-400 text-3xl">📸</div>
                    )}
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-xs font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35))",
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
            className="marquee-track gap-6"
            style={{
              animation: "marquee 27s linear infinite reverse", // reverse direction instead of new keyframes
            }}
          >
            {bottomRow.map((item, idx) => {
              const img = IMAGE_MAP[idx % ITEMS.length];
              return (
                <div
                  key={`bot-${idx}`}
                  className="relative flex-shrink-0 rounded-full overflow-hidden group"
                >
                  <div
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-200 flex items-center justify-center shadow-lg rounded-full transition-transform duration-300 group-hover:scale-105"
                    style={{
                      border: `3px solid rgba(32,124,151,0.15)`,
                    }}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`Gallery ${item}`}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="text-gray-400 text-3xl">🎓</div>
                    )}
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-xs font-semibold text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35))",
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
