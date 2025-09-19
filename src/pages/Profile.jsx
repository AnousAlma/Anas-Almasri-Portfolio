import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Flex,
  Image,
  Icon,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

export default function Profile() {
  // Dark mode values
  const textColor = useColorModeValue('gray.900', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.300');
  const buttonBg = useColorModeValue('gray.900', 'gray.100');
  const buttonColor = useColorModeValue('white', 'gray.900');
  const buttonHoverBg = useColorModeValue('gray.800', 'gray.200');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const borderHoverColor = useColorModeValue('gray.400', 'gray.500');
  const iconColor = useColorModeValue('gray.600', 'gray.400');

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/anousalma',
      label: 'GitHub',
      color: useColorModeValue('gray.700', 'gray.300')
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/anas-almasri-45491b298/',
      label: 'LinkedIn',
      color: 'blue.500'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:anask.almasri@gmail.com',
      label: 'Email',
      color: 'red.500'
    }
  ];

  return (
    <Box
      id="profile"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={{ base: '80px', md: '100px' }}
      pb={{ base: '60px', md: '80px' }}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 12, lg: 16 }}
        >
          {/* Content */}
          <VStack
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={8}
            flex={1}
            textAlign={{ base: 'center', lg: 'left' }}
            maxW={{ base: 'full', lg: '600px' }}
          >
            {/* Greeting */}
            <MotionText
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              fontSize={{ base: 'lg', md: 'xl' }}
              color={subtextColor}
              fontWeight="500"
              letterSpacing="wide"
            >
              Hello, I'm
            </MotionText>

            {/* Name */}
            <MotionHeading
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              as="h1"
              size="4xl"
              fontFamily="var(--font-display)"
              fontWeight="600"
              lineHeight="1.1"
              fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
              color={textColor}
            >
              Anas Almasri
            </MotionHeading>

            {/* Title/Description */}
            <MotionText
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              fontSize={{ base: 'xl', md: '2xl' }}
              color={subtextColor}
              fontWeight="400"
              lineHeight="1.6"
              maxW="500px"
            >
              Translating ML research into impactful systems. Student researcher at{' '}
              <Text as="span" color="brand.500" fontWeight="600">
                Toronto Intelligent Systems Lab
              </Text>
              , studying{' '}
              <Text as="span" color="brand.500" fontWeight="600">
                Computer Science
              </Text>
              {' '}at{' '}
              <Text as="span" color="brand.500" fontWeight="600">
                University of Toronto
              </Text>
            </MotionText>

            {/* CTA Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <HStack spacing={4} justify={{ base: 'center', lg: 'flex-start' }}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <Button
                    size="lg"
                    bg={buttonBg}
                    color={buttonColor}
                    px={8}
                    py={6}
                    fontSize="md"
                    fontWeight="500"
                    borderRadius="full"
                    _hover={{
                      bg: buttonHoverBg,
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    transition="all 0.3s ease"
                  >
                    Get In Touch
                  </Button>
                </Link>

                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor={borderColor}
                    color={subtextColor}
                    px={8}
                    py={6}
                    fontSize="md"
                    fontWeight="500"
                    borderRadius="full"
                    _hover={{
                      bg: useColorModeValue('gray.50', 'gray.800'),
                      borderColor: borderHoverColor,
                      transform: 'translateY(-2px)',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    transition="all 0.3s ease"
                  >
                    View Work
                  </Button>
                </Link>
              </HStack>
            </MotionBox>

            {/* Social Links */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <HStack spacing={6} justify={{ base: 'center', lg: 'flex-start' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      as={social.icon}
                      w={6}
                      h={6}
                      color={iconColor}
                      _hover={{ color: social.color }}
                      transition="color 0.3s ease"
                    />
                  </motion.a>
                ))}
              </HStack>
            </MotionBox>
          </VStack>

          {/* Profile Image */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            flex={{ base: 'none', lg: 1 }}
            maxW={{ base: '300px', md: '400px', lg: '500px' }}
          >
            <Box
              position="relative"
              _before={{
                content: '""',
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: '-20px',
                bottom: '-20px',
                bg: useColorModeValue('brand.50', 'gray.700'),
                borderRadius: 'full',
                zIndex: '-1',
              }}
            >
              <Image
                src="https://i.ibb.co/f0D0KJd/nice-anas-photo.jpg"
                alt="Anas Almasri"
                borderRadius="full"
                objectFit="cover"
                w="full"
                h="auto"
                aspectRatio="1"
                shadow="2xl"
                transition="transform 0.3s ease"
                _hover={{
                  transform: 'scale(1.02)',
                }}
              />
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
}