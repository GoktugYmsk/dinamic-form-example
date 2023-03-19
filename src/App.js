
import { NavLink, Routes, Route } from 'react-router-dom';

import Blog from './components/Blog';
import Contact from './components/contact';
import Home from './components/Home';
import Login from './components/Login';
import UseMemo from './UseMemo';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='navLink' >
        <NavLink className='mainPage' to='/' >Anasayfa</NavLink>
        <NavLink className='contact' to='/Contact' >Contact</NavLink>
        <NavLink className='blog' to='/Blog' >Blog</NavLink>
        <NavLink className='login' to='/Login' >Login</NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <UseMemo />
      </div>
    </div>
  );
}

export default App;
