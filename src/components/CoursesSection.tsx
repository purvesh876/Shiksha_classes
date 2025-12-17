





import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  features: string[];
  logo?: string;
}

const PRIMARY = '#168287';
const PRIMARY_DARK = '#11616a';
const PRIMARY_LIGHT = '#1ca9a6';

const courses: Course[] = [
  {
    id: 4,
    title: 'Previse',
    subtitle: 'Foundation Course for Classes 8–10',
    features: [
      'Builds strong base in Maths, Physics, Chemistry, and Biology, preparing early for JEE & NEET',
      'Focuses on conceptual clarity with interactive lessons, visuals, and practical examples',
      'Regular problem-solving, tests, and quizzes to enhance analytical thinking and exam readiness',
      'Personalized support with doubt-clearing sessions, mentoring, and progress tracking',
      'Early exposure to build confidence, reduce exam pressure, and gain competitive edge',
    ],
    logo: '/assets/previse.jpg',
  },
  {
    id: 1,
    title: 'JEE (Main+Advance)',
    subtitle: 'Joint Entrance Examination',
    features: [
      'National-level test for admission to top engineering colleges like IITs and NITs',
      'Two stages: JEE Main and JEE Advanced',
      'JEE Main tests Physics, Chemistry, and Math skills and serves as qualifier for JEE Advanced',
      'JEE Advanced is tougher and aimed at top JEE Main rankers seeking IIT admission',
    ],
    logo: '/assets/JEE.png',
  },
  // {
  //   id: 2,
  //   title: 'MHT-CET',
  //   subtitle: 'Maharashtra Health and Technical Common Entrance Test',
  //   features: [
  //     'State-level exam for engineering, pharmacy & agriculture courses in Maharashtra',
  //     'Tests Physics, Chemistry, Mathematics (PCM) or Physics, Chemistry, Biology (PCB)',
  //     'Syllabus based on Maharashtra State Board Class 11 and 12 curriculum',
  //     'Online CBT exam with multiple-choice questions testing conceptual understanding and speed',
  //     'Opportunity to join top state engineering and medical colleges in Maharashtra',
  //   ],
  //   logo: '/assets/MHT-CET_logo.png',
  // },
  {
    id: 3,
    title: 'NEET',
    subtitle: 'National Eligibility Cum Entrance Test',
    features: [
      'National-level unified exam for medical and dental courses in India since 2016',
      'Replaced multiple state-level medical entrance exams',
      'Assesses Physics, Chemistry, and Biology (Botany & Zoology)',
      'Mandatory scores for MBBS, BDS, and other medical program admissions in government and private colleges',
      'Fees: Rs. 1,60,000 (All taxes included)',
    ],
    logo: '/assets/Neet.png',
  },
  {
    id: 2,
    title: 'MHT-CET',
    subtitle: 'Maharashtra Health and Technical Common Entrance Test',
    features: [
      'State-level exam for engineering, pharmacy & agriculture courses in Maharashtra',
      'Tests Physics, Chemistry, Mathematics (PCM) or Physics, Chemistry, Biology (PCB)',
      'Syllabus based on Maharashtra State Board Class 11 and 12 curriculum',
      'Online CBT exam with multiple-choice questions testing conceptual understanding and speed',
      'Opportunity to join top state engineering and medical colleges in Maharashtra',
      
    ],
    logo: '/assets/MHT-CET_logo.png',
  },
];

export default function CoursesSection() {
  const [expanded, setExpanded] = useState<{ [id: number]: boolean }>({});

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="courses"
      className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
    >
      
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute -top-20 -left-20 w-80 h-80 blur-3xl rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(22,130,135,0.3), rgba(22,130,135,0))',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 blur-3xl rounded-full"
          style={{
            background:
              'radial-gradient(circle at center, rgba(22,130,135,0.3), rgba(22,130,135,0))',
          }}
        />
      </div>

      {/* <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#11616a] drop-shadow-md">
          COURSES WE OFFER
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course) => {
            const isExpanded = expanded[course.id] || false;
            const showToggle = course.features.length > 2;
            const featuresToShow = isExpanded
              ? course.features
              : course.features.slice(0, 2);

            return (
              <div
                key={course.id}
                className="group relative rounded-3xl p-1"
                style={{
                  background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                  boxShadow: '0 8px 32px 0 rgba(22,130,135,0.18)',
                  transition: 'box-shadow 0.3s',
                }}
              >
                
                <div className="flex flex-col justify-between min-h-[420px] rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl p-7 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  
                  <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:shadow-[0_0_0_6px_rgba(22,130,135,0.15)] transition-all duration-300"></div>
                  
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 mb-4 rounded-full flex items-center justify-center bg-white shadow-md overflow-hidden"
                      style={{ border: `3px solid ${PRIMARY}` }}
                    >
                      {course.logo ? (
                        <img
                          src={course.logo}
                          alt={`${course.title} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-3xl font-extrabold" style={{ color: PRIMARY }}>
                          {course.title.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-center text-[#11616a] mb-1 tracking-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs text-center text-gray-600 mb-2 italic">
                      {course.subtitle}
                    </p>
                  </div>

                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-3 mt-2">
                      {featuresToShow.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 text-gray-800 group">
                          <div
                            className="rounded-full p-1.5 flex-shrink-0 bg-gradient-to-br from-[#168287] to-[#1ca9a6] shadow"
                          >
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {showToggle && (
                      <button
                        onClick={() => toggleExpand(course.id)}
                        className="flex items-center mt-4 text-[#168287] text-sm font-semibold hover:underline focus:outline-none transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            View Less <ChevronUp className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            View More <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="container mx-auto px-6 relative z-10">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#11616a] drop-shadow-md">
    COURSES WE OFFER
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
    {courses.map((course) => {
      const isExpanded = expanded[course.id] || false;
      const showToggle = course.features.length > 2;
      const featuresToShow = isExpanded
        ? course.features
        : course.features.slice(0, 2);

      return (
        <div
          key={course.id}
          className="group relative rounded-3xl p-1"
          style={{
            background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
            boxShadow: '0 8px 32px 0 rgba(22,130,135,0.18)',
            transition: 'box-shadow 0.3s'
          }}
        >
          <div className="flex flex-col justify-between rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl p-7 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 mb-4 rounded-full flex items-center justify-center bg-white shadow-md overflow-hidden"
                style={{ border: `3px solid ${PRIMARY}` }}
              >
                {course.logo ? (
                  <img
                    src={course.logo}
                    alt={`${course.title} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-3xl font-extrabold" style={{ color: PRIMARY }}>
                    {course.title.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-center text-[#11616a] mb-1 tracking-tight">
                {course.title}
              </h3>
              <p className="text-xs text-center text-gray-600 mb-2 italic">
                {course.subtitle}
              </p>
            </div>
            {/* Features */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3 mt-2">
                {featuresToShow.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 text-gray-800 group">
                    <div
                      className="rounded-full p-1.5 flex-shrink-0 bg-gradient-to-br from-[#168287] to-[#1ca9a6] shadow"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
              {showToggle && (
                <button
                  onClick={() => toggleExpand(course.id)}
                  className="flex items-center mt-4 text-[#168287] text-sm font-semibold hover:underline focus:outline-none transition-colors"
                >
                  {isExpanded ? (
                    <>
                      View Less <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      View More <ChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

    </section>
  );
}

