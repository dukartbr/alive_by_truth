import { Box, Button, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box
      backgroundImage='https://picsum.photos/5000/1400'
      height='500px'
      width='100%'
    >
      <Box
        width='40%'
        backgroundColor='rgb(206, 136, 132, 0.8)'
        height='500px'
        py={6}
        px={8}
        color='white'
      >
        <Heading textAlign='center'>Sample Heading</Heading>
        <Text mt={10}>
          Nullam vitae tincidunt magna. Morbi ante ante, tempus ultricies
          hendrerit quis, aliquam sit amet felis. Morbi iaculis rhoncus nunc
          blandit pulvinar. Donec ullamcorper mi placerat lorem pharetra
          fermentum. Nullam viverra odio iaculis, feugiat erat id, semper est.
          Duis augue tortor, tempor eu semper sed, suscipit sed dui. Nunc
          consequat eget elit sed congue. Phasellus non commodo magna.
        </Text>
        <Button
          mt={6}
          borderRadius='32px'
          bg='tan-light'
          color='pink-dark'
          fontFamily='Jost'
          px={6}
          py={4}
          fontWeight='bold'
        >
          Schedule a Consult Now!
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
