


// import { Check } from 'lucide-react';

// interface Course {
//   id: number;
//   title: string;
//   subtitle: string;
//   features: string[];
//   isNew: boolean;
// }

// const courses: Course[] = [
//   {
//     id: 1,
//     title: 'JEE (Main+Advance)',
//     subtitle: 'Joint Entrance Examination',
//     features: [
//       'Live classes from top faculty',
//       'Live test and analysis',
//       'Premium study material',
//     ],
//     isNew: true,
//   },
//   {
//     id: 2,
//     title: 'MHT-CET',
//     subtitle: 'Maharashtra Health and Technical Common Entrance Test',
//     features: [
//       'Live classes from top faculty',
//       'Live test and analysis',
//       'Premium study material',
//     ],
//     isNew: true,
//   },
//   {
//     id: 3,
//     title: 'NEET',
//     subtitle: 'National Eligibility Cum Entrance',
//     features: [
//       'Live classes from top faculty',
//       'Live test and analysis',
//       'Premium study material',
//     ],
//     isNew: false,
//   },
//   {
//     id: 4,
//     title: 'Previse',
//     subtitle: 'Joint Entrance Examination',
//     features: [
//       'Live classes from top faculty',
//       'Live test and analysis',
//       'Premium study material',
//     ],
//     isNew: true,
//   },
// ];

// // Deep teal you chose
// const DEEP_TEAL = '#207C97';

// export default function CoursesSection() {
//   return (
//     <section
//       id="courses"
//       className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
//     >
//       {/* Decorative teal glow elements */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <div
//           className="absolute -top-20 -left-20 w-72 h-72 blur-3xl rounded-full"
//           style={{
//             background: 'linear-gradient(135deg, rgba(32,124,151,0.25), rgba(32,124,151,0.05))',
//           }}
//         />
//         <div
//           className="absolute bottom-0 right-0 w-96 h-96 blur-3xl rounded-full"
//           style={{
//             background: 'linear-gradient(135deg, rgba(32,124,151,0.25), rgba(32,124,151,0.05))',
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#145363] drop-shadow-md">
//           COURSES WE OFFER
//         </h2>

//         {/* Grid layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="rounded-3xl p-[8px] transition-transform duration-300 hover:scale-105"
//               style={{
//                 backgroundColor: DEEP_TEAL,
//                 boxShadow: '0 10px 25px rgba(32,124,151,0.25)',
//               }}
//             >
//               {/* Inner Card */}
//               <div
//                 className="relative rounded-2xl p-8 bg-white backdrop-blur-lg h-full"
//                 style={{
//                   boxShadow: '0 10px 30px rgba(32,124,151,0.12)',
//                 }}
//               >
//                 {/* NEW Badge */}
//                 {course.isNew && (
//                   <span
//                     className="absolute -top-4 left-4 text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse"
//                     style={{
//                       background: `linear-gradient(90deg, ${DEEP_TEAL}, rgba(32,124,151,0.85))`,
//                       color: 'white',
//                       boxShadow: '0 6px 18px rgba(32,124,151,0.25)',
//                     }}
//                   >
//                     NEW
//                   </span>
//                 )}

//                 {/* Course Icon */}
//                 <div
//                   className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center border-4"
//                   style={{
//                     borderColor: DEEP_TEAL,
//                     background: 'white',
//                     boxShadow: '0 10px 20px rgba(32,124,151,0.15)',
//                   }}
//                 >
//                   <span
//                     className="text-2xl font-extrabold"
//                     style={{ color: DEEP_TEAL }}
//                   >
//                     {course.title.charAt(0)}
//                   </span>
//                 </div>

//                 {/* Title & Subtitle */}
//                 <h3 className="text-2xl font-bold text-center text-[#093f46] mb-1">
//                   {course.title}
//                 </h3>
//                 <p className="text-sm text-center text-gray-600 mb-6 italic">
//                   {course.subtitle}
//                 </p>

