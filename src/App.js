import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './styles/Navbar.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
<Router>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/menu' element={<Menu/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
<Footer/>
  </Router>
      
    </div>
  );
}

export default App;
