
import { CheckCircle, Code, Palette, Server, ShieldCheck, Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code className="text-accent-blue" size={24} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="text-accent-purple" size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="text-pink-500" size={24} />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "User Research", level: 70 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 75 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <ShieldCheck className="text-green-500" size={24} />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Testing", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent-blue uppercase tracking-wider font-medium mb-2 animate-fade-in">My Skills</p>
          <h2 className="text-4xl font-bold font-heading mb-4 animate-fade-in animation-delay-100">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            These are the technologies and tools I've worked with, categorized by area of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-white rounded-xl p-6 shadow-md animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-accent-blue rounded-full h-2 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl p-8 text-white shadow-lg animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles size={24} />
                Additional Qualifications
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="mt-1 flex-shrink-0" />
                  <span>Strong problem-solving abilities and attention to detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="mt-1 flex-shrink-0" />
                  <span>Excellent communication and collaboration skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="mt-1 flex-shrink-0" />
                  <span>Experience working in agile development environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="mt-1 flex-shrink-0" />
                  <span>Continuous learner, always staying updated with the latest tech trends</span>
                </li>
              </ul>
            </div>
            <a 
              href="#contact" 
              className="bg-white text-accent-blue px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
