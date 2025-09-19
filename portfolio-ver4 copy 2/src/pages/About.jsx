import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
  SimpleGrid,
  Tooltip,
  Icon,
  HStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaReact, 
  FaJs,
  FaJava,
  FaServer,
  FaCode,
  FaTerminal
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiFlask, 
  SiFirebase, 
  SiOpencv, 
  SiNumpy, 
  SiTensorflow, 
  SiPytorch,
  SiRos
} from 'react-icons/si';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const InteractiveSkillGrid = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.900', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');
  const tooltipBg = useColorModeValue('gray.800', 'gray.200');
  const tooltipColor = useColorModeValue('white', 'gray.800');

  const skills = [
    {
      id: 'python',
      name: 'Python',
      icon: FaPython,
      color: '#3776ab',
      projects: ['CodeSensAI', 'TISL Research Pipeline', 'Data Processing Tools'],
      description: 'Primary language for AI/ML development, data analysis, and backend systems'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: FaJs,
      color: '#f7df1e',
      projects: ['Souq Marketplace', 'Stack Hacks Website', 'UCL Draw Simulator'],
      description: 'Modern ES6+ JavaScript for dynamic web applications and API development'
    },
    {
      id: 'java',
      name: 'Java',
      icon: FaJava,
      color: '#ed8b00',
      projects: ['Enterprise Applications', 'Backend Systems', 'Academic Projects'],
      description: 'Object-oriented programming for enterprise and academic applications'
    },
    {
      id: 'reactjs',
      name: 'ReactJS',
      icon: FaReact,
      color: '#61dafb',
      projects: ['Portfolio Website', 'CodeSensAI', 'Souq Marketplace'],
      description: 'Component-based UI development with hooks, state management, and modern patterns'
    },
    {
      id: 'react-native',
      name: 'React Native',
      icon: FaReact,
      color: '#61dafb',
      projects: ['Mobile Applications', 'Cross-platform Development'],
      description: 'Cross-platform mobile app development using React principles'
    },
    {
      id: 'assembly',
      name: 'Assembly',
      icon: FaCode,
      color: '#0066cc',
      projects: ['Low-level Programming', 'Computer Architecture', 'System Programming'],
      description: 'Low-level programming and computer architecture understanding with RISC-V'
    },
    {
      id: 'bash',
      name: 'Bash',
      icon: FaServer,
      color: '#4eaa25',
      projects: ['Automation Scripts', 'System Administration', 'DevOps'],
      description: 'Shell scripting for automation and system administration'
    },
    {
      id: 'unix',
      name: 'Unix',
      icon: FaTerminal,
      color: '#333333',
      projects: ['System Administration', 'Server Management', 'Development Environment'],
      description: 'Unix/Linux system administration and command-line proficiency'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47a248',
      projects: ['Database Design', 'Souq Backend', 'Data Storage Solutions'],
      description: 'NoSQL database design, aggregation pipelines, and data modeling'
    },
    {
      id: 'flask',
      name: 'Flask',
      icon: SiFlask,
      color: '#000000',
      projects: ['Web APIs', 'Backend Services', 'Microservices'],
      description: 'Lightweight Python web framework for APIs and web applications'
    },
    {
      id: 'firebase',
      name: 'Firebase',
      icon: SiFirebase,
      color: '#ffca28',
      projects: ['Real-time Applications', 'Authentication', 'Cloud Functions'],
      description: 'Google\'s platform for web and mobile app development'
    },
    {
      id: 'opencv',
      name: 'OpenCV',
      icon: SiOpencv,
      color: '#5c3ee8',
      projects: ['Computer Vision', 'Image Processing', 'AI Applications'],
      description: 'Computer vision and image processing library'
    },
    {
      id: 'numpy',
      name: 'NumPy',
      icon: SiNumpy,
      color: '#013243',
      projects: ['Data Analysis', 'Scientific Computing', 'ML Preprocessing'],
      description: 'Numerical computing and array processing for Python'
    },
    {
      id: 'tensorflow',
      name: 'TensorFlow',
      icon: SiTensorflow,
      color: '#ff6f00',
      projects: ['Deep Learning', 'Neural Networks', 'AI Models'],
      description: 'Google\'s machine learning and deep learning framework'
    },
    {
      id: 'pytorch',
      name: 'PyTorch',
      icon: SiPytorch,
      color: '#ee4c2c',
      projects: ['Neural Networks', 'Research', 'AI Development'],
      description: 'Facebook\'s dynamic neural network framework for research and production'
    },
    {
      id: 'ros2',
      name: 'ROS 2',
      icon: SiRos,
      color: '#22314e',
      projects: ['Robotics', 'TISL Research', 'Autonomous Systems'],
      description: 'Robot Operating System for building robot applications'
    }
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    onOpen();
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg" color={textColor} fontWeight="600" textAlign="center">
        Technologies & Skills
      </Heading>
      
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
        {skills.map((skill, index) => (
          <Tooltip
            key={skill.id}
            label={skill.description}
            placement="top"
            hasArrow
            bg={tooltipBg}
            color={tooltipColor}
            fontSize="sm"
            px={3}
            py={2}
            borderRadius="md"
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                bg={bgColor}
                border="2px solid"
                borderColor={hoveredSkill === skill.id ? skill.color : borderColor}
                borderRadius="xl"
                p={4}
                cursor="pointer"
                onClick={() => handleSkillClick(skill)}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                transition="all 0.3s ease"
                _hover={{
                  shadow: 'lg',
                  transform: 'translateY(-2px)',
                }}
                position="relative"
                overflow="hidden"
              >
                {/* Background gradient on hover */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bgGradient={`linear(45deg, ${skill.color}10, transparent)`}
                  opacity={hoveredSkill === skill.id ? 1 : 0}
                  transition="opacity 0.3s ease"
                />
                
                <VStack spacing={3} position="relative" zIndex={1}>
                  <Icon
                    as={skill.icon}
                    boxSize={8}
                    color={hoveredSkill === skill.id ? skill.color : subTextColor}
                    transition="color 0.3s ease"
                  />
                  
                  <Text
                    fontWeight="600"
                    fontSize="sm"
                    color={textColor}
                    textAlign="center"
                    lineHeight="1.2"
                  >
                    {skill.name}
                  </Text>
                </VStack>
              </Box>
            </MotionBox>
          </Tooltip>
        ))}
      </SimpleGrid>

      {/* Modal for skill details */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent
          bg={bgColor}
          border="1px solid"
          borderColor={borderColor}
        >
          <ModalHeader color={textColor}>
            <HStack>
              <Icon
                as={selectedSkill?.icon}
                boxSize={6}
                color={selectedSkill?.color}
              />
              <Text>{selectedSkill?.name}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton color={textColor} />
          <ModalBody pb={6}>
            <VStack align="stretch" spacing={4}>
              <Text color={subTextColor}>
                {selectedSkill?.description}
              </Text>
              
              <Box>
                <Text fontWeight="600" color={textColor} mb={2}>
                  Related Projects
                </Text>
                <VStack align="stretch" spacing={2}>
                  {selectedSkill?.projects.map((project, index) => (
                    <Badge
                      key={index}
                      variant="subtle"
                      colorScheme="purple"
                      px={3}
                      py={2}
                      borderRadius="md"
                      fontSize="sm"
                      display="flex"
                      alignItems="center"
                    >
                      {project}
                    </Badge>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
      `}</style>
    </VStack>
  );
};

const About = () => {

  return (
    <Box
      id="about"
      py={{ base: '80px', md: '120px' }}
      bg={useColorModeValue('white', 'gray.900')}
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
              About Me
            </Heading>
            <Box
              w="60px"
              h="3px"
              bg="brand.500"
              mx="auto"
              borderRadius="full"
              mb={6}
            />
          </MotionBox>

          {/* Bio Section */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            textAlign="center"
            maxW="800px"
            mx="auto"
          >
            <VStack spacing={6}>
              <MotionText
                fontSize={{ base: 'lg', md: 'xl' }}
                color={useColorModeValue('gray.600', 'gray.300')}
                lineHeight="1.8"
              >
                💡 From abstract research to applied reality, that's the gap I'm driven to close. As a Computer Science student at the{' '}
                <Text as="span" color="brand.500" fontWeight="600">
                  University of Toronto
                </Text>
                , I put this principle into practice daily. At the Toronto Intelligent Systems Lab (TISL), I design robotic data pipelines and train diffusion models, while outside the lab, I've engineered commercial systems from the ground up.
              </MotionText>

              <MotionText
                fontSize={{ base: 'lg', md: 'xl' }}
                color={useColorModeValue('gray.600', 'gray.300')}
                lineHeight="1.8"
              >
                What excites me most is working at the intersection of AI research and application: transforming messy data into insights, building scalable ML tools, and creating systems that people actually use. I'm especially interested in robotics, deep learning, and applied AI that empowers researchers, businesses, and communities.
              </MotionText>

              <MotionText
                fontSize={{ base: 'lg', md: 'xl' }}
                color={useColorModeValue('gray.600', 'gray.300')}
                lineHeight="1.8"
                fontWeight="500"
              >
                Always learning. Always building. Always seeking opportunities to grow as a researcher and engineer in the AI ecosystem. 🚀
              </MotionText>
            </VStack>
          </MotionBox>

          {/* Skills/Technologies */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            maxW="600px"
            mx="auto"
          >
            <InteractiveSkillGrid />
          </MotionBox>

          {/* Values Grid
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heading
              size="lg"
              textAlign="center"
              color="gray.900"
              fontWeight="600"
              mb={8}
            >
              What Drives Me
            </Heading>
            
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 4 }}
              spacing={6}
            >
              {values.map((value, index) => (
                <ValueCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  delay={index * 0.1 + 0.4}
                />
              ))}
            </SimpleGrid>
          </MotionBox> */}
        </VStack>
      </Container>
    </Box>
  );
};

export default About;