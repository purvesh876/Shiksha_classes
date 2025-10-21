import React, { useState } from 'react';

export default function DirectorSection() {
  const DEEP_TEAL = '#207C97';
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="faculty"
      className="relative py-20 bg-gradient-to-b from-[#eaf8fb] via-white to-[#eaf8fb] overflow-hidden"
    >
      {/* Background decorative blur shapes */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div
          className="absolute -top-20 left-10 w-80 h-80 blur-3xl rounded-full"
          style={{ backgroundColor: 'rgba(32,124,151,0.3)' }}
        />
        <div
          className="absolute bottom-0 right-10 w-96 h-96 blur-3xl rounded-full"
          style={{ backgroundColor: 'rgba(32,124,151,0.4)' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-md"
            style={{ color: DEEP_TEAL }}
          >
            {/* FROM THE DIRECTOR&apos;S DESK */}
            JAISWAL SIR
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 mt-12 items-start">
          {/* Director Card */}
          <div
            className="
              relative rounded-3xl p-10 flex flex-col items-center
              transition-all duration-500 ease-out
              bg-[rgba(255,255,255,0.25)] backdrop-blur-lg
            "
            style={{
              border: `1px solid rgba(32,124,151,0.3)`,
              boxShadow: '0 8px 32px rgba(32,124,151,0.25)',
            }}
          >
            {/* Floating decorative card with photo */}
            <div className="relative mb-6">
              {/* decorative rotated background */}
              <div
                className="absolute inset-0 rounded-3xl transform rotate-6 shadow-lg"
                style={{
                  width: 256,
                  height: 256,
                  background: `linear-gradient(135deg, rgba(32,124,151,0.4), rgba(32,124,151,0.6))`,
                  boxShadow: '0 12px 30px rgba(32,124,151,0.25)',
                  top: -12,
                  left: '50%',
                  transformOrigin: 'center',
                  transform: 'translateX(-50%) rotate(6deg)',
                }}
                aria-hidden
              />
              {/* white card holding avatar (keeps centered and circular) */}
              <div
                className="relative bg-white/90 rounded-3xl p-6 flex items-center justify-center backdrop-blur-md border border-[#cfe6ec] shadow-inner"
                style={{ width: 256, height: 256 }}
              >
                <div
                  className="rounded-full overflow-hidden flex items-center justify-center"
                  style={{
                    width: 220,
                    height: 220,
                    border: `3px solid ${DEEP_TEAL}`,
                    boxShadow: '0 6px 18px rgba(32,124,151,0.18)',
                  }}
                >
                  {/* Bigger avatar: fills the circle via object-cover */}
                  <img
                    src="/assets/Jaiswal-sir.jpg"
                    alt="Sachin Jaiswal - Director"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent) {
                        const span = document.createElement('span');
                        span.textContent = 'SJ';
                        span.style.color = DEEP_TEAL;
                        span.style.fontWeight = '700';
                        span.style.fontSize = '1.5rem';
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Director Info */}
            <h3 className="text-2xl font-bold mb-1" style={{ color: DEEP_TEAL }}>
              SACHIN JAISWAL
            </h3>
            <p
              className="mb-4 text-sm font-medium tracking-wide text-center"
              style={{ color: 'rgba(32,124,151,0.8)' }}
            >
              DIRECTOR, SHIKSHA CLASSES
            </p>

            {/* Short introduction text (keeps centered) */}
            {/* <div
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
            </div> */}
          </div>

          {/* About Us Panel */}
          <div
            className="rounded-3xl p-10 text-white flex flex-col transition-all duration-500 ease-out"
            style={{
              background: `linear-gradient(135deg, ${DEEP_TEAL}, #145e74)`,
              boxShadow: '0 10px 40px rgba(32,124,151,0.4)',
            }}
          >
            <h3 className="text-3xl font-extrabold mb-6 text-center md:text-left">
              ABOUT US AND FROM DESK OF DIRECTOR
            </h3>

            {/* Animated expandable text section */}
            <div
              className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                expanded ? 'max-h-[1000px]' : 'max-h-[180px]'
              }`}
            >
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Welcome to Shiksha Classes! Our mission is to provide world-class
                  education and mentorship to students aspiring for excellence.
                </p>
                <p>
                  With
                  over a decade of experience in competitive exam preparation, we have
                  helped thousands of students achieve their dreams of getting into
                  premier institutions.
                </p>
                <p>
                  Our dedicated faculty and comprehensive study
                  materials ensure that every student receives personalized attention
                  and guidance.
                </p>
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

            {/* View more / less button - LEFT aligned */}
            <div className="mt-6">
              <div className="flex">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-white/95 font-semibold text-sm underline hover:text-white transition-colors duration-200 self-start"
                  aria-expanded={expanded}
                >
                  {expanded ? 'View Less ↑' : 'View More ↓'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
