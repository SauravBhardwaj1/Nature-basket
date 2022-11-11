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
import {EditIcon} from "@chakra-ui/icons"
import React from "react"

function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const size = ['xl']
  return (
    <>
      {/* <EditIcon /> */}
      <Button mt={-5} onClick={onOpen}>Pincode</Button>

      <Modal size={"2xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your delivery pincode</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <FormControl>
              <FormLabel>Pincode</FormLabel>
              <Input ref={initialRef} placeholder='enter pincode' />
            </FormControl>
          </ModalBody>
          <p>Entering your delivery pincode will allow us to show you the products available in your area and to ensure timely delivery.</p>
          <ModalFooter>
            <Button onClick={onOpen} colorScheme='blue' mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
  export default InitialFocus;