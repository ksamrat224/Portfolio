
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-heading">Samrat Karki</a>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating innovative web solutions with a focus on user experience and performance.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="bg-accent-blue/20 hover:bg-accent-blue/30 text-white p-3 rounded-full transition-all mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Samrat Karki. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
