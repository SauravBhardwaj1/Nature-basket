import {Button,Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerBody,
    DrawerFooter,DrawerHeader,
  useDisclosure,
  Link,
  Input} from "@chakra-ui/react"
  import React,{useState} from "react" 
  import Entry from "./Entry"
  
  function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([]);
    
    const submitForm=(e)=>{
        e.preventDefault()
        
        const newEntry={email:email, password:password}
        setAllEntry([...allEntry,newEntry])

        console.log(setAllEntry)
    }
    
    return (
      <>
        <Button ref={btnRef} bg={"none"} ml={250} mt={-20} color={"red.600"} onClick={onOpen}>
            Login
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
                <DrawerHeader>Login here</DrawerHeader>
                <DrawerBody>
                <Input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' type={"text"} />
                </DrawerBody>
                <DrawerBody mt={"-450px"}>
                <Input onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' type={"password"} />
                </DrawerBody> 
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            <Link href="./">
              <Button onSubmit={submitForm} colorScheme='blue'>Save</Button>
              
            </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <div>
            {allEntry.map((el)=>{
                <Entry email={el.email}/>
            })}
        </div>
      </>
    )
  }
  
  export default Login;