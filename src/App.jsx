import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Final from './pages/finalistas/final';
import Campeoes from './pages/MCampeoes/campeoes';
import './App.css';
import Vices from './pages/vices/vices';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Final />} />
        <Route path="/campeoes" element={<Campeoes />} />
        <Route path="/vices" element={<Vices />} />
      </Routes>
    </Router>
  );
}

export default App;




