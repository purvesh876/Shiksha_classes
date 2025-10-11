

// import { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     studentName: '',
//     phone: '',
//     preferredCourses: '',
//     location: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setSubmitted(true);

//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({
//         studentName: '',
//         phone: '',
//         preferredCourses: '',
//         location: '',
//       });
//     }, 3000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section id="contact" className="py-16 bg-gradient-to-b from-teal-50 to-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-6">
//           <h2 className="text-4xl font-extrabold text-teal-800 mb-2">
//             REQUEST A CALL BACK
//           </h2>
//           <p className="text-sm text-teal-600">
//             Share your details and our team will reach out to you shortly.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
//           {/* Visual / Illustration */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <div className="w-64 h-80 relative">
//                 <div
//                   className="absolute inset-0 rounded-3xl transform -rotate-6"
//                   style={{
//                     background: 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(14,116,144,0.12))',
//                     boxShadow: '0 10px 30px rgba(14,116,144,0.08)',
//                   }}
//                 />
//                 <div className="relative flex items-end justify-center h-full">
//                   <div className="text-7xl mb-6 select-none">📱</div>
//                   <div className="absolute bottom-0 text-6xl select-none">🧍</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form Card */}
//           <div>
//             <div
//               className="rounded-3xl p-8 shadow-2xl"
//               style={{
//                 background:
//                   'linear-gradient(135deg,#14b8a6 0%, #0e7490 100%)', // your requested teal gradient
//                 boxShadow: '0 20px 50px rgba(14,116,144,0.25)',
//                 border: '1px solid rgba(255,255,255,0.12)',
//               }}
//             >
//               {submitted ? (
//                 <div className="text-center py-12">
//                   <div className="text-6xl mb-4">✅</div>
//                   <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
//                   <p className="text-white/90">We'll contact you soon.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       name="studentName"
//                       value={formData.studentName}
//                       onChange={handleChange}
//                       placeholder="Student's name"
//                       required
//                       className="
//                         px-4 py-3 rounded-xl
//                         bg-white/90 border border-white/30
//                         focus:outline-none focus:ring-4 focus:ring-teal-200/40
//                         placeholder:text-gray-400
//                         transition-all duration-200
//                       "
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Phone"
//                       required
//                       className="
//                         px-4 py-3 rounded-xl
//                         bg-white/90 border border-white/30
//                         focus:outline-none focus:ring-4 focus:ring-teal-200/40
//                         placeholder:text-gray-400
//                         transition-all duration-200
//                       "
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       name="preferredCourses"
//                       value={formData.preferredCourses}
//                       onChange={handleChange}
//                       placeholder="Preferred Courses"
//                       className="
//                         px-4 py-3 rounded-xl
//                         bg-white/90 border border-white/30
//                         focus:outline-none focus:ring-4 focus:ring-teal-200/40
//                         placeholder:text-gray-400
//                         transition-all duration-200
//                       "
//                     />
//                     <input
//                       type="text"
//                       name="location"
//                       value={formData.location}
//                       onChange={handleChange}
//                       placeholder="Location (city)"
//                       className="
//                         px-4 py-3 rounded-xl
//                         bg-white/90 border border-white/30
//                         focus:outline-none focus:ring-4 focus:ring-teal-200/40
//                         placeholder:text-gray-400
//                         transition-all duration-200
//                       "
//                     />
//                   </div>

//                   <div className="text-center pt-2">
//                     <button
//                       type="submit"
//                       className="
//                         inline-flex items-center justify-center
//                         rounded-xl px-10 py-3 font-semibold
//                         shadow-lg transform transition-all duration-200
//                         bg-white text-teal-700 hover:scale-105
//                         focus:outline-none focus:ring-4 focus:ring-white/30
//                       "
//                     >
//                       Submit
//                     </button>
//                   </div>

//                   <p className="text-xs text-white/90 text-center mt-1">
//                     By submitting you agree to be contacted for course-related updates.
//                   </p>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    preferredCourses: '',
    location: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        studentName: '',
        phone: '',
        preferredCourses: '',
        location: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const DEEP_TEAL = '#207C97'; // main color
  const DARK_TEAL = '#145e74'; // slightly darker accent

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[#eaf8fb] to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2
            className="text-4xl font-extrabold mb-2 drop-shadow-sm"
            style={{ color: DEEP_TEAL }}
          >
            REQUEST A CALL BACK
          </h2>
          <p className="text-sm" style={{ color: 'rgba(32,124,151,0.8)' }}>
            Share your details and our team will reach out to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
          {/* Left Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 relative">
                <div
                  className="absolute inset-0 rounded-3xl transform -rotate-6"
                  style={{
                    background: `linear-gradient(135deg, rgba(32,124,151,0.15), rgba(32,124,151,0.1))`,
                    boxShadow: '0 10px 30px rgba(32,124,151,0.08)',
                  }}
                />
                <div className="relative flex items-end justify-center h-full">
                  <div className="text-7xl mb-6 select-none">📱</div>
                  <div className="absolute bottom-0 text-6xl select-none">🧍</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <div
              className="rounded-3xl p-8 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
                boxShadow: '0 20px 50px rgba(32,124,151,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-white/90">We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Student's name"
                      required
                      className="
                        px-4 py-3 rounded-xl
                        bg-white/90 border border-white/30
                        focus:outline-none focus:ring-4
                        focus:ring-[#207C97]/30
                        placeholder:text-gray-400
                        transition-all duration-200
                      "
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                      className="
                        px-4 py-3 rounded-xl
                        bg-white/90 border border-white/30
                        focus:outline-none focus:ring-4
                        focus:ring-[#207C97]/30
                        placeholder:text-gray-400
                        transition-all duration-200
                      "
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="preferredCourses"
                      value={formData.preferredCourses}
                      onChange={handleChange}
                      placeholder="Preferred Courses"
                      className="
                        px-4 py-3 rounded-xl
                        bg-white/90 border border-white/30
                        focus:outline-none focus:ring-4
                        focus:ring-[#207C97]/30
                        placeholder:text-gray-400
                        transition-all duration-200
                      "
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location (city)"
                      className="
                        px-4 py-3 rounded-xl
                        bg-white/90 border border-white/30
                        focus:outline-none focus:ring-4
                        focus:ring-[#207C97]/30
                        placeholder:text-gray-400
                        transition-all duration-200
                      "
                    />
                  </div>

                  {/* Button */}
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl px-10 py-3 font-semibold
                        shadow-lg transform transition-all duration-200
                        bg-white text-[#207C97] hover:scale-105
                        focus:outline-none focus:ring-4 focus:ring-white/40
                      "
                    >
                      Submit
                    </button>
                  </div>

                  <p className="text-xs text-white/90 text-center mt-1">
                    By submitting you agree to be contacted for course-related updates.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
