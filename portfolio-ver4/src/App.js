import * as React from 'react'
import { ChakraProvider, Box, Container, extendTheme } from '@chakra-ui/react'
import './App.css'
import Navbar from './pages/Navbar'
import Profile from './pages/Profile'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ParticlesComponent from './pages/components/ParticlesComponent'

// Custom theme with dark mode support
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: '#f0f4ff',
      100: '#e0e7ff',
      500: '#6366f1',
      600: '#5856eb',
      700: '#4c46d6',
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      },
    }),
  },
})

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box 
        minHeight="100vh" 
        position="relative"
        overflow="hidden"
      >
        <ParticlesComponent id="particles" />
        
        <Box position="relative" zIndex={1}>
          <Navbar />
          <Container 
            maxW="container.xl" 
            px={{ base: 6, md: 8, lg: 12 }}
            mx="auto"
          >
            <Profile />
            <About />
            <Experiences />
            <Projects />
            <Contact />
          </Container>
          
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  )
}