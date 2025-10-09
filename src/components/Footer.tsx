import { Star, Linkedin, Instagram, Youtube, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Star className="w-8 h-8 text-blue-500" fill="currentColor" />
              </div>
              <div>
                <h3 className="font-bold text-xl">SHIKSHA CLASSES</h3>
                <p className="text-sm opacity-90">Believe and Achieve</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p>For Admission & Other query</p>
              <p className="font-bold text-lg">0000 000 0000</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-blue-500 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-blue-500 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300 group"
              >
                <Youtube className="w-5 h-5 text-blue-500 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98731668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
              <p className="font-bold text-sm">VISIT US AT: SC (BURARI)</p>
              <p className="text-xs mt-1">Model Basti</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/30">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 bg-white text-blue-600 font-bold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            <ChevronUp className="w-5 h-5" />
            <span>BACK TO TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
