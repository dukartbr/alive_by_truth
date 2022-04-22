import {
  Box,
  Button,
  Flex,
  Input,
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
        <ModalContent bg='pink-light'>
          <ModalHeader>Join Our Club!</ModalHeader>
          <ModalCloseButton />
          <ModalBody alignContent='center'>
            <Text>
              Nullam vitae tincidunt magna. Morbi ante ante, tempus ultricies
              hendrerit quis, aliquam sit amet felis. Morbi iaculis rhoncus nunc
              blandit pulvinar.
            </Text>
            <Box mt={6} textAlign='center'>
              <Input bg='tan-light' placeholder='enter your email address' />
              <Button bg='pink-dark' my={4} color='white'>
                Submit
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewsletterBanner;
