import ShopBy from "./ShopBY"
import {Stack, 
    Input, 
    InputGroup, 
    IconButton,
    Button,
    Select,
    Link,
    Image,
    Box
    } from "@chakra-ui/react"
import {SearchIcon,StarIcon} from "@chakra-ui/icons"
import StoreLocater from "./TopNavbar"
import Logo from "../Components/Images/Logo.png"
import InitialFocus from "./Pincode"
// import Login from "../Login/Login"
import { NavLink } from "react-router-dom"

function Navbar(){
    return (
        <>
        <div className="navbar" >
            <Link href='./'>
            <Box width={"220px"} ml={20} mb={"-20"}>
                <NavLink to ="/">
                <Image width={"90%"} src={Logo} alt="" /> </NavLink>
            </Box>
            </Link>
            
            <StoreLocater />
            <Stack  spacing={45}>
            
            <InputGroup  ml={"350px"}>
            <InitialFocus />
            <Select bg={"whitesmoke"} mt={-5} width={"130px"} placeholder='Location'>              
                <option value='option1'>Pune</option>
                <option value='option2'>Mumbai</option>
                <option value='option3'>Delhi NCR</option>
                <option value='option2'>Banglore</option>
                <option value='option3'>Navi Mumbai</option>
                <option value='option2'>Punjab</option>
                <option value='option3'>Himachal</option>
            </Select>
                    <Input  width={"630px"} mt={-5} variant="flushed" type='text' placeholder='                  Start shopping...' />             
                    <IconButton
                    bg={"green.400"} 
                    mt={-5}
                    aria-label='Search database'
                    icon={<SearchIcon  />}
                    />
                    <Link href='./'>
                        <StarIcon ml={5} mt={-7} w={7} h={7} color="green.500" />
                    </Link> 
                    <Link href='./'>
                        <Button ml={3} mt={-7} bg={"none"} w={"55px"}><img style={{width:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJDvfwer6VMbWK1OWQVVQGT52Pn9oddNn6IBiE0mt-yzNOCHo5FHSzRnU-tZdMluMbqk&usqp=CAU" alt="img"/></Button>
                    </Link> 
                </InputGroup>          
            </Stack>
            
        </div>
        
          <ShopBy />

        </>
    )
}

export default Navbar ;
