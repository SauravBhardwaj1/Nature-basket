import {Box, Stack, Heading,Image, Button, Link} from "@chakra-ui/react"

const Product=({title,imageSrc,qty,mrp})=>{
    return(
        
                
        <div style={{width:"300px", 
            border:"2px solid whitesmoke", 
            marginLeft:"30px",
            marginTop:"30px"
        }}>
            <Stack>
            <Link>
                <div>
                    <Image style={{border:"1px solid wheat"}} src={imageSrc} alt={"img"} />
                </div>
            </Link>
                <h2>{title}</h2>
                <p>{qty}</p>
                <div style={{display:"flex"}}>
                    <Button ml={2} w={10}>{mrp}</Button>
                    <Button ml={5} w={"48px"} bg={"green"}>
                        ADD
                        </Button>
                </div>
                
            
            </Stack>
        </div>
        
        
    )
}

export default Product;