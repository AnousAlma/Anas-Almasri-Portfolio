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
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const TimelineItem = ({ logo, company, position, duration, location, achievements, index, isLast }) => {
  const timelineBg = useColorModeValue('gray.200', 'gray.600');
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const subtextColor = useColorModeValue('gray.500', 'gray.400');
  const achievementColor = useColorModeValue('gray.700', 'gray.300');
  const nodeBg = useColorModeValue('white', 'gray.800');

  return (
    <Flex position="relative" pb={isLast ? 0 : 12}>
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
              <Heading 
                size="md" 
                color={headingColor} 
                fontWeight="600"
              >
                {position}
              </Heading>
              <Text color="brand.500" fontWeight="600" fontSize="lg">
                {company}
              </Text>
            </VStack>
            
            <VStack align={{ base: 'flex-start', sm: 'flex-end' }} spacing={1} flexShrink={0}>
              <Text 
                fontSize="sm" 
                color={textColor} 
                fontWeight="500"
              >
                {duration}
              </Text>
              <Text 
                fontSize="sm" 
                color={subtextColor}
              >
                {location}
              </Text>
            </VStack>
          </Flex>

          {/* Achievements */}
          <List spacing={3}>
            {achievements.map((achievement, i) => (
              <ListItem key={i} display="flex" alignItems="flex-start">
                <ListIcon as={FaCheckCircle} color="brand.500" mt={0.5} flexShrink={0} />
                <Text 
                  color={achievementColor} 
                  lineHeight="1.6" 
                  fontSize="sm"
                >
                  {achievement}
                </Text>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>
    </Flex>
  );
};const Experiences = () => {
  const experiences = [
    {
      logo: "https://avatars.githubusercontent.com/u/91031689?s=280&v=4",
      company: "Toronto Intelligent Systems Laboratory (TISL)",
      position: "Student Researcher - Robotics Diffusion Policy",
      duration: "Jun 2025 - Present",
      location: "Toronto, ON",
      achievements: [
        "Designed and deployed a robotic data collection pipeline on ALOHA stationary robots, generating high-quality datasets across 10+ manipulation benchmarks to support cutting-edge Diffusion Policy research.",
        "Implemented a scalable PyTorch DataLoader and standardized schema, reducing data preprocessing time by 50% and enabling seamless integration into lab-wide reinforcement learning workflows.",
        "Validated pipeline integrity by training and benchmarking a Diffusion Policy model on collected datasets, ensuring reproducibility and providing a foundation for future fine-tuning experiments impacting 15+ projects."
      ]
    },
    {
      logo: "https://i.ibb.co/8Ljrw6jf/logo512.png",
      company: "Bitarco",
      position: "Software Developer Intern",
      duration: "Apr 2025 - Sep 2025",
      location: "Mississauga, ON",
      achievements: [
        "Developed and deployed a commerce platform used by 100+ businesses and customers, directly supporting $6.6M in annual transaction volume.",
        "Built customer-facing functionality including account creation, product browsing/ordering, and shipment tracking, improving accessibility and order turnaround using React, REST APIs, and Python.",
        "Designed administrative dashboards enabling staff to manage orders, products, users, and employees, reducing manual oversight and streamlining operations.",
        "Automated financial and logistics workflows by integrating QuickBooks API for billing, generating shipment documents, and sending order confirmations, reducing manual processing time by 70%."
      ]
    },
    {
      logo: "https://i.ibb.co/2nyFjpp/Al-Bassem-Org.jpg",
      company: "Al Bassem Org",
      position: "Software Developer Intern",
      duration: "Nov 2023 - Apr 2024",
      location: "Oakville, ON",
      achievements: [
        "Designed and implemented a comprehensive inventory management system using JavaScript, React Native, AWS, and MongoDB ensuring accurate alignment of items with their real-life locations.",
        "Developed a dynamic React-based mobile application, enabling seamless user account creation, using Firebase, and efficient item sign-in/out through QR code scanning."
      ]
    },
    {
      logo: "https://i.ibb.co/QQwYyKL/stack-hacks-logo.jpg",
      company: "Stack Hacks",
      position: "Co-Founder",
      duration: "Feb 2024",
      location: "Remote",
      achievements: [
        "Spearheaded the design, implementation and deployment of the Hackathon's website.",
        "Managed social media and digital advertising resulting in over 40 sign-ups.",
        "Facilitated event logistics and operations including reaching out and communicating with guest speakers."
      ]
    },
    {
      logo: "https://i.ibb.co/HPjh6MT/intellibots-academy-logo.jpg",
      company: "IntelliBots Academy",
      position: "Volunteer",
      duration: "Jul 2022 - Aug 2022",
      location: "Mississauga, ON",
      achievements: [
        "Guided 10+ students in implementing code for the robot, fostering their understanding of robotic principles.",
        "Cultivated a vibrant learning environment by encouraging learning from mistakes, and ability to problem solve."
      ]
    }
  ];

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
                  company={exp.company}
                  position={exp.position}
                  duration={exp.duration}
                  location={exp.location}
                  achievements={exp.achievements}
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