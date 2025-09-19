import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const NavLink = ({ to, children, onClose = () => {} }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.300');
  const linkHoverColor = useColorModeValue('gray.900', 'white');
  
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-80}
      duration={800}
      style={{ cursor: 'pointer' }}
    >
      <Text
        fontSize="sm"
        fontWeight="500"
        color={linkColor}
        position="relative"
        transition="color 0.3s ease"
        _hover={{
          color: linkHoverColor,
          _after: {
            width: '100%',
          }
        }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '-4px',
          left: '0',
          width: '0',
          height: '2px',
          bg: 'brand.500',
          transition: 'width 0.3s ease',
        }}
        onClick={onClose}
      >
        {children}
      </Text>
    </Link>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { colorMode, toggleColorMode } = useColorMode();
  
  // Color mode values
  const bg = useColorModeValue(
    scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    scrolled ? 'rgba(26, 32, 44, 0.95)' : 'transparent'
  );
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.900', 'white');
  const linkColor = useColorModeValue('gray.600', 'gray.300');
  const linkHoverColor = useColorModeValue('gray.900', 'white');
  const buttonHoverBg = useColorModeValue('gray.50', 'gray.700');
  const drawerBg = useColorModeValue('white', 'gray.800');
  const mobileLinkColor = useColorModeValue('gray.700', 'gray.200');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experiences' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <MotionBox
        as="nav"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        bg={bg}
        backdropFilter={scrolled ? 'blur(10px)' : 'none'}
        borderBottom={scrolled ? '1px solid' : 'none'}
        borderColor={borderColor}
        transition="all 0.3s ease"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="animate-slide-in-left"
      >
        <Container maxW="container.xl" px={{ base: 6, md: 8, lg: 12 }}>
          <Flex
            align="center"
            justify="space-between"
            h="80px"
          >
            {/* Logo */}
            <MotionText
              fontFamily="var(--font-display)"
              fontSize="2xl"
              fontWeight="600"
              color={textColor}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              AA
            </MotionText>

            {/* Desktop Navigation */}
            {!isMobile && (
              <HStack spacing={8}>
                {navItems.map((item, index) => (
                  <MotionBox
                    key={item.to}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <NavLink to={item.to}>{item.label}</NavLink>
                  </MotionBox>
                ))}
                
                {/* Dark Mode Toggle */}
                <MotionBox
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.2 }}
                >
                  <IconButton
                    aria-label="Toggle dark mode"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    size="md"
                    color={linkColor}
                    _hover={{
                      color: linkHoverColor,
                      bg: buttonHoverBg,
                    }}
                  />
                </MotionBox>
              </HStack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <HStack spacing={2}>
                <IconButton
                  aria-label="Toggle dark mode"
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  onClick={toggleColorMode}
                  variant="ghost"
                  size="md"
                  color={linkColor}
                  _hover={{
                    color: linkHoverColor,
                    bg: buttonHoverBg,
                  }}
                />
                <IconButton
                  icon={<HamburgerIcon />}
                  variant="ghost"
                  size="lg"
                  onClick={onOpen}
                  aria-label="Open menu"
                  color={linkColor}
                  _hover={{ color: linkHoverColor, bg: buttonHoverBg }}
                />
              </HStack>
            )}
          </Flex>
        </Container>
      </MotionBox>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(4px)" />
        <DrawerContent bg={drawerBg}>
          <DrawerCloseButton 
            size="lg" 
            color={linkColor}
            _hover={{ color: linkHoverColor }}
            mt={6}
            mr={6}
          />
          <DrawerBody pt={20}>
            <VStack spacing={8} align="start">
              {navItems.map((item, index) => (
                <MotionBox
                  key={item.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  w="full"
                >
                  <Text
                    fontSize="2xl"
                    fontWeight="500"
                    color={mobileLinkColor}
                    _hover={{ color: 'brand.500' }}
                    transition="color 0.3s ease"
                    cursor="pointer"
                  >
                    <NavLink to={item.to} onClose={onClose}>
                      {item.label}
                    </NavLink>
                  </Text>
                </MotionBox>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
