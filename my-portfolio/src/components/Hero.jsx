const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-primary to-secondary pt-20">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-yellow-300">Ariharan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-6">
            Frontend Developer
          </h2>
          <p className="text-white text-lg mb-8 max-w-lg">
            I create beautiful, responsive websites with modern technologies like React and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a
              href="#resume"
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white overflow-hidden">
                <img src="/pic.jpg" alt="" srcset=""className="w-48 h-48 md:w-64 md:h-64 rounded-full " />
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-dark"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;