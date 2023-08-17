import { Contact } from './components/Organisms/Contact';
import { Exp } from './components/Organisms/Exp';
import { Footer } from './components/Organisms/Footer';
import { Main } from './components/Organisms/Main';
import { NavBar } from './components/Organisms/NavBar';
import { Projects } from './components/Organisms/Projects';
import { Skills } from './components/Organisms/Skills';
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
