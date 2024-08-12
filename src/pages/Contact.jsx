import React, { useEffect } from 'react'
import {
  Divider,
  Flex,
  Text,
  useColorModeValue,
  Icon,
  Container
} from "@chakra-ui/react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <Flex id="contact" flexDir="column" w="100%" mt="6em" alignContent="center">
      <Flex flexDir={{base:"column", md:"row"}} margin="20px" alignItems="center" justifyContent="center">
      <Text fontSize="3xl" className='title'>Contact Me</Text>
        <Divider w={{base:"90%", md:"50%"}} ml={{base:0, md:"1em"}} bgColor="teal.300" h="2.5px" borderRadius="10px"/>
      </Flex>
      <Container data-aos="fade-up">
        <Text fontSize="5xl" fontWeight="bold" textAlign="center" margin="20px">Let's Talk</Text>
        <Text fontSize="2xl" textColor={useColorModeValue("gray.500", "gray.300")} textAlign="center">Feel free to contact me through email, LinkedIn, or Github.</Text>
        <a href="mailto:anask.almasri@gmail.com" target="_blank" rel="noreferrer"><Text fontSize="2xl" textColor={useColorModeValue("teal.500", "teal.200")} textAlign="center" margin="20px">anask.almasri@gmail.com</Text></a>
        <Flex justifyContent="center" mt={6}>
              <a href="https://github.com/anousalma" target='_blank' rel="noreferrer"><Icon as={FaGithubSquare} w={"3.5em"} h={"3.5em"} mr={10}/></a>
              <a href="https://www.linkedin.com/in/anas-almasri-45491b298/" target='_blank' rel="noreferrer"><Icon as={FaLinkedin} w={"3.5em"} h={"3.5em"} mr={10}/></a>
              <a href="mailto:anask.almasri@gmail.com" target="_blank" rel="noreferrer"><Icon as={IoMdMail} w={"3.5em"} h={"3.5em"}/></a>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Contact