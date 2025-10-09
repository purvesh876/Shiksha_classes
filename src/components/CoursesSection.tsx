import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  features: string[];
  isNew: boolean;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'JEE (Main)',
    subtitle: 'Joint Entrance Examination',
    features: ['Live classes from top faculty', 'Live test and analysis', 'Premium study material'],
    isNew: true,
  },
  {
    id: 2,
    title: 'JEE (Adv)',
    subtitle: 'Joint Entrance Examination',
    features: ['Live classes from top faculty', 'Live test and analysis', 'Premium study material'],
    isNew: true,
  },
  {
    id: 3,
    title: 'NEET',
    subtitle: 'National Eligibility Cum Entrance',
    features: ['Live classes from top faculty', 'Live test and analysis', 'Premium study material'],
    isNew: false,
  },
];

export default function CoursesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          COURSES WE OFFER
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {courses.map((course) => (
                <div key={course.id} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-blue-400 transform hover:scale-105 transition-transform duration-300">
                      <div className="relative">
                        {course.isNew && (
                          <span className="absolute -top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-orange-400 shadow-lg">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-orange-600">
                              {course.title.charAt(0)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-center text-gray-600 mb-6">
                        {course.subtitle}
                      </p>

                      <div className="space-y-3">
                        {course.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-2 text-gray-700"
                          >
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
