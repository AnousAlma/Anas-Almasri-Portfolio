import React from 'react'
import {
    Box,
    Flex,
    useColorModeValue,
    Image,
    Text,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";

const Job = ({logo, name, time, job, location, points}) => {

  const ListItems = points.map((point) => {
    return (
      <ListItem>{point}</ListItem>
    )
  })

  return (
    <Flex flexDir="column" w={{base:"90%", lg:"55%"}} bgColor={useColorModeValue("gray.100", "gray.900")} borderRadius="20px" padding={2} mt={10}>
      <Flex w="100%" flexDir={{base:"column", lg:"row"}} alignItems={{base:"center", lg:"flex-start"}}>
          <Image src={logo} alt={name} h="75px" m="1em" borderRadius="5px"/>
          <Flex w="100%" flexDir="column" justifyContent="center" alignItems="center" ml={{base:5, lg:0}} mb={{base:5, lg:0}} mt={4}>
            <Flex w="100%" justifyContent="space-between">
              <Text fontSize={{base:"sm", md:"xl"}} fontWeight="bold">{name}</Text>
              <Text fontSize={{base:"sm", md:"xl"}} fontWeight="bold" ml="auto" mr={5}>{time}</Text>
            </Flex>
            <Flex w="100%" alignContent="space-between" mt={2}>
              <Text fontSize={{base:"xs", md:"lg"}}>{job}</Text>
              <Text fontSize={{base:"xs", md:"lg"}} ml="auto" mr={5}>{location}</Text>
            </Flex>
          </Flex>
      </Flex>
        <UnorderedList spacing={3} mt={3} ml={9} mb={6}>
          {ListItems}
        </UnorderedList>
    </Flex>
  )
}

export default Job