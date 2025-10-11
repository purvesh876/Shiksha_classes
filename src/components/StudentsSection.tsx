
// export default function StudentsSection() {
//   const institutions = [
//     { name: 'IIT BHU', icon: '🎓' },
//     { name: 'NIT', icon: '⚙️' },
//     { name: 'IIIT', icon: '💻' },
//     { name: 'IIT Delhi', icon: '🏛️' },
//     { name: 'IIT Bombay', icon: '🎯' },
//   ];

//   const stats = [
//     { icon: '👨‍🏫', number: '8', label: 'Expert Faculty' },
//     { icon: '📚', number: '4+', label: 'Total Courses' },
//     { icon: '👥', number: '300+', label: 'Students Managed' },
//     { icon: '💬', number: '2 lacs+', label: 'Online Doubts' },
//   ];

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 overflow-hidden">
//       {/* Background light effects */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300 blur-3xl rounded-full" />
//         <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-teal-400 blur-3xl rounded-full" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div
//           className="
//             bg-[rgba(255,255,255,0.1)]
//             backdrop-blur-xl
//             rounded-3xl
//             p-10
//             border border-[rgba(255,255,255,0.25)]
//             shadow-[0_8px_32px_rgba(0,128,128,0.4)]
//             hover:shadow-[0_12px_48px_rgba(0,128,128,0.6)]
//             transition-shadow duration-500
//           "
//         >
//           <h2 className="text-white text-4xl font-extrabold text-center mb-12 drop-shadow-md">
//             OUR STUDENTS ARE AT
//           </h2>

//           {/* Institutions Grid */}
//           <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
//             {institutions.map((inst, index) => (
//               <div
//                 key={index}
//                 className="
//                   w-28 h-28 rounded-full flex flex-col items-center justify-center
//                   bg-white/20 backdrop-blur-md
//                   border border-teal-300
//                   shadow-lg shadow-teal-400/40
//                   hover:shadow-teal-500/60 hover:scale-110
//                   transition-all duration-500 ease-out
//                   cursor-pointer
//                 "
//               >
//                 <div className="text-3xl mb-1">{inst.icon}</div>
//                 <p className="text-[13px] font-semibold text-white drop-shadow-sm">
//                   {inst.name}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="border-t border-white/30 pt-10">
//             <h3 className="text-white text-3xl font-bold text-center mb-10 drop-shadow-md">
//               WHY WE ARE BEST
//             </h3>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="
//                     group bg-[rgba(255,255,255,0.15)]
//                     backdrop-blur-md
//                     rounded-3xl p-8 text-center
//                     border border-[rgba(0,128,128,0.4)]
//                     shadow-[0_6px_20px_rgba(0,128,128,0.3)]
//                     hover:shadow-[0_12px_40px_rgba(0,128,128,0.5)]
//                     hover:scale-105
//                     transition-all duration-500 ease-out
//                     cursor-pointer
//                   "
//                 >
//                   <div className="text-4xl mb-3">{stat.icon}</div>
//                   <div
//                     className="
//                       text-3xl font-extrabold text-teal-100 mb-1
//                       group-hover:text-white transition-colors duration-300
//                     "
//                   >
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-teal-50 font-medium group-hover:text-white/90">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default function StudentsSection() {
//   const institutions = [
//     { name: 'IIT BHU', icon: '🎓' },
//     { name: 'NIT', icon: '⚙️' },
//     { name: 'IIIT', icon: '💻' },
//     { name: 'IIT Delhi', icon: '🏛️' },
//     { name: 'IIT Bombay', icon: '🎯' },
//   ];

//   const stats = [
//     { icon: '👨‍🏫', number: '8', label: 'Expert Faculty' },
//     { icon: '📚', number: '4+', label: 'Total Courses' },
//     { icon: '👥', number: '300+', label: 'Students Managed' },
//     { icon: '💬', number: '2 lacs+', label: 'Online Doubts' },
//   ];

//   const DEEP_TEAL = '#207C97';

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         {/* Big centered teal box that contains all content */}
//         <div
//           className="mx-auto rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
//           style={{
//             maxWidth: 1200,
//             background: `linear-gradient(180deg, rgba(32,124,151,0.95), rgba(32,124,151,0.92))`,
//             boxShadow: '0 30px 80px rgba(32,124,151,0.18)',
//             border: `1px solid rgba(255,255,255,0.06)`,
//           }}
//         >
//           <div className="text-center mb-8">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
//               OUR STUDENTS ARE AT
//             </h2>
//             <p className="mt-2 text-sm text-teal-100/90">
//               Proud alumni and partner institutions — together we build futures.
//             </p>
//           </div>

