export default function DirectorSection() {
  return (
    <section id="faculty" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            FROM THE DIRECTORS DESK
          </h2>
          <div className="inline-block border-2 border-gray-300 rounded-full px-6 py-1">
            <span className="text-gray-600 font-medium">ABOUT US</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full flex items-center justify-center">
                    <div className="text-6xl">👨‍💼</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              SACHIN JAISWAL
            </h3>
            <p className="text-gray-600 mb-4">DIRECTOR, SHIKSHA CLASSES</p>

            <div className="flex space-x-2 mb-4">
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                B.Tech
              </span>
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                IIT Delhi
              </span>
            </div>

            <div className="border-t-2 border-gray-300 pt-4 w-full">
              <p className="text-sm text-gray-700 leading-relaxed">
                Welcome to Shiksha Classes! Our mission is to provide world-class education
                and mentorship to students aspiring for excellence. With over a decade of
                experience in competitive exam preparation, we have helped thousands of
                students achieve their dreams of getting into premier institutions. Our
                dedicated faculty and comprehensive study materials ensure that every
                student receives personalized attention and guidance.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">ABOUT US</h3>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                The city lights flickered against the dark horizon.
              </p>
              <p>
                Streets bustled with the energy of a thousand stories unfolding.
              </p>
              <p>
                Each dream danced under the neon glow of passing cars.
              </p>
              <p>
                Shadows moved in perfect synchrony with the fast movement.
              </p>
              <p>
                A quiet hum of the school echoed through the still air.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
