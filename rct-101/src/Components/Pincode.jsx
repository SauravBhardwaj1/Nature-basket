import {Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  FormControl,
  FormLabel,
  ModalBody,
  ModalFooter,
Button,
Input} from "@chakra-ui/react"
import {useDisclosure} from "react"
import React from "react"

function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Your Delivery Pincode</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Pincode</FormLabel>
                <Input ref={initialRef} placeholder='Pincode' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={isOpen}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default InitialFocus;