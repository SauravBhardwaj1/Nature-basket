// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Cards from "./MidSection/Cards"
import Login from './Login/Login';

// import Carousel from "./Components/Carousel"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner /> 
      <Cards />
      <Login />
    </div>
  );
}

export default App;
