import React from "react";
import {Heading,Box, Image, Stack, Link} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons";

function ShopCards(){
    const EventsImage={
        imageUrl:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png",
        imageUrl2:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png",
        imageUrl3:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png",    
        imageUrl4:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png",

        AlertTitle:"ShopByCards"
    }
    return(
        <>
            <Heading as='h2' mt={7} ml={"500px"} size='lg'>--------Shop By Category--------</Heading>

            {/* Add Shop By Category data here */}
            <div style={{display:"flex",justifyContent:"center", width:"100vw"}}>         
                <Stack  mt={"20px"} direction={['column', 'row']} spacing='20px'>
                                       
                    <Box  width={"21vw"} >
                    <Link>
                        <Image src={EventsImage.imageUrl} m={"auto"}  borderRadius='lg' width={"100vw"}  height={"240px"}  alt={EventsImage.imageAlt} />
                    </Link>
                        <div style={{border:"1px solid whitesmoke",lineHeight:"30px"}}>
                        <Link>  
                            <h2>Exotic Vegetables <ChevronRightIcon /></h2><hr />
                        </Link>   
                        <Link> 
                            <h3>Asparagus Artichokes <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>    
                            <h3>Avocados Peppers <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>    
                            <h3>Broccoli Zucchini <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>   
                            <h3>View All <ChevronRightIcon /></h3>
                        </Link> 
                        </div>
                    </Box>
                    
                    <Box  width={"21vw"} >
                        <Link>                       
                            <Image src={EventsImage.imageUrl2} m={"auto"}  borderRadius='lg'  height={"240px"} width={"100vw"}  alt={EventsImage.imageAlt} />
                        </Link>
                        <div style={{border:"1px solid whitesmoke",lineHeight:"30px"}}>
                        <Link>  
                            <h2>Meat, Poultery & Seafood <ChevronRightIcon /></h2><hr />
                        </Link>   
                        <Link> 
                            <h3>Chicken Cuts Lollipops Mince <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>    
                            <h3>Fish Other Seafood <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>    
                            <h3>Fresh Kebabs Others <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>   
                            <h3>View All <ChevronRightIcon /></h3>
                        </Link> 
                        </div>
                    </Box>
                    <Box  width={"21vw"}   >
                        <Link>
                            <Image src={EventsImage.imageUrl3} m={"auto"}  borderRadius='lg' height={"240px"} width={"100vw"}  alt={EventsImage.imageAlt} />
                        </Link>
                        <div style={{border:"1px solid whitesmoke",lineHeight:"30px"}}>
                        <Link>  
                            <h2>Fresh Artisanal Breads <ChevronRightIcon /></h2><hr />
                        </Link>   
                        <Link> 
                            <h3>Breadsticks Crostinni Lavache <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>    
                            <h3>Buns Croissants Bagels <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>    
                            <h3>Muffins Cakes Brownies <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>   
                            <h3>View All <ChevronRightIcon /></h3>
                        </Link> 
                        </div>
                    </Box>
                    <Box  width={"21vw"}   >
                        <Link>
                            <Image src={EventsImage.imageUrl4} m={"auto"}  borderRadius='lg' height={"240px"} width={"100vw"}  alt={EventsImage.imageAlt} />
                        </Link>
                        <div style={{border:"1px solid whitesmoke",lineHeight:"30px"}}>
                        <Link>  
                            <h2>Daily Essentials <ChevronRightIcon /></h2><hr />
                        </Link>   
                        <Link> 
                            <h3>Snacks & Beverages <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>    
                            <h3>Breakfast, Dairy & Bakery <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>    
                            <h3>Staples <ChevronRightIcon /></h3><hr />
                        </Link> 
                        <Link>   
                            <h3>View All <ChevronRightIcon /></h3>
                        </Link> 
                        </div>
                    </Box>
                </Stack>     
            </div>

        </>
    )
}

export default ShopCards;