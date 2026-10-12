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
  Grid,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';

import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { experiences } from '../data/experience';

// Round company logo: `logo` image, else `icon`, else the company's initial
const LogoBadge = ({ size, logo, logoContain, icon, iconColor, company }) => (
  <Box
    w={size}
    h={size}
    flexShrink={0}
    borderRadius="full"
    bg="white"
    border="3px solid"
    borderColor="brand.500"
    display="flex"
    alignItems="center"
    justifyContent="center"
    shadow="md"
    overflow="hidden"
  >
    {logo ? (
      <Image
        src={logo}
        alt={company}
        w="100%"
        h="100%"
        p={logoContain ? '4px' : 0}
        objectFit={logoContain ? 'contain' : 'cover'}
        borderRadius={logoContain ? 'none' : 'full'}
        filter="auto"
        contrast="1.1"
      />
    ) : icon ? (
      <Icon as={icon} boxSize="50%" color={iconColor} aria-label={company} />
    ) : (
      <Text fontWeight="600" fontSize="2xl" color="gray.900">
        {company.charAt(0)}
      </Text>
    )}
  </Box>
);

const TimelineItem = ({ logo, logoContain, icon, iconColor, company, position, duration, location, achievements, sectionLink, index, isLast }) => {
  const timelineBg = useColorModeValue('gray.200', 'gray.600');
  const cardBg = useColorModeValue('white', 'gray.750');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.100');
  const subtextColor = useColorModeValue('gray.500', 'gray.300');
  const achievementColor = useColorModeValue('gray.700', 'gray.100');

  // On wide screens the logo alternates between the left and right of the card
  const logoOnLeft = index % 2 === 0;
  const logoProps = { logo, logoContain, icon, iconColor, company };

  return (
    <Grid
      position="relative"
      templateColumns={{
        base: 'minmax(0, 1fr)',
        md: '72px minmax(0, 1fr)',
        lg: logoOnLeft ? '72px minmax(0, 1fr)' : 'minmax(0, 1fr) 72px',
      }}
      columnGap={6}
      pb={isLast ? 0 : { base: 8, md: 12 }}
    >
      {/* Timeline Line (only while the logos share one side) */}
      {!isLast && (
        <Box
          display={{ base: 'none', md: 'block', lg: 'none' }}
          position="absolute"
          left="35px"
          top="72px"
          bottom="0"
          w="2px"
          bg={timelineBg}
          zIndex={0}
        />
      )}

      {/* Timeline Node (on phones the logo sits inside the card instead) */}
      <Box
        display={{ base: 'none', md: 'block' }}
        gridColumn={{ md: 1, lg: logoOnLeft ? 1 : 2 }}
        gridRow={1}
        position="relative"
        zIndex={1}
      >
        <LogoBadge size="72px" {...logoProps} />
      </Box>

      {/* Content */}
      <Box
        gridColumn={{ base: 1, md: 2, lg: logoOnLeft ? 2 : 1 }}
        gridRow={1}
        bg={cardBg}
        p={{ base: 6, md: 8 }}
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
            gap={{ base: 2, sm: 6 }}
          >
            <Flex align="center" gap={4}>
              <Box display={{ base: 'block', md: 'none' }}>
                <LogoBadge size="56px" {...logoProps} />
              </Box>
              <VStack align="flex-start" spacing={1}>
                <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color={headingColor} fontWeight="600" lineHeight="1.3">
                  {position}
                </Heading>
                <Text color="accent" fontWeight="600" fontSize="lg">
                  {company}
                </Text>
              </VStack>
            </Flex>

            <VStack align={{ base: 'flex-start', sm: 'flex-end' }} spacing={1} flexShrink={0} pt={{ sm: 1 }}>
              <Text fontSize="md" color={textColor} fontWeight="500">
                {duration}
              </Text>
              {location && (
                <Text fontSize="md" color={subtextColor}>
                  {location}
                </Text>
              )}
            </VStack>
          </Flex>

          {/* Achievements */}
          <List spacing={3}>
            {achievements.map((achievement, i) => (
              <ListItem key={i} display="flex" alignItems="flex-start">
                <ListIcon as={FaCheckCircle} color="accent" mt={1.5} flexShrink={0} />
                <Text color={achievementColor} lineHeight="1.7" fontSize="md">
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
                  fontSize="md"
                  fontWeight="600"
                  color="accent"
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
    </Grid>
  );
};

const Experiences = () => {
  return (
    <Box
      id="experiences"
      py={{ base: '80px', md: '120px' }}
    >
      <Container maxW="container.xl">
        <VStack spacing={{ base: 12, md: 16 }} align="stretch">
          {/* Section Header */}
          <Box
            textAlign="center"
            maxW="720px"
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
            <Text color={useColorModeValue('gray.600', 'gray.100')} fontSize="lg" lineHeight="1.6">
              My professional journey and the experiences that have shaped my skills
            </Text>
          </Box>

          {/* Timeline */}
          <Box
            maxW="960px"
            mx="auto"
            w="full"
          >
            <VStack spacing={0} align="stretch">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  logo={exp.logo}
                  logoContain={exp.logoContain}
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