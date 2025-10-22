





// import { useState } from 'react';

// export default function ContactForm() {
//   const PRIMARY = '#168287';
//   const PRIMARY_DARK = '#11616a';

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
//     <section id="contact" className="py-16 bg-gradient-to-b from-[#eaf8fb] to-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2
//             className="text-4xl font-extrabold mb-2 drop-shadow-sm"
//             style={{ color: PRIMARY }}
//           >
//             REQUEST A CALL BACK
//           </h2>
//           <p className="text-sm" style={{ color: 'rgba(22,130,135,0.8)' }}>
//             Share your details and our team will reach out to you shortly.
//           </p>
//         </div>

//         {/* Form container */}
//         <div className="mt-12 flex justify-center">
//           <div className="w-full max-w-[1400px]">
//             <div
//               className="rounded-3xl p-12 shadow-2xl"
//               style={{
//                 background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
//                 boxShadow: '0 20px 50px rgba(22,130,135,0.3)',
//                 border: '1px solid rgba(255,255,255,0.1)',
//               }}
//             >
//               {submitted ? (
//                 <div className="text-center py-16">
//                   <div className="text-7xl mb-6">✅</div>
//                   <h3 className="text-3xl font-bold text-white mb-3">Thank You!</h3>
//                   <p className="text-white/90 text-lg">We'll contact you soon.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <input
//                       type="text"
//                       name="studentName"
//                       value={formData.studentName}
//                       onChange={handleChange}
//                       placeholder="Student's name"
//                       required
//                       className={`
//                         px-6 py-4 rounded-xl text-base bg-white/90 border 
//                         border-white/30 focus:outline-none focus:ring-4 
//                         focus:ring-[${PRIMARY}]/30 placeholder:text-gray-400
//                         transition-all duration-200 w-full
//                       `}
//                     />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Phone"
//                       required
//                       className={`
//                         px-6 py-4 rounded-xl text-base bg-white/90 border 
//                         border-white/30 focus:outline-none focus:ring-4 
//                         focus:ring-[${PRIMARY}]/30 placeholder:text-gray-400
//                         transition-all duration-200 w-full
//                       `}
//                     />
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <input
//                       type="text"
//                       name="preferredCourses"
//                       value={formData.preferredCourses}
//                       onChange={handleChange}
//                       placeholder="Preferred Courses"
//                       className={`
//                         px-6 py-4 rounded-xl text-base bg-white/90 border 
//                         border-white/30 focus:outline-none focus:ring-4 
//                         focus:ring-[${PRIMARY}]/30 placeholder:text-gray-400
//                         transition-all duration-200 w-full
//                       `}
//                     />
//                     <input
//                       type="text"
//                       name="location"
//                       value={formData.location}
//                       onChange={handleChange}
//                       placeholder="Location (city)"
//                       className={`
//                         px-6 py-4 rounded-xl text-base bg-white/90 border 
//                         border-white/30 focus:outline-none focus:ring-4 
//                         focus:ring-[${PRIMARY}]/30 placeholder:text-gray-400
//                         transition-all duration-200 w-full
//                       `}
//                     />
//                   </div>
//                   <div className="text-center pt-4">
//                     <button
//                       type="submit"
//                       className="
//                         inline-flex items-center justify-center rounded-xl px-12 py-4 
//                         font-semibold text-lg shadow-lg transform transition-all 
//                         duration-200 bg-white text-[#168287] hover:scale-105 
//                         focus:outline-none focus:ring-4 focus:ring-white/40
//                       "
//                     >
//                       Submit
//                     </button>
//                   </div>
//                   <p className="text-xs text-white/90 text-center mt-2">
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
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const PRIMARY = '#168287';
  const PRIMARY_DARK = '#11616a';

  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    preferredCourses: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      studentName: formData.studentName,
      phone: formData.phone,
      preferredCourses: formData.preferredCourses,
      location: formData.location,
      to_email: 'sakharkarpurveshw@gmail.com', // where the form will be sent
    };

    emailjs
      .send(
        'service_qph02nb',      // replace with your EmailJS Service ID
        'template_j0e7apt',     // replace with your EmailJS Template ID
        templateParams,
        'C60gDk3S5NepMss_9'       // replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({
            studentName: '',
            phone: '',
            preferredCourses: '',
            location: '',
          });
          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          console.error('FAILED TO SEND EMAIL:', error);
          alert('There was a problem sending your message. Please try again.');
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[#eaf8fb] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2
            className="text-4xl font-extrabold mb-2 drop-shadow-sm"
            style={{ color: PRIMARY }}
          >
            REQUEST A CALL BACK
          </h2>
          <p className="text-sm" style={{ color: 'rgba(22,130,135,0.8)' }}>
            Share your details and our team will reach out to you shortly.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-[1400px]">
            <div
              className="rounded-3xl p-12 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                boxShadow: '0 20px 50px rgba(22,130,135,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-7xl mb-6">✅</div>
                  <h3 className="text-3xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-white/90 text-lg">We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Student's name"
                      required
                      className={`
                        px-6 py-4 rounded-xl text-base bg-white/90 border 
                        border-white/30 focus:outline-none focus:ring-4 
                        focus:ring-[${PRIMARY}]/30 placeholder:text-gray-400
                        transition-all duration-200 w-full
                      `}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                      className={`
                        px-6 py-4 rounded-xl text-base bg-white/90 border 
                        border-white/30 focus:outline-none focus:ring-4 
                        focus:ring-[${PRIMARY}]/30 placeholder:text-gray-400
                        transition-all duration-200 w-full
                      `}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input
                      type="text"
                      name="preferredCourses"
                      value={formData.preferredCourses}
                      onChange={handleChange}
                      placeholder="Preferred Courses"
                      className={`
                        px-6 py-4 rounded-xl text-base bg-white/90 border 
                        border-white/30 focus:outline-none focus:ring-4 
                        focus:ring-[${PRIMARY}]/30 placeholder:text-gray-400
                        transition-all duration-200 w-full
                      `}
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location (city)"
                      className={`
                        px-6 py-4 rounded-xl text-base bg-white/90 border 
                        border-white/30 focus:outline-none focus:ring-4 
                        focus:ring-[${PRIMARY}]/30 placeholder:text-gray-400
                        transition-all duration-200 w-full
                      `}
                    />
                  </div>
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="
                        inline-flex items-center justify-center rounded-xl px-12 py-4 
                        font-semibold text-lg shadow-lg transform transition-all 
                        duration-200 bg-white text-[#168287] hover:scale-105 
                        focus:outline-none focus:ring-4 focus:ring-white/40
                      "
                    >
                      Submit
                    </button>
                  </div>
                  <p className="text-xs text-white/90 text-center mt-2">
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
