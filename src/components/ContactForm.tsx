import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    class: '',
    goals: '',
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
        class: '',
        goals: '',
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

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            REQUEST A CALL BACK
          </h2>
          <div className="inline-block border-2 border-gray-300 rounded-full px-6 py-1">
            <span className="text-gray-600 font-medium">CONTACT</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl transform -rotate-6"></div>
                <div className="relative flex items-end justify-center h-full">
                  <div className="text-9xl mb-8">📱</div>
                  <div className="absolute bottom-0 text-8xl">🧍</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-white">We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Students name"
                      required
                      className="px-4 py-3 rounded-lg border-2 border-white/50 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                      className="px-4 py-3 rounded-lg border-2 border-white/50 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      placeholder="Class"
                      className="px-4 py-3 rounded-lg border-2 border-white/50 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    />
                    <input
                      type="text"
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="Goals"
                      className="px-4 py-3 rounded-lg border-2 border-white/50 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="preferredCourses"
                      value={formData.preferredCourses}
                      onChange={handleChange}
                      placeholder="Preferred Courses"
                      className="px-4 py-3 rounded-lg border-2 border-white/50 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location"
                      className="px-4 py-3 rounded-lg border-2 border-white/50 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-gray-800 hover:bg-gray-900 text-white font-bold px-12 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
