import { Box, Image, Stack } from "@chakra-ui/react";
// import Carousel from "./Carousel";

function Banner(){
    const image={
        imageUrl:"https://asset3.farmsteadapp.com/storage/featurecard/79/wide_image/large-1-52ee8b6440cb8860f7b06e26c21e072d.jpg",
        imageUrl2:"https://i.pinimg.com/originals/b9/da/52/b9da520080e4bc6f78782a41380f3a85.jpg",
        imageUrl3:"https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=8",
        imageUrl4:"https://www.naturesbasket.co.in/Images/Fruits-Vegetables.png?v=17",
        imageUrl5:"https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15",
        imageAlt:"nature basket banner"
    }
    
    return(
        <>  
        <div style={{width:"100%"}}>
            <Box  height={{base: '100%',  md: '50%',xl: '25%'}} mt={"10px"} border={"none"} borderWidth='1px' borderRadius='lg' >
                <Image src={image.imageUrl} m={"auto"} overflow='hidden' borderRadius='lg' width={"100vw"} height={"400px"} alt={image.imageAlt} />
            </Box>
            <Box mt={"10px"} border={"none"} borderWidth='1px' borderRadius='lg' >
                <Image src={image.imageUrl2} m={"auto"} overflow='hidden' borderRadius='lg' width={"100vw"} height={"420px"} alt={image.imageAlt} />
            </Box>   
            <div style={{display:"flex",justifyContent:"center"}}>         
                <Stack  mt={"20px"} direction={['column', 'row']} spacing='20px'>
                    <Box boxShadow={"box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"} w='42%' >
                        <Image src={image.imageUrl3} m={"auto"}  overflow='hidden' borderRadius='lg'  height={"200px"}  alt={image.imageAlt} />
                    </Box>
                    <Box border={"box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"} w='42%' >
                        <Image src={image.imageUrl4} m={"auto"} overflow='hidden' borderRadius='lg'  height={"200px"}  alt={image.imageAlt} />
                    </Box>
                    <Box border={"box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"} w='42%'  >
                        <Image src={image.imageUrl5} m={"auto"} overflow='hidden' borderRadius='lg' height={"200px"}  alt={image.imageAlt} />
                    </Box>
                </Stack>     
            </div>  
        </div>
        </>
    )
}



export default Banner; 