import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Flex,
  Tag,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { education } from '../data/education';

const EducationCard = ({ school, degree, duration, cgpa, honours, coursework }) => {
  const cardBg = useColorModeValue('white', 'gray.750');
  const headingColor = useColorModeValue('gray.900', 'white');
  const labelColor = useColorModeValue('gray.500', 'gray.300');
  const statBg = useColorModeValue('brand.50', 'whiteAlpha.100');

  const stats = [
    { label: 'Graduation', value: duration },
    cgpa && { label: 'CGPA', value: cgpa },
    honours && { label: 'Honours', value: honours },
  ].filter(Boolean);

  return (
    <Box
      bg={cardBg}
      p={{ base: 6, md: 10 }}
      borderRadius="xl"
      shadow="md"
      _hover={{
        shadow: 'lg',
        transform: 'translateY(-4px)',
      }}
      transitionDuration="0.3s"
    >
      <VStack align="stretch" spacing={{ base: 8, md: 10 }}>
        {/* Header */}
        <VStack align="flex-start" spacing={2}>
          <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} fontWeight="600" lineHeight="1.3">
            {degree}
          </Heading>
          <Text color="accent" fontWeight="600" fontSize="xl">
            {school}
          </Text>
        </VStack>

        {/* Key facts: each tile is as wide as its content needs, so none wraps and leaves the others half empty */}
        <Flex wrap="wrap" gap={4}>
          {stats.map((stat) => (
            <Box key={stat.label} flex="1 1 auto" bg={statBg} borderRadius="lg" px={{ base: 4, sm: 5 }} py={4}>
              <Text
                fontSize="xs"
                fontWeight="600"
                color={labelColor}
                textTransform="uppercase"
                letterSpacing="wider"
                mb={1}
              >
                {stat.label}
              </Text>
              <Text
                fontSize={{ base: 'sm', sm: 'md' }}
                fontWeight="600"
                color={headingColor}
                lineHeight="1.4"
                whiteSpace={{ base: 'normal', sm: 'nowrap' }}
              >
                {stat.value}
              </Text>
            </Box>
          ))}
        </Flex>

        {/* Coursework */}
        {coursework && (
          <VStack align="stretch" spacing={5}>
            <Text fontSize="lg" color={headingColor} fontWeight="600">
              Relevant Coursework
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={10} spacingY={7}>
              {coursework.map((group) => (
                <VStack key={group.area} align="stretch" spacing={3}>
                  <Text
                    fontSize="xs"
                    fontWeight="600"
                    color={labelColor}
                    textTransform="uppercase"
                    letterSpacing="wider"
                  >
                    {group.area}
                  </Text>
                  <Flex wrap="wrap" gap={2}>
                    {group.courses.map((course) => (
                      <Tag
                        key={course}
                        size="lg"
                        colorScheme="brand"
                        variant="subtle"
                        fontSize="sm"
                        fontWeight="500"
                      >
                        {course}
                      </Tag>
                    ))}
                  </Flex>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

const Education = () => {
  return (
    <Box
      id="education"
      py={{ base: '80px', md: '120px' }}
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
              Education
            </Heading>
            <Box
              w="60px"
              h="3px"
              bg="brand.500"
              mx="auto"
              borderRadius="full"
              mb={6}
            />
            <Text color={useColorModeValue('gray.600', 'gray.100')} fontSize="lg" lineHeight="1.6">
              Degree and coursework
            </Text>
          </Box>

          {/* Schools */}
          <Box
            maxW="960px"
            mx="auto"
            w="full"
          >
            <VStack spacing={8} align="stretch">
              {education.map((entry) => (
                <EducationCard
                  key={entry.school}
                  school={entry.school}
                  degree={entry.degree}
                  duration={entry.duration}
                  cgpa={entry.cgpa}
                  honours={entry.honours}
                  coursework={entry.coursework}
                />
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Education;
