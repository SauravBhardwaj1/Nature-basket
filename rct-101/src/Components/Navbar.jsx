import ShopBy from "./ShopBY"
import {Stack, 
    Input, 
    InputGroup, 
    IconButton,
    Button,
    Select,
    } from "@chakra-ui/react"
import {SearchIcon,ChevronDownIcon} from "@chakra-ui/icons"
import StoreLocater from "./TopNavbar"
// import DesignArt from "./Logo"
import InitialFocus from "./Pincode"

function Navbar(){
    return (
        <>
        {/* <DesignArt /> */}
        <StoreLocater />
        <Stack  spacing={50}>
        
        <InputGroup  ml={"400px"}>
        <InitialFocus />
        <Select bg={"whitesmoke"} width={"110px"} placeholder='Location'>
            
            <option value='option1'>Pune</option>
            <option value='option2'>Mumbai</option>
            <option value='option3'>Delhi NCR</option>
            <option value='option2'>Banglore</option>
            <option value='option3'>Navi Mumbai</option>
            <option value='option2'>Punjab</option>
            <option value='option3'>Himachal</option>
        </Select>
                <Input  width={"500px"} variant="flushed" type='text' placeholder='               Start shopping...' />
                
                <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<SearchIcon />}
                />
                
            </InputGroup>
            
        </Stack>
        
          <ShopBy />
        </>
    )
}

export default Navbar ;
