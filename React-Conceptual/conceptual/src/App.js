import './App.css';
import { Navbar } from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import { SignIn } from './components/SignIn';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
