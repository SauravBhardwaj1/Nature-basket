import {Link,Text,Input,Image, Box, Divider, Button} from "@chakra-ui/react"  
import "./Footer.css"

function Footer(){
  return(
    <>
    <div id="footer">
      <div id="footerContainer">
        <div id="row">
          <div id="downloadapp">
            <Text style={{paddinLeft: "14px"}}>Download The App</Text>
            <Text style={{margin: "10px"}}>
              <Link href="https://play.google.com/store/apps/details?id=com.godrej.naturesbasketltd">
                <Image src=" https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
                  style={{width: "160px", borderWidth: "0px"}}
                  alt=""/>
              </Link>
            </Text>
            <Text style={{margin: "10px"}}>
              <Link
                href="https://apps.apple.com/in/app/natures-basket/id1013402486"
                ><Image
                  src=" https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg"
                  style={{width: "160px", borderWidth: "0px"}}
                  alt=""
              /></Link>
            </Text>
          </div>
          <div id="col-5-1">
            <nav id="footernav">
              <ul class="col-4">
                <li>
                  <h4>
                    <h4>About Us</h4>
                  </h4>
                </li>
                <li>
                  <Link href=""> About Us </Link>
                </li>
                <li>
                  <Link href=""> Our Vision And Purpose </Link>
                </li>
                <li>
                  <Link href=""> Quality Standards </Link>
                </li>
                <li>
                  <Link href=""> Awards </Link>
                </li>
                <li>
                  <Link href=""> FAQ's </Link>
                </li>
                <li>
                  <Link href=""> Available Delivery Slots </Link>
                </li>
                <li>
                  <Link href=""> Vender Connect </Link>
                </li>
              </ul>
              <ul class="col-4">
                <li>
                  <h4>News And Media</h4>
                </li>
                <li>
                  <Link href="">Press Releases</Link>
                </li>
                <li>
                  <Link href="">Newsletters</Link>
                </li>
                <li>
                  <Link href="">Press Releases</Link>
                </li>
                <li>
                  <Link href="">Events</Link>
                </li>
                <li>
                  <Link href="">Photo Gallery</Link>
                </li>
                <li>
                  <Link href="">Recipes</Link>
                </li>
                <li>
                  <Link href="">NBTV</Link>
                </li>
                <li>
                  <Link href="">Our Virtual Store</Link>
                </li>
              </ul>
              <ul class="col-4">
                <li>
                  <h4>Our Policies</h4>
                </li>
                <li>
                  <Link href="privacypolicy.html">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="">Payment Policy</Link>
                </li>
                <li>
                  <Link href="">Disclaimer</Link>
                </li>
                <li>
                  <Link href="">Grievance Officer</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div id="sub">
            <span id="span">SIGN UP TO STAY UPDATED</span>
            <Input
              type="text"
              name=""
              id="holder"
              placeholder="Enter Your Email Address"
            />
  
            <Input type="button" name="" id="btn" value="Subscribe" />
          </div>
        </div>
      </div>
    </div>
    <Box mt={5} ml={20} >
    <Divider />
      <Box display={"flex"}>
        <Text mt={2}>Payment Method</Text>
        <Image src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png" />
        <Text ml={250}>Keep in Touch</Text>
        <Button>
          <Image w={"40px"} src="https://p.kindpng.com/picc/s/464-4640790_connect-with-us-facebook-icon-gray-png-transparent.png" />
        </Button>
        <Button>
          <Image w={"40px"} src="https://www.citypng.com/public/uploads/small/51613773040mu6qfzyurumckoyqvehr48z6zabubsvlr4czvewmqlvmobflnvk2uwje74fvgv8s3dskjpuucsjrk3pye7pszqmiqukxzmzcqnhh.png" />
        </Button>
        <Button>
          <Image w={"40px"} src="https://i.pinimg.com/originals/8a/3b/05/8a3b055d7e3cc52a0f0053535f0339ea.jpg" />
        </Button>
        <Button>
          <Image w={"40px"} src="https://www.seekpng.com/png/detail/429-4296854_youtube-icon-gray-youtube-play-button-grey.png" />
        </Button>
      </Box>
      <Divider />
    </Box>
    </>
  
  )
}


export default Footer