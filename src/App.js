import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Box } from '@chakra-ui/react'
import Navbar from './pages/Navbar'
import Profile from './pages/Profile'
import About from './pages/About'

import Experiences from './pages/Experiences'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Box w={{base:"100vw", md:"100%"}}>
        <Navbar />
        <Profile />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
        {/* <Text textAlign="center" fontSize="xx-large" paddingBottom="50px">
          Currently Work In Progress
        </Text> */}
      </Box>
    </ChakraProvider>
  )
}