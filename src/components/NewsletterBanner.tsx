import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

function NewsletterBanner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        width='100%'
        bg='pink-dark'
        h='45px'
        align='center'
        alignItems='center'
        justifyContent='center'
        color='white'
        fontWeight='bold'
        fontFamily='Jost'
      >
        <Text onClick={onOpen}>Sign up for our weekly newsletter!</Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <pre>Hello World</pre>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewsletterBanner;
