import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LandingSections from './components/LandingSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <LandingSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
