const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 70 },
  { name: 'Git', level: 80 },
  { name: 'UI/UX Design', level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark dark:text-light mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-dark dark:text-light mb-6">
              Technical Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I've worked with a variety of technologies in the web development world. Here are some of my core skills:
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-dark dark:text-light font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-dark dark:text-light mb-6">
              Professional Skills
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-light dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="text-primary text-4xl mb-4">💡</div>
                <h4 className="font-medium text-dark dark:text-light mb-2">Creative</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Ability to think outside the box and create innovative solutions.
                </p>
              </div>
              
              <div className="bg-light dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="text-primary text-4xl mb-4">🤝</div>
                <h4 className="font-medium text-dark dark:text-light mb-2">Teamwork</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Excellent collaboration skills and experience working in agile teams.
                </p>
              </div>
              
              <div className="bg-light dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="text-primary text-4xl mb-4">⏱️</div>
                <h4 className="font-medium text-dark dark:text-light mb-2">Time Management</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Efficient at prioritizing tasks and meeting deadlines.
                </p>
              </div>
              
              <div className="bg-light dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="text-primary text-4xl mb-4">📢</div>
                <h4 className="font-medium text-dark dark:text-light mb-2">Communication</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Clear and effective communication with team members and clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;