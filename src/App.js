import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'

import {
  Text,
} from "@chakra-ui/react";

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <>
        <Navbar />
        <Profile />
        {/* <About /> */}
        <Text textAlign="center" fontSize="xx-large" paddingBottom="50px">
          Currently Work In Progress
        </Text>
      </>
    </ChakraProvider>
  )
}