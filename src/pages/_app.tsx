import type { AppProps } from "next/app";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomTheme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Box bg='tan-light' w='100%'>
        <Header />
        <Container h='100vh' py='2rem'>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
