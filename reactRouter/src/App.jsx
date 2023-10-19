import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/blue';
import Red from './components/red';
// import Orange from './components/orange';
// import Yellow from './components/yellow';
// import Green from './components/green';
// import Blue from './components/blue';
// import Violet from './components/violet';
// import Home from './components/home';

const shades = {
  blue: ['skyblue', 'navy', 'teal'],
  red: ['crimson', 'darkred', 'orangered']
}

function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/red" element={<Red />}> </Route>
          <Route path="/blue" element={<Blue />}> </Route>
          <Route path="/red/:shades" element={<Red />}></Route>
          <Route path="/blue/:shades" element={<Blue />}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
