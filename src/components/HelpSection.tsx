





// export default function HelpSection() {
//   const PRIMARY = '#168287';
//   const PRIMARY_DARK = '#11616a';

//   return (
//     <section className="py-16 bg-gradient-to-b from-[#eaf8fb] to-white">
//       <div className="container mx-auto px-6">
//         {/* Custom Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center gap-3">
//             <div
//               className="w-12 h-12 rounded-lg flex items-center justify-center"
//               style={{
//                 background: `linear-gradient(135deg, ${PRIMARY}, ${PRIMARY_DARK})`,
//                 boxShadow: '0 8px 30px rgba(22,130,135,0.25)',
//               }}
//             >
//               {/* Document with Checkmark Icon */}
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
//                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
//                 <polyline points="14 2 14 8 20 8" />
//                 <polyline points="9 13 11 15 15 11" />
//               </svg>
//             </div>

//             <div>
//               <h2
//                 className="text-4xl font-extrabold leading-tight drop-shadow-sm"
//                 style={{ color: PRIMARY }}
//               >
//                 Policies & Terms
//               </h2>
//               <p
//                 className="text-sm"
//                 style={{ color: 'rgba(22,130,135,0.8)' }}
//               >
//                 Please read the following terms and refund rules carefully.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Centered Card */}
//         <div className="mx-auto max-w-7xl">
//           <div
//             className="rounded-3xl p-6 shadow-2xl border relative overflow-hidden"
//             style={{
//               background:
//                 'linear-gradient(135deg, rgba(22,130,135,0.12), rgba(22,130,135,0.18))',
//               border: '1px solid rgba(255,255,255,0.08)',
//               boxShadow: '0 20px 50px rgba(22,130,135,0.22)',
//               backdropFilter: 'blur(10px)',
//             }}
//             role="region"
//             aria-labelledby="help-heading"
//           >
//             {/* Header row inside card */}
//             <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
//               <h3
//                 id="help-heading"
//                 className="text-2xl font-bold"
//                 style={{ color: PRIMARY }}
//               >
//                 {/* Terms & Refund Policy */}
//               </h3>
//               <span
//                 className="text-sm font-medium"
//                 style={{ color: '#185E6C' }}
//               >
//                 Effective Date: 4 September 2025
//               </span>
//             </div>

//             {/* Scrollable content container */}
//             <div className="relative">
//               <div
//                 className="max-h-96 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-[#3FA8C0] scrollbar-track-transparent hover:scrollbar-thumb-[#6FC3D2]"
//                 style={{
//                   background:
//                     'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
//                   borderRadius: '1rem',
//                   padding: '1rem',
//                 }}
//                 aria-label="Policies content"
//               >
//                 {/* Terms & Conditions — Shiksha Classes */}
//                 <div className="mb-6">
//                   <h4
//                     className="text-lg font-semibold mb-3"
//                     style={{ color: PRIMARY }}
//                   >
//                     Terms & Conditions — Shiksha Classes
//                   </h4>

//                   {/* 1. Ownership of Intellectual Property */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       1. Ownership of Intellectual Property
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       All content, study materials, designs, graphics, and
//                       intellectual property made available by Shiksha Classes
//                       are owned exclusively by the institution unless stated
//                       otherwise. Unauthorized reproduction, distribution, or
//                       modification is strictly prohibited.
//                     </p>
//                   </div>

//                   {/* 2. Amendments to Terms */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       2. Amendments to Terms
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Shiksha Classes reserves the right to modify or update
//                       these terms at any time. Significant amendments will be
//                       communicated to registered users.
//                     </p>
//                   </div>

//                   {/* 3. Access to Paid and Licensed Content */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       3. Access to Paid and Licensed Content
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Access to paid courses and digital materials is governed
//                       strictly by the licensing terms provided at purchase.
//                       Sharing, reselling, or unauthorized dissemination is
//                       prohibited.
//                     </p>
//                   </div>

//                   {/* 4. User Responsibilities */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       4. User Responsibilities
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Users must provide accurate and updated contact and
//                       payment information. Misuse of the platform or violation
//                       of terms may result in disciplinary action.
//                     </p>
//                   </div>

//                   {/* 5. Limitation of Liability */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       5. Limitation of Liability
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Shiksha Classes shall not be liable for any direct or
//                       indirect damages arising from the use or misuse of its
//                       platform or materials.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Refund Policy — Shiksha Classes */}
//                 <div className="mb-6">
//                   <h4
//                     className="text-lg font-semibold mb-3"
//                     style={{ color: PRIMARY }}
//                   >
//                     Refund Policy — Shiksha Classes
//                   </h4>

