import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Nopage from './components/Nopage';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
