
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Education = () => {
  const educationItems = [
    {
      degree: "Higher Secondary Certificate",
      institution: "Shikshadeep College",
      location: "Biratnagar, Nepal",
      years: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed a thesis on deep learning applications in computer vision.",
      achievements: ["Top 10% of Class", "Best Project Award"],
    
    },
    {
      degree: "Bachelor of Science in Computer Science and Information Technology",
      institution: "Tribhuvan University",
      location: "Kathmandu, Nepal",
      years: "2022-Present",
      description: "Studying core areas of computer science including algorithms, data structures, and software engineering. Engaged in various projects and internships to enhance practical skills.",
      achievements: ["Project ", "Research Assistant", "Internship at Clove IT"]
      
    },
    {
      degree: "Full Stack Web Development",
      institution: "Clove IT",
      location: "Mahendra Chowk, Biratnagar, Nepal",
      years: "2025 - Present",
      description: "Completed a 3-months certification program in full stack web development using React as frontend,NestJs for backend,and PostgreSQL for DB management.Gained hands-on experience in building responsive web applications and RESTful APIs.",
      achievements: ["Top Performer", "Project Showcase", "Internship Opportunity"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">Education</h1>
            
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 transition-all hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="text-accent-blue mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-bold">{item.degree}</h3>
                        <h4 className="text-lg text-gray-700">{item.institution}</h4>
                      </div>
                    </div>
                    
                    <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar size={16} className="mr-1" /> {item.years}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-1" /> {item.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2 flex items-center">
                      <Award size={16} className="mr-2 text-accent-blue" /> 
                      Achievements
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
