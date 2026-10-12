import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';
import { site, mailto, socialLinks } from '../data/site';

const MotionBox = motion(Box);

const ContactMethod = ({ icon, title, value, href, delay }) => {
  const cardBg = useColorModeValue('white', 'gray.750');
  const titleColor = useColorModeValue('gray.900', 'white');
  const valueColor = useColorModeValue('gray.600', 'gray.100');
  // Methods without a link (location) render as a plain card
  const linkProps = href
    ? {
        as: 'a',
        href,
        target: href.startsWith('mailto:') || href.startsWith('tel:') ? '_self' : '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ opacity: { duration: 0.36, delay }, y: { duration: 0.45, delay } }}
      viewport={{ once: true }}
      {...linkProps}
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <MotionBox
        as={VStack}
        p={6}
        bg={cardBg}
        borderRadius="xl"
        shadow="md"
        spacing={4}
        align="center"
        textAlign="center"
        _hover={{
          shadow: 'lg',
          transform: 'translateY(-4px)',
        }}
        transitionDuration="0.3s"
        cursor={href ? 'pointer' : 'default'}
        style={{ willChange: 'transform' }}
      >
        <Icon as={icon} w={8} h={8} color="accent" />
        <VStack spacing={2}>
          <Text fontWeight="600" color={titleColor} fontSize="lg">
            {title}
          </Text>
          <Text color={valueColor} fontSize="sm">
            {value}
          </Text>
        </VStack>
  </MotionBox>
    </MotionBox>
  );
};

const SocialLink = ({ icon, href, label, color, delay }) => {
  const socialBg = useColorModeValue('white', 'gray.700');
  const socialHoverBg = useColorModeValue(`${color}.50`, 'gray.600');

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ opacity: { duration: 0.36, delay }, scale: { duration: 0.45, delay } }}
      viewport={{ once: true }}
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08, y: -6 }}
      whileTap={{ scale: 0.95 }}
      style={{ willChange: 'transform' }}
    >
      <MotionBox
        as={VStack}
        p={4}
        bg={socialBg}
        borderRadius="full"
        shadow="md"
        _hover={{
          shadow: 'lg',
          bg: socialHoverBg,
        }}
        transitionDuration="0.3s"
        cursor="pointer"
      >
        <Icon as={icon} w={6} h={6} color={color} />
      </MotionBox>
    </MotionBox>
  );
};

const Contact = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: site.email,
      href: mailto,
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: site.location,
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: site.linkedin,
    },
  ];

  const socialColors = {
    github: 'gray.700',
    linkedin: 'blue.600',
    email: 'red.500',
  };

  const outlineBorder = useColorModeValue('gray.300', 'gray.600');
  const outlineColor = useColorModeValue('gray.600', 'gray.100');
  const outlineHoverBg = useColorModeValue('gray.50', 'gray.600');
  const outlineHoverBorder = useColorModeValue('gray.400', 'gray.500');

  return (
    <Box
      id="contact"
      py={{ base: '80px', md: '120px' }}
    >
      <Container maxW="container.xl">
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          {/* Section Header */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            textAlign="center"
            maxW="600px"
            mx="auto"
          >
            <Heading
              as="h2"
              size="2xl"
              fontFamily="var(--font-display)"
              color={useColorModeValue('gray.900', 'white')}
              mb={4}
            >
              Let's Work Together
            </Heading>
            <Box
              w="60px"
              h="3px"
              bg="brand.500"
              mx="auto"
              borderRadius="full"
              mb={6}
            />
            <Text color={useColorModeValue('gray.600', 'gray.100')} fontSize="lg" lineHeight="1.6" mb={8}>
              {site.positioning} I'm always interested in new opportunities, so
              feel free to reach out.
            </Text>
          </MotionBox>

          {/* Contact Methods */}
          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={6}
              maxW="800px"
              mx="auto"
            >
              {contactMethods.map((method, index) => (
                <ContactMethod
                  key={method.title}
                  icon={method.icon}
                  title={method.title}
                  value={method.value}
                  href={method.href}
                  delay={index * 0.1 + 0.3}
                />
              ))}
            </SimpleGrid>
          </MotionBox>

          {/* Call to Action */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            textAlign="center"
            bg={useColorModeValue('white', 'gray.750')}
            p={8}
            borderRadius="xl"
            shadow="md"
            maxW="600px"
            mx="auto"
          >
            <VStack spacing={6}>
              <VStack spacing={3}>
                <Heading size="lg" color={useColorModeValue('gray.900', 'white')} fontWeight="600">
                  Ready to Start a Project?
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.100')} lineHeight="1.6">
                  Whether it's an AI-powered application, machine learning research, or 
                  intelligent system development, I'd love to help bring your ideas to life.
                </Text>
              </VStack>

              <Flex wrap="wrap" gap={4} justify="center">
                <Button
                  as="a"
                  href={mailto}
                  size="lg"
                  bg={useColorModeValue('gray.900', 'gray.100')}
                  color={useColorModeValue('white', 'gray.900')}
                  px={8}
                  py={6}
                  fontSize="md"
                  fontWeight="500"
                  borderRadius="full"
                  _hover={{
                    bg: useColorModeValue('gray.800', 'gray.200'),
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  _active={{
                    transform: 'translateY(0)',
                  }}
                  transition="all 0.3s ease"
                >
                  Send me an Email
                </Button>

                {site.resumeUrl && (
                  <Button
                    as="a"
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<FaFileAlt />}
                    size="lg"
                    variant="outline"
                    borderColor={outlineBorder}
                    color={outlineColor}
                    px={8}
                    py={6}
                    fontSize="md"
                    fontWeight="500"
                    borderRadius="full"
                    _hover={{
                      bg: outlineHoverBg,
                      borderColor: outlineHoverBorder,
                      transform: 'translateY(-2px)',
                    }}
                    _active={{
                      transform: 'translateY(0)',
                    }}
                    transition="all 0.3s ease"
                  >
                    Resume
                  </Button>
                )}
              </Flex>

              {/* Social Links */}
              <HStack spacing={4} pt={4}>
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={social.label}
                    icon={social.icon}
                    href={social.href}
                    label={social.label}
                    color={socialColors[social.id]}
                    delay={index * 0.1 + 0.8}
                  />
                ))}
              </HStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;