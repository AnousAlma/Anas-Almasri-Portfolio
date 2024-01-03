'use client'

import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-scroll';


const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()



  return (
    <div id="navbar">
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>
          <Flex alignItems={'center'}>
            <Box mr={5}>
              <Button variant="ghost">
                <Link to="about"  spy={true}  smooth={true} offset={-20} duration={500}>
                  <Text fontSize="medium" fontWeight="bold" >About</Text>
                </Link>
              </Button>
            </Box>
            <Box mr={5}>
              <Button variant="ghost">
                <Link to="experiences"  spy={true}  smooth={true} offset={-20} duration={500}>
                  <Text fontSize="medium" fontWeight="bold" >Experiences</Text>
                </Link>
              </Button>
            </Box>
            <Box mr={5}>
              <Button variant="ghost">
                <Link to="projects"  spy={true}  smooth={true} offset={-20} duration={500}>
                  <Text fontSize="medium" fontWeight="bold" >Projects</Text>
                </Link>
              </Button>
            </Box>
            <Box mr={5}>
              <Button variant="ghost">
                <Link to="contact"  spy={true}  smooth={true} offset={-20} duration={500}>
                  <Text fontSize="medium" fontWeight="bold" >Contact</Text>
                </Link>
              </Button>
            </Box>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}