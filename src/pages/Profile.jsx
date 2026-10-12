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
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFileAlt } from 'react-icons/fa';
import { site, socialLinks } from '../data/site';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

// Splits the positioning line around the phrases the hero highlights
const highlightPattern = new RegExp(`(${site.positioningHighlights.join('|')})`);

export default function Profile() {
  // Dark mode values
  const textColor = useColorModeValue('gray.900', 'white');
  const subtextColor = useColorModeValue('gray.600', 'gray.100');
  const buttonBg = useColorModeValue('gray.900', 'gray.100');
  const buttonColor = useColorModeValue('white', 'gray.900');
  const buttonHoverBg = useColorModeValue('gray.800', 'gray.200');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const borderHoverColor = useColorModeValue('gray.400', 'gray.500');
  const iconColor = useColorModeValue('gray.600', 'gray.300');
  const outlineHoverBg = useColorModeValue('gray.50', 'gray.800');

  // Shared by the secondary CTA buttons
  const outlineButtonProps = {
    size: 'lg',
    variant: 'outline',
    borderColor,
    color: subtextColor,
    px: 8,
    py: 6,
    fontSize: 'md',
    fontWeight: '500',
    borderRadius: 'full',
    _hover: {
      bg: outlineHoverBg,
      borderColor: borderHoverColor,
      transform: 'translateY(-2px)',
    },
    _active: {
      transform: 'translateY(0)',
    },
    transition: 'all 0.3s ease',
  };

  const socialColors = {
    github: useColorModeValue('gray.700', 'gray.100'),
    linkedin: 'blue.500',
    email: 'red.500',
  };

  const reduceMotion = useReducedMotion();

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
              {site.name}
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
              {site.positioning.split(highlightPattern).map((part, i) =>
                site.positioningHighlights.includes(part) ? (
                  <Text as="span" key={i} color="accent" fontWeight="600">
                    {part}
                  </Text>
                ) : (
                  part
                )
              )}
            </MotionText>

            {/* CTA Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Flex wrap="wrap" gap={4} justify={{ base: 'center', lg: 'flex-start' }}>
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
                  <Button {...outlineButtonProps}>
                    View Work
                  </Button>
                </Link>

                {site.resumeUrl && (
                  <Button
                    as="a"
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<FaFileAlt />}
                    {...outlineButtonProps}
                  >
                    Resume
                  </Button>
                )}
              </Flex>
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
                      _hover={{ color: socialColors[social.id] }}
                      transition="color 0.3s ease"
                    />
                  </motion.a>
                ))}
              </HStack>
            </MotionBox>
          </VStack>

          {/* Profile Image */}
          <MotionBox
            initial={{ opacity: 0, y: 6 }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: [0, -10, 0] }
            }
            transition={
              reduceMotion
                ? { opacity: { duration: 0.28, delay: 0.2 }, y: { duration: 0.4, delay: 0.2 } }
                : { opacity: { duration: 0.36, delay: 0.4 }, y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }, default: { duration: 0.45 } }
            }
            flex={{ base: 'none', lg: 1 }}
            maxW={{ base: '300px', md: '400px', lg: '500px' }}
            // 3D tilt on hover (profile only)
            whileHover={reduceMotion ? undefined : { rotateX: 4, rotateY: -6, scale: 1.02 }}
            style={{ transformStyle: 'preserve-3d', perspective: 800 }}
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
                src={site.photo}
                alt={site.name}
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