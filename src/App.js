
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/frontpage/Home';
// import Movies from './components/moviespage/Movies';
import Browse from './components/browserpage/Browse';
import Utility from './components/Utility';
import Main from './components/mixedpage/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/movies' element={<Movies/>} /> */}
        <Route path='/browse' element={<Browse/>} />
        <Route path='/utility' element={<Utility/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
