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
  Button,
  Input} from "@chakra-ui/react"
import React from "react"

function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>login/register</Button>

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
              <Button colorScheme='blue' mr={3}>
                Proceed
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Login;