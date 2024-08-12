import React from 'react'
import {
  Divider,
  Flex,
  Text
} from "@chakra-ui/react";
import Project from './components/Project';

const Projects = () => {
  return (
    <Flex id="projects" flexDir="column" w="100%" mt="6em">
      <Flex flexDir={{base:"column", md:"row"}} margin="20px" alignItems="center" justifyContent="center">
        <Text fontSize="3xl" className='title'>Projects</Text>
        <Divider w={{base:"90%", md:"50%"}} ml={{base:0, md:"1em"}} bgColor="teal.300" h="2.5px" borderRadius="10px"/>
      </Flex>
      <Flex flexDir="column" alignItems="center" justifyContent="center" >
        <Project animation="fade-right" image="https://i.ibb.co/9HG5S7t/Screenshot-32.png" name="Stack Hacks Website" description="The web application built for the Stack Hacks hackathon. It contains infortmation about the event, judges, and how to sign up. It was built using the React framework." link="https://stack-hacks.web.app/"/>
        <Project animation="fade-left" image="https://i.ibb.co/0V6wxQy/Screenshot-33.png" name="Flag Quiz App" description="A small web application that randomly generates 4 country names. One of the 4 names then gets chosen to become the right answer and it's flag gets displayed at the top." link="https://flag-quiz.on.fleek.co/"/>
        <Project animation="fade-right" image="https://i.ibb.co/qFPndXK/Screenshot-34.png" name="UCL Draw Simulator" description="Web application that simulates the UEFA Champions League Round of 16 Knockouts draw. Uses a generator to pick which possible draws are left, randomizes them then displays them." link="https://ucl-draw-simulator.netlify.app/"/>
      </Flex>
    </Flex>
  )
}

export default Projects