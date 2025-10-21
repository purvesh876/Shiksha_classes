




// import { useState } from 'react';
// import { ChevronDown, ChevronUp, Search } from 'lucide-react';

// interface FAQItem {
//   id: number;
//   question: string;
//   answer: string;
//   category: string;
// }

// const faqData: FAQItem[] = [
//   {
//     id: 1,
//     category: 'Admissions',
//     question: 'How do I enroll in courses at Shiksha Classes?',
//     answer:
//       'You can enroll by visiting our center in person, calling us, or filling out the contact form on our website. Our counselors will guide you through the course selection and enrollment process based on your academic goals.',
//   },
//   {
//     id: 2,
//     category: 'Admissions',
//     question: 'What documents are required for admission?',
//     answer:
//       'You need to bring your latest mark sheets, ID proof (Aadhar card/passport), passport-size photographs, and any previous course certificates if applicable. Our admission team will verify these during the enrollment process.',
//   },
//   {
//     id: 3,
//     category: 'Courses',
//     question: 'What courses do you offer?',
//     answer:
//       'We offer comprehensive coaching for JEE Main, JEE Advanced, NEET, and foundation courses for Class 8-10. Each program includes regular classes, doubt-clearing sessions, test series, and personalized mentorship.',
//   },
//   {
//     id: 4,
//     category: 'Courses',
//     question: 'Do you provide study material?',
//     answer:
//       'Yes, we provide comprehensive study material including printed notes, practice question banks, previous year papers, and access to our digital learning platform with video lectures and online tests.',
//   },
//   {
//     id: 5,
//     category: 'Fees & Payment',
//     question: 'What are the fee payment options?',
//     answer:
//       'We accept payments through cash, UPI, credit/debit cards, and bank transfers. We also offer installment options for full-year courses. Contact our admission desk for detailed fee structure.',
//   },
//   {
//     id: 6,
//     category: 'Fees & Payment',
//     question: 'Is there any scholarship or discount available?',
//     answer:
//       'Yes, we offer merit-based scholarships for students who perform well in our entrance test. We also provide sibling discounts and early-bird discounts for students enrolling before the session starts.',
//   },
//   {
//     id: 7,
//     category: 'Classes & Schedule',
//     question: 'What is the class schedule?',
//     answer:
//       'We offer both morning and evening batches to accommodate different student schedules. Regular classes are held 5-6 days a week with weekend test series. Exact timings are shared during admission.',
//   },
//   {
//     id: 8,
//     category: 'Classes & Schedule',
//     question: 'Do you offer online classes?',
//     answer:
//       'Yes, we offer hybrid learning with both offline and online class options. Our online platform includes live interactive classes, recorded lectures, and digital assignments for flexible learning.',
//   },
//   {
//     id: 9,
//     category: 'Support',
//     question: "How can I track my child's progress?",
//     answer:
//       'Parents receive regular progress reports through our parent app and SMS updates. We also conduct monthly parent-teacher meetings to discuss student performance and areas of improvement.',
//   },
//   {
//     id: 10,
//     category: 'Support',
//     question: 'What if I need extra doubt-clearing sessions?',
//     answer:
//       'We provide dedicated doubt-clearing sessions after regular classes. Students can also schedule one-on-one sessions with faculty members for personalized attention on difficult topics.',
//   },
// ];

// export default function FAQSection() {
//   const DEEP_TEAL = '#207C97';
//   const DARK_TEAL = '#145e74';

//   const [openItems, setOpenItems] = useState<number[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [visibleCount, setVisibleCount] = useState(5);

//   const categories = ['All', ...Array.from(new Set(faqData.map((item) => item.category)))];

//   // Filter based on search and category
//   const filteredFAQs = faqData.filter((faq) => {
//     const matchesSearch =
//       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const visibleFAQs = filteredFAQs.slice(0, visibleCount);

//   const toggleItem = (id: number) => {
//     setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
//   };

//   return (
//     <section className="py-16 bg-gradient-to-b from-[#eaf8fb] to-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-3 mb-4">
//             <div
//               className="w-12 h-12 rounded-lg flex items-center justify-center"
//               style={{
//                 background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//                 boxShadow: '0 8px 30px rgba(32,124,151,0.25)',
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-6 h-6 text-white"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
//                 <line x1="12" y1="17" x2="12.01" y2="17" />
//               </svg>
//             </div>
//           </div>
//           <h2
//             className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-sm"
//             style={{ color: DEEP_TEAL }}
//           >
//             Frequently Asked Questions
//           </h2>
//           <p className="text-base text-gray-600 max-w-2xl mx-auto">
//             Find answers to common questions about our courses, admissions, and more
//           </p>
//         </div>

//         {/* Search Bar */}
//         <div className="max-w-3xl mx-auto mb-8">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search for questions..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#207C97] focus:outline-none focus:ring-4 focus:ring-[#207C97]/20 transition-all duration-200 text-base"
//               style={{ background: 'rgba(255,255,255,0.9)' }}
//             />
//           </div>
//         </div>

