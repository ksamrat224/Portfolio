
import { LinkedinIcon, GithubIcon, FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-accent-blue uppercase tracking-wider font-medium mb-2 animate-fade-in">About Me</p>
            <h2 className="text-4xl font-bold font-heading mb-6 animate-fade-in animation-delay-100">
              Developer & Designer with a passion for creating beautiful experiences
            </h2>
            <div className="space-y-4 text-gray-700 animate-fade-in animation-delay-200">
              <p>
                I'm a passionate web developer with expertise in building modern web applications using the latest technologies. 
                My journey in tech started when I was in college, and I've been hooked ever since.
              </p>
              <p>
                With over X years of experience in the field, I've worked with various technologies and frameworks, 
                always striving to learn and improve my skills. I enjoy solving complex problems and turning ideas into reality.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
                or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-lg hover:bg-[#0077B5]/90 transition-colors"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
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
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop" 
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
