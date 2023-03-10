
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//pages

import { MovieSearch } from "./Components/MovieSearch"
import MovieResults from "./Components/MovieResults"

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
          <Route path='/' element={<MovieSearch/>}></Route>
          <Route path='result' element={<MovieResults/>}></Route>
          

      </Routes>
    </main>
      
    </BrowserRouter>
  );
}

export default App;
