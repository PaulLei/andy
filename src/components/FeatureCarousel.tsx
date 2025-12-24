import { useState } from 'react';
import { Moon, Sun, Heart, Wind, Users } from 'lucide-react';

const features = [
  {
    title: 'Starting your day',
    description: 'Wake up to personalized insights about your sleep and readiness',
    icon: Sun,
    color: 'from-orange-400 to-yellow-400',
  },
  {
    title: 'Taking a walk',
    description: 'Track your activity and understand how movement impacts your health',
    icon: Wind,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Under the weather',
    description: 'Monitor your body temperature and recovery metrics',
    icon: Heart,
    color: 'from-red-400 to-pink-400',
  },
  {
    title: 'Winding down',
    description: 'Optimize your evening routine for better sleep quality',
    icon: Moon,
    color: 'from-indigo-400 to-purple-400',
  },
  {
    title: 'Hosting a party',
    description: 'See how social activities affect your energy and recovery',
    icon: Users,
    color: 'from-green-400 to-emerald-400',
  },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Your health companion,
            <br />
            every moment of the day
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="min-w-full p-12 md:p-20 flex flex-col md:flex-row items-center gap-12"
                >
                  <div className="flex-1">
                    <div
                      className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-light mb-8">
                      {feature.description}
                    </p>
                    <div className="flex gap-2">
                      {features.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === activeIndex ? 'w-8 bg-black' : 'w-1 bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 aspect-square flex items-center justify-center">
                      <div
                        className={`w-full h-full rounded-2xl bg-gradient-to-br ${feature.color} opacity-20`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
