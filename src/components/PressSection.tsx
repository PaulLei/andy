import { Newspaper } from 'lucide-react';

const pressItems = [
  {
    publication: 'Fast Company',
    headline: 'The most innovative health tracker of the year',
  },
  {
    publication: 'Forbes',
    headline: 'Why top athletes swear by Oura Ring',
  },
  {
    publication: 'TIME',
    headline: 'One of the best inventions of 2024',
  },
];

export default function PressSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Newspaper className="w-6 h-6" />
            <h2 className="text-3xl font-light">In the News</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <p className="text-sm font-light text-gray-500 mb-4 uppercase tracking-wider">
                {item.publication}
              </p>
              <h3 className="text-xl font-light leading-relaxed">
                {item.headline}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
