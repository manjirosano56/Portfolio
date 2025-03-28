const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity app for managing daily tasks and projects.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: '/placeholder.jpg',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast.',
    tags: ['API Integration', 'JavaScript', 'CSS'],
    image: '/placeholder.jpg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark dark:text-light mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                {/* Replace with project image */}
                <span className="text-dark dark:text-light">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark dark:text-light mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-primary bg-opacity-10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="#" 
                    className="text-primary font-medium hover:underline"
                  >
                    View Project
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 dark:text-gray-300 font-medium hover:underline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;