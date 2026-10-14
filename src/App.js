import * as React from 'react'
import { ChakraProvider, Box, Container, extendTheme, useColorModeValue } from '@chakra-ui/react'
import './App.css'
import Navbar from './pages/Navbar'
import Profile from './pages/Profile'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Research from './pages/Research'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Education from './pages/Education'
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
    // Dark-mode card surface: clearly lighter than the gray.900 page behind it
    gray: {
      750: '#252d3d',
    },
    brand: {
      50: '#f0f4ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#5856eb',
      700: '#4c46d6',
    }
  },
  semanticTokens: {
    colors: {
      // Brand colour for text and icons; lighter in dark mode so it stays readable
      accent: { default: 'brand.500', _dark: 'brand.300' },
    },
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

// Soft colour washes fixed behind the page; the particle network drifts on top of them
function Backdrop() {
  const washes = useColorModeValue(
    // Sized relative to the viewport on small screens so they stay blobs rather than filling a phone
    [
      'radial-gradient(min(36rem, 60vw) circle at 10% 10%, rgba(99, 102, 241, 0.19), rgba(99, 102, 241, 0.09) 38%, transparent 68%)',
      'radial-gradient(min(38rem, 64vw) circle at 90% 40%, rgba(56, 189, 248, 0.22), rgba(56, 189, 248, 0.10) 38%, transparent 68%)',
      'radial-gradient(min(36rem, 60vw) circle at 38% 98%, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.07) 38%, transparent 68%)',
    ],
    [
      'radial-gradient(42rem circle at 8% 4%, rgba(99, 102, 241, 0.22), transparent 62%)',
      'radial-gradient(46rem circle at 96% 34%, rgba(56, 189, 248, 0.12), transparent 62%)',
      'radial-gradient(44rem circle at 30% 100%, rgba(168, 85, 247, 0.16), transparent 62%)',
    ]
  )

  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={-2}
      pointerEvents="none"
      backgroundImage={washes.join(', ')}
    />
  )
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box 
        minHeight="100vh" 
        position="relative"
        overflow="hidden"
      >
        <Backdrop />
        <ParticlesComponent id="particles" />
        
        <Box position="relative" zIndex={1}>
          <Navbar />
          <Container 
            maxW="container.xl" 
            px={{ base: 2, md: 8, lg: 12 }}
            mx="auto"
          >
            <Profile />
            <About />
            <Experiences />
            <Research />
            <Projects />
            <Education />
            <Contact />
          </Container>
          
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  )
}