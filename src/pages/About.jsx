import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  
  SimpleGrid,
  Tooltip,
  Icon
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaReact, 
  FaJs,
  FaJava,
  FaServer,
  FaCode,
  FaTerminal,
  FaDocker,
  FaLink
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiFlask, 
  SiFastapi,
  SiC,
  SiFirebase, 
  SiOpencv, 
  SiNumpy, 
  SiTensorflow, 
  SiPytorch,
  SiRos
} from 'react-icons/si';

const MotionBox = motion(Box);
const MotionIcon = motion(Icon);

const InteractiveSkillGrid = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const bgColor = useColorModeValue('white', 'gray.750');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.900', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');
  const tooltipBg = useColorModeValue('gray.800', 'gray.200');
  const tooltipColor = useColorModeValue('white', 'gray.800');
  // reduced motion handled at profile only; skill icons use hover-only interactions

  const skills = [
    {
      id: 'python',
      name: 'Python',
      icon: FaPython,
      color: '#3776ab',
      projects: ['CodeSensAI', 'TISL Research Pipeline', 'Data Processing Tools'],
      description: 'Built CodeSensAI\'s ML backend and trained diffusion models at TISL for robotic data processing'
    },
    {
      id: 'pytorch',
      name: 'PyTorch',
      icon: SiPytorch,
      color: '#ee4c2c',
      projects: ['Neural Networks', 'Research', 'AI Development'],
      description: 'Built custom DataLoaders for TISL research and rapid prototyping of ML experiments'
    },
    {
      id: 'tensorflow',
      name: 'TensorFlow',
      icon: SiTensorflow,
      color: '#ff6f00',
      projects: ['Deep Learning', 'Neural Networks', 'AI Models'],
      description: 'Translated TensorFlow code into PyTorch for diffusion model training at TISL'
    },
    {
      id: 'langchain',
      name: 'LangChain',
      icon: FaLink,
      color: '#1c3c3c',
      projects: ['AIAI'],
      description: 'Built AIAI\'s agents, which turn natural-language requests into end-to-end training pipelines'
    },
    {
      id: 'numpy',
      name: 'NumPy',
      icon: SiNumpy,
      color: '#013243',
      projects: ['Data Analysis', 'Scientific Computing', 'ML Preprocessing'],
      description: 'Processed large robotic datasets at TISL and implemented efficient data transformations for ML pipelines'
    },
    {
      id: 'opencv',
      name: 'OpenCV',
      icon: SiOpencv,
      color: '#5c3ee8',
      projects: ['Computer Vision', 'Image Processing', 'AI Applications'],
      description: 'Processed robotic vision data at TISL and implemented computer vision features for research applications'
    },
    {
      id: 'ros2',
      name: 'ROS 2',
      icon: SiRos,
      color: '#22314e',
      projects: ['Robotics', 'TISL Research', 'Autonomous Systems'],
      description: 'Developed robotic data collection pipelines and integrated ML models with robotic systems at TISL'
    },
    {
      id: 'fastapi',
      name: 'FastAPI',
      icon: SiFastapi,
      color: '#009688',
      projects: ['AIAI', 'Transformer Visualizer', 'PacePlan', 'Amicare'],
      description: 'Built the backends for AIAI, Transformer Visualizer and PacePlan, and services for Amicare\'s healthcare platform'
    },
    {
      id: 'flask',
      name: 'Flask',
      icon: SiFlask,
      color: '#000000',
      projects: ['Web APIs', 'Backend Services', 'Microservices'],
      description: 'Built REST APIs for CodeSensAI and created lightweight microservices for data processing workflows'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47a248',
      projects: ['Database Design', 'PacePlan Backend', 'Data Storage Solutions'],
      description: 'Designed PacePlan\'s collections and indexes for semesters, courses, deadlines and study plans'
    },
    {
      id: 'firebase',
      name: 'Firebase',
      icon: SiFirebase,
      color: '#ffca28',
      projects: ['Real-time Applications', 'Authentication', 'Cloud Functions'],
      description: 'Integrated real-time user authentication and cloud functions for seamless app experiences'
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: FaDocker,
      color: '#2496ed',
      projects: ['Containerization', 'Deployment', 'Development Environment'],
      description: 'Containerized backend services to keep development and deployment environments consistent'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: FaJs,
      color: '#f7df1e',
      projects: ['Souq Marketplace', 'Stack Hacks Website', 'UCL Draw Simulator'],
      description: 'Developed Souq\'s real-time marketplace features and UCL Draw\'s probability simulation engine'
    },
    {
      id: 'reactjs',
      name: 'ReactJS',
      icon: FaReact,
      color: '#61dafb',
      projects: ['Portfolio Website', 'CodeSensAI', 'Souq Marketplace'],
      description: 'Created CodeSensAI\'s interactive frontend, Souq\'s user interface, and this portfolio with modern React patterns'
    },
    {
      id: 'react-native',
      name: 'React Native',
      icon: FaReact,
      color: '#61dafb',
      projects: ['Mobile Applications', 'Cross-platform Development'],
      description: 'Developed cross-platform mobile solutions extending web applications to native mobile experiences'
    },
    {
      id: 'java',
      name: 'Java',
      icon: FaJava,
      color: '#ed8b00',
      projects: ['Enterprise Applications', 'Backend Systems', 'Academic Projects'],
      description: 'Implemented object-oriented solutions for academic coursework and enterprise-level applications'
    },
    {
      id: 'c',
      name: 'C',
      icon: SiC,
      color: '#a8b9cc',
      projects: ['Operating Systems', 'Systems Programming', 'Computer Organization'],
      description: 'Wrote systems-level code for operating systems and computer organization coursework'
    },
    {
      id: 'assembly',
      name: 'Assembly',
      icon: FaCode,
      color: '#0066cc',
      projects: ['Low-level Programming', 'Computer Architecture', 'System Programming'],
      description: 'Worked with RISC-V assembly for computer architecture coursework and low-level system optimization'
    },
    {
      id: 'bash',
      name: 'Bash',
      icon: FaServer,
      color: '#4eaa25',
      projects: ['Automation Scripts', 'System Administration', 'DevOps'],
      description: 'Automated deployment workflows and data processing pipelines for research and development projects'
    },
    {
      id: 'unix',
      name: 'Unix',
      icon: FaTerminal,
      color: '#333333',
      projects: ['System Administration', 'Server Management', 'Development Environment'],
      description: 'Managed development servers and automated research data workflows in Linux environments at TISL'
    }
  ];

  // click-to-open modal removed to keep interactions lightweight; details available via tooltip

  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg" color={textColor} fontWeight="600" textAlign="center">
        Technologies & Skills
      </Heading>
      
      <SimpleGrid columns={{ base: 3, lg: 4 }} spacing={{ base: 3, md: 4 }}>
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
              transition={{ opacity: { duration: 0.32, delay: index * 0.08 }, y: { duration: 0.45, delay: index * 0.08 } }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                bg={bgColor}
                border="2px solid"
                borderColor={hoveredSkill === skill.id ? skill.color : borderColor}
                borderRadius="xl"
                p={{ base: 3, md: 4 }}
                cursor="pointer"
                // onClick={() => handleSkillClick(skill)}
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
                  <MotionIcon
                    as={skill.icon}
                    boxSize={{ base: 7, md: 8 }}
                    color={hoveredSkill === skill.id ? skill.color : subTextColor}
                    style={{ willChange: 'transform' }}
                  />
                  
                  <Text
                    fontWeight="600"
                    fontSize={{ base: 'xs', md: 'sm' }}
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

  {/* Using tooltips for lightweight details; modal removed to simplify interaction */}
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
            maxW="680px"
            mx="auto"
          >
            <VStack spacing={8} align="stretch">
              {/* Lead line */}
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="600"
                color={useColorModeValue('gray.900', 'white')}
                lineHeight="1.4"
                textAlign="center"
              >
                I absolutely love experimenting and iterating.
              </Text>

              <VStack
                spacing={5}
                align="stretch"
                fontSize={{ base: 'md', md: 'lg' }}
                color={useColorModeValue('gray.600', 'gray.100')}
                lineHeight="1.8"
              >
                <Text>
                  Whether it's a new model, a new tool or an idea from a paper, I want to try it out, test its limits and adapt it. That's what pulled me toward the gap between research and things people actually use: an idea can look great on paper and still fall apart on a real robot or in front of real users, and the only way to find out is to try it.
                </Text>

                <Text>
                  Lately most of my experiments involve language models: building systems around them and evaluating them to see how good they are. I'm also curious about what makes them work and how they are made (mechanistic interpretability). I also love working with robots and have done research at a lab looking at methods to make them more efficient.
                </Text>

                <Text>
                  I study Computer Science and Mathematics at the{' '}
                  <Text as="span" color="accent" fontWeight="600">
                    University of Toronto
                  </Text>
                  , where I also TA Theory of Computation. Outside of work, one of my hobbies is vexillology (the study of flags).
                </Text>
              </VStack>
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
        </VStack>
      </Container>
    </Box>
  );
};

export default About;