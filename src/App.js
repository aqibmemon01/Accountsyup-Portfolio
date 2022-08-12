import './App.css';
import Contact from './Pages/Contact/Contact';
import Main from './Pages/Main/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pricing from './Pages/Pricing/Pricing';
import About from './Pages/About/About';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
