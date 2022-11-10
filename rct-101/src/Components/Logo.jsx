import { Stack,Button } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import logo from "../../images/logo.jpg"
function DesignArt(){
    return (
        <div style={{display:"flex"}} >
            <p style={{marginTop:"7px"}}>/</p>
        <Stack  >
            <Button display= "inline-block"
                maxWidth=" 108px"
                whiteSpace= "nowrap"
                overflow= "hidden"_hover={{backgroundColor:"#fffe94"}} marginLeft={"5px"} fontWeight={"bold"}   textOverflow= "ellipsis"  fontSize=".87rem" background="white" width={"110%"} size={2} mt={3}  >  
                Design+Art
            </Button>
        </Stack>
            <img  style={{marginLeft:"150px",width:"150px",cursor:"pointer",}} src={logo} alt="logo" />
            <div style={{marginLeft:"200px",width:"130px",cursor:"pointer",marginTop:"10px"}}> <SearchIcon /></div>
            <div><img style={{width:"18px",marginTop:"15px",marginLeft:"25px",cursor:"pointer"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZ-YAuWzBrjSY-iFZ6Kn8-ItMmC9A3CA86BEgAvA&s" alt="" /></div>
            <div style={{marginLeft:"70px",cursor:"pointer",marginTop:"10px"}}>🛒</div>
            </div>
    )
}
export default DesignArt