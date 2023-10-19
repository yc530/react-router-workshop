import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <div id="container">
      <h1> Hi </h1>
      <div id="navbar">
        {/* Navigation Here */}
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<h1>Blue</h1>}></Route>
          <Route path="/red" element={<h1>Red</h1>}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
