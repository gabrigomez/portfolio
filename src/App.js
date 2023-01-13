import './App.css';
import { Contact } from './components/Contact';
import { Exp } from './components/Exp';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Skills />
      <Exp />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