//           {/* Inner white panel for content (gives strong contrast and the look in your screenshot) */}
//           <div
//             className="rounded-2xl p-6 md:p-10"
//             style={{
//               background: 'white',
//               boxShadow: 'inset 0 -4px 30px rgba(0,0,0,0.03)',
//             }}
//           >
//             {/* Institutions */}
//             <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
//               {institutions.map((inst, idx) => (
//                 <div
//                   key={idx}
//                   className="flex flex-col items-center justify-center w-28 h-28 rounded-full cursor-pointer transform transition-all duration-300 hover:scale-105"
//                   style={{
//                     background: 'white',
//                     border: `8px solid ${DEEP_TEAL}`, // thick teal frame around each bubble
//                     boxShadow: '0 12px 30px rgba(32,124,151,0.12)',
//                   }}
//                 >
//                   <div className="w-full h-full rounded-full flex flex-col items-center justify-center">
//                     <div className="text-3xl mb-1 select-none">{inst.icon}</div>
//                     <p className="text-xs font-semibold text-[#073f45]">{inst.name}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <hr className="border-t border-gray-200 my-6" />

//             {/* WHY WE ARE BEST (stats) */}
//             <div className="text-center mb-8">
//               <h3 className="text-2xl font-bold text-[#0f3b3f] mb-4">WHY WE ARE BEST</h3>
//               <p className="text-sm text-gray-600 max-w-2xl mx-auto">
//                 Dedicated faculty, tailored courses and a student-first approach.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {stats.map((stat, i) => (
//                 <div
//                   key={i}
//                   className="rounded-2xl p-6 text-center transition-transform duration-300 hover:scale-105"
//                   style={{
//                     background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,248,249,0.98))',
//                     border: `2px solid rgba(32,124,151,0.06)`,
//                     boxShadow: '0 10px 30px rgba(16,60,62,0.06)',
//                   }}
//                 >
//                   <div className="text-3xl mb-3 select-none">{stat.icon}</div>
//                   <div className="text-2xl font-extrabold text-[#083f46] mb-1">{stat.number}</div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function StudentsSection() {
  const institutions = [
    { logo: '/assets/IIT-Roorkee-Logo.png' },
    { logo: '/assets/IIT hyderabad.png' },
    { logo: '/assets/Indian_Institute_of_Technology,_Patna.svg.png' },
    { logo: '/assets/Indian_Institute_of_Technology_Bombay_Logo.svg.png' },
    { logo: '/assets/COEP-Logo.png' },
  ];

  const stats = [
    { icon: '👨‍🏫', number: '8', label: 'Expert Faculty' },
    { icon: '📚', number: '4+', label: 'Total Courses' },
    { icon: '👥', number: '300+', label: 'Students Managed' },
    { icon: '💬', number: '2 lacs+', label: 'Online Doubts' },
  ];

  const DEEP_TEAL = '#207C97';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Outer deep teal box */}
        <div
          className="mx-auto rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          style={{
            maxWidth: 1200,
            background: `linear-gradient(180deg, rgba(32,124,151,0.95), rgba(32,124,151,0.92))`,
            boxShadow: '0 30px 80px rgba(32,124,151,0.18)',
            border: `1px solid rgba(255,255,255,0.06)`,
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              OUR STUDENTS ARE AT
            </h2>
            <p className="mt-2 text-sm text-teal-100/90">
              Proud alumni and partner institutions — together we build futures.
            </p>
          </div>

          {/* Inner white panel */}
          <div
            className="rounded-2xl p-6 md:p-10"
            style={{
              background: 'white',
              boxShadow: 'inset 0 -4px 30px rgba(0,0,0,0.03)',
            }}
          >
            {/* Institutions with full logos */}
            <div className="flex flex-wrap justify-center items-center gap-12 mb-10">
              {institutions.map((inst, idx) => (
                <div
                  key={idx}
                  className="w-28 h-28 rounded-full overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-110"
                  style={{
                    boxShadow: '0 8px 20px rgba(32,124,151,0.15)',
                    backgroundColor: '#fff',
                  }}
                >
                  <img
                    src={inst.logo}
                    alt={`Institution ${idx + 1}`}
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <hr className="border-t border-gray-200 my-6" />

            {/* WHY WE ARE BEST */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#0f3b3f] mb-4">
                WHY WE ARE BEST
              </h3>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Dedicated faculty, tailored courses, and a student-first approach.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center transition-transform duration-300 hover:scale-105"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,248,249,0.98))',
                    border: `2px solid rgba(32,124,151,0.06)`,
                    boxShadow: '0 10px 30px rgba(16,60,62,0.06)',
                  }}
                >
                  <div className="text-3xl mb-3 select-none">{stat.icon}</div>
                  <div className="text-2xl font-extrabold text-[#083f46] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
