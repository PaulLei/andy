import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
            The best present is a
            <br />
            <span className="font-light">healthier future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto mb-12">
            Give the gift of better health with Oura Ring 4. Advanced sensors
            track sleep, activity, and wellness metrics to help you live your
            best life.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 inline-flex items-center space-x-2 group">
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div
          className={`mt-20 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative">
            <div className="flex items-center justify-center space-x-12">
              <div className="relative group cursor-pointer">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-2xl"></div>
                </div>
                <p className="mt-6 text-sm font-light text-gray-600">Gold</p>
              </div>
              <div className="relative group cursor-pointer">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 shadow-2xl"></div>
                </div>
                <p className="mt-6 text-sm font-light text-gray-600">Silver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
