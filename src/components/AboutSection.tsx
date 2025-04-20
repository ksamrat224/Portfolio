
import { LinkedinIcon, GithubIcon, FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accent-blue uppercase tracking-wider font-medium mb-2 animate-fade-in">About Me</p>
            <h2 className="text-3xl font-bold font-heading mb-6 animate-fade-in animation-delay-100">
            Full-Stack Web Developer | Creative UI/UX Designer | Lifelong Tech Learner
            </h2>
            <div className="space-y-4 text-gray-700 animate-fade-in animation-delay-200 font-serif">
              <p>
              Well ,if you were to ask me who I am. I'd say I'm 20 yr old computer science student at Tribhuvan University,diving into the world of code.
              </p>
              <p>
              I'm all about keeping things clean and simple-crafting creations that look sleek and function smoothly.I'm like a design-minded coder,always exploring and evolving. While I'm discovering Nest.js and React,one thing's certain:I love building new things or giving a fresh twist to what's already out there.
              </p>
              <p>
             Making interfaces smoother?That's what I enjoy.So,in a nutshell,I'm all about tech,design,and the pure joy of making things click.Let's see where this journey take me next!
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a 
                href="https://www.linkedin.com/in/samratk225/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg hover:bg-[#0077B5]/90 transition-colors"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a 
                href="https://github.com/ksamrat224" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#333] text-white px-4 py-2 rounded-lg hover:bg-[#333]/90 transition-colors"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
              <a 
                href="#"
                className="flex items-center gap-2 bg-accent-purple text-white px-4 py-2 rounded-lg hover:bg-accent-purple/90 transition-colors"
              >
                <FileText size={18} />
                Resume
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 animate-float">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src="/i.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div className="absolute -z-10 top-8 -right-8 w-full h-full rounded-xl border-2 border-accent-blue/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
