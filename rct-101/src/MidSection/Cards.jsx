import React from "react";
import {Heading,Box, Image, Stack, HStack,Text,Link} from "@chakra-ui/react"

function Cards(){
    const EventsImage={
        imageUrl:"https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg",
        imageUrl2:"https://d1z88p83zuviay.cloudfront.net/Images/PhotoGallery/20140620_163958.jpg",
        imageUrl3:"https://www.naturesbasket.co.in/Images/PhotoGallery/American-Food-Festival---Cheef-Saby-Vicky-Ratnani.jpg"    

    }
    return(
        <>

            <Heading as='h2' mt={10} ml={"500px"} size='lg'>--------OUR EVENTS--------</Heading>

            <div style={{display:"flex",justifyContent:"center", width:"100vw"}}>         
                <Stack  mt={"20px"} direction={['column', 'row']} spacing='20px'>
                    <Box  width={"30vw"} >
                        <Image src={EventsImage.imageUrl} m={"auto"}  borderRadius='lg' width={"100vw"}  height={"240px"}  alt={EventsImage.imageAlt} />
                    </Box>
                    <Box  width={"30vw"} >
                        <Image src={EventsImage.imageUrl2} m={"auto"}  borderRadius='lg'  height={"240px"} width={"100vw"}  alt={EventsImage.imageAlt} />
                    </Box>
                    <Box  width={"30vw"}   >
                        <Image src={EventsImage.imageUrl3} m={"auto"}  borderRadius='lg' height={"240px"} width={"100vw"}  alt={EventsImage.imageAlt} />
                    </Box>
                </Stack>     
            </div>

            <Heading as='h2' mt={10} ml={"500px"} size='lg'>--------SHOP BY WORLD BRANDS ----------</Heading>
            <div style={{display:"flex",marginLeft:"20px", marginTop:"20px"}}>
                <Image ml={5} src="https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg" />
                <Image ml={5} src="https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg" />
                <Image ml={5} src="https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg" />
                <Image ml={5} src="https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg" />
                <Image ml={5} src="https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg" />
                <Image ml={5} src="https://d1z88p83zuviay.cloudfront.net/Images/barilla.jpg" />
            </div>
            <HStack mt={10} display={"block"}>
                <Heading as={"h1"}>Online Grocery Store India</Heading>
                <Text>Nature’s Basket is a grocery store operating in Mumbai, Bangalore and Pune with
                     deliveries to all cities across India including Hyderabad, Delhi, Kolkata, Chennai,
                      Surat and more. We offer a wide range of food products for all your everyday needs and
                       even offer grocery home delivery as well as a grocery shop online for you to purchase
                        from. Our online grocery store has fresh fruits and vegetables, fresh and frozen meats
                         and seafood, a wide range of breads and other packaged bakery products as well as a 
                         range of fresh cheeses from around the world. We even have a range of every staple and
                          international cuisine product to meet your needs along with organic products for 
                          fresh and packaged food items. With our offerings, we have the best online food shop
                           & online grocery shopping platform available for all your grocery products as well 
                           as physical grocery stores in select cities.
                </Text>
                <Heading>Best Online Grocery Supermarket India</Heading>
                <Text>With stores in Mumbai, Pune and Bangalore and online delivery services, you can now have
                     all your grocery supermarket shopping done online. We have a wide range of grocery products
                      to offer at our stores for you to buy groceries from a channel convenient to you. Choose 
                      from fresh produce to packaged goods, buy groceries online and get them delivered straight 
                      to your doorstep, thus making it a convenient and quick process. You can pay for the 
                      shopping using credit cards, cash, coupons or online banking facility. We are sure to have 
                      all the grocery products for your daily dietary needs from regular local Indian brands and 
                      products to exotic and international imported ones.
                </Text>
                <Heading as={"h3"}>Online Grocery Supermarket Shopping India</Heading>
                <Text>With our wide range of groceries available, Nature’s Basket is a large online supermarket
                     and grocery store for all your everyday food needs. We offer you the best quality grocery 
                     products which you can buy online and have them delivered to you conveniently. We have our
                      grocery stores in Mumbai, Pune and Bangalore where you can buy groceries and food items. 
                      We also have the best online grocery store to shop for fruits and vegetables, meats and 
                      seafood, breads and other bakery items as well as cheese and dairy. Order groceries 
                      online from the best quality grocery store at best prices.
                </Text>
                <br />
                <Text color={"grey"} >Find a variety of Best Christmas gifts such as delightful Cakes, Chocolates, Cookies, Turkey, 
                    Stollen, Gourmet Gift Baskets, Sweets & Lots More <Link href="/" color={"red"}>Here</Link></Text>
            </HStack>
        </>
    )
}

export default Cards