import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import NewsletterBanner from "src/components/NewsletterBanner";
import CustomTheme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={CustomTheme}>
        <Box bg='tan-light' w='100%'>
          <NewsletterBanner />
          <Header />
          <Box h='100vh'>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
