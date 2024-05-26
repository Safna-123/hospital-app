import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import BookAppointment from './components/BookAppointment';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import FaqPage from './components/FaqPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/book" element={<BookAppointment/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/faq" element={<FaqPage/>}/>
          
         </Routes>
         </BrowserRouter>
   
  );
}

export default App;
