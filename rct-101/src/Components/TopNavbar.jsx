import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Stack,
    Divider,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    Progress,
  } from "@chakra-ui/react";
  import React from "react";
  import Register from "../Login/Register"
  
  // import InitialFocus from "./Pincode"

  
  function StoreLocater() {
    
    return (
      <>
      <div style={{display:"flex", marginLeft:"350px", fontSize:"12px"}}>
        <Menu fontFamily={"sans-serif"} >   
        
            <MenuButton as={Button} 
            backgroundColor={"white"} 
            fontFamily={"sans-serif"}  
            ml={5} width="200px" mt={-16} fontSize={"12px"}>Online Slots Availablity</MenuButton>   
            
            <MenuList>   
            <Tabs>
                <h2>Slots</h2>
                <TabList>
                    <Tab>2022-11-12</Tab>
                    <Tab>2022-11-13</Tab>
                    <Tab>2022-11-14</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <Stack spacing={5}>
                        <p>9:00 am - 11:00 am</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>11:00 am - 1:00 pm</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>2:00 pm - 4:00 pm</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>5:00 pm - 7:00 pm</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                        <p>Same day delivery</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                        <p>7:00 pm - 9:00 pm</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                    </Stack>
                    </TabPanel>
                    <TabPanel>
                    <Stack spacing={5}>
                        <p>9:00 am - 11:00 am</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>11:00 am - 1:00 pm</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>2:00 pm - 4:00 pm</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>5:00 pm - 7:00 pm</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                        <p>Same day delivery</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                        <p>7:00 pm - 9:00 pm</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                    </Stack>
                    </TabPanel>
                    <TabPanel>
                    <Stack spacing={5}>
                        <p>9:00 am - 11:00 am</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>11:00 am - 1:00 pm</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>2:00 pm - 4:00 pm</p>
                        <Progress colorScheme='red' height='32px' value={100} />
                        <p>5:00 pm - 7:00 pm</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                        <p>Same day delivery</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                        <p>7:00 pm - 9:00 pm</p>
                        <Progress colorScheme='green' height='32px' value={20} />
                    </Stack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
                
          </MenuList>
          </Menu>
           
            <Menu >
                <Stack mt={-20} display={"flex"} direction='row' h='50px' p={4}>
                        <Divider orientation='vertical' />
                        <MenuButton as={Button} fontSize={"12px"} ml={8} width="100px" backgroundColor={"white"}>Fresh & Fast</MenuButton>
                    </Stack>
                    <Stack mt={-20} display={"flex"} direction='row' h='50px' p={4}>
                        <Divider orientation='vertical' />
                        <MenuButton as={Button} fontSize={"12px"} ml={5} width="100px" backgroundColor={"white"}>Store Locater</MenuButton> 
                    </Stack>
                    <Stack mt={-20} display={"flex"} direction='row' h='50px' p={4}>
                        <Divider orientation='vertical' />
                        <MenuButton as={Button} fontSize={"12px"} ml={5} width="100px" backgroundColor={"white"}>Contact Us</MenuButton>
                    </Stack>
            </Menu>
            <Register />
          </div>   
          
      </>
    );
  }
  
  export default StoreLocater;
  