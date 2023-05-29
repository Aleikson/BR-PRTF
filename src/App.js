import './App.css';
import NavBar from './components/navbar/NavBar';
import Perfil from './components/perfil/Perfil';
import Skills from './components/skills/Skills';
import Experience from './components/experience/ProjectItem';
import Contact from './components/contactMe/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <div className="perfilContainer">
            <Perfil />
          </div>
          <div>
            <Routes>
              <Route path='/' />
              <Route path="/Skills" element={<Skills />} />
              <Route path='/Experience' element={<Experience />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;