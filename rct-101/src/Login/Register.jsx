import {Modal,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    FormControl,
    FormLabel,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Link,
  Button,
  Input} from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import Login from "./Login"

function Register() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Login />
        <Button bg={"none"} mt={-20} color={"red.600"} onClick={onOpen}>Register</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ENTER YOUR 10 DIGIT MOBILE NUMBER</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='Enter mobile number' />
                <p>By continuing, you agree to our Refund, Terms and Policies</p>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
            <Link href='./Login'>
              <Button colorScheme='blue' mr={3} >
                Proceed
              </Button>
              </Link>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Register;