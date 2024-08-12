import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";

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

      <Container maxW={"3xl"} id="profile">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: '33vh', md: '35vh' }}
          pt={{ base: '33vh', md: '23vh' }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "6xl", sm: "80px", md: "96px" }}
            lineHeight={"110%"}
          >
            {'Hi my name is'} <br />
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
            {/* <Button
              variant={"link"}
              colorScheme={"blue"}
              size={"sm"}
              onClick={scrollToContact}
            >
              Contact Me
            </Button> */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}