
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Education = () => {
  const educationItems = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      years: "2019 - 2021",
      description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed a thesis on deep learning applications in computer vision.",
      achievements: ["Dean's List", "Research Assistant", "AI Conference Speaker"]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "MIT",
      location: "Cambridge, MA",
      years: "2015 - 2019",
      description: "Focused on software engineering principles and full-stack development. Participated in multiple hackathons and coding competitions.",
      achievements: ["Scholarship Recipient", "Programming Club President", "Capstone Project Award"]
    },
    {
      degree: "High School Diploma",
      institution: "Tech Preparatory Academy",
      location: "Boston, MA",
      years: "2011 - 2015",
      description: "Advanced placement in mathematics and computer science. Developed a student management system as senior project.",
      achievements: ["Valedictorian", "Math Olympiad Winner", "Coding Competition Finalist"]
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
