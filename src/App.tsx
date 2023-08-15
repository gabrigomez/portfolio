import { Contact } from './components/Contact';
import { Exp } from './components/Exp';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { NavBar } from './components/Organisms/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useTheme } from './hooks/useTheme';

import './App.css';

function App() {
  const { theme } = useTheme();
  
  return (
    <div className={`App ${ theme ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-200 to-white' }`}>
      <NavBar/>
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
