
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen bg-hero text-hero-foreground flex items-center">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.8),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.8),transparent_50%)]"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="order-2 md:order-1 max-w-3xl">
            <p className="text-accent-blue-light font-medium mb-4 animate-fade-in">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in animation-delay-100">
              <span className="text-white">Samrat Karki</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-gray-300 leading-relaxed animate-fade-in animation-delay-200">
              I'm a <span className="text-accent-purple-light font-medium">Designer & Developer</span> creating modern and responsive web applications focused on user experience.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <button 
                onClick={scrollToProjects}
                className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 group"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <a 
                href="#contact" 
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-3 rounded-lg font-medium transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in mb-6 md:mb-0">
            <Avatar className="h-48 w-48 md:h-64 md:w-64 rounded-full ring-4 ring-accent-blue/30 shadow-lg">
              <AvatarImage src="/your-photo.jpg" alt="Your Name" />
              <AvatarFallback className="bg-accent-blue text-white text-4xl">YN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            scrollToProjects();
          }}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          aria-label="Scroll to projects"
        >
          <span className="text-sm font-light mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
