









// import React, { useRef, useState, useEffect } from 'react';

// export default function DirectorSection() {
//   const PRIMARY = '#168287';
//   const PRIMARY_DARK = '#11616a';
//   const [expanded, setExpanded] = useState(false);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = contentRef.current;
//     if (el) {
//       if (expanded) {
//         const scrollHeight = el.scrollHeight;
//         el.style.maxHeight = `${scrollHeight}px`;
//       } else {
//         el.style.maxHeight = '180px';
//       }
//     }
//   }, [expanded]);

//   return (
//     <section
//       id="faculty"
//       className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
//     >
//       {/* Background decorative blur */}
//       <div className="absolute inset-0 opacity-25 pointer-events-none">
//         <div
//           className="absolute -top-20 left-10 w-80 h-80 blur-3xl rounded-full"
//           style={{ backgroundColor: 'rgba(22,130,135,0.3)' }}
//         />
//         <div
//           className="absolute bottom-0 right-10 w-96 h-96 blur-3xl rounded-full"
//           style={{ backgroundColor: 'rgba(22,130,135,0.4)' }}
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2
//             className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-md"
//             style={{ color: PRIMARY_DARK }}
//           >
//             ABOUT
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">
//           {/* Director Card */}
//           <div
//             className="relative rounded-3xl p-10 flex flex-col items-center bg-[rgba(255,255,255,0.25)] backdrop-blur-lg"
//             style={{
//               border: `1px solid rgba(22,130,135,0.3)`,
//               boxShadow: '0 8px 32px rgba(22,130,135,0.25)',
//             }}
//           >
//             <div className="relative mb-6">
//               <div
//                 className="absolute inset-0 rounded-3xl transform rotate-6 shadow-lg"
//                 style={{
//                   width: 256,
//                   height: 256,
//                   background: `linear-gradient(135deg, rgba(22,130,135,0.4), rgba(22,130,135,0.6))`,
//                   boxShadow: '0 12px 30px rgba(22,130,135,0.25)',
//                   top: -12,
//                   left: '50%',
//                   transform: 'translateX(-50%) rotate(6deg)',
//                 }}
//               />
//               <div
//                 className="relative bg-white/90 rounded-3xl p-6 flex items-center justify-center backdrop-blur-md border border-[#cfe6ec] shadow-inner"
//                 style={{ width: 256, height: 256 }}
//               >
//                 <div
//                   className="rounded-full overflow-hidden flex items-center justify-center"
//                   style={{
//                     width: 220,
//                     height: 220,
//                     border: `3px solid ${PRIMARY}`,
//                     boxShadow: '0 6px 18px rgba(22,130,135,0.18)',
//                   }}
//                 >
//                   <img
//                     src="/assets/Jaiswal-sir.jpg"
//                     alt="Sachin Jaiswal - Director"
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                     onError={(e) => {
//                       (e.currentTarget as HTMLImageElement).style.display = 'none';
//                       const parent = (e.currentTarget as HTMLImageElement).parentElement;
//                       if (parent) {
//                         const span = document.createElement('span');
//                         span.textContent = 'SJ';
//                         span.style.color = PRIMARY;
//                         span.style.fontWeight = '700';
//                         span.style.fontSize = '1.5rem';
//                         parent.appendChild(span);
//                       }
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <h3 className="text-2xl font-bold mb-1" style={{ color: PRIMARY_DARK }}>
//               SACHIN JAISWAL
//             </h3>
//             <p
//               className="mb-4 text-sm font-medium tracking-wide text-center"
//               style={{ color: 'rgba(22,130,135,0.8)' }}
//             >
//               DIRECTOR, SHIKSHA CLASSES
//             </p>

//             {/* FROM THE DESK OF DIRECTOR section */}
//             <div
//               className="w-full bg-white/60 rounded-2xl p-4 mt-4 text-sm leading-relaxed text-[#11616a] scrollbar-thin scrollbar-thumb-[#168287]/60 scrollbar-track-transparent"
//               style={{
//                 maxHeight: '220px',
//                 overflowY: 'auto',
//                 boxShadow: 'inset 0 0 10px rgba(22,130,135,0.1)',
//                 border: `1px solid ${PRIMARY}`,
//               }}
//             >
//               <h4 className="text-lg font-extrabold mb-3 text-center" style={{ color: PRIMARY_DARK }}>
//                 FROM THE DESK OF DIRECTOR
//               </h4>
//               <p>Dear Students, Parents, and Well-Wishers,</p>
//               <p>
//                 It is with great pleasure and immense pride that I welcome you to Shiksha Classes, Bhandara. As the Director of this esteemed educational institute, I extend my heartfelt gratitude to all those who have been a part of our journey so far, be it our dedicated faculty, hardworking students, supportive parents, or our well-wishers in the community.
//               </p>
//               <p>
//                 Since our inception in 2013, Shiksha Classes has remained committed to its core purpose - to provide top-quality coaching and create a positive impact on the lives of young learners. Our belief in the transformative power of education drives us to continuously strive for excellence and innovative approaches to learning.
//               </p>
//               <p>
//                 Education is not merely the memorization of facts; it is a journey of exploration, self-discovery, and personal growth. At Shiksha Classes, we recognize the potential in each of our students and endeavor to create an environment where they can flourish academically, intellectually, and emotionally.
//               </p>
//               <p>
//                 Our team of experienced and passionate educators is the backbone of Shiksha Classes. They are not just teachers; they are mentors, guiding and inspiring students to overcome challenges and become confident individuals. We take pride in nurturing an atmosphere of mutual respect, where every student's unique needs are recognized and catered to.
//               </p>
//               <p>
//                 As we march ahead, we embrace innovation in education and stay updated with the latest teaching methodologies and technological advancements. Our focus is not just on preparing students for exams but on instilling critical thinking skills and a love for learning that will serve them well throughout their lives.
//               </p>
//               <p>
//                 Shiksha Classes has seen numerous success stories over the years. Our students' achievements in competitive exams and board examinations have made us proud and reaffirmed our belief in the power of education to transform lives.
//               </p>
//               <p>
//                 To the parents and guardians, I want to express my gratitude for entrusting us with your children's education. We understand the responsibility you have bestowed upon us, and we are committed to providing the best possible support and guidance to help them succeed.
//               </p>
//               <p>
//                 To the students, I always say, 'Believe & Achieve'. Your journey with us at Shiksha Classes will be filled with challenges, hard work, and perseverance, but know that we are here with you every step of the way. Together, we will overcome obstacles and celebrate your achievements.
//               </p>
//               <p>
//                 To the community, I extend my heartfelt appreciation for your continuous support and encouragement. Your belief in our mission strengthens our resolve to make a positive impact on education and contribute to society.
//               </p>
//               <p>
//                 In conclusion, I invite all aspiring students to join Shiksha Classes, Bhandara, and be a part of a vibrant educational family. Together, let us continue our pursuit of excellence, shaping young minds, and inspiring success.
//               </p>
//               <p>
//                 Wishing you all the very best!
//               </p>
//               <p>Sincerely,</p>
//               <p>Sachin Jaiswal,</p>
//               <p>Director</p>
//               <p>Shiksha Classes, Bhandara</p>
//             </div>
//           </div>

//           {/* About Section */}
//           <div
//             className="rounded-3xl p-10 text-white flex flex-col transition-all duration-500 ease-out"
//             style={{
//               background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
//               boxShadow: '0 10px 40px rgba(22,130,135,0.4)',
//             }}
//           >
//             <h3 className="text-3xl font-extrabold mb-6 text-center md:text-left">
//               ABOUT US
//             </h3>

//             <div
//               ref={contentRef}
//               className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
//               style={{ maxHeight: '700px' }}
//             >
//               <div className="space-y-4 text-sm leading-relaxed">
//                 <p>
//                   Established in 2013, Shiksha Classes has been a trusted and renowned educational institute in Bhandara, dedicated to empowering students for success in various competitive exams and board examinations. Our commitment to excellence and passion for education have made us a preferred choice among students and parents alike.
//                 </p>
//                 <p className="text-1xl font-extrabold mb-6 text-center md:text-left">
//                   OUR VISION
//                 </p>
//                 <p>
//                   At Shiksha Classes, we envision fostering a learning environment that nurtures young minds, guiding them towards a brighter future. We strive to create a platform where students can explore their potential, develop critical thinking skills, and become well-rounded individuals capable of overcoming any challenge they encounter.
//                 </p>
//                 <p className="text-1xl font-extrabold mb-6 text-center md:text-left">
//                   OUR MISSION
//                 </p>
//                 <p>
//                   Our primary mission is to provide comprehensive coaching for JEE, NEET, and 12th board exams, offering personalized attention to each student. We believe in the power of knowledge and endeavor to equip our students with the finest education and support to achieve their academic and career goals.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 onClick={() => setExpanded(!expanded)}
//                 className="text-white/95 font-semibold text-sm underline hover:text-white transition-colors duration-200 self-start"
//               >
//                 {expanded ? 'View Less ↑' : 'View More ↓'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useRef, useState, useEffect } from 'react';

// export default function DirectorSection() {
//   const PRIMARY = '#168287';
//   const PRIMARY_DARK = '#11616a';
//   const [expanded, setExpanded] = useState(false);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = contentRef.current;
//     if (el) {
//       if (expanded) {
//         const scrollHeight = el.scrollHeight;
//         el.style.maxHeight = `${scrollHeight}px`;
//       } else {
//         el.style.maxHeight = '180px';
//       }
//     }
//   }, [expanded]);

//   return (
//     <section
//       id="faculty"
//       className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
//     >
//       {/* Background decorative blur */}
//       <div className="absolute inset-0 opacity-25 pointer-events-none">
//         <div
//           className="absolute -top-20 left-10 w-80 h-80 blur-3xl rounded-full"
//           style={{ backgroundColor: 'rgba(22,130,135,0.3)' }}
//         />
//         <div
//           className="absolute bottom-0 right-10 w-96 h-96 blur-3xl rounded-full"
//           style={{ backgroundColor: 'rgba(22,130,135,0.4)' }}
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2
//             className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-md"
//             style={{ color: PRIMARY_DARK }}
//           >
//             ABOUT
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">
//           {/* Director Card */}
//           <div
//             className="relative rounded-3xl p-10 flex flex-col items-center bg-[rgba(255,255,255,0.25)] backdrop-blur-lg"
//             style={{
//               border: `1px solid rgba(22,130,135,0.3)`,
//               boxShadow: '0 8px 32px rgba(22,130,135,0.25)',
//             }}
//           >
//             <div className="relative mb-6">
//               <div
//                 className="absolute inset-0 rounded-3xl transform rotate-6 shadow-lg"
//                 style={{
//                   width: 256,
//                   height: 256,
//                   background: `linear-gradient(135deg, rgba(22,130,135,0.4), rgba(22,130,135,0.6))`,
//                   boxShadow: '0 12px 30px rgba(22,130,135,0.25)',
//                   top: -12,
//                   left: '50%',
//                   transform: 'translateX(-50%) rotate(6deg)',
//                 }}
//               />
//               <div
//                 className="relative bg-white/90 rounded-3xl p-6 flex items-center justify-center backdrop-blur-md border border-[#cfe6ec] shadow-inner"
//                 style={{ width: 256, height: 256 }}
//               >
//                 <div
//                   className="rounded-full overflow-hidden flex items-center justify-center"
//                   style={{
//                     width: 220,
//                     height: 220,
//                     border: `3px solid ${PRIMARY}`,
//                     boxShadow: '0 6px 18px rgba(22,130,135,0.18)',
//                   }}
//                 >
//                   <img
//                     src="/assets/Jaiswal-sir.jpg"
//                     alt="Sachin Jaiswal - Director"
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                     onError={(e) => {
//                       (e.currentTarget as HTMLImageElement).style.display = 'none';
//                       const parent = (e.currentTarget as HTMLImageElement).parentElement;
//                       if (parent) {
//                         const span = document.createElement('span');
//                         span.textContent = 'SJ';
//                         span.style.color = PRIMARY;
//                         span.style.fontWeight = '700';
//                         span.style.fontSize = '1.5rem';
//                         parent.appendChild(span);
//                       }
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <h3 className="text-2xl font-bold mb-1" style={{ color: PRIMARY_DARK }}>
//               SACHIN JAISWAL
//             </h3>
//             <p
//               className="mb-4 text-sm font-medium tracking-wide text-center"
//               style={{ color: 'rgba(22,130,135,0.8)' }}
//             >
//               DIRECTOR, SHIKSHA CLASSES
//             </p>

//             {/* FROM THE DESK OF DIRECTOR section */}
//             <div
//               className="w-full bg-white/60 rounded-2xl p-4 mt-4 text-sm leading-relaxed text-[#11616a] scrollbar-thin scrollbar-thumb-[#168287]/60 scrollbar-track-transparent"
//               style={{
//                 maxHeight: '220px',
//                 overflowY: 'auto',
//                 boxShadow: 'inset 0 0 10px rgba(22,130,135,0.1)',
//                 border: `1px solid ${PRIMARY}`,
//               }}
//             >
//               <h4 className="text-lg font-extrabold mb-3 text-center" style={{ color: PRIMARY_DARK }}>
//                 FROM THE DESK OF DIRECTOR
//               </h4>
//               <p>Dear Students, Parents, and Well-Wishers,</p>
//               <p>
//                 It is with great pleasure and immense pride that I welcome you to Shiksha Classes, Bhandara. As the Director of this esteemed educational institute, I extend my heartfelt gratitude to all those who have been a part of our journey so far, be it our dedicated faculty, hardworking students, supportive parents, or our well-wishers in the community.
//               </p>
//               <p>
//                 Since our inception in 2013, Shiksha Classes has remained committed to its core purpose - to provide top-quality coaching and create a positive impact on the lives of young learners. Our belief in the transformative power of education drives us to continuously strive for excellence and innovative approaches to learning.
//               </p>
//               <p>
//                 Education is not merely the memorization of facts; it is a journey of exploration, self-discovery, and personal growth. At Shiksha Classes, we recognize the potential in each of our students and endeavor to create an environment where they can flourish academically, intellectually, and emotionally.
//               </p>
//               <p>
//                 Our team of experienced and passionate educators is the backbone of Shiksha Classes. They are not just teachers; they are mentors, guiding and inspiring students to overcome challenges and become confident individuals. We take pride in nurturing an atmosphere of mutual respect, where every student's unique needs are recognized and catered to.
//               </p>
//               <p>
//                 As we march ahead, we embrace innovation in education and stay updated with the latest teaching methodologies and technological advancements. Our focus is not just on preparing students for exams but on instilling critical thinking skills and a love for learning that will serve them well throughout their lives.
//               </p>
//               <p>
//                 Shiksha Classes has seen numerous success stories over the years. Our students' achievements in competitive exams and board examinations have made us proud and reaffirmed our belief in the power of education to transform lives.
//               </p>
//               <p>
//                 To the parents and guardians, I want to express my gratitude for entrusting us with your children's education. We understand the responsibility you have bestowed upon us, and we are committed to providing the best possible support and guidance to help them succeed.
//               </p>
//               <p>
//                 To the students, I always say, 'Believe & Achieve'. Your journey with us at Shiksha Classes will be filled with challenges, hard work, and perseverance, but know that we are here with you every step of the way. Together, we will overcome obstacles and celebrate your achievements.
//               </p>
//               <p>
//                 To the community, I extend my heartfelt appreciation for your continuous support and encouragement. Your belief in our mission strengthens our resolve to make a positive impact on education and contribute to society.
//               </p>
//               <p>
//                 In conclusion, I invite all aspiring students to join Shiksha Classes, Bhandara, and be a part of a vibrant educational family. Together, let us continue our pursuit of excellence, shaping young minds, and inspiring success.
//               </p>
//               <p>
//                 Wishing you all the very best!
//               </p>
//               <p>Sincerely,</p>
//               <p>Sachin Jaiswal,</p>
//               <p>Director</p>
//               <p>Shiksha Classes, Bhandara</p>
//             </div>
//           </div>

//           {/* About Section */}
//           <div
//             className="rounded-3xl p-10 text-white flex flex-col transition-all duration-500 ease-out"
//             style={{
//               background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
//               boxShadow: '0 10px 40px rgba(22,130,135,0.4)',
//               minHeight: '520px', // <<--- NEW LINE FOR BALANCED HEIGHT
//             }}
//           >
//             <h3 className="text-3xl font-extrabold mb-6 text-center md:text-left">
//               ABOUT US
//             </h3>

//             <div
//               ref={contentRef}
//               className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
//               style={{ maxHeight: '340px' }} // <<--- keep this reasonable, not huge
//             >
//               <div className="space-y-4 text-sm leading-relaxed">
//                 <p>
//                   Established in 2013, Shiksha Classes has been a trusted and renowned educational institute in Bhandara, dedicated to empowering students for success in various competitive exams and board examinations. Our commitment to excellence and passion for education have made us a preferred choice among students and parents alike.
//                 </p>
//                 <p className="text-1xl font-extrabold mb-6 text-center md:text-left">
//                   OUR VISION
//                 </p>
//                 <p>
//                   At Shiksha Classes, we envision fostering a learning environment that nurtures young minds, guiding them towards a brighter future. We strive to create a platform where students can explore their potential, develop critical thinking skills, and become well-rounded individuals capable of overcoming any challenge they encounter.
//                 </p>
//                 <p className="text-1xl font-extrabold mb-6 text-center md:text-left">
//                   OUR MISSION
//                 </p>
//                 <p>
//                   Our primary mission is to provide comprehensive coaching for JEE, NEET, and 12th board exams, offering personalized attention to each student. We believe in the power of knowledge and endeavor to equip our students with the finest education and support to achieve their academic and career goals.
//                 </p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 onClick={() => setExpanded(!expanded)}
//                 className="text-white/95 font-semibold text-sm underline hover:text-white transition-colors duration-200 self-start"
//               >
//                 {expanded ? 'View Less ↑' : 'View More ↓'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useRef } from 'react';

// export default function DirectorSection() {
//   const PRIMARY = '#168287';
//   const PRIMARY_DARK = '#11616a';
//   const contentRef = useRef<HTMLDivElement>(null);

//   return (
//     <section
//       id="faculty"
//       className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
//     >
//       {/* Background decorative blur */}
//       <div className="absolute inset-0 opacity-25 pointer-events-none">
//         <div
//           className="absolute -top-20 left-10 w-80 h-80 blur-3xl rounded-full"
//           style={{ backgroundColor: 'rgba(22,130,135,0.3)' }}
//         />
//         <div
//           className="absolute bottom-0 right-10 w-96 h-96 blur-3xl rounded-full"
//           style={{ backgroundColor: 'rgba(22,130,135,0.4)' }}
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2
//             className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-md"
//             style={{ color: PRIMARY_DARK }}
//           >
//             ABOUT
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">
//           {/* Director Card */}
//           <div
//             className="relative rounded-3xl p-10 flex flex-col items-center bg-[rgba(255,255,255,0.25)] backdrop-blur-lg"
//             style={{
//               border: `1px solid rgba(22,130,135,0.3)`,
//               boxShadow: '0 8px 32px rgba(22,130,135,0.25)',
//             }}
//           >
//             <div className="relative mb-6">
//               <div
//                 className="absolute inset-0 rounded-3xl transform rotate-6 shadow-lg"
//                 style={{
//                   width: 256,
//                   height: 256,
//                   background: `linear-gradient(135deg, rgba(22,130,135,0.4), rgba(22,130,135,0.6))`,
//                   boxShadow: '0 12px 30px rgba(22,130,135,0.25)',
//                   top: -12,
//                   left: '50%',
//                   transform: 'translateX(-50%) rotate(6deg)',
//                 }}
//               />
//               <div
//                 className="relative bg-white/90 rounded-3xl p-6 flex items-center justify-center backdrop-blur-md border border-[#cfe6ec] shadow-inner"
//                 style={{ width: 256, height: 256 }}
//               >
//                 <div
//                   className="rounded-full overflow-hidden flex items-center justify-center"
//                   style={{
//                     width: 220,
//                     height: 220,
//                     border: `3px solid ${PRIMARY}`,
//                     boxShadow: '0 6px 18px rgba(22,130,135,0.18)',
//                   }}
//                 >
//                   <img
//                     src="/assets/Jaiswal-sir.jpg"
//                     alt="Sachin Jaiswal - Director"
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                     onError={(e) => {
//                       (e.currentTarget as HTMLImageElement).style.display = 'none';
//                       const parent = (e.currentTarget as HTMLImageElement).parentElement;
//                       if (parent) {
//                         const span = document.createElement('span');
//                         span.textContent = 'SJ';
//                         span.style.color = PRIMARY;
//                         span.style.fontWeight = '700';
//                         span.style.fontSize = '1.5rem';
//                         parent.appendChild(span);
//                       }
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <h3 className="text-2xl font-bold mb-1" style={{ color: PRIMARY_DARK }}>
//               SACHIN JAISWAL
//             </h3>
//             <p
//               className="mb-4 text-sm font-medium tracking-wide text-center"
//               style={{ color: 'rgba(22,130,135,0.8)' }}
//             >
//               DIRECTOR, SHIKSHA CLASSES
//             </p>

//             {/* FROM THE DESK OF DIRECTOR section */}
//             <div
//               className="w-full bg-white/60 rounded-2xl p-4 mt-4 text-sm leading-relaxed text-[#11616a] scrollbar-thin scrollbar-thumb-[#168287]/60 scrollbar-track-transparent"
//               style={{
//                 maxHeight: '220px',
//                 overflowY: 'auto',
//                 boxShadow: 'inset 0 0 10px rgba(22,130,135,0.1)',
//                 border: `1px solid ${PRIMARY}`,
//               }}
//             >
//               <h4 className="text-lg font-extrabold mb-3 text-center" style={{ color: PRIMARY_DARK }}>
//                 FROM THE DESK OF DIRECTOR
//               </h4>
//               <p>Dear Students, Parents, and Well-Wishers,</p>
//               <p>
//                 It is with great pleasure and immense pride that I welcome you to Shiksha Classes, Bhandara. As the Director of this esteemed educational institute, I extend my heartfelt gratitude to all those who have been a part of our journey so far, be it our dedicated faculty, hardworking students, supportive parents, or our well-wishers in the community.
//               </p>
//               <p>
//                 Since our inception in 2013, Shiksha Classes has remained committed to its core purpose - to provide top-quality coaching and create a positive impact on the lives of young learners. Our belief in the transformative power of education drives us to continuously strive for excellence and innovative approaches to learning.
//               </p>
//               <p>
//                 Education is not merely the memorization of facts; it is a journey of exploration, self-discovery, and personal growth. At Shiksha Classes, we recognize the potential in each of our students and endeavor to create an environment where they can flourish academically, intellectually, and emotionally.
//               </p>
//               <p>
//                 Our team of experienced and passionate educators is the backbone of Shiksha Classes. They are not just teachers; they are mentors, guiding and inspiring students to overcome challenges and become confident individuals. We take pride in nurturing an atmosphere of mutual respect, where every student's unique needs are recognized and catered to.
//               </p>
//               <p>
//                 As we march ahead, we embrace innovation in education and stay updated with the latest teaching methodologies and technological advancements. Our focus is not just on preparing students for exams but on instilling critical thinking skills and a love for learning that will serve them well throughout their lives.
//               </p>
//               <p>
//                 Shiksha Classes has seen numerous success stories over the years. Our students' achievements in competitive exams and board examinations have made us proud and reaffirmed our belief in the power of education to transform lives.
//               </p>
//               <p>
//                 To the parents and guardians, I want to express my gratitude for entrusting us with your children's education. We understand the responsibility you have bestowed upon us, and we are committed to providing the best possible support and guidance to help them succeed.
//               </p>
//               <p>
//                 To the students, I always say, 'Believe & Achieve'. Your journey with us at Shiksha Classes will be filled with challenges, hard work, and perseverance, but know that we are here with you every step of the way. Together, we will overcome obstacles and celebrate your achievements.
//               </p>
//               <p>
//                 To the community, I extend my heartfelt appreciation for your continuous support and encouragement. Your belief in our mission strengthens our resolve to make a positive impact on education and contribute to society.
//               </p>
//               <p>
//                 In conclusion, I invite all aspiring students to join Shiksha Classes, Bhandara, and be a part of a vibrant educational family. Together, let us continue our pursuit of excellence, shaping young minds, and inspiring success.
//               </p>
//               <p>
//                 Wishing you all the very best!
//               </p>
//               <p>Sincerely,</p>
//               <p>Sachin Jaiswal,</p>
//               <p>Director</p>
//               <p>Shiksha Classes, Bhandara</p>
//             </div>
//           </div>

//           {/* About Section */}
//           <div
//             className="rounded-3xl p-10 text-white flex flex-col"
//             style={{
//               background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
//               boxShadow: '0 10px 40px rgba(22,130,135,0.4)',
//               minHeight: 'auto', // auto height to fit content naturally
//             }}
//           >
//             <h3 className="text-3xl font-extrabold mb-6 text-center md:text-left">
//               ABOUT US
//             </h3>

//             <div
//               ref={contentRef}
//               className="overflow-visible"
//               style={{ maxHeight: 'none' }}
//             >
//               <div className="space-y-4 text-sm leading-relaxed">
//                 <p>
//                   Established in 2013, Shiksha Classes has been a trusted and renowned educational institute in Bhandara, dedicated to empowering students for success in various competitive exams and board examinations. Our commitment to excellence and passion for education have made us a preferred choice among students and parents alike.
//                 </p>
//                 <p className="text-1xl font-extrabold mb-6 text-center md:text-left">
//                   OUR VISION
//                 </p>
//                 <p>
//                   At Shiksha Classes, we envision fostering a learning environment that nurtures young minds, guiding them towards a brighter future. We strive to create a platform where students can explore their potential, develop critical thinking skills, and become well-rounded individuals capable of overcoming any challenge they encounter.
//                 </p>
//                 <p className="text-1xl font-extrabold mb-6 text-center md:text-left">
//                   OUR MISSION
//                 </p>
//                 <p>
//                   Our primary mission is to provide comprehensive coaching for JEE, NEET, and 12th board exams, offering personalized attention to each student. We believe in the power of knowledge and endeavor to equip our students with the finest education and support to achieve their academic and career goals.
//                 </p>
//               </div>
//             </div>

//             {/* Removed toggle button */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef } from 'react';

export default function DirectorSection() {
  const PRIMARY = '#168287';
  const PRIMARY_DARK = '#11616a';
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="faculty"
      className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
    >
      {/* Background decorative blur */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div
          className="absolute -top-20 left-10 w-80 h-80 blur-3xl rounded-full"
          style={{ backgroundColor: 'rgba(22,130,135,0.3)' }}
        />
        <div
          className="absolute bottom-0 right-10 w-96 h-96 blur-3xl rounded-full"
          style={{ backgroundColor: 'rgba(22,130,135,0.4)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-md"
            style={{ color: PRIMARY_DARK }}
          >
            ABOUT
          </h2>
        </div>

        {/* ──────────── NEW LAYOUT BEGINS HERE ──────────── */}
        <div className="flex flex-col space-y-16">

          {/* ROW 1 — Building Image + About Section */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT: Building Image */}
            <div
              className="rounded-3xl overflow-hidden shadow-xl bg-white/60 backdrop-blur-lg"
              style={{
                border: `1px solid rgba(22,130,135,0.3)`,
                boxShadow: '0 10px 30px rgba(22,130,135,0.25)',
              }}
            >
              <img
                src="/assets/building.jpg"
                alt="Shiksha Classes Building"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT: ABOUT US */}
            <div
              className="rounded-3xl p-10 text-white flex flex-col"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                boxShadow: '0 10px 40px rgba(22,130,135,0.4)',
              }}
            >
              <h3 className="text-3xl font-extrabold mb-6 text-left">
                ABOUT US
              </h3>

              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Established in 2013, Shiksha Classes has been a trusted and renowned
                  educational institute in Bhandara, dedicated to empowering students for
                  success in competitive exams and board examinations.
                </p>

                <p className="text-1xl font-extrabold">
                  OUR VISION
                </p>
                <p>
                  At Shiksha Classes, we envision fostering a learning environment that
                  nurtures young minds, guiding them towards a brighter future.
                </p>

                <p className="text-1xl font-extrabold">
                  OUR MISSION
                </p>
                <p>
                  Our primary mission is to provide comprehensive coaching for JEE, NEET,
                  and 12th board exams while offering personalized attention to each
                  student.
                </p>
              </div>
            </div>
          </div>

          {/* ROW 2 — Director Message + Jaiswal Sir Image */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT: DIRECTOR'S MESSAGE */}
            <div
              className="w-full bg-white/60 rounded-3xl p-8 text-sm leading-relaxed text-[#11616a] scrollbar-thin scrollbar-thumb-[#168287]/60 scrollbar-track-transparent"
              style={{
                boxShadow: '0 10px 30px rgba(22,130,135,0.15)',
                border: `1px solid ${PRIMARY}`,
              }}
            >
              <h3
                className="text-2xl font-extrabold mb-4 text-left"
                style={{ color: PRIMARY_DARK }}
              >
                FROM THE DESK OF DIRECTOR
              </h3>

              <div className="space-y-4">
                <p>Dear Students, Parents, and Well-Wishers,</p>
                <p>
                  Welcome to Shiksha Classes, Bhandara — a place where passion for
                  education meets a commitment to excellence.
                </p>

                <p>
                  Since 2013, our mission has been to empower young learners with
                  knowledge, discipline, and confidence.
                </p>

                <p>
                  Our dedicated team of educators works tirelessly to mentor students and
                  guide them toward academic and personal success.
                </p>

                <p>
                  At Shiksha Classes, we believe that education is a journey of
                  self-discovery, and we are honored to be part of that journey with you.
                </p>

                <p>Sincerely,</p>
                <p><b>Sachin Jaiswal</b></p>
                <p>Director, Shiksha Classes</p>
              </div>
            </div>

            {/* RIGHT: Jaiswal Sir Image */}
            <div
              className="relative rounded-3xl p-10 flex flex-col items-center bg-[rgba(255,255,255,0.25)] backdrop-blur-lg"
              style={{
                border: `1px solid rgba(22,130,135,0.3)`,
                boxShadow: '0 8px 32px rgba(22,130,135,0.25)',
              }}
            >
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 rounded-3xl transform rotate-6 shadow-lg"
                  style={{
                    width: 256,
                    height: 256,
                    background: `linear-gradient(135deg, rgba(22,130,135,0.4), rgba(22,130,135,0.6))`,
                    boxShadow: '0 12px 30px rgba(22,130,135,0.25)',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%) rotate(6deg)',
                  }}
                />
                <div
                  className="relative bg-white/90 rounded-3xl p-6 flex items-center justify-center backdrop-blur-md border border-[#cfe6ec] shadow-inner"
                  style={{ width: 256, height: 256 }}
                >
                  <div
                    className="rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                      width: 220,
                      height: 220,
                      border: `3px solid ${PRIMARY}`,
                      boxShadow: '0 6px 18px rgba(22,130,135,0.18)',
                    }}
                  >
                    <img
                      src="/assets/Jaiswal-sir.jpg"
                      alt="Sachin Jaiswal - Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1" style={{ color: PRIMARY_DARK }}>
                SACHIN JAISWAL
              </h3>
              <p
                className="mb-4 text-sm font-medium tracking-wide text-center"
                style={{ color: 'rgba(22,130,135,0.8)' }}
              >
                DIRECTOR, SHIKSHA CLASSES
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