//                 {/* Features */}
//                 <div className="space-y-3">
//                   {course.features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="flex items-start space-x-3 text-gray-800 group"
//                     >
//                       <div
//                         className="rounded-full p-1.5 transition-colors duration-300"
//                         style={{
//                           background: 'rgba(32,124,151,0.1)',
//                         }}
//                       >
//                         <Check
//                           className="w-4 h-4"
//                           style={{
//                             color: DEEP_TEAL,
//                           }}
//                         />
//                       </div>
//                       <span className="text-sm leading-snug">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Check } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  features: string[];
  
  logo?: string; // path to image in /src/assets/images
}

// Update these logo paths to match the files in your repo
const courses: Course[] = [
  {
    id: 1,
    title: 'JEE (Main+Advance)',
    subtitle: 'Joint Entrance Examination',
    features: ['Live classes from top faculty', 'Live test and analysis', 'Premium study material'],
    
    logo: '/assets/JEE.png',
  },
  {
    id: 2,
    title: 'MHT-CET',
    subtitle: 'Maharashtra Health and Technical Common Entrance Test',
    features: ['Live classes from top faculty', 'Live test and analysis', 'Premium study material'],
    
    logo: '/assets/MHT-CET_logo.png',
  },
  {
    id: 3,
    title: 'NEET',
    subtitle: 'National Eligibility Cum Entrance',
    features: ['Live classes from top faculty', 'Live test and analysis', 'Premium study material'],
    
    logo: '/assets/Neet.png',
  },
  {
    id: 4,
    title: 'Previse',
    subtitle: 'Joint Entrance Examination',
    features: ['Live classes from top faculty', 'Live test and analysis', 'Premium study material'],
    
    logo: '/assets/previse-logo.png',
  },
];

const DEEP_TEAL = '#207C97';

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
    >
      {/* Decorative teal glow elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 blur-3xl rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(32,124,151,0.25), rgba(32,124,151,0.05))',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 blur-3xl rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(32,124,151,0.25), rgba(32,124,151,0.05))',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#145363] drop-shadow-md">
          COURSES WE OFFER
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl p-[8px] transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: DEEP_TEAL,
                boxShadow: '0 10px 25px rgba(32,124,151,0.25)',
              }}
            >
              {/* Inner Card */}
              <div
                className="relative rounded-2xl p-8 bg-white backdrop-blur-lg h-full flex flex-col"
                style={{
                  boxShadow: '0 10px 30px rgba(32,124,151,0.12)',
                }}
              >
                {/* NEW Badge
                {course.isNew && (
                  <span
                    className="absolute -top-4 left-4 text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse"
                    style={{
                      background: `linear-gradient(90deg, ${DEEP_TEAL}, rgba(32,124,151,0.85))`,
                      color: 'white',
                      boxShadow: '0 6px 18px rgba(32,124,151,0.25)',
                    }}
                  >
                    NEW
                  </span>
                )} */}

                {/* Logo Circle */}
                <div
                  className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-white overflow-hidden"
                  style={{
                    border: `4px solid rgba(32,124,151,0.12)`, // subtle ring to separate from colored frame
                    boxShadow: '0 10px 20px rgba(32,124,151,0.08)',
                  }}
                >
                  {course.logo ? (
                    <img
                      src={course.logo}
                      alt={`${course.title} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      // If some images have a lot of empty space, you can change to object-cover
                      // className="w-full h-full object-cover"
                    />
                  ) : (
                    // fallback: first letter
                    <span className="text-2xl font-extrabold" style={{ color: DEEP_TEAL }}>
                      {course.title.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-center text-[#093f46] mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-center text-gray-600 mb-6 italic">
                  {course.subtitle}
                </p>

                {/* Features */}
                <div className="space-y-3 mt-auto">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 text-gray-800 group">
                      <div
                        className="rounded-full p-1.5 transition-colors duration-300 flex-shrink-0"
                        style={{
                          background: 'rgba(32,124,151,0.08)',
                        }}
                      >
                        <Check className="w-4 h-4" style={{ color: DEEP_TEAL }} />
                      </div>
                      <span className="text-sm leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

