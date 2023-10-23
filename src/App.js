import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HeroSection from './Components/HomePage/HeroSection';
import About from './Components/HomePage/About';
import Service from './Components/HomePage/Service';
import FAQs from './Components/HomePage/FAQs';
import Contact from './Components/HomePage/Contact';
import Footer from './Components/HomePage/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import { useEffect } from 'react';
import setAuthToken from './Redux/setAuthToken';
import { loadUser } from './Redux/Action/userAction';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    setAuthToken(localStorage.token)
    dispatch(loadUser())
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Service/>}/>
        <Route path='/FAQs' element={<FAQs/>}/>
        <Route path='/Contact-us' element={<Contact/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>

      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
