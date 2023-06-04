import { HStack, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return <HStack w={["100%","100%"]} h={["10vh","10vh"]} bgColor={"blue.500"} boxShadow={"dark-lg"} color={"white"} alignItems={"center"} justifyContent={"center"} >
      
  <Heading alignItems={"center"}>Google Translator</Heading>
</HStack>


}

export default Header