import React from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { experiences } from '../data/experience';

const MotionFlex = motion(Flex);

const TimelineItem = ({ logo, icon, iconColor, company, position, duration, location, achievements, sectionLink, index, isLast }) => {
  const timelineBg = useColorModeValue('gray.200', 'gray.600');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const subtextColor = useColorModeValue('gray.500', 'gray.400');
  const achievementColor = useColorModeValue('gray.700', 'gray.300');
  const nodeBg = useColorModeValue('white', 'gray.800');

  // no idle bobbing on timeline items; keep hover interactions
  return (
    <MotionFlex
      position="relative"
      pb={isLast ? 0 : 12}
    >
      {/* Timeline Line */}
      {!isLast && (
        <Box
          position="absolute"
          left="30px"
          top="60px"
          bottom="-48px"
          w="2px"
          bg={timelineBg}
          zIndex={0}
        />
      )}

      {/* Timeline Node */}
      <Box
        position="relative"
        zIndex={1}
        w="60px"
        h="60px"
        borderRadius="full"
        bg={nodeBg}
        border="3px solid"
        borderColor="brand.500"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
        shadow="md"
        overflow="hidden"
      >
        <Box
          w="32px"
          h="32px"
          borderRadius="full"
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="4px"
        >
          {logo ? (
            <Image
              src={logo}
              alt={company}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius="full"
              filter="auto"
              contrast="1.1"
            />
          ) : icon ? (
            <Icon as={icon} boxSize={5} color={iconColor} aria-label={company} />
          ) : (
            <Text fontWeight="600" fontSize="sm" color="gray.900">
              {company.charAt(0)}
            </Text>
          )}
        </Box>
      </Box>

      {/* Content */}
      <Box
        ml={6}
        flex={1}
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
            align={{ base: 'flex-start', sm: 'center' }}
            gap={2}
          >
            <VStack align="flex-start" spacing={1}>
              <Heading size="md" color={headingColor} fontWeight="600">
                {position}
              </Heading>
              <Text color="brand.500" fontWeight="600" fontSize="lg">
                {company}
              </Text>
            </VStack>

            <VStack align={{ base: 'flex-start', sm: 'flex-end' }} spacing={1} flexShrink={0}>
              <Text fontSize="sm" color={textColor} fontWeight="500">
                {duration}
              </Text>
              {location && (
                <Text fontSize="sm" color={subtextColor}>
                  {location}
                </Text>
              )}
            </VStack>
          </Flex>

          {/* Achievements */}
          <List spacing={3}>
            {achievements.map((achievement, i) => (
              <ListItem key={i} display="flex" alignItems="flex-start">
                <ListIcon as={FaCheckCircle} color="brand.500" mt={0.5} flexShrink={0} />
                <Text color={achievementColor} lineHeight="1.6" fontSize="sm">
                  {achievement}
                </Text>
              </ListItem>
            ))}
          </List>

          {/* Link to a related section */}
          {sectionLink && (
            <Box>
              <Link
                to={sectionLink.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                style={{ cursor: 'pointer' }}
              >
                <Text
                  as="span"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.500"
                  _hover={{ textDecoration: 'underline' }}
                >
                  {sectionLink.label}
                  <Icon as={FaArrowRight} boxSize={3} />
                </Text>
              </Link>
            </Box>
          )}
        </VStack>
      </Box>
    </MotionFlex>
  );
};
const Experiences = () => {
  return (
    <Box
      id="experiences"
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
              Experience
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
              My professional journey and the experiences that have shaped my skills
            </Text>
          </Box>

          {/* Timeline */}
          <Box
            maxW="800px"
            mx="auto"
            w="full"
          >
            <VStack spacing={0} align="stretch">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  logo={exp.logo}
                  icon={exp.icon}
                  iconColor={exp.iconColor}
                  company={exp.company}
                  position={exp.position}
                  duration={exp.duration}
                  location={exp.location}
                  achievements={exp.achievements}
                  sectionLink={exp.sectionLink}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Experiences;