import React from 'react';
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Footer = () => {
  return (
    <MotionBox
      as="footer"
      bg="gray.900"
      color="white"
      py={12}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container maxW="container.xl">
        <VStack spacing={6}>
          {/* Main Footer Content */}
          <VStack spacing={4} textAlign="center">
            <Text
              fontSize="2xl"
              fontFamily="var(--font-display)"
              fontWeight="600"
              color="white"
            >
              Anas Almasri
            </Text>
            <Text color="gray.400" maxW="500px" lineHeight="1.6">
              Machine Learning Engineer & Software Developer passionate about building 
              intelligent solutions that make a difference.
            </Text>
          </VStack>

          <Divider borderColor="gray.700" />

          {/* Copyright */}
          <HStack spacing={2} fontSize="sm" color="gray.400">
            <Text>© 2024 Anas Almasri. Crafted with React & fueled by curiosity 🚀</Text>
          </HStack>
        </VStack>
      </Container>
    </MotionBox>
  );
};

export default Footer;