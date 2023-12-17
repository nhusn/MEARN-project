import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Service from './Pages/Service';
import About from './Pages/About';
import Packages from './Pages/Packages';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/packages' element={<Packages/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
