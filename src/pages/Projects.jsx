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
  Flex,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { site } from '../data/site';
import { featuredProjects, olderProjects } from '../data/projects';

const MotionBox = motion(Box);

const ProjectCard = ({ image, title, description, link, tags, date, index, github, projectId, revealDelay }) => {
  const cardBg = useColorModeValue('white', 'gray.750');
  const placeholderBg = useColorModeValue('brand.50', 'gray.700');
  const dateColor = useColorModeValue('gray.500', 'gray.300');
  // no idle bobbing on project cards; keep hover effects
  const titleColor = useColorModeValue('gray.900', 'white');
  const descColor = useColorModeValue('gray.600', 'gray.100');
  // The title links to the live site, or to the code when there is no live site
  const titleLink = link || github;

  return (
    <MotionBox
      as={LinkBox}
      bg={cardBg}
      borderRadius="xl"
      overflow="hidden"
      shadow="md"
      _hover={{
        shadow: '2xl',
        transform: 'translateY(-8px)',
      }}
      transitionProperty="transform, box-shadow"
      transitionDuration="0.4s"
      transitionTimingFunction="ease-out"
      // Cards revealed by "View All Projects" fade in one after another
      {...(revealDelay != null && {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.45, delay: revealDelay },
      })}
      cursor={titleLink ? 'pointer' : 'default'}
      position="relative"
      // Each card's rows (image, title, date, description, tags, links) share the grid's
      // row tracks, so they line up across the cards in a row
      display="grid"
      gridTemplateRows="subgrid"
      gridRow="span 6"
      mb={{ base: 8, md: 10 }}
      opacity={1}
  style={{ willChange: 'transform' }}
    >
    {/* Project Image */}
    <Box position="relative" overflow="hidden">
      {image ? (
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
      ) : (
        <Flex w="full" h="240px" align="center" justify="center" bg={placeholderBg} px={6}>
          <Text
            fontFamily="var(--font-display)"
            fontSize="4xl"
            fontWeight="600"
            color="accent"
            textAlign="center"
          >
            {title}
          </Text>
        </Flex>
      )}

      {/* Overlay */}
      {link && (
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
      )}
    </Box>

    {/* Title */}
    <Box px={6} pt={6}>
      {titleLink ? (
        <LinkOverlay href={titleLink} isExternal>
          <Heading size="lg" color={titleColor} fontWeight="600" lineHeight="1.2">
            {title}
          </Heading>
        </LinkOverlay>
      ) : (
        <Heading size="lg" color={titleColor} fontWeight="600" lineHeight="1.2">
          {title}
        </Heading>
      )}
    </Box>

    {/* Date */}
    <Box px={6} pt={date ? 2 : 0}>
      {date && (
        <Text color={dateColor} fontSize="xs" fontWeight="500">
          {date}
        </Text>
      )}
    </Box>

    {/* Description */}
    <Box px={6} pt={2}>
      <Text color={descColor} fontSize="sm" lineHeight="1.6">
        {description}
      </Text>
    </Box>

    {/* Technologies */}
    <Box px={6} pt={tags ? 4 : 0}>
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
    </Box>

    {/* GitHub Link */}
    <Box px={6} pt={github ? 6 : 0} pb={6}>
      {github && (
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
      )}
    </Box>
  </MotionBox>
  );
};

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  // True once the older projects have finished expanding; until then they are clipped
  const [expandSettled, setExpandSettled] = useState(false);
  const reduceMotion = useReducedMotion();

  const toggleProjects = () => {
    setExpandSettled(false);
    if (showAllProjects) {
      // Follow the collapse so the reader isn't left further down the page
      scroller.scrollTo('projects', { smooth: !reduceMotion, duration: 600, offset: -80 });
    }
    setShowAllProjects(!showAllProjects);
  };

  const renderCard = (project, index, revealDelay) => (
    <ProjectCard
      key={project.id}
      projectId={project.id}
      image={project.image}
      title={project.title}
      description={project.description}
      link={project.link}
      github={project.github}
      tags={project.tags}
      date={project.date}
      index={index}
      revealDelay={revealDelay}
    />
  );

  // Vertical spacing comes from each card's bottom margin: a row gap here would be added
  // between the rows inside every card too
  const gridProps = {
    columns: { base: 1, md: 2, lg: 3 },
    spacingX: { base: 8, md: 10 },
    spacingY: 0,
  };

  return (
    <Box
      id="projects"
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
            <Text color={useColorModeValue('gray.600', 'gray.100')} fontSize="lg" lineHeight="1.6">
              Selected ML tools and web apps
            </Text>
          </Box>

          {/* Projects Grid */}
          <Box>
            <SimpleGrid {...gridProps}>
              {featuredProjects.map((project, index) => renderCard(project, index))}
            </SimpleGrid>

            {/* Older projects, expanded by the button below */}
            <AnimatePresence initial={false}>
              {showAllProjects && (
                <MotionBox
                  key="older-projects"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { height: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.3 } }
                  }
                  onAnimationComplete={(definition) => {
                    if (definition.height === 'auto') setExpandSettled(true);
                  }}
                  // Clipped while the height animates; the side padding keeps card shadows visible
                  overflow={expandSettled ? 'visible' : 'hidden'}
                  mx={-6}
                  px={6}
                >
                  <SimpleGrid {...gridProps}>
                    {olderProjects.map((project, index) =>
                      renderCard(project, featuredProjects.length + index, reduceMotion ? 0 : 0.05 + index * 0.07)
                    )}
                  </SimpleGrid>
                </MotionBox>
              )}
            </AnimatePresence>
          </Box>
            
            {/* View All/Less Button */}
            <Box
              textAlign="center"
            >
              <Button
                onClick={toggleProjects}
                rightIcon={
                  <Box
                    as={FaChevronDown}
                    boxSize={3}
                    transition="transform 0.3s ease"
                    transform={showAllProjects ? 'rotate(180deg)' : 'rotate(0deg)'}
                  />
                }
                size="lg"
                variant="outline"
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                color={useColorModeValue('gray.700', 'gray.100')}
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
              <Text color={useColorModeValue('gray.600', 'gray.100')} fontSize="lg">
                Want to see more of my work?
              </Text>
              <Button
                as="a"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaGithub />}
                size="lg"
                variant="outline"
                borderColor={useColorModeValue('gray.300', 'gray.600')}
                color={useColorModeValue('gray.700', 'gray.100')}
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