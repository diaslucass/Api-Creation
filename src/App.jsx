import './App.css';
import Final from './pages/finalistas/final';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Campeoes from './pages/MCampeoes/campeoes';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Final />} />
        <Route path="/campeoes" element={<Campeoes />} />
      </Routes>
    </Router>
  );
}

export default App;




