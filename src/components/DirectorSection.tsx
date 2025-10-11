// export default function DirectorSection() {
//   return (
//     <section id="faculty" className="py-16 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-4">
//           <h2 className="text-4xl font-bold text-gray-800 mb-2">
//             FROM THE DIRECTORS DESK
//           </h2>
//           <div className="inline-block border-2 border-gray-300 rounded-full px-6 py-1">
//             <span className="text-gray-600 font-medium">ABOUT US</span>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mt-12">
//           <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 flex flex-col items-center justify-center">
//             <div className="relative w-64 h-64 mb-6">
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-3xl transform rotate-6"></div>
//               <div className="relative bg-white rounded-3xl p-8 h-full flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full flex items-center justify-center">
//                     <div className="text-6xl">👨‍💼</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <h3 className="text-2xl font-bold text-gray-800 mb-1">
//               SACHIN JAISWAL
//             </h3>
//             <p className="text-gray-600 mb-4">DIRECTOR, SHIKSHA CLASSES</p>

//             <div className="flex space-x-2 mb-4">
//               <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
//                 B.Tech
//               </span>
//               <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
//                 IIT Delhi
//               </span>
//             </div>

//             <div className="border-t-2 border-gray-300 pt-4 w-full">
//               <p className="text-sm text-gray-700 leading-relaxed">
//                 Welcome to Shiksha Classes! Our mission is to provide world-class education
//                 and mentorship to students aspiring for excellence. With over a decade of
//                 experience in competitive exam preparation, we have helped thousands of
//                 students achieve their dreams of getting into premier institutions. Our
//                 dedicated faculty and comprehensive study materials ensure that every
//                 student receives personalized attention and guidance.
//               </p>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white flex flex-col justify-center">
//             <h3 className="text-3xl font-bold mb-6">ABOUT US</h3>

//             <div className="space-y-4 text-sm leading-relaxed">
//               <p>
//                 The city lights flickered against the dark horizon.
//               </p>
//               <p>
//                 Streets bustled with the energy of a thousand stories unfolding.
//               </p>
//               <p>
//                 Each dream danced under the neon glow of passing cars.
//               </p>
//               <p>
//                 Shadows moved in perfect synchrony with the fast movement.
//               </p>
//               <p>
//                 A quiet hum of the school echoed through the still air.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function DirectorSection() {
//   return (
//     <section
//       id="faculty"
//       className="relative py-20 bg-gradient-to-b from-teal-50 via-white to-teal-50 overflow-hidden"
//     >
//       {/* Teal light background effects */}
//       <div className="absolute inset-0 opacity-25">
//         <div className="absolute -top-20 left-10 w-80 h-80 bg-teal-300 blur-3xl rounded-full"></div>
//         <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-400 blur-3xl rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-3 drop-shadow-md">
//             FROM THE DIRECTOR'S DESK
//           </h2>
          
//         </div>

//         {/* Two-column layout */}
//         <div className="grid md:grid-cols-2 gap-10 mt-12">
//           {/* Director Card */}
//           <div
//             className="
//               relative bg-[rgba(255,255,255,0.2)] backdrop-blur-lg
//               border border-[rgba(0,128,128,0.3)]
//               rounded-3xl p-10 flex flex-col items-center justify-center
//               shadow-[0_8px_32px_rgba(0,128,128,0.25)]
//               hover:shadow-[0_12px_40px_rgba(0,128,128,0.4)]
//               transition-all duration-500 ease-out
//             "
//           >
//             {/* Floating decorative card */}
//             <div className="relative w-64 h-64 mb-6">
//               <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-teal-500 rounded-3xl transform rotate-6 shadow-lg shadow-teal-400/50"></div>
//               <div className="relative bg-white/90 rounded-3xl p-8 h-full flex items-center justify-center backdrop-blur-md border border-teal-100 shadow-inner">
//                 <div className="text-center">
//                   <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-white rounded-full flex items-center justify-center border-2 border-teal-400 shadow-md shadow-teal-300/50">
//                     <div className="text-6xl">👨‍💼</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Director Info */}
//             <h3 className="text-2xl font-bold text-teal-800 mb-1">
//               SACHIN JAISWAL
//             </h3>
//             <p className="text-teal-600 mb-4 text-sm font-medium tracking-wide">
//               DIRECTOR, SHIKSHA CLASSES
//             </p>

