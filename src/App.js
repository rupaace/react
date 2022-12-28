import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import Login from './pages/Login'
function App() {
  return (
<>

<Navbar />
<div>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/service' element={<Services />} />
  <Route path='/contact' element={<Contact />} />
  

</Routes>
</div>
<Footer />

</>
  );
}
export default App;
