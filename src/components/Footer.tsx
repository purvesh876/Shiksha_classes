










// import {
//   Linkedin,
//   Instagram,
//   Youtube,
//   Facebook,
//   ChevronUp,
// } from "lucide-react";


// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };


//   const DEEP_TEAL = "#207C97";
//   const DARK_TEAL = "#145E74";


//   // Replace this with your WhatsApp number (no "+" or dashes)
//   const WHATSAPP_NUMBER = "7588148963";


//   return (
//     <footer
//       className="py-12"
//       style={{
//         background:
//           "linear-gradient(90deg, rgba(32,124,151,0.08), rgba(20,94,116,0.06))",
//         borderTop: "1px solid rgba(32,124,151,0.15)",
//         backdropFilter: "blur(6px)",
//       }}
//     >
//       <div className="container mx-auto px-6">
//         {/* === Top Section: Brand + Map === */}
//         <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
//           {/* Left: Brand Logo */}
//           <div className="flex flex-col gap-6">
//             <div className="flex items-center justify-center md:justify-start">
//               <img
//                 src="/assets/shiksha_logo(2).png"
//                 alt="Shiksha Classes Logo"
//                 className="h-16 w-auto object-contain"
//                 style={{
//                   filter: "drop-shadow(0 4px 12px rgba(32,124,151,0.2))",
//                 }}
//               />
//             </div>
//           </div>


//           {/* Center: Social Media Icons */}
//           <div className="flex flex-col items-center justify-center text-center">
//             <h4
//               className="font-semibold mb-4 text-lg"
//               style={{ color: DEEP_TEAL }}
//             >
//               Connect with us
//             </h4>


//             <div className="flex items-center gap-4 flex-wrap justify-center">
//               {[
//                 { Icon: Linkedin, label: "LinkedIn", href: "#" },
//                 { Icon: Instagram, label: "Instagram", href: "#" },
//                 { Icon: Youtube, label: "YouTube", href: "#" },
//                 { Icon: Facebook, label: "Facebook", href: "#" },
//               ].map(({ Icon, label, href }, i) => (
//                 <a
//                   key={i}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
//                   style={{
//                     boxShadow: "0 6px 20px rgba(32,124,151,0.18)",
//                   }}
//                 >
//                   <Icon
//                     className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
//                     style={{
//                       color: DEEP_TEAL,
//                     }}
//                   />
//                 </a>
//               ))}


//               {/* WhatsApp Icon */}
//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
//                 style={{
//                   boxShadow: "0 6px 20px rgba(32,124,151,0.18)",
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 32 32"
//                   fill="none"
//                   className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
//                 >
//                   <path
//                     fill={DEEP_TEAL}
//                     d="M16.04 4C9.39 4 4 9.39 4 16.04c0 2.13.56 4.19 1.61 6.01L4 28l6.14-1.59a11.93 11.93 0 0 0 5.9 1.55h.01c6.65 0 12.04-5.39 12.04-12.04C28.09 9.39 22.7 4 16.04 4Zm5.88 16.99c-.25.7-1.45 1.32-2.02 1.4-.52.08-1.18.11-1.91-.12-.44-.14-1.01-.32-1.74-.63-3.06-1.32-5.05-4.38-5.2-4.58-.15-.2-1.24-1.64-1.24-3.13 0-1.49.78-2.22 1.06-2.52.27-.29.59-.36.78-.36h.55c.18 0 .41-.06.64.49.24.6.82 2.05.89 2.2.07.15.12.32.02.52-.09.2-.14.32-.28.49-.14.17-.3.38-.43.51-.14.14-.28.29-.12.57.17.29.75 1.23 1.61 2 .1.09 1.77 1.57 3.53 2.19.5.18.89.29 1.19.37.5.16.8.14 1.1-.08.29-.22 1.27-1.05 1.61-1.41.34-.36.68-.3 1.14-.18.46.12 2.99 1.41 3.5 1.66.52.26.87.38.99.59.12.2.12 1.15-.13 1.85Z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>


//           {/* Right: Map */}
//           <div className="flex justify-center md:justify-end">
//             <div
//               className="bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-xs"
//               style={{
//                 border: "1px solid rgba(32,124,151,0.1)",
//                 boxShadow: "0 12px 40px rgba(32,124,151,0.1)",
//               }}
//             >
//               <div className="relative" style={{ height: 160 }}>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5575702375686!2d79.64247667556191!3d21.169998380514894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b38adf048fdab%3A0xda3cfd241bf9981b!2sMhada%20Colony%2C%20Samruddhi%20Nagar%2C%20Bhandara%2C%20Maharashtra%20441904!5e0!3m2!1sen!2sin!4v1760159396947!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Location Map"
//                 />
//               </div>


//               <div
//                 className="p-3 text-center text-sm font-semibold text-white"
//                 style={{
//                   background: `linear-gradient(90deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//                 }}
//               >
//                 VISIT US AT: SHIKSHA CLASSES
//                 <div className="text-xs font-normal mt-1 opacity-90">
//                   BHANDARA
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>


