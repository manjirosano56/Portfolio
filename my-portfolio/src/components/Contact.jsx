const Contact = () => {

  const resumeFile = '/resume.pdf'; // Path to your resume file in public folder
  
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark dark:text-light mb-4">
          My <span className="text-primary">Resume</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Download my professional resume to learn more about my qualifications and experience.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="bg-light dark:bg-gray-700 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-dark dark:text-light mb-6">
                Professional Summary
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-dark dark:text-light mb-2">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bachelor of Information Technology<br />
                    Bharathiyar University, 2023-2026
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-dark dark:text-light mb-2">Key Skills</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Frontend Development (React, JavaScript)</li>
                    <li>UI/UX Design Principles</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                    <li>Node.js (Express.js)</li>
                    <li>MongoDb (Mongoose)</li>
                    <li>Rest Api's (Postman)</li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Contact;