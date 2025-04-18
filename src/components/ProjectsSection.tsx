
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Store",
      description: "A responsive e-commerce web application with modern UI/UX design principles and sleek animations.",
      tags: ["React", "Tailwind CSS", "TypeScript","Redux"],
      image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/ksamrat224/e-commerce",
    },
    {
      id: 2,
      title: "Library Management System API",
      description: "A RESTful API for managing library books, users, and transactions, built with Next.js and Prisma.",
      tags: ["Nest.js", "Prisma"],
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/ksamrat224/LMS",
    },
    {
      id: 3,
      title: "Task Management API",
      description: "A RESTful API for managing tasks and projects, built with Nest.js and Prisma.",
      tags: ["Nest.js", "Prisma"],
      image: "https://user-images.githubusercontent.com/15667259/30900131-ecf535b0-a38c-11e7-9cd3-86c6b511ae9d.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/ksamrat224/todos-api",
    },
    {
      id: 4,
      title: "NetflixGPT ",
      description: "A Netflix clone with a movie recommendation feature powered by OpenAI's, built with React and Firebase.",
      tags: ["React","Tailwind CSS","Redux"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const filters = ['All', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Firebase'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-accent-blue uppercase tracking-wider font-medium mb-2 animate-fade-in">My Work</p>
          <h2 className="text-4xl font-bold font-heading mb-4 animate-fade-in animation-delay-100">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills and passion.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-accent-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group animate-fade-in"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 flex justify-between items-center w-full">
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-accent-blue-light transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-accent-blue-light transition-colors"
                          aria-label="Live Project"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
