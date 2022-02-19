import './App.css';
import {Home} from './components/Home'
import {Routes,Route} from 'react-router-dom';
import {Navbar} from './components/Navbar'
import { Login } from './components/Login'
import {BookDetails} from './components/Book'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/books/:id" element={<BookDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
