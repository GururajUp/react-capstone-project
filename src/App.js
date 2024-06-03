
import { BrowserRouter, Routes, Route, Form} from 'react-router-dom'
import Home from './components/frontpage/Home'
import Movies from './components/moviespage/Movies';
import Utility from './components/browserpage/Utility';
import Main from './components/mixedpage/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/utility' element={<Utility/>} />
        <Route path='/main' element={<Main/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
