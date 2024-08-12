import React from 'react'
import {
  Divider,
  Flex,
  Text
} from "@chakra-ui/react";
import Job from './components/Job';

const Experiences = () => {
  return (
    <Flex id="experiences" flexDir="column" w="100%" mt="6em">
      <Flex flexDir={{base:"column", md:"row"}} margin="20px" alignItems="center" justifyContent="center">
        <Text fontSize="3xl" className='title'>Experiences</Text>
        <Divider w={{base:"90%", md:"50%"}} ml={{base:0, md:"1em"}} bgColor="teal.300" h="2.5px" borderRadius="10px"/>
      </Flex>
      <Flex flexDir="column" alignItems="center" justifyContent="center" >
        <Job animation="fade-left" logo="https://media.licdn.com/dms/image/C4E0BAQHYUY5jCzQ7sw/company-logo_100_100/0/1649272031853?e=1731542400&v=beta&t=Y05JcrMVLCnglTwcDTt-Lid44SYpQz_7jKrlEbeSPeg" name="Al Bassem Organization" time="Nov 2023 - Apr 2024" job="Software Developer Intern" location="Oakville, ON" points={["Designed and implemented a comprehensive inventory management system using JavaScript, React, ensuring accurate alignment of items with their real-life locations.", "Developed a dynamic React-based web application, enabling seamless user account creation and efficient item sign-in/out through QR code scanning."]}/>
        <Job animation="fade-right" logo="https://media.licdn.com/dms/image/v2/D560BAQH9hPeLqgshRQ/company-logo_100_100/company-logo_100_100/0/1706975923430/stack_hacks_logo?e=1731542400&v=beta&t=M2CbWlnlDEBttOoWvQAXO717CiYgs51jwqJCI7Abys4" name="Stack Hacks" time="Feb 2024" job="Co-Founder" location="Remote" points={["Co-Founded Stack Hacks", "Designed and developed the website", "Managed social media and digital advertising", "Facilitated event logistics and operations"]}/>
        <Job animation="fade-left" logo="https://media.licdn.com/dms/image/C560BAQEShvkhhgMfbg/company-logo_100_100/0/1672773091687/intellibots_academy_logo?e=1731542400&v=beta&t=EoMefBMGljPo0VqbxG7I4FcjUsUXWHyNBzCNmbTz0HY" name="IntelliBots Academy" time="Jul 2022 - Aug 2022" job="Volunteer" location="Mississauga, ON" points={["Guided students in implementing code for the robot, fostering their understanding of robotic principals.", "Cultivated a vibrant learning environment by encouraging learning from mistakes, and ability to problem solve."]}/>
      </Flex>
    </Flex>
  )
}

export default Experiences