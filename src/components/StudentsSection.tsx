export default function StudentsSection() {
  const institutions = [
    { name: 'IIT BHU', icon: '🎓' },
    { name: 'NIT', icon: '⚙️' },
    { name: 'IIIT', icon: '💻' },
    { name: 'IIT Delhi', icon: '🏛️' },
    { name: 'IIT Bombay', icon: '🎯' },
  ];

  const stats = [
    { icon: '👨‍🏫', number: '8', label: 'Expert Faculty' },
    { icon: '📚', number: '4+', label: 'Total Courses' },
    { icon: '👥', number: '300+', label: 'Students Managed' },
    { icon: '💬', number: '2 lacs+', label: 'Online Doubts' },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-blue-500 to-cyan-400">
      <div className="container mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30">
          <h2 className="text-white text-2xl font-bold text-center mb-8">
            OUR STUDENTS ARE AT
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {institutions.map((inst, index) => (
              <div
                key={index}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-3xl mb-1">{inst.icon}</div>
                  <p className="text-xs font-bold text-gray-700">{inst.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-white/30 pt-8">
            <h3 className="text-white text-2xl font-bold text-center mb-8">
              WHY WE ARE BEST
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
