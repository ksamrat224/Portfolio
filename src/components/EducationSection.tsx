
import { GraduationCap, Calendar, MapPin, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationSection = () => {
  const educationItems = [
    {
      degree: "Higher Secondary Education",
      institution: "Shikshadeep College",
      location: "Biratnagar, Nepal",
      years: "2020-2022",
    },
    {
      degree: "Bachelor of Science in Computer Science and Information Technology",
      institution: "Tribhuvan University",
      location: "Kathmandu, Nepal",
      years: "2022 - Present",
    },
    {
      degree: "Full Stack Web Development(Certification)",
      institution: "Clove IT",
      location: "Mahendra Chowk, Biratnagar, Nepal",
      years: "2025(3 months)",
    },
    {
      degree: "Full Stack Web Development(Internship)",
      institution: "Clove IT",
      location: "Mahendra Chowk, Biratnagar, Nepal",
      years: "2025 - Present",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent-blue uppercase tracking-wider font-medium mb-2 animate-fade-in">Learning Journey</p>
          <h2 className="text-4xl font-bold font-heading mb-4 animate-fade-in animation-delay-100">Education & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            My academic background that has shaped my technical knowledge and professional approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationItems.map((item, index) => (
              <div key={index} className="bg-gray-50 shadow-md rounded-xl p-6 transition-all hover:shadow-lg animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="flex items-start space-x-3 mb-3">
                  <GraduationCap className="text-accent-blue mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <h4 className="text-lg text-gray-700">{item.institution}</h4>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-1 text-gray-600 mb-1">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" /> {item.years}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" /> {item.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in animation-delay-300">
          <Link 
            to="/education" 
            className="inline-flex items-center gap-2 bg-accent-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-blue/90 transition-colors"
          >
            View Full Education Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
