import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Nav } from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
    )
}

export default MyApp
