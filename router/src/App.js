import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Mynav from './components/Mynav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TvShows from './components/TvShows';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
    <div className="App bg-dark">
      
      <Mynav/>
      
      <Routes>
        <Route path='/' exact element={<Homepage movieGenre="hobbit" title="Hobbit"/>}/>
        <Route path="/TvShows" element={<TvShows movieGenre="harry potter" title="Harry Potter"/>}/>
      </Routes>
   <Footer/>
  </div>
  </BrowserRouter>
    
  );
}

export default App;
