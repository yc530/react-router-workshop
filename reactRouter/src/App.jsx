import './index.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/red';
import Orange from './components/orange';
import Yellow from './components/yellow';
import Green from './components/green';
import Blue from './components/blue';
import Violet from './components/violet';
import Home from './components/home';
//import AllShades from './components/shade';


function App() {

  return (
    <>
    <div id="container">
       <div id="navbar">
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
          {/* <Route path="/shades" element={<AllShades />}></Route> */}
          <Route path="/red" element={<Red />}> </Route>
          <Route path="/red/:shades" element={<Red />}></Route>
          <Route path="/orange" element={<Orange />}> </Route>
          <Route path="/orange/:shades" element={<Orange />}></Route>
          <Route path="/yellow" element={<Yellow />}> </Route>
          <Route path="/yellow/:shades" element={<Yellow />}></Route>
          <Route path="/green" element={<Green />}> </Route>
          <Route path="/green/:shades" element={<Green />}></Route>
          <Route path="/blue" element={<Blue />}> </Route>
          <Route path="/blue/:shades" element={<Blue />}></Route>
          <Route path="/violet" element={<Violet />}> </Route>
          <Route path="/violet/:shades" element={<Violet />}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
