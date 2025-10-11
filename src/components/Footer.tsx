


import { Star, Linkedin, Instagram, Youtube, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const DEEP_TEAL = '#207C97';
  const DARK_TEAL = '#145E74';

  return (
    <footer
      className="py-12"
      style={{
        background: 'linear-gradient(90deg, rgba(32,124,151,0.08), rgba(20,94,116,0.06))',
        borderTop: '1px solid rgba(32,124,151,0.15)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div className="container mx-auto px-6">
        {/* === Top Section: Brand + Map === */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
          {/* Left: Brand & Contact */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
                  boxShadow: '0 8px 30px rgba(32,124,151,0.25)',
                }}
              >
                <Star className="w-7 h-7 text-white" fill="currentColor" />
              </div>

              <div>
                <h3
                  className="text-xl font-extrabold"
                  style={{ color: DEEP_TEAL }}
                >
                  SHIKSHA CLASSES
                </h3>
                <p className="text-sm" style={{ color: 'rgba(32,124,151,0.85)' }}>
                  Believe and Achieve
                </p>
              </div>
            </div>

            <div className="text-sm" style={{ color: 'rgba(32,124,151,0.9)' }}>
              <p>For Admission & Other Queries</p>
              <p
                className="font-bold text-lg mt-1"
                style={{ color: DEEP_TEAL }}
              >
                0000 000 0000
              </p>
              <p className="mt-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:support@yourdomain.com"
                  className="underline hover:opacity-80 transition-opacity duration-200"
                  style={{ color: DEEP_TEAL }}
                >
                  support@yourdomain.com
                </a>
              </p>
            </div>
          </div>

          {/* Center: Social Media Icons */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4
              className="font-semibold mb-4 text-lg"
              style={{ color: DEEP_TEAL }}
            >
              Connect with us
            </h4>

            <div className="flex items-center gap-4">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
                  style={{
                    boxShadow: '0 6px 20px rgba(32,124,151,0.18)',
                  }}
                >
                  <Icon
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      color: DEEP_TEAL,
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Map (compact) */}
          <div className="flex justify-center md:justify-end">
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-xs"
              style={{
                border: '1px solid rgba(32,124,151,0.1)',
                boxShadow: '0 12px 40px rgba(32,124,151,0.1)',
              }}
            >
              <div className="relative" style={{ height: 160 }}>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5575702375686!2d79.64247667556191!3d21.169998380514894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b38adf048fdab%3A0xda3cfd241bf9981b!2sMhada%20Colony%2C%20Samruddhi%20Nagar%2C%20Bhandara%2C%20Maharashtra%20441904!5e0!3m2!1sen!2sin!4v1760159396947!5m2!1sen!2sin" 
                 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>

              <div
                className="p-3 text-center text-sm font-semibold text-white"
                style={{
                  background: `linear-gradient(90deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
                }}
              >
                VISIT US AT: Shiksha Classes
                <div className="text-xs font-normal mt-1 opacity-90">
                  Bhandara
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === Bottom Section === */}
        <div
          className="text-center pt-6 border-t"
          style={{ borderColor: 'rgba(32,124,151,0.15)' }}
        >
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none"
            style={{
              background: `linear-gradient(90deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
              color: 'white',
              boxShadow: '0 10px 30px rgba(32,124,151,0.3)',
            }}
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
            <span className="font-semibold">BACK TO TOP</span>
          </button>

          <p
            className="text-xs mt-4"
            style={{ color: 'rgba(32,124,151,0.75)' }}
          >
            © {new Date().getFullYear()} Shiksha Classes — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

