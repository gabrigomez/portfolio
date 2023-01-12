import './App.css';
import { Main } from './components/Main';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Skills />
    </div>
  );
}

export default App;
