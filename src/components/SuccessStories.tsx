import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Story {
  id: number;
  name: string;
  achievement: string;
  rank: string;
  location: string;
}

const stories: Story[] = [
  { id: 1, name: 'ERSHIK A.', achievement: 'JEE AIR', rank: '8974', location: 'IIT ROORKEE' },
  { id: 2, name: 'ADITYA K.', achievement: 'JEE AIR', rank: '2890', location: 'IIT PATNA' },
  { id: 3, name: 'PUREYUSH S.', achievement: 'JEE AIR', rank: '5621', location: 'IIT PATNA' },
  { id: 4, name: 'AAYUSH U.', achievement: 'JEE AIR', rank: '7845', location: 'IIT HYDR' },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const visibleStories = [
    stories[(currentIndex - 1 + stories.length) % stories.length],
    stories[currentIndex],
    stories[(currentIndex + 1) % stories.length],
    stories[(currentIndex + 2) % stories.length],
  ];

  return (
    <section id="success" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          SUCCESS STORIES
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 justify-center">
              {visibleStories.map((story, index) => {
                const isCenter = index === 1;
                const opacity = index === 0 || index === 3 ? 'opacity-40' : 'opacity-100';

                return (
                  <div
                    key={story.id}
                    className={`flex-shrink-0 w-64 transition-all duration-500 ${opacity} ${
                      isCenter ? 'scale-110 z-10' : 'scale-90'
                    }`}
                  >
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800"></div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-6xl">
                            👤
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-right mb-2">
                          <p className="text-xs opacity-80">{story.achievement}</p>
                          <p className="text-2xl font-bold">{story.rank}</p>
                        </div>

                        <div className="border-t border-white/30 pt-3">
                          <p className="text-xl font-bold">{story.name}</p>
                          <p className="text-sm opacity-90">{story.location}</p>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <p className="text-white text-xs font-bold">{story.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
