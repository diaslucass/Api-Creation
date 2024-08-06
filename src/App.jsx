import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Final from './pages/finalistas/final';
import Campeoes from './pages/MCampeoes/campeoes';
import './App.css';
import Curiosidades from './pages/curiosidades/curiosidade';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Final />} />
        <Route path="/campeoes" element={<Campeoes />} />
        <Route path="/curiosidades" element={<Curiosidades />} />
      </Routes>
    </Router>
  );
}

export default App;




