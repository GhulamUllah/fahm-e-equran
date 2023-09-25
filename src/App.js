import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import HeroSection from './Components/HomePage/HeroSection';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      
        <Route path='/' element={<HeroSection/>}/>
      </Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
