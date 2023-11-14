import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import News from './components/News';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <News />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
