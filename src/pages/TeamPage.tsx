import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mark Hays, PhD',
    title: 'Chief Executive Officer & Co-Founder',
    bio: 'Visionary leader with extensive experience in healthcare innovation and neurotech entrepreneurship.',
    image: '/Mark-Hays-PhD-400x400.jpg',
    linkedin: '#',
  },
  {
    name: 'Sridevi Sarma, PhD',
    title: 'Chief Scientific Officer & Co-Founder',
    bio: 'Leading neuroscientist with groundbreaking research in EEG signal processing and computational neuroscience.',
    image: '/Sridevi-Sarma-400x400.jpg',
    linkedin: '#',
  },
  {
    name: 'Jorge Gonzalez Martinez, MD',
    title: 'Chief Medical Officer',
    bio: 'Renowned neurologist and epilepsy specialist with 15+ years of clinical practice and research.',
    image: '/jorge-gonzalez-martinez-hr-400x400.jpg',
    linkedin: '#',
  },
  {
    name: 'Golnoosh Sharifian, PhD',
    title: 'VP of Product & Engineering',
    bio: 'AI/ML expert with a passion for translating research into practical clinical tools.',
    image: '/Golnoosh-400x400.jpg',
    linkedin: '#',
  },
  {
    name: 'Andrew Gotshalk',
    title: 'VP of Business Development',
    bio: 'Strategic business leader focused on building partnerships with healthcare institutions worldwide.',
    image: '/andrew-gotshalk-adkom-blip-photo-may-12-400x400.jpg',
    linkedin: '#',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs tracking-widest uppercase text-blue-600 font-semibold">
            Leadership Team
          </span>
          <h1 className="text-5xl md:text-6xl font-light mt-4 mb-6 leading-tight">
            Meet the Team Driving
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Our diverse team brings together world-class expertise in neuroscience,
            medicine, engineering, and business to transform neurological care.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-normal mb-2">{member.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-4 tracking-wide">
                      {member.title}
                    </p>
                    <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center space-x-3 pt-6 border-t border-gray-100">
                      <a
                        href={member.linkedin}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Why Brilliant Minds Choose Us
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              We're building something meaningful at the intersection of science and patient care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mission-Driven Work',
                description:
                  "Every day, you're contributing to better patient outcomes and advancing neurological care.",
              },
              {
                title: 'World-Class Team',
                description:
                  'Collaborate with leading researchers, clinicians, and engineers from top institutions.',
              },
              {
                title: 'Growth Opportunities',
                description:
                  'Work on cutting-edge problems that shape the future of precision medicine.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-normal mb-3">{item.title}</h3>
                <p className="text-gray-600 font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 text-center border border-blue-100">
          <h2 className="text-4xl font-light mb-6">We're Hiring</h2>
          <p className="text-lg text-gray-700 font-light mb-8">
            Join our team and help us transform the future of neurological care. We're looking
            for talented individuals in engineering, research, clinical, and business roles.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
}
