import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Flex,
  Tag,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { education } from '../data/education';

const EducationCard = ({ school, degree, duration, cgpa, coursework, roles }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const subtextColor = useColorModeValue('gray.500', 'gray.400');
  const detailColor = useColorModeValue('gray.700', 'gray.300');

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
              {degree}
            </Heading>
            <Text color="brand.500" fontWeight="600" fontSize="lg">
              {school}
            </Text>
          </VStack>

          <VStack align={{ base: 'flex-start', sm: 'flex-end' }} spacing={1} flexShrink={0}>
            <Text fontSize="sm" color={textColor} fontWeight="500">
              {duration}
            </Text>
            {cgpa && (
              <Text fontSize="sm" color={subtextColor}>
                CGPA {cgpa}
              </Text>
            )}
          </VStack>
        </Flex>

        {/* Coursework */}
        {coursework && (
          <VStack align="stretch" spacing={2}>
            <Text fontSize="sm" color={headingColor} fontWeight="600">
              Relevant Coursework
            </Text>
            <Flex wrap="wrap" gap={2}>
              {coursework.map((course) => (
                <Tag
                  key={course}
                  size="sm"
                  colorScheme="brand"
                  variant="subtle"
                  fontSize="xs"
                >
                  {course}
                </Tag>
              ))}
            </Flex>
          </VStack>
        )}

        {/* Roles */}
        {roles && (
          <List spacing={3}>
            {roles.map((role) => (
              <ListItem key={role.title + role.detail} display="flex" alignItems="flex-start">
                <ListIcon as={FaCheckCircle} color="brand.500" mt={0.5} flexShrink={0} />
                <Text color={detailColor} lineHeight="1.6" fontSize="sm">
                  {role.title}, {role.detail} · {role.duration}
                </Text>
              </ListItem>
            ))}
          </List>
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
            <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="lg" lineHeight="1.6">
              Degree, coursework and teaching
            </Text>
          </Box>

          {/* Schools */}
          <Box
            maxW="800px"
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
                  coursework={entry.coursework}
                  roles={entry.roles}
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
