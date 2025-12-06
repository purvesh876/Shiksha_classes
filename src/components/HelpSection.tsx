




// export default function HelpSection() {
//   const DEEP_TEAL = '#207C97';
//   const DARK_TEAL = '#145e74';

//   return (
//     <section className="py-16 bg-gradient-to-b from-[#eaf8fb] to-white">
//       <div className="container mx-auto px-6">
//         {/* ===== Custom Header ===== */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center gap-3">
//             <div
//               className="w-12 h-12 rounded-lg flex items-center justify-center"
//               style={{
//                 background: `linear-gradient(135deg, ${DEEP_TEAL}, ${DARK_TEAL})`,
//                 boxShadow: '0 8px 30px rgba(32,124,151,0.25)',
//               }}
//             >
//               {/* Terms & Conditions Icon - Document with Checkmark */}
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
//                 {/* Document outline */}
//                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//                 <polyline points="14 2 14 8 20 8" />
//                 {/* Checkmark inside */}
//                 <polyline points="9 13 11 15 15 11" />
//               </svg>
//             </div>

//             <div>
//               <h2
//                 className="text-4xl font-extrabold leading-tight drop-shadow-sm"
//                 style={{ color: DEEP_TEAL }}
//               >
//                  Policies & Terms
//               </h2>
//               <p className="text-sm" style={{ color: 'rgba(32,124,151,0.8)' }}>
                
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ===== Centered Card ===== */}
//         <div className="mx-auto max-w-3xl">
//           <div
//             className="rounded-3xl p-6 shadow-2xl border relative overflow-hidden"
//             style={{
//               background: `linear-gradient(135deg, rgba(32,124,151,0.12), rgba(32,124,151,0.18))`,
//               border: '1px solid rgba(255,255,255,0.08)',
//               boxShadow: '0 20px 50px rgba(32,124,151,0.22)',
//               backdropFilter: 'blur(10px)',
//             }}
//             role="region"
//             aria-labelledby="help-heading"
//           >
//             {/* Header row inside card */}
//             <div className="flex items-center justify-between mb-4">
//               <h3
//                 id="help-heading"
//                 className="text-2xl font-bold"
//                 style={{ color: DEEP_TEAL }}
//               >
                
//               </h3>
//             </div>

//             {/* Scrollable content container (with custom scrollbar) */}
//             <div className="relative">
//               <div
//                 className="max-h-96 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-[#3FA8C0] scrollbar-track-transparent hover:scrollbar-thumb-[#6FC3D2]"
//                 style={{
//                   background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
//                   borderRadius: '1rem',
//                   padding: '1rem',
//                 }}
//                 aria-label="Policies content"
//               >
//                 {/* Terms & Conditions */}
//                 <div className="mb-6">
//                   <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed" style={{ color: '#185E6C' }}>
//                     <li>By using our website and services, you agree to these terms.</li>
//                     <li>
//                       All content, designs, and intellectual property belong to{' '}
//                       <strong>Shiksha Classes</strong> unless otherwise noted.
//                     </li>
//                     <li>
//                       We reserve the right to update terms at any time. Major changes will be communicated to registered users.
//                     </li>
//                     <li>
//                       Access to paid courses and materials is governed by the specific licensing terms provided at purchase.
//                     </li>
//                     <li>Users are responsible for providing accurate contact and payment information.</li>
//                     <li>We are not liable for losses arising from misuse of our content or breach of these terms.</li>
//                     <li>
//                       For support or queries about these terms, email:{' '}
//                       <span className="font-semibold" style={{ color: DEEP_TEAL }}>
//                         [support@yourdomain.com](mailto:support@yourdomain.com)
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
                 
//                 {/* Refund Policy */}
//                 <div className="mb-6">
//                   <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed" style={{ color: '#185E6C' }}>
//                     <li>
//                       We accept refund requests within <strong>7 days</strong> of purchase.
//                     </li>
//                     <li>Items or access must be unused and in their original condition.</li>
//                     <li>
//                       Refunds are processed to the original payment method within <strong>5–7 business days</strong>.
//                     </li>
//                     <li>
//                       Digital products and gift cards are <strong>non-refundable</strong> unless explicitly stated.
//                     </li>
//                     <li>
//                       To request a refund, contact our support team with your purchase details and reason for refund.
//                     </li>
//                     <li>Refunds may be subject to verification and eligibility checks.</li>
//                     <li>Partial refunds are handled on a case-by-case basis.</li>
//                   </ul>
//                 </div> 

//                 {/* Contact CTA at bottom */}
//                 <div
//                   className="pt-4 border-t mt-4"
//                   style={{ borderColor: 'rgba(32,124,151,0.1)' }}
//                 >
//                 </div>

