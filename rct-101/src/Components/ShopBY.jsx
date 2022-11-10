import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Link
  } from "@chakra-ui/react";
  // import InitialFocus from "./Pincode"

  import {ChevronDownIcon,SmallAddIcon,TriangleDownIcon,ChevronRightIcon} from "@chakra-ui/icons"
  
  function Pop() {
    return (
      <>
        <Menu fontFamily={"sans-serif"} >   
        
            <MenuButton as={Button}  mt={"10px"} fontFamily={"sans-serif"} ml={5} color="red.700" size="lg" width="200px">SHOP BY CATEGORY</MenuButton> <TriangleDownIcon /> 
            
            <MenuList rightIcon={<ChevronDownIcon />}>
          
                <MenuItem>Gifting <ChevronRightIcon /></MenuItem>
                <MenuItem>Fruits and vegetable <ChevronRightIcon /></MenuItem>
                <MenuItem>Cheese, Meat and Fruit Platters <ChevronRightIcon /></MenuItem>
                <MenuItem>Delicatessen & Cheese <ChevronRightIcon /></MenuItem>
                <MenuItem>International Cousine <ChevronRightIcon /></MenuItem>
                <MenuItem>Health <ChevronRightIcon /></MenuItem>
                <MenuItem>Indian Grocery <ChevronRightIcon /></MenuItem>
                <MenuItem>Confectionary & Pattisserie <ChevronRightIcon /></MenuItem>
                <MenuItem>Meats, Seafood and Eggs <ChevronRightIcon /></MenuItem>
                <MenuItem>Snack Bar <ChevronRightIcon /></MenuItem>
                <MenuItem>Snacks & Beverage <ChevronRightIcon /></MenuItem>
                <MenuItem>Breakfast, Dairy & Bakery <ChevronRightIcon /></MenuItem>
                <MenuItem>Instant meals & Aids <ChevronRightIcon /></MenuItem>
                <MenuItem>The Good Food Cafe <ChevronRightIcon /></MenuItem>
                <MenuItem>Packaging Material <ChevronRightIcon /></MenuItem>
          </MenuList>
          </Menu>
          <Link href='./'>
          <Button ml={8} mt={"10px"} width="100px" backgroundColor={"white"}>MY ORDERS</Button> <SmallAddIcon />
          </Link> 

          <Link href='./'>  
          <Button ml={3} mt={"10px"} width="100px" backgroundColor={"white"}>GIFTING</Button> <SmallAddIcon />
          </Link> 

          <Link href='./'> 
          <Button ml={3} mt={"10px"} width="100px" backgroundColor={"white"}>REWARDS</Button> <SmallAddIcon />
          </Link> 

          <Link href='./'> 
          <Button ml={3} mt={"10px"} width="100px" backgroundColor={"white"}>BLOGS</Button> <SmallAddIcon />
          </Link>

          <Link href='./'> 
          <Button ml={3} mt={"10px"} width="100px" backgroundColor={"white"}>OFFER</Button> <SmallAddIcon />
          </Link>

          <Link href='./'> 
          <Button ml={3} mt={"10px"} width="200px" backgroundColor={"white"}>CONNOISSEUR'S SELECTION</Button> <SmallAddIcon />
          </Link>

          <Link href='./'> 
          <Button ml={3} mt={"10px"} width="170px" backgroundColor={"white"}>BOOK STORE VISIT</Button> <SmallAddIcon />
          </Link>
      </>
    );
  }
  
  export default Pop;
  