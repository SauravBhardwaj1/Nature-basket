// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Cards from "./MidSection/Cards"
import Products from './Products/Products';
import Discover from './Products/Discover';
import ShopCards from './MidSection/ShopCards';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />   
      <ShopCards />
      <Products />
      <Discover />
      <Cards />

    </div>
  );
}

export default App;
