import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Contact } from './views/Contact';
import { Projects } from './views/Projects';
import { Home } from './views/Home';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/contacto' element={<Contact />} />
          <Route path='/proyectos' element={<Projects />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
