import React from 'react'
import {Link} from 'react-scroll'
import {
  Divider,
  Flex,
  Text
} from "@chakra-ui/react";

const About = () => {
  return (
    <Flex flexDir="column" w="100%">
      <Flex flexDir={{base:"column", md:"row"}} margin="20px" alignItems="center" justifyContent="center">
        <Text fontSize="3xl" className='title'>About</Text>
        <Divider w={{base:"90%", md:"50%"}} ml={{base:0, md:"1em"}} bgColor="teal.300" h="2.5px" borderRadius="10px"/>
      </Flex>
      <Flex justifyContent="space-around" >
        <Text fontSize={"xl"} textAlign="center" w={{base:"90%", md:"55%"}}>
          I am currently attending the University of Toronto where I am studying Computer Science. I always strive to learn new technologies and skills and to keep up with the ever-changing world. I am passionate about software development and I am always looking for new opportunities to grow and learn. Some of my current skills include Python, JavaScript, and React.
        </Text>
      </Flex>
    </Flex>
  )
}

export default About