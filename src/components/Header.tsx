import { Star } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Star className="w-8 h-8 text-blue-500" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">SHIKSHA CLASSES</h1>
              <p className="text-white text-xs opacity-90">Believe and Achieve</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              PROGRAM
            </button>
            <button
              onClick={() => scrollToSection('faculty')}
              className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              FACULTY
            </button>
            <button
              onClick={() => scrollToSection('success')}
              className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              ACHIEVEMENTS
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              GALLERY
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              CONTACT US
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
