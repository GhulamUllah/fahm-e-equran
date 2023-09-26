import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import HeroSection from './Components/HomePage/HeroSection';
import About from './Components/HomePage/About';
import Service from './Components/HomePage/Service';
import FAQs from './Components/HomePage/FAQs';
import Contact from './Components/HomePage/Contact';

function App() {
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
      </Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
