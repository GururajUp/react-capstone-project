
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Movies from './components/Movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
