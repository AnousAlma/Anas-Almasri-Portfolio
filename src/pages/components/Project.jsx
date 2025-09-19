import React, { useEffect } from 'react'
import {
    Flex,
    useColorModeValue,
    Image,
    Text,
    Button,
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({animation, image, name, description, link}) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <Flex data-aos={animation} flexDir="column" w={{base:"90%", lg:"40%"}} bgColor={useColorModeValue("gray.100", "gray.900")} borderRadius="20px" padding={4} mt={10}>
        <Image src={image} alt={'name'} borderRadius="10px"/>
        <Text fontSize="2xl" fontWeight="bold" mt={4}>{name}</Text>
        <Text fontSize="lg" mt={4}>{description}</Text>
        <a target="_blank" rel="noreferrer" href={link}><Button colorScheme="teal" mt={8} w="100%">View Project</Button></a>
    </Flex>
  )
}

export default Project