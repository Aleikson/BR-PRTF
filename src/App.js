import './App.css';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Perfil from './components/perfil/Perfil';
import Skills from './components/skills/Skills';
import Experience from './components/experience/ProjectItem';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <NavBar />
        <Home />
        <Perfil />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default App;