//                 <div style={{ height: 12 }} /> {/* bottom padding so last line is visible */}
//               </div>

//               {/* ===== Fade hint at bottom ===== */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 rounded-b-2xl"
//                 style={{
//                   background: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(32,124,151,0.12))',
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





export default function HelpSection() {
  const PRIMARY = '#168287';
  const PRIMARY_DARK = '#11616a';

  return (
    <section className="py-16 bg-gradient-to-b from-[#eaf8fb] to-white">
      <div className="container mx-auto px-6">
        {/* Custom Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
                boxShadow: '0 8px 30px rgba(22,130,135,0.25)',
              }}
            >
              {/* Document with Checkmark Icon */}
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 13 11 15 15 11" />
              </svg>
            </div>

            <div>
              <h2
                className="text-4xl font-extrabold leading-tight drop-shadow-sm"
                style={{ color: PRIMARY }}
              >
                Policies & Terms
              </h2>
              <p className="text-sm" style={{ color: 'rgba(22,130,135,0.8)' }}></p>
            </div>
          </div>
        </div>

        {/* Centered Card */}
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-3xl p-6 shadow-2xl border relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(22,130,135,0.12), rgba(22,130,135,0.18))`,
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 50px rgba(22,130,135,0.22)',
              backdropFilter: 'blur(10px)',
            }}
            role="region"
            aria-labelledby="help-heading"
          >
            {/* Header row inside card */}
            <div className="flex items-center justify-between mb-4">
              <h3
                id="help-heading"
                className="text-2xl font-bold"
                style={{ color: PRIMARY }}
              ></h3>
            </div>

            {/* Scrollable content container */}
            <div className="relative">
              <div
                className="max-h-96 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-[#3FA8C0] scrollbar-track-transparent hover:scrollbar-thumb-[#6FC3D2]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                  borderRadius: '1rem',
                  padding: '1rem',
                }}
                aria-label="Policies content"
              >
                {/* Terms & Conditions */}
                <div className="mb-6">
                  <ul
                    className="list-disc list-inside space-y-2 text-sm leading-relaxed"
                    style={{ color: '#185E6C' }}
                  >
                    {/* <li>By using our website and services, you agree to these terms.</li> */}
                    <li>
                    <strong> Ownership of Content</strong> All content, designs, graphics, and intellectual property belong to
                    Shiksha Classes unless otherwise specified.
                    </li>
                    <li>
                    <strong> Updates to Terms</strong> We may revise or update these terms at any time. Major changes will be
                    communicated to registered users.
                    </li>
                    <li>
                    <strong> Access to Paid Courses</strong> Access to paid courses and digital materials is governed by the
                    licensing terms provided at purchase
                    </li>
                    <li> <strong> User Responsibilities</strong> Users must provide accurate and up-to-date contact and payment details.</li>
                    <li> <strong> Limitation of Liability</strong> Shiksha Classes is not responsible for losses or misuse arising from your
                    use of our platform or breach of terms.</li>
                    <li>
                    <strong> Support</strong> For any queries, contact:{' '}
                      <span className="font-semibold" style={{ color: PRIMARY }}>
                        [support@yourdomain.com]
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Refund Policy */}
                <div className="mb-6">
                  <ul
                    className="list-disc list-inside space-y-2 text-sm leading-relaxed"
                    style={{ color: '#185E6C' }}
                  >
                    <li><strong>Refund Policy</strong> All fees paid are strictly non-refundable. No transfers or adjustments of fees are
                    permitted under any circumstances.</li>
                    <li><strong>No Transfer of Fee</strong> Fees once paid cannot be transferred to another student, another course, or a
                    future batch</li>
                    {/* <li>Refunds are processed to the original payment method within <strong>5–7 business days</strong>.</li>
                    <li>Digital products and gift cards are <strong>non-refundable</strong> unless explicitly stated.</li>
                    <li>To request a refund, contact our support team with your purchase details and reason for refund.</li>
                    <li>Refunds may be subject to verification and eligibility checks.</li>
                    <li>Partial refunds are handled on a case-by-case basis.</li> */}
                  </ul>
                </div>

                {/* Contact CTA at bottom */}
                <div
                  className="pt-4 border-t mt-4"
                  style={{ borderColor: 'rgba(22,130,135,0.1)' }}
                ></div>

                <div style={{ height: 12 }} /> {/* bottom padding so last line is visible */}
              </div>

              {/* Fade hint at bottom */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 rounded-b-2xl"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(22,130,135,0.12))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
