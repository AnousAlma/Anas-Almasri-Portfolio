'use client'
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from 'react-scroll';
import { React } from "react";

export default function Nav({ color }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  
  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
          <HStack>
            <Text>Logo</Text>
          </HStack>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost">
                  <Link to="about"  spy={true}  smooth={true} offset={-20} duration={500}>
                    <Text fontSize="medium" fontWeight="bold" >About</Text>
                  </Link>
                </Button>
                <Button variant="ghost">
                  <Link to="experiences"  spy={true}  smooth={true} offset={-20} duration={500}>
                    <Text fontSize="medium" fontWeight="bold" >Experiences</Text>
                  </Link>
                </Button>
                <Button variant="ghost">
                  <Link to="projects"  spy={true}  smooth={true} offset={-20} duration={500}>
                    <Text fontSize="medium" fontWeight="bold" >Projects</Text>
                  </Link>
                </Button>
                <Button variant="ghost">
                  <Link to="contact"  spy={true}  smooth={true} offset={-20} duration={500}>
                    <Text fontSize="medium" fontWeight="bold" >Contact</Text>
                  </Link>
                </Button>
              </>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost">
                        <Link to="about"  spy={true}  smooth={true} offset={-20} duration={500}>
                          <Text fontSize="medium" fontWeight="bold" >About</Text>
                        </Link>
                      </Button>
                      <Button variant="ghost">
                        <Link to="experiences"  spy={true}  smooth={true} offset={-20} duration={500}>
                          <Text fontSize="medium" fontWeight="bold" >Experiences</Text>
                        </Link>
                      </Button>
                      <Button variant="ghost">
                        <Link to="projects"  spy={true}  smooth={true} offset={-20} duration={500}>
                          <Text fontSize="medium" fontWeight="bold" >Projects</Text>
                        </Link>
                      </Button>
                      <Button variant="ghost">
                        <Link to="contact"  spy={true}  smooth={true} offset={-20} duration={500}>
                          <Text fontSize="medium" fontWeight="bold" >Contact</Text>
                        </Link>
                      </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
