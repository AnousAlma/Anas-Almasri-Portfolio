import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Profile({ color }) {
  // const scrollToContact = () => {
  //   const contactSection = document.querySelector("#contact");
  //   contactSection.scrollIntoView({ behavior: "smooth" });
  // };
  const linkedin = () => {
    window.open(
                `https://www.linkedin.com/in/anas-almasri-45491b298/`,
                "_blank",
                "noreferrer,noopener"
              );
  };
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Flex flexDir={{base:"column", lg:"row"}} w="100%" alignItems="center" id="profile">
        <Stack
          as={Box}
          maxW={"3xl"}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: '10vh', lg: '35vh' }}
          pt={{ base: '14vh', md: '23vh' }}
          mr="auto"
          m="auto"
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "6xl", sm: "80px", md: "96px" }}
            lineHeight={"110%"}
          >
            {'Hi, my name is'} <br />
            <Text as={"span"} color={`teal.400`}>
              {"Anas Almasri"}
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
          >
            {'Python | JavaScript | React'}
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme="teal"
              bg="teal.400"
              rounded={"full"}
              size="lg"
              _hover={{
                bg: "teal.300",
                transform: 'scale(1.08)'
              }}
              _active={{
                bg: "teal.500",
                transform: 'scale(1.08)'
              }}
              onClick={linkedin}
            >
              Let's connect!
            </Button>
            <Flex justifyContent="center" mt={10}>
              <a href="https://github.com/anousalma" target='_blank' rel="noreferrer"><Icon as={FaGithubSquare} w={"2.5em"} h={"2.5em"} mr={10}/></a>
              <a href="https://www.linkedin.com/in/anas-almasri-45491b298/" target='_blank' rel="noreferrer"><Icon as={FaLinkedin} w={"2.5em"} h={"2.5em"} mr={10}/></a>
              <a href="mailto:anask.almasri@gmail.com" target="_blank" rel="noreferrer"><Icon as={IoMdMail} w={"2.5em"} h={"2.5em"}/></a>
            </Flex>
          </Stack>
        </Stack>
        <Image 
          src="https://i.ibb.co/f0D0KJd/nice-anas-photo.jpg" 
          ml="auto" mr="auto" 
          w="auto"
          h="500px"
          borderRadius="100%" border="20px" borderColor="black"
          mb={{ base: '15vh', lg: '10vh' }}
          flex="grow"
          />
      </Flex>
    </>
  );
}