import React, { useState, useEffect } from 'react';
import { Code2, Palette, Smartphone, Globe, MessageSquare, Zap, ArrowRight, Mouse, ChevronDown } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Naveen.dev
          </span>
          <div className="flex gap-8">
            {['Work', 'Services', 'About', 'Contact'].map((item, index) => (
              <button 
                key={index}
                className={`text-white hover:text-purple-400 transition-colors ${activeSection === index ? 'text-purple-400' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-purple-400 mb-4">
              <Mouse size={20} />
              <span className="uppercase tracking-wider text-sm">Scroll to explore</span>
              <ChevronDown size={20} className="animate-bounce" />
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">Crafting</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Digital Magic
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Not just another web designer. I create immersive digital experiences that captivate, engage, and convert.
            </p>
            
            <div className="flex gap-4">
              <button className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:border-purple-500 text-white transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services Section */}
      <section className="relative bg-black py-32 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold text-white sticky top-32">
                Services that
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Elevate Your Brand
                </span>
              </h2>
            </div>
            
            <div className="md:w-2/3 grid gap-8">
              {[
                {
                  icon: <Palette size={40} />,
                  title: 'UI/UX Excellence',
                  description: 'Creating interfaces that not only look stunning but feel intuitive and natural to use.',
                },
                {
                  icon: <Code2 size={40} />,
                  title: 'Development Mastery',
                  description: 'Transforming designs into high-performance, responsive websites using cutting-edge technology.',
                },
                {
                  icon: <Globe size={40} />,
                  title: 'Digital Strategy',
                  description: 'Comprehensive approach to establish and grow your digital presence effectively.',
                },
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all cursor-pointer border border-white/10 hover:border-purple-500"
                >
                  <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-gradient-to-b from-black to-purple-900 py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Why Choose
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                A Digital Artist
              </span>
            </h2>
            
            <div className="grid gap-8">
              {[
                {
                  title: 'Creative Vision',
                  description: 'Every project is an opportunity to create something unique and memorable.',
                },
                {
                  title: 'Technical Excellence',
                  description: 'Leveraging cutting-edge technology to deliver outstanding results.',
                },
                {
                  title: 'User-Focused',
                  description: 'Creating experiences that delight and engage your target audience.',
                },
                {
                  title: 'Result-Driven',
                  description: 'Focus on delivering measurable results that impact your business.',
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10 hover:border-purple-500"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-purple-900 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-purple-200 mb-12">
              Let's create something extraordinary together.
            </p>
            <button className="group bg-white text-purple-900 px-12 py-4 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all flex items-center gap-2 mx-auto">
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Naveen.dev
            </span>
            <div className="text-gray-400">
              © 2024 All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;