import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Portal
  } from "@chakra-ui/react";
  import {ChevronDownIcon} from "@chakra-ui/icons"
  
  function Pop() {
    return (
      <>
        <Menu fontFamily={"sans-serif"} >     
            <MenuButton as={Button} fontFamily={"sans-serif"} ml={5} color="red.700" size="lg" width="200px">SHOP BY CATEGORY</MenuButton>   
          
            <MenuList rightIcon={<ChevronDownIcon />}>
                <MenuItem rightIcon={<ChevronDownIcon />}>Gifting</MenuItem>
                <MenuItem rightIcon={<ChevronDownIcon />}>Fruits and vegetable</MenuItem>
                <MenuItem rightIcon={<ChevronDownIcon />} >Cheese, Meat and Fruit Platters</MenuItem>
                <MenuItem rightIcon={<ChevronDownIcon />}>Delicatessen & Cheese</MenuItem>
                <MenuItem>International Cousine</MenuItem>
                <MenuItem>Health</MenuItem>
                <MenuItem>Indian Grocery</MenuItem>
                <MenuItem>Confectionary & Pattisserie</MenuItem>
                <MenuItem>Meats, Seafood and Eggs</MenuItem>
                <MenuItem>Snack Bar</MenuItem>
                <MenuItem>Snacks & Beverage</MenuItem>
                <MenuItem>Breakfast, Dairy & Bakery</MenuItem>
                <MenuItem>Instant meals & Aids</MenuItem>
                <MenuItem>The Good Food Cafe</MenuItem>
                <MenuItem>Packaging Material</MenuItem>
          </MenuList>
          </Menu> 
          <Button ml={8} width="100px" backgroundColor={"white"}>MY ORDERS</Button>   
          <Button ml={5} width="100px" backgroundColor={"white"}>GIFTING</Button> 
          <Button ml={5} width="100px" backgroundColor={"white"}>REWARDS</Button>
          <Button ml={5} width="100px" backgroundColor={"white"}>BLOGS</Button>
          <Button ml={5} width="100px" backgroundColor={"white"}>OFFER</Button>
          <Button ml={5} width="220px" backgroundColor={"white"}>CONNOISSEUR'S SELECTION</Button>
          <Button ml={5} width="180px" backgroundColor={"white"}>BOOK STORE VISIT</Button>      
          
      </>
    );
  }
  
  export default Pop;
  