//             {/* Tags */}
//             <div className="flex space-x-2 mb-4">
//               <span className="bg-teal-500/90 text-white text-xs px-3 py-1 rounded-full shadow-sm shadow-teal-400/50">
//                 B.Tech
//               </span>
//               <span className="bg-teal-500/90 text-white text-xs px-3 py-1 rounded-full shadow-sm shadow-teal-400/50">
//                 IIT Delhi
//               </span>
//             </div>

//             {/* About Text */}
//             <div className="border-t border-teal-200 pt-4 w-full">
//               <p className="text-sm text-gray-700 leading-relaxed text-center">
//                 Welcome to Shiksha Classes! Our mission is to provide world-class education
//                 and mentorship to students aspiring for excellence. With over a decade of
//                 experience in competitive exam preparation, we have helped thousands of
//                 students achieve their dreams of getting into premier institutions. Our
//                 dedicated faculty and comprehensive study materials ensure that every
//                 student receives personalized attention and guidance.
//               </p>
//             </div>
//           </div>

//           {/* About Us Panel */}
//           <div
//             className="
//               bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700
//               rounded-3xl p-10 text-white flex flex-col justify-center
//               shadow-[0_10px_40px_rgba(0,128,128,0.4)]
//               hover:shadow-[0_16px_60px_rgba(0,128,128,0.6)]
//               transition-all duration-500 ease-out
//             "
//           >
//             <h3 className="text-3xl font-extrabold mb-8 text-center md:text-left">
//               ABOUT US
//             </h3>

//             <div
//   className="
//     space-y-4 text-sm leading-relaxed text-teal-50
//     max-h-64 overflow-y-auto pr-2
//     scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-teal-800/30
//     hover:scrollbar-thumb-teal-300
//   "
// >
//   <p>
//     The foundation of Shiksha Classes is built on excellence, innovation, and
//     dedication toward nurturing the potential of every student.
//   </p>
//   <p>
//     Our mentors bring years of experience and real-world expertise to ensure
//     holistic learning — blending conceptual clarity with practical application.
//   </p>
//   <p>
//     With modern digital tools and personal mentorship, we create a learning
//     environment that inspires curiosity and builds confidence.
//   </p>
//   <p>
//     Every success story of our students fuels our vision — to make quality
//     education accessible, inspiring, and impactful.
//   </p>
//   <p>
//     Join us, and become a part of a journey that shapes futures with integrity
//     and innovation.
//   </p>
// </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function DirectorSection() {
  const DEEP_TEAL = '#207C97';

  return (
    <section
      id="faculty"
      className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
    >
      {/* Background decorative blur shapes */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute -top-20 left-10 w-80 h-80 blur-3xl rounded-full"
          style={{ backgroundColor: 'rgba(32,124,151,0.3)' }}
        ></div>
        <div
          className="absolute bottom-0 right-10 w-96 h-96 blur-3xl rounded-full"
          style={{ backgroundColor: 'rgba(32,124,151,0.4)' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-md"
            style={{ color: DEEP_TEAL }}
          >
            FROM THE DIRECTOR'S DESK
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Director Card */}
          <div
            className="
              relative rounded-3xl p-10 flex flex-col items-center justify-center
              transition-all duration-500 ease-out
              bg-[rgba(255,255,255,0.25)] backdrop-blur-lg
            "
            style={{
              border: `1px solid rgba(32,124,151,0.3)`,
              boxShadow: '0 8px 32px rgba(32,124,151,0.25)',
            }}
          >
            {/* Floating decorative card */}
            <div className="relative w-64 h-64 mb-6">
              <div
                className="absolute inset-0 rounded-3xl transform rotate-6 shadow-lg"
                style={{
                  background: `linear-gradient(135deg, rgba(32,124,151,0.4), rgba(32,124,151,0.6))`,
                  boxShadow: '0 12px 30px rgba(32,124,151,0.25)',
                }}
              ></div>
              <div className="relative bg-white/90 rounded-3xl p-8 h-full flex items-center justify-center backdrop-blur-md border border-[#cfe6ec] shadow-inner">
                <div className="text-center">
                  <div
                    className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #eaf8fb, #ffffff)',
                      border: `2px solid ${DEEP_TEAL}`,
                      boxShadow: '0 6px 18px rgba(32,124,151,0.2)',
                    }}
                  >
                    <div className="text-6xl">👨‍💼</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Director Info */}
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: DEEP_TEAL }}
            >
              SACHIN JAISWAL
            </h3>
            <p
              className="mb-4 text-sm font-medium tracking-wide"
              style={{ color: 'rgba(32,124,151,0.8)' }}
            >
              DIRECTOR, SHIKSHA CLASSES
            </p>

            {/* Tags */}
            <div className="flex space-x-2 mb-4">
              <span
                className="text-white text-xs px-3 py-1 rounded-full shadow-sm"
                style={{
                  backgroundColor: DEEP_TEAL,
                  boxShadow: '0 4px 10px rgba(32,124,151,0.4)',
                }}
              >
                 MATHS
              </span>
              <span
                className="text-white text-xs px-3 py-1 rounded-full shadow-sm"
                style={{
                  backgroundColor: DEEP_TEAL,
                  boxShadow: '0 4px 10px rgba(32,124,151,0.4)',
                }}
              >
                 PHYSICS
              </span>
            </div>

            {/* About Text */}
            <div
              className="border-t pt-4 w-full"
              style={{ borderColor: 'rgba(32,124,151,0.2)' }}
            >
              <p className="text-sm text-gray-700 leading-relaxed text-center">
                Welcome to Shiksha Classes! Our mission is to provide world-class
                education and mentorship to students aspiring for excellence. With
                over a decade of experience in competitive exam preparation, we have
                helped thousands of students achieve their dreams of getting into
                premier institutions. Our dedicated faculty and comprehensive study
                materials ensure that every student receives personalized attention
                and guidance.
              </p>
            </div>
          </div>

          {/* About Us Panel */}
          <div
            className="
              rounded-3xl p-10 text-white flex flex-col justify-center
              transition-all duration-500 ease-out
            "
            style={{
              background: `linear-gradient(135deg, ${DEEP_TEAL}, #145e74)`,
              boxShadow: '0 10px 40px rgba(32,124,151,0.4)',
            }}
          >
            <h3 className="text-3xl font-extrabold mb-8 text-center md:text-left">
              ABOUT US
            </h3>

            <div
              className="
                space-y-4 text-sm leading-relaxed
                max-h-64 overflow-y-auto pr-2
                scrollbar-thin scrollbar-thumb-[#3FA8C0] scrollbar-track-[#1d5d70]/30
                hover:scrollbar-thumb-[#6FC3D2]
              "
            >
              <p>
                The foundation of Shiksha Classes is built on excellence, innovation,
                and dedication toward nurturing the potential of every student.
              </p>
              <p>
                Our mentors bring years of experience and real-world expertise to ensure
                holistic learning — blending conceptual clarity with practical
                application.
              </p>
              <p>
                With modern digital tools and personal mentorship, we create a learning
                environment that inspires curiosity and builds confidence.
              </p>
              <p>
                Every success story of our students fuels our vision — to make quality
                education accessible, inspiring, and impactful.
              </p>
              <p>
                Join us, and become a part of a journey that shapes futures with
                integrity and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
