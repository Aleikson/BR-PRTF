import './App.css';
import NavBar from './components/navbar/NavBar';
import Perfil from './components/perfil/Perfil';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <div className="perfilContainer">
            <Perfil />
          </div>
          <div className="content">
            <Routes>
              <Route path='/' />
              <Route path="/Skills" element={<Skills />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;