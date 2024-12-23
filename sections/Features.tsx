// import Image from 'next/image';

// import Avatar from '@/components/Avatar';
import FeatureCard from '@/components/FeatureCard';
// import Key from '@/components/Key';
import Tag from '@/components/Tag';
import { FEATURES } from '@/constants';
// import avatar1 from '@/public/assets/images/avatar-ashwin-santiago.jpg';
// import avatar3 from '@/public/assets/images/avatar-florence-shaw.jpg';
// import avatar2 from '@/public/assets/images/avatar-lula-meyers.jpg';
// import avatar4 from '@/public/assets/images/avatar-owen-garcia.jpg';

const Features = () => {
  return (
    <section className="py-24" id="features">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-[#29abe2]">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Effortless SVG Viewing"
            description="Open, inspect and navigate your SVG files with powerful zoom, pan and property inspection tools"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-24 h-24 absolute transition-all duration-500 group-hover:scale-150 group-hover:translate-x-12 group-hover:-translate-y-8"
                >
                  <circle cx="50" cy="50" r="40" fill="#29abe2" />
                </svg>
                <svg
                  viewBox="0 0 100 100"
                  className="w-16 h-16 absolute transition-all duration-500 group-hover:scale-75 group-hover:-translate-x-12 group-hover:translate-y-8"
                >
                  <rect x="20" y="20" width="60" height="60" fill="#29abe2" />
                </svg>
                <div className="absolute bottom-4 right-4 bg-neutral-800 px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  200%
                </div>
              </div>
            </div>
          </FeatureCard>
          <FeatureCard
            title="SVG Property Inspector"
            description="Inspect and understand SVG properties with a powerful built-in inspector that shows all attributes and values"
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center">
                We&apos;ve achieved{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                  <span>incredible</span>
                  <video
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute bottom-full  left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  />
                </span>{' '}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Easy SVG Navigation"
            description="Effortlessly zoom, pan and select elements with intuitive controls designed for exploring complex SVG files"
            className="md:col-span-2 md:col-start-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-32 h-32 absolute transition-all duration-500 group-hover:scale-125 group-hover:translate-x-8"
                >
                  <rect
                    x="20"
                    y="20"
                    width="60"
                    height="60"
                    fill="#29abe2"
                    className="group-hover:stroke-white/50 group-hover:stroke-2 transition-all duration-500"
                  />
                </svg>
                <div className="absolute bottom-4 right-4 bg-neutral-800 px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  125%
                </div>
                <div className="absolute top-4 left-4 bg-neutral-800 px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Selected: rect
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {FEATURES.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-[#29abe2] text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
