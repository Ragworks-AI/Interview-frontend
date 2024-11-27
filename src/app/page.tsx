const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
        <div className="text-lg font-bold">Ragworks.AI</div>
        <ul className="flex gap-4">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className="flex flex-col items-center justify-center flex-grow p-8 text-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Ragworks.AI</h1>
        <p className="text-lg text-gray-700 mb-6">
          This is a simple page created with Next.js and Tailwind CSS.
        </p>
        <a
          href="#about"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Learn More
        </a>
      </main>

      <footer className="flex justify-center items-center bg-gray-800 text-white py-4">
        <p>&copy; 2024 Ragworks.AI All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
