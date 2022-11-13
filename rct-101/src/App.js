// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from './Components/Home/Home';
import Login from './Login/Login';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
     
    </div>
  );
}

export default App;
