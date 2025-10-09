export default function HelpSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Help and Support
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Refund Policy</h3>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl p-8 text-white shadow-xl">
              <ul className="space-y-3 text-sm leading-relaxed">
                <li>We accept refund requests within 7 days of purchase.</li>
                <li>
                  Items must be unused and in original condition.
                </li>
                <li>
                  Refunds are processed to the original payment method within 5-7 business
                  days.
                </li>
                <li>Digital products and gift cards are non-refundable.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Terms and Conditions
            </h3>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
              <ul className="space-y-3 text-sm leading-relaxed">
                <li>By using our website, you agree to our terms.</li>
                <li>
                  All content and designs belong to [Your Company Name].
                </li>
                <li>
                  We reserve the right to update terms anytime without prior notice.
                </li>
                <li>
                  For support, contact <br />
                  <span className="font-bold">support@[yourdomain].com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
