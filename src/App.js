
import { NavLink,Routes,Route } from 'react-router-dom';

import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <NavLink to='/' activeClassName='Göktuğ' >Anasayfa</NavLink>
      <NavLink to='/Contact' >Contact</NavLink>
      <NavLink to='/Blog' >Blog</NavLink>
      <NavLink to='/Login' >Login</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
