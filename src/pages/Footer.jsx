import React from 'react'
import {
    Box,
    useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w="100%" height="20px" bgColor={useColorModeValue("gray.100", "gray.900")} mt="40px">
    </Box>
  )
}

export default Footer