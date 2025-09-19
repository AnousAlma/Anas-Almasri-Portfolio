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
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const ContactMethod = ({ icon, title, value, href, delay }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const titleColor = useColorModeValue('gray.900', 'white');
  const valueColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      as="a"
      href={href}
      target={href.startsWith('mailto:') || href.startsWith('tel:') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <VStack
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
        cursor="pointer"
      >
        <Icon as={icon} w={8} h={8} color="brand.500" />
        <VStack spacing={2}>
          <Text fontWeight="600" color={titleColor} fontSize="lg">
            {title}
          </Text>
          <Text color={valueColor} fontSize="sm">
            {value}
          </Text>
        </VStack>
      </VStack>
    </MotionBox>
  );
};

const SocialLink = ({ icon, href, label, color, delay }) => {
  const socialBg = useColorModeValue('white', 'gray.800');
  const socialHoverBg = useColorModeValue(`${color}.50`, 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <VStack
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
      </VStack>
    </MotionBox>
  );
};

const Contact = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'anask.almasri@gmail.com',
      href: 'mailto:anask.almasri@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Toronto, ON, Canada',
      href: '#',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/anas-almasri-45491b298/',
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/anousalma',
      label: 'GitHub',
      color: 'gray.700'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/anas-almasri-45491b298/',
      label: 'LinkedIn',
      color: 'blue.600'
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
      id="contact"
      py={{ base: '80px', md: '120px' }}
      bg={useColorModeValue('gray.50', 'gray.800')}
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
            <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="lg" lineHeight="1.6" mb={8}>
              I'm always interested in new opportunities and connecting with 
              fellow developers. Feel free to reach out!
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
            bg={useColorModeValue('white', 'gray.800')}
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
                <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="1.6">
                  Whether it's an AI-powered application, machine learning research, or 
                  intelligent system development, I'd love to help bring your ideas to life.
                </Text>
              </VStack>

              <Button
                as="a"
                href="mailto:anask.almasri@gmail.com"
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

              {/* Social Links */}
              <HStack spacing={4} pt={4}>
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={social.label}
                    icon={social.icon}
                    href={social.href}
                    label={social.label}
                    color={social.color}
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