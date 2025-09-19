import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  HStack,
  Tag,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ image, title, description, link, tags, index, github, projectId }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const titleColor = useColorModeValue('gray.900', 'white');
  const descColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box
      as={LinkBox}
      bg={cardBg}
      borderRadius="xl"
      overflow="hidden"
      shadow="md"
      _hover={{
        shadow: '2xl',
        transform: 'translateY(-8px)',
      }}
      transitionDuration="0.4s"
      transitionTimingFunction="ease-out"
      cursor="pointer"
      position="relative"
      opacity={1}
    >
    {/* Project Image */}
    <Box position="relative" overflow="hidden">
      <Image
        src={image}
        alt={title}
        w="full"
        h="240px"
        objectFit="cover"
        transition="transform 0.4s ease"
        _groupHover={{
          transform: 'scale(1.05)',
        }}
      />
      
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
        opacity="0"
        transition="opacity 0.3s ease"
        _groupHover={{
          opacity: 1,
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <HStack spacing={4}>
          <Button
            size="sm"
            leftIcon={<FaExternalLinkAlt />}
            colorScheme="whiteAlpha"
            variant="solid"
            bg="whiteAlpha.200"
            backdropFilter="blur(4px)"
            _hover={{
              bg: 'whiteAlpha.300',
            }}
            onClick={(e) => {
              e.preventDefault();
              window.open(link, '_blank');
            }}
          >
            View Live
          </Button>
        </HStack>
      </Box>
    </Box>

    {/* Content */}
    <VStack p={6} align="stretch" spacing={4}>
      <VStack align="stretch" spacing={2}>
        <LinkOverlay href={link} isExternal>
          <Heading size="lg" color={titleColor} fontWeight="600" lineHeight="1.2">
            {title}
          </Heading>
        </LinkOverlay>
        
        <Text color={descColor} fontSize="sm" lineHeight="1.6">
          {description}
        </Text>
      </VStack>

      {/* Technologies */}
      {tags && (
        <HStack spacing={2} flexWrap="wrap">
          {tags.map((tag, i) => (
            <Tag
              key={i}
              size="sm"
              colorScheme="brand"
              variant="subtle"
              fontSize="xs"
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      )}

      {/* GitHub Link */}
      {github && (
        <HStack pt={2}>
          <Button
            as="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaGithub />}
            size="sm"
            variant="ghost"
            colorScheme="gray"
          >
            GitHub
          </Button>
        </HStack>
      )}
    </VStack>
    </Box>
  );
};

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const featuredProjects = [
    // {
    //   id: "bitarco",
    //   image: "https://i.ibb.co/rmJGNVF/Screenshot-64.png",
    //   title: "Bitarco Produce Website",
    //   description: "Professional business website for Bitarco Produce, a wholesale food distribution company. Features modern design, responsive layout, and optimized user experience for B2B clients.",
    //   link: "https://www.bitarcoproduce.com/",
    //   github: "",
    //   tags: ["Web Development", "Business Website", "Responsive Design"],
    //   date: "2024"
    // },
    {
      id: "souq",
      image: "https://i.ibb.co/p6Lv3srs/Screenshot-2025-09-19-at-1-23-06-AM.png",
      title: "Souq",
      description: "Delivered a fully functional online marketplace for 100+ users within a 5-day freelance contract, meeting client specifications and launch deadlines.",
      // link: "https://souq-marketplace.web.app/",
      // github: "https://github.com/AnousAlma/souq",
      tags: ["JavaScript", "React", "MongoDB", "Google Sheets API"],
      date: "Mar 2025"
    },
    {
      id: "codesensai",
      image: "https://i.ibb.co/rmJGNVF/Screenshot-64.png",
      title: "CodeSensAI",
      description: "Built an AI-driven coding interview simulator that generates timed coding challenges and provides automated feedback on solution correctness and runtime efficiency.",
      link: "https://codesensai.study/",
      github: "https://github.com/AnousAlma/codesensai",
      tags: ["Python", "JavaScript", "React", "OpenAI API", "Piston API", "Firebase", "ChakraUI"],
      date: "Oct 2024"
    },
    {
      id: "ucl-draw",
      image: "https://i.ibb.co/qFPndXK/Screenshot-34.png",
      title: "UCL Draw Simulator",
      description: "Web application that simulates the UEFA Champions League Round of 16 Knockouts draw. Uses advanced algorithms to pick possible draws, randomize them, and display realistic results.",
      link: "https://ucl-draw-simulator.netlify.app/",
      // github: "https://github.com/AnousAlma/ucl-draw-simulator",
      tags: ["JavaScript", "HTML5", "CSS3", "Algorithm"],
      date: "2023"
    }
  ];

  const olderProjects = [
    {
      id: "stackhacks",
      image: "https://i.ibb.co/9HG5S7t/Screenshot-32.png",
      title: "Stack Hacks Website",
      description: "The web application built for the Stack Hacks hackathon. Contains information about the event, judges, and registration. Built with modern React practices and responsive design.",
      link: "https://stack-hacks.web.app/",
      github: "https://github.com/AnousAlma/stack-hack-website",
      tags: ["React", "Firebase", "CSS3", "Responsive"],
      date: "Feb 2024"
    },
    
  ];

  const displayedProjects = showAllProjects 
    ? [...featuredProjects, ...olderProjects] 
    : featuredProjects;

  return (
    <Box
      id="projects"
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
              Projects
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
              A collection of projects that showcase my passion for creating 
              meaningful digital experiences and solving real-world problems
            </Text>
          </Box>

          {/* Projects Grid */}
          <Box>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 8, md: 10 }}
            >
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  projectId={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                  tags={project.tags}
                  index={index}
                />
              ))}
            </SimpleGrid>
          </Box>
            
            {/* View All/Less Button */}
            <Box
              textAlign="center"
              pt={8}
            >
              <Button
                onClick={() => setShowAllProjects(!showAllProjects)}
                size="lg"
                variant="outline"
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                color={useColorModeValue('gray.700', 'gray.300')}
                _hover={{
                  bg: useColorModeValue('gray.50', 'gray.700'),
                  borderColor: useColorModeValue('gray.400', 'gray.500'),
                  transform: 'translateY(-2px)',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                transition="all 0.3s ease"
              >
                {showAllProjects ? 'Show Less Projects' : 'View All Projects'}
              </Button>
            </Box>

          {/* CTA */}
          <Box
            textAlign="center"
            pt={8}
          >
            <VStack spacing={4}>
              <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="lg">
                Want to see more of my work?
              </Text>
              <Button
                as="a"
                href="https://github.com/anousalma"
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaGithub />}
                size="lg"
                variant="outline"
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                color={useColorModeValue('gray.700', 'gray.300')}
                _hover={{
                  bg: useColorModeValue('gray.50', 'gray.700'),
                  borderColor: useColorModeValue('gray.400', 'gray.500'),
                  transform: 'translateY(-2px)',
                }}
                _active={{
                  transform: 'translateY(0)',
                }}
                transition="all 0.3s ease"
              >
                View GitHub Profile
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;