//         {/* === Bottom Section === */}
//         <div
//           className="text-center pt-6 border-t"
//           style={{ borderColor: "rgba(32,124,151,0.15)" }}
//         >
//           <button
//             onClick={scrollToTop}
//             className="inline-flex items-center gap-3 px-5 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none"
//             style={{
//               background: `linear-gradient(90deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//               color: "white",
//               boxShadow: "0 10px 30px rgba(32,124,151,0.3)",
//             }}
//             aria-label="Back to top"
//           >
//             <ChevronUp className="w-5 h-5" />
//             <span className="font-semibold">BACK TO TOP</span>
//           </button>


//           <p
//             className="text-xs mt-4"
//             style={{ color: "rgba(32,124,151,0.75)" }}
//           >
//             © {new Date().getFullYear()} Shiksha Classes — All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import {
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const PRIMARY = "#168287";
  const PRIMARY_DARK = "#11616a";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Replace this with your WhatsApp number (no "+" or dashes)
  const WHATSAPP_NUMBER = "7588148963";

  return (
    <footer
      className="py-12"
      style={{
        background:
          "linear-gradient(90deg, rgba(22,130,135,0.08), rgba(17,97,106,0.06))",
        borderTop: "1px solid rgba(22,130,135,0.15)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Top Section: Brand + Map */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
          {/* Left: Brand Logo */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/assets/shiksha_logo(2).png"
                alt="Shiksha Classes Logo"
                className="h-16 w-auto object-contain"
                style={{
                  filter: "drop-shadow(0 4px 12px rgba(22,130,135,0.2))",
                }}
              />
            </div>
          </div>

          {/* Center: Social Media Icons */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4
              className="font-semibold mb-4 text-lg"
              style={{ color: PRIMARY }}
            >
              Connect with us
            </h4>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Youtube, label: "YouTube", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
                  style={{
                    boxShadow: "0 6px 20px rgba(22,130,135,0.18)",
                  }}
                >
                  <Icon
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      color: PRIMARY,
                    }}
                  />
                </a>
              ))}

              {/* WhatsApp Icon */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
                style={{
                  boxShadow: "0 6px 20px rgba(22,130,135,0.18)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <path
                    fill={PRIMARY}
                    d="M16.04 4C9.39 4 4 9.39 4 16.04c0 2.13.56 4.19 1.61 6.01L4 28l6.14-1.59a11.93 11.93 0 0 0 5.9 1.55h.01c6.65 0 12.04-5.39 12.04-12.04C28.09 9.39 22.7 4 16.04 4Zm5.88 16.99c-.25.7-1.45 1.32-2.02 1.4-.52.08-1.18.11-1.91-.12-.44-.14-1.01-.32-1.74-.63-3.06-1.32-5.05-4.38-5.2-4.58-.15-.2-1.24-1.64-1.24-3.13 0-1.49.78-2.22 1.06-2.52.27-.29.59-.36.78-.36h.55c.18 0 .41-.06.64.49.24.6.82 2.05.89 2.2.07.15.12.32.02.52-.09.2-.14.32-.28.49-.14.17-.3.38-.43.51-.14.14-.28.29-.12.57.17.29.75 1.23 1.61 2 .1.09 1.77 1.57 3.53 2.19.5.18.89.29 1.19.37.5.16.8.14 1.1-.08.29-.22 1.27-1.05 1.61-1.41.34-.36.68-.3 1.14-.18.46.12 2.99 1.41 3.5 1.66.52.26.87.38.99.59.12.2.12 1.15-.13 1.85Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex justify-center md:justify-end">
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-xs"
              style={{
                border: "1px solid rgba(22,130,135,0.1)",
                boxShadow: "0 12px 40px rgba(22,130,135,0.1)",
              }}
            >
              <div className="relative" style={{ height: 160 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5575702375686!2d79.64247667556191!3d21.169998380514894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b38adf048fdab%3A0xda3cfd241bf9981b!2sMhada%20Colony%2C%20Samruddhi%20Nagar%2C%20Bhandara%2C%20Maharashtra%20441904!5e0!3m2!1sen!2sin!4v1760159396947!5m2!1sen!2sin"
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
                  background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                }}
              >
                VISIT US AT: SHIKSHA CLASSES
                <div className="text-xs font-normal mt-1 opacity-90">BHANDARA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="text-center pt-6 border-t"
          style={{ borderColor: "rgba(22,130,135,0.15)" }}
        >
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none"
            style={{
              background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_DARK})`,
              color: "white",
              boxShadow: "0 10px 30px rgba(22,130,135,0.3)",
            }}
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
            <span className="font-semibold">BACK TO TOP</span>
          </button>

          <p className="text-xs mt-4" style={{ color: "rgba(22,130,135,0.75)" }}>
            © {new Date().getFullYear()} Shiksha Classes — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