//         {/* Category Filters */}
//         <div className="max-w-4xl mx-auto mb-10">
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
//                   selectedCategory === category
//                     ? 'text-white shadow-lg transform scale-105'
//                     : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
//                 }`}
//                 style={{
//                   background:
//                     selectedCategory === category
//                       ? `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`
//                       : undefined,
//                 }}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* FAQ Items */}
//         <div className="max-w-4xl mx-auto">
//           {visibleFAQs.length === 0 ? (
//             <div className="text-center py-12">
//               <p className="text-gray-500 text-lg">
//                 No questions found matching your search.
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {visibleFAQs.map((faq, index) => (
//                 <div
//                   key={faq.id}
//                   className="rounded-2xl overflow-hidden transition-all duration-300"
//                   style={{
//                     background: 'rgba(255,255,255,0.7)',
//                     backdropFilter: 'blur(10px)',
//                     border: '1px solid rgba(32,124,151,0.15)',
//                     boxShadow: openItems.includes(faq.id)
//                       ? '0 8px 30px rgba(32,124,151,0.2)'
//                       : '0 2px 10px rgba(32,124,151,0.1)',
//                   }}
//                 >
//                   {/* Question Header */}
//                   <button
//                     onClick={() => toggleItem(faq.id)}
//                     className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/50 transition-colors duration-200"
//                     aria-expanded={openItems.includes(faq.id)}
//                   >
//                     <div className="flex items-start gap-4 flex-1">
//                       <div
//                         className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
//                         style={{
//                           background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//                         }}
//                       >
//                         {index + 1}
//                       </div>

//                       <div className="flex-1">
//                         <h3
//                           className="font-bold text-base md:text-lg leading-snug"
//                           style={{ color: DEEP_TEAL }}
//                         >
//                           {faq.question}
//                         </h3>
//                         <span
//                           className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium"
//                           style={{
//                             background: 'rgba(32,124,151,0.1)',
//                             color: DARK_TEAL,
//                           }}
//                         >
//                           {faq.category}
//                         </span>
//                       </div>
//                     </div>

//                     <div
//                       className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
//                       style={{
//                         background: openItems.includes(faq.id)
//                           ? `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`
//                           : 'rgba(32,124,151,0.1)',
//                       }}
//                     >
//                       {openItems.includes(faq.id) ? (
//                         <ChevronUp className="w-5 h-5 text-white" />
//                       ) : (
//                         <ChevronDown className="w-5 h-5" style={{ color: DEEP_TEAL }} />
//                       )}
//                     </div>
//                   </button>

//                   {/* Answer */}
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       openItems.includes(faq.id) ? 'max-h-96' : 'max-h-0'
//                     }`}
//                   >
//                     <div
//                       className="px-6 pb-6 pt-2"
//                       style={{
//                         background:
//                           'linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.8))',
//                       }}
//                     >
//                       <div className="pl-12">
//                         <div
//                           className="w-12 h-1 rounded-full mb-4"
//                           style={{
//                             background: `linear-gradient(90deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//                           }}
//                         />
//                         <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Show More Button */}
//               {visibleCount < filteredFAQs.length && (
//                 <div className="text-left pt-4">
//                   <button
//                     onClick={() => setVisibleCount((prev) => prev + 5)}
//                     className="px-6 py-2 rounded-full font-medium text-sm bg-white/90 text-[#207C97] border border-[#207C97]/30 hover:bg-[#207C97]/10 transition-all duration-300 shadow-sm"
//                   >
//                     Show More Questions
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Contact CTA */}
//         <div
//           className="max-w-4xl mx-auto mt-12 rounded-3xl p-8 text-center"
//           style={{
//             background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//             boxShadow: '0 20px 50px rgba(32,124,151,0.3)',
//           }}
//         >
//           <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
//           <p className="text-white/90 mb-6 text-base">
//             Can't find the answer you're looking for? Our team is here to help you.
//           </p>
//           <a
//             href="#contact"
//             className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-white font-semibold text-base shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40"
//             style={{ color: DEEP_TEAL }}
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'Admissions',
    question: 'How do I enroll in courses at Shiksha Classes?',
    answer:
      'You can enroll by visiting our center in person, calling us, or filling out the contact form on our website. Our counselors will guide you through the course selection and enrollment process based on your academic goals.',
  },
  {
    id: 2,
    category: 'Admissions',
    question: 'What documents are required for admission?',
    answer:
      'You need to bring your latest mark sheets, ID proof (Aadhar card/passport), passport-size photographs, and any previous course certificates if applicable. Our admission team will verify these during the enrollment process.',
  },
  {
    id: 3,
    category: 'Courses',
    question: 'What courses do you offer?',
    answer:
      'We offer comprehensive coaching for JEE Main, JEE Advanced, NEET, and foundation courses for Class 8-10. Each program includes regular classes, doubt-clearing sessions, test series, and personalized mentorship.',
  },
  {
    id: 4,
    category: 'Courses',
    question: 'Do you provide study material?',
    answer:
      'Yes, we provide comprehensive study material including printed notes, practice question banks, previous year papers, and access to our digital learning platform with video lectures and online tests.',
  },
  {
    id: 5,
    category: 'Fees & Payment',
    question: 'What are the fee payment options?',
    answer:
      'We accept payments through cash, UPI, credit/debit cards, and bank transfers. We also offer installment options for full-year courses. Contact our admission desk for detailed fee structure.',
  },
  {
    id: 6,
    category: 'Fees & Payment',
    question: 'Is there any scholarship or discount available?',
    answer:
      'Yes, we offer merit-based scholarships for students who perform well in our entrance test. We also provide sibling discounts and early-bird discounts for students enrolling before the session starts.',
  },
  {
    id: 7,
    category: 'Classes & Schedule',
    question: 'What is the class schedule?',
    answer:
      'We offer both morning and evening batches to accommodate different student schedules. Regular classes are held 5-6 days a week with weekend test series. Exact timings are shared during admission.',
  },
  {
    id: 8,
    category: 'Classes & Schedule',
    question: 'Do you offer online classes?',
    answer:
      'Yes, we offer hybrid learning with both offline and online class options. Our online platform includes live interactive classes, recorded lectures, and digital assignments for flexible learning.',
  },
  {
    id: 9,
    category: 'Support',
    question: "How can I track my child's progress?",
    answer:
      'Parents receive regular progress reports through our parent app and SMS updates. We also conduct monthly parent-teacher meetings to discuss student performance and areas of improvement.',
  },
  {
    id: 10,
    category: 'Support',
    question: 'What if I need extra doubt-clearing sessions?',
    answer:
      'We provide dedicated doubt-clearing sessions after regular classes. Students can also schedule one-on-one sessions with faculty members for personalized attention on difficult topics.',
  },
];