//                   {/* 1. Course Withdrawal */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       1. Course Withdrawal
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Before batch commencement: 10,000 will be deducted and the
//                       remaining amount refunded. After commencement: No refund
//                       under any circumstances.
//                     </p>
//                   </div>

//                   {/* 2. Course Cancellation by Shiksha Classes */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       2. Course Cancellation by Shiksha Classes
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       If a course is cancelled by the institute, students will
//                       receive a 100% refund of tuition fees.
//                     </p>
//                   </div>

//                   {/* 3. Absence from Classes */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       3. Absence from Classes
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       No refund will be issued due to absence for personal,
//                       medical, or other reasons.
//                     </p>
//                   </div>

//                   {/* 4. Disciplinary Actions */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       4. Disciplinary Actions
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Students expelled or suspended for misconduct are not
//                       eligible for refunds.
//                     </p>
//                   </div>

//                   {/* 5. Medical Grounds */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       5. Medical Grounds
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Partial refunds may be considered only upon submission of a
//                       valid medical certificate, subject to management approval.
//                     </p>
//                   </div>

//                   {/* 6. Refund Procedure */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       6. Refund Procedure
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Refund requests must be submitted in writing with valid
//                       documents. Approved refunds will be processed within 45
//                       days to the original payment mode.
//                     </p>
//                   </div>

//                   {/* 7. Non-Refundable Fees */}
//                   <div className="mb-4">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       7. Non-Refundable Fees
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Registration fees, crash course/test series fees, and
//                       admission/entrance exam fees are strictly non-refundable.
//                     </p>
//                   </div>

//                   {/* Declaration */}
//                   <div className="mb-2">
//                     <h5
//                       className="font-semibold mb-1"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Declaration
//                     </h5>
//                     <p
//                       className="text-base leading-relaxed"
//                       style={{ color: '#185E6C' }}
//                     >
//                       Students and parents must acknowledge and sign this policy
//                       at the time of admission. Refund eligibility will be
//                       determined strictly as per these rules, with no
//                       exceptions.
//                     </p>
//                   </div>
//                 </div>

//                 <div
//                   className="pt-4 border-t mt-4"
//                   style={{ borderColor: 'rgba(22,130,135,0.1)' }}
//                 ></div>

//                 <div style={{ height: 12 }} />
//               </div>

