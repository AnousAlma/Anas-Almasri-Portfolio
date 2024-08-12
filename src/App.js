import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './pages/Navbar'
import Profile from './pages/Profile'
import About from './pages/About'

import {
  Text,
} from "@chakra-ui/react";
import Experiences from './pages/Experiences'
import Footer from './pages/Footer'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <>
        <Navbar />
        <Profile />
        <About />
        <Experiences />
        <Footer />
        {/* <Text textAlign="center" fontSize="xx-large" paddingBottom="50px">
          Currently Work In Progress
        </Text> */}
      </>
    </ChakraProvider>
  )
}