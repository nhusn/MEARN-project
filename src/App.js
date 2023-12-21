import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Service from './Pages/Service';
import About from './Pages/About';
import Packages from './Pages/Packages';
import Contact from './Pages/Contact';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
        
    </>
  );
}

export default App;
