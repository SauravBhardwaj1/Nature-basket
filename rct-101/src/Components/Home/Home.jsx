import Footer from "../../Footer/Footer";
import Cards from "../../MidSection/Cards";
import ShopCards from "../../MidSection/ShopCards";
import Discover from "../../Products/Discover";
import Banner from "../Banner";
import Products from "../../Products/Products"

function Home(){
    return(
        <>
            <Banner />   
            <ShopCards />
            <Products />
            <Discover />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;