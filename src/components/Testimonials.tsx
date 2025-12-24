const testimonials = [
  {
    quote:
      'Oura has become my daily compass, keeping me on the right track.',
    author: 'Sarah M.',
    role: 'Oura Member',
  },
  {
    quote:
      'The insights have helped me understand my body in ways I never thought possible.',
    author: 'Michael R.',
    role: 'Oura Member',
  },
  {
    quote:
      'Best investment in my health. The sleep tracking alone is worth it.',
    author: 'Jennifer L.',
    role: 'Oura Member',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Trusted by millions worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-10 hover:bg-gray-100 transition-colors duration-300"
            >
              <p className="text-xl font-light mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-normal text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600 font-light">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
