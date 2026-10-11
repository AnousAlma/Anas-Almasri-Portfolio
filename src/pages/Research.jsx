import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { site } from '../data/site';
import { research } from '../data/research';

const PaperCard = ({ title, venue, year, link, lab, authors, description }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const subtextColor = useColorModeValue('gray.500', 'gray.400');
  const descriptionColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box
      bg={cardBg}
      p={6}
      borderRadius="xl"
      shadow="md"
      _hover={{
        shadow: 'lg',
        transform: 'translateY(-4px)',
      }}
      transitionDuration="0.3s"
    >
      <VStack align="stretch" spacing={4}>
        {/* Header */}
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="flex-start"
          gap={2}
        >
          <VStack align="flex-start" spacing={1}>
            <Heading size="md" color={headingColor} fontWeight="600" lineHeight="1.3">
              {title}
            </Heading>
            <Text color="brand.500" fontWeight="600" fontSize="lg">
              {lab}
            </Text>
          </VStack>

          <VStack align={{ base: 'flex-start', sm: 'flex-end' }} spacing={1} flexShrink={0}>
            <Text fontSize="sm" color={textColor} fontWeight="500">
              {venue}
            </Text>
            <Text fontSize="sm" color={subtextColor}>
              {year}
            </Text>
          </VStack>
        </Flex>

        {/* Authors */}
        {authors && (
          <Text fontSize="sm" color={subtextColor} lineHeight="1.6">
            {authors.map((author, i) => (
              <React.Fragment key={author}>
                {i > 0 && ', '}
                {author === site.name ? (
                  <Text as="span" color={descriptionColor} fontWeight="600">
                    {author}
                  </Text>
                ) : (
                  author
                )}
              </React.Fragment>
            ))}
          </Text>
        )}

        <Text color={descriptionColor} lineHeight="1.6" fontSize="sm">
          {description}
        </Text>

        {/* Paper Link */}
        {link && (
          <HStack>
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaExternalLinkAlt />}
              size="sm"
              variant="ghost"
              colorScheme="gray"
            >
              View Paper
            </Button>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

const Research = () => {
  return (
    <Box
      id="research"
      py={{ base: '80px', md: '120px' }}
      bg={useColorModeValue('white', 'gray.900')}
    >
      <Container maxW="container.xl">
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          {/* Section Header */}
          <Box
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
              Research
            </Heading>
            <Box
              w="60px"
              h="3px"
              bg="brand.500"
              mx="auto"
              borderRadius="full"
              mb={6}
            />
            <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="lg" lineHeight="1.6">
              Robot learning research at the Toronto Intelligent Systems Lab
            </Text>
          </Box>

          {/* Papers */}
          <Box
            maxW="800px"
            mx="auto"
            w="full"
          >
            <VStack spacing={8} align="stretch">
              {research.map((paper) => (
                <PaperCard
                  key={paper.id}
                  title={paper.title}
                  venue={paper.venue}
                  year={paper.year}
                  link={paper.link}
                  lab={paper.lab}
                  authors={paper.authors}
                  description={paper.description}
                />
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Research;
