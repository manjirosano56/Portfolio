const About = () => {
  return (
    <section id="about" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark dark:text-light mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-xl">
            <img src="pic.jpg" alt="" srcset="" />
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-dark">Your Image</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold text-dark dark:text-light mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate frontend developer creating modern web applications. 
              I specialize in React, JavaScript, and responsive design principles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-dark dark:text-light mb-2">Name:</h4>
                <p className="text-gray-600 dark:text-gray-300">Ariharan</p>
              </div>
              <div>
                <h4 className="font-medium text-dark dark:text-light mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-300">ariariharan996@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium text-dark dark:text-light mb-2">From:</h4>
                <p className="text-gray-600 dark:text-gray-300">Udumalpet, Tirupur</p>
              </div>
              <div>
                <h4 className="font-medium text-dark dark:text-light mb-2">Department:</h4>
                <p className="text-gray-600 dark:text-gray-300">Bsc.Information Technology</p>
              </div>
              <div>
                <h4 className="font-medium text-dark dark:text-light mb-2">Batch:</h4>
                <p className="text-gray-600 dark:text-gray-300">2023 - 2026</p>
              </div>
              <div>
                <h4 className="font-medium text-dark dark:text-light mb-2">College:</h4>
                <p className="text-gray-600 dark:text-gray-300">Vidyasagar College of Arts and Science</p>
              </div>
            </div>
            
            <a
              href="#resume"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;