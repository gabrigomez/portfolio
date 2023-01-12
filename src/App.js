import './App.css';
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
      <Projects />
    </div>
  );
}

export default App;