export default function FAQSection() {
  const DEEP_TEAL = '#207C97';
  const DARK_TEAL = '#145e74';

  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(5);

  const categories = ['All', ...Array.from(new Set(faqData.map((item) => item.category)))];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const visibleFAQs = filteredFAQs.slice(0, visibleCount);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleVisible = () => {
    if (visibleCount >= filteredFAQs.length) {
      setVisibleCount(5);
    } else {
      setVisibleCount((prev) => prev + 5);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#eaf8fb] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
                boxShadow: '0 8px 30px rgba(32,124,151,0.25)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-sm"
            style={{ color: DEEP_TEAL }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses, admissions, and more
          </p>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#207C97] focus:outline-none focus:ring-4 focus:ring-[#207C97]/20 transition-all duration-200 text-base"
              style={{ background: 'rgba(255,255,255,0.9)' }}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                }`}
                style={{
                  background:
                    selectedCategory === category
                      ? `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`
                      : undefined,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {visibleFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No questions found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {visibleFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(32,124,151,0.15)',
                    boxShadow: openItems.includes(faq.id)
                      ? '0 8px 30px rgba(32,124,151,0.2)'
                      : '0 2px 10px rgba(32,124,151,0.1)',
                  }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/50 transition-colors duration-200"
                    aria-expanded={openItems.includes(faq.id)}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                        style={{
                          background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
                        }}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-base md:text-lg leading-snug"
                          style={{ color: DEEP_TEAL }}
                        >
                          {faq.question}
                        </h3>
                        <span
                          className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(32,124,151,0.1)',
                            color: DARK_TEAL,
                          }}
                        >
                          {faq.category}
                        </span>
                      </div>
                    </div>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: openItems.includes(faq.id)
                          ? `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`
                          : 'rgba(32,124,151,0.1)',
                      }}
                    >
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5" style={{ color: DEEP_TEAL }} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(faq.id) ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div
                      className="px-6 pb-6 pt-2"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.8))',
                      }}
                    >
                      <div className="pl-12">
                        <div
                          className="w-12 h-1 rounded-full mb-4"
                          style={{
                            background: `linear-gradient(90deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
                          }}
                        />
                        <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Show More / View Less Button */}
              {filteredFAQs.length > 5 && (
                <div className="text-left pt-4">
                  <button
                    onClick={handleToggleVisible}
                    className="px-6 py-2 rounded-full font-medium text-sm bg-white/90 text-[#207C97] border border-[#207C97]/30 hover:bg-[#207C97]/10 transition-all duration-300 shadow-sm"
                  >
                    {visibleCount >= filteredFAQs.length
                      ? 'View Less Questions'
                      : 'Show More Questions'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div
          className="max-w-4xl mx-auto mt-12 rounded-3xl p-8 text-center"
          style={{
            background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
            boxShadow: '0 20px 50px rgba(32,124,151,0.3)',
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-white/90 mb-6 text-base">
            Can't find the answer you're looking for? Our team is here to help you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-white font-semibold text-base shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40"
            style={{ color: DEEP_TEAL }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

