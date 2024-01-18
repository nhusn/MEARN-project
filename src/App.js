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
import Register from './Pages/Register';
import ViewHistory from './Pages/ViewHistory';
import Profile from './Pages/Profile';
import ShopHome from './Pages/ShopHome';
import ShopBill from './Pages/ShopBill';

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
        <Route path='/register' element={<Register/>}/>
        <Route path='/view/:id' element={<ViewHistory/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/shop' element={<ShopHome/>}/>
        <Route path='/billing' element={<ShopBill/>}/>
      </Routes>
        
    </>
  );
}

export default App;
