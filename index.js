export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1929] text-white">
      <header className="container mx-auto py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-400">Synthex</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-gray-300 hover:text-white">Features</a>
          <a href="#download" className="text-gray-300 hover:text-white">Download</a>
          <a href="#faq" className="text-gray-300 hover:text-white">FAQ</a>
        </nav>
      </header>

      <section className="container mx-auto py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">Synthex</h1>
        <h2 className="text-xl text-gray-400 mb-8">The most advanced Roblox Executor.</h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-blue-600 text-white px-8 py-6 rounded-lg">
            Download Now
          </button>
          <button className="border-blue-500 text-blue-400 px-8 py-6 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      <section id="features" className="bg-[#071525] py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-400">Powerful Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0c1e36] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Script Execution</h3>
              <p className="text-gray-400">Execute any Lua script with our powerful and stable execution engine.</p>
            </div>
            <div className="bg-[#0c1e36] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Undetectable</h3>
              <p className="text-gray-400">Advanced bypass techniques ensure you'll never get detected or banned.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#071525] py-12 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Synthex. All rights reserved.</p>
      </footer>
    </div>
  )
}