//               {/* Fade hint at bottom */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 rounded-b-2xl"
//                 style={{
//                   background:
//                     'linear-gradient(180deg, rgba(255,255,255,0), rgba(22,130,135,0.12))',
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
              <p
                className="text-sm"
                style={{ color: 'rgba(22,130,135,0.8)' }}
              >
                Please read the following terms and refund rules carefully.
              </p>
            </div>
          </div>
        </div>

        {/* Centered Card */}
        <div className="mx-auto max-w-7xl">
          <div
            className="rounded-3xl p-6 shadow-2xl border relative overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, rgba(22,130,135,0.12), rgba(22,130,135,0.18))',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 20px 50px rgba(22,130,135,0.22)',
              backdropFilter: 'blur(10px)',
            }}
            role="region"
            aria-labelledby="help-heading"
          >
            {/* Header row inside card */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3
                id="help-heading"
                className="text-2xl font-bold"
                style={{ color: PRIMARY }}
              >
                {/* Terms & Refund Policy */}
              </h3>
              <span
                className="text-sm font-medium"
                style={{ color: '#185E6C' }}
              >
                Effective Date: 4 September 2025
              </span>
            </div>

            {/* Scrollable content container */}
            <div className="relative">
              <div
                className="max-h-96 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-[#3FA8C0] scrollbar-track-transparent hover:scrollbar-thumb-[#6FC3D2]"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                  borderRadius: '1rem',
                  padding: '1rem',
                }}
                aria-label="Policies content"
              >
                {/* Privacy Policy — Shiksha Classes */}
                <div className="mb-6">
                  <h4
                    className="text-lg font-semibold mb-3"
                    style={{ color: PRIMARY }}
                  >
                    Privacy Policy — Shiksha Classes
                  </h4>

                  {/* 1. Introduction */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      1. Introduction
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Shiksha Classes (“we,” “our,” or “us”) is committed to
                      protecting the privacy and personal information of
                      students, parents, and visitors. This Privacy Policy
                      explains how we collect, use, store, and safeguard
                      information obtained through our website, offline
                      admissions, and institutional services.
                    </p>
                  </div>

                  {/* 2. Scope of This Policy */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      2. Scope of This Policy
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      This policy applies to the official website of Shiksha
                      Classes, student admissions, academic records,
                      communication systems, and online/offline platforms
                      operated by the institute.
                    </p>
                  </div>

                  {/* 3. Information We Collect */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      3. Information We Collect
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      We may collect personal details, academic records, payment
                      information, and communication data for institutional
                      purposes.
                    </p>
                  </div>

                  {/* 4. Use of Information */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      4. Use of Information
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Information is used for admissions, academic management,
                      communication, fee processing, quality improvement, and
                      legal compliance.
                    </p>
                  </div>

                  {/* 5. Data Security */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      5. Data Security
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      We take reasonable security measures to protect personal
                      data. Access is restricted to authorized staff.
                    </p>
                  </div>

                  {/* 6. Data Retention */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      6. Data Retention
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Data is retained only as long as necessary for academic,
                      legal, and administrative purposes.
                    </p>
                  </div>

                  {/* 7. User Rights */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      7. User Rights
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Students and parents may access, correct, or request
                      deletion of data, subject to institutional rules and
                      applicable regulations.
                    </p>
                  </div>

                  {/* 8. Third-Party Services */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      8. Third-Party Services
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      We may use payment gateways and communication tools that
                      are governed by their own privacy policies and security
                      practices.
                    </p>
                  </div>

                  {/* 9. Children’s Privacy */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      9. Children’s Privacy
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Admissions for minors are conducted with parental or
                      guardian consent, and information is handled with due care
                      and confidentiality.
                    </p>
                  </div>

                  {/* 10. Changes to Policy */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      10. Changes to Policy
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      This policy may be updated periodically, and any changes
                      will be posted on the official website of Shiksha Classes.
                    </p>
                  </div>

                  {/* 11. Contact Information */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      11. Contact Information
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      For any questions or concerns regarding this policy, you
                      may contact Shiksha Classes, Khat Road, Bhandara,
                      Maharashtra.
                    </p>
                  </div>
                </div>

                {/* Refund Policy — Shiksha Classes */}
                <div className="mb-6">
                  <h4
                    className="text-lg font-semibold mb-3"
                    style={{ color: PRIMARY }}
                  >
                    Refund Policy — Shiksha Classes
                  </h4>

                  {/* 1. Course Withdrawal */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      1. Course Withdrawal
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Before batch commencement: 10,000 will be deducted and the
                      remaining amount refunded. After commencement: No refund
                      under any circumstances.
                    </p>
                  </div>

                  {/* 2. Course Cancellation by Shiksha Classes */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      2. Course Cancellation by Shiksha Classes
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      If a course is cancelled by the institute, students will
                      receive a 100% refund of tuition fees.
                    </p>
                  </div>

                  {/* 3. Absence from Classes */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      3. Absence from Classes
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      No refund will be issued due to absence for personal,
                      medical, or other reasons.
                    </p>
                  </div>

                  {/* 4. Disciplinary Actions */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      4. Disciplinary Actions
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Students expelled or suspended for misconduct are not
                      eligible for refunds.
                    </p>
                  </div>

                  {/* 5. Medical Grounds */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      5. Medical Grounds
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Partial refunds may be considered only upon submission of a
                      valid medical certificate, subject to management approval.
                    </p>
                  </div>

                  {/* 6. Refund Procedure */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      6. Refund Procedure
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Refund requests must be submitted in writing with valid
                      documents. Approved refunds will be processed within 45
                      days to the original payment mode.
                    </p>
                  </div>

                  {/* 7. Non-Refundable Fees */}
                  <div className="mb-4">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      7. Non-Refundable Fees
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Registration fees, crash course/test series fees, and
                      admission/entrance exam fees are strictly non-refundable.
                    </p>
                  </div>

                  {/* Declaration */}
                  <div className="mb-2">
                    <h5
                      className="font-semibold mb-1"
                      style={{ color: '#185E6C' }}
                    >
                      Declaration
                    </h5>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#185E6C' }}
                    >
                      Students and parents must acknowledge and sign this policy
                      at the time of admission. Refund eligibility will be
                      determined strictly as per these rules, with no
                      exceptions.
                    </p>
                  </div>
                </div>

                <div
                  className="pt-4 border-t mt-4"
                  style={{ borderColor: 'rgba(22,130,135,0.1)' }}
                ></div>

                <div style={{ height: 12 }} />
              </div>

              {/* Fade hint at bottom */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 rounded-b-2xl"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0), rgba(22,130,135,0.12))',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
