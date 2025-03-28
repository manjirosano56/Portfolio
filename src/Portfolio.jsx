const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
   <nav className="w-full fixed top-0 left-0 bg-gray-900 text-white flex justify-between items-center px-10 py-5">

      <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      <header className="pt-[80px] flex flex-col justify-center items-center text-center min-h-[80vh] px-5">
        <h2 className="text-4xl md:text-6xl font-bold">Hey, I'm Bobby</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          A passionate web developer crafting amazing experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg">
          View My Work
        </button>
      </header>

      <section className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg text-gray-300">
          I'm a web developer with experience in modern frontend and backend technologies. I love solving problems and building interactive web applications.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
