import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/blue';
import Red from './components/red';
import Orange from './components/orange';
import Yellow from './components/yellow';
import Green from './components/green';
import Blue from './components/blue';
import Violet from './components/violet';
import Home from './components/home';

function App() {

  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="red">Red</Link>
        <Link to="orange">Orange</Link>
        <Link to="yellow">Yellow</Link>
        <Link to="green">Green</Link>
        <Link to="blue">Blue</Link>
        <Link to="violet">Violet</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/red" element={<Red />}></Route>
          <Route path="/orange" element={<Orange />}></Route>
          <Route path="/yellow" element={<Yellow />}></Route>
          <Route path="/green" element={<Green />}></Route>
          <Route path="/blue" element={<Blue />}></Route>
          <Route path="/violet" element={<Violet />}></Route>
          <Route path="/blue/:shade" element={<Blue />}></Route>
          <Route path="/red/:shade" element={<Red />}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
