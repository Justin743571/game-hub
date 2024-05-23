import { HStack, Image, Text } from '@chakra-ui/react'
import loge from "../assets/logo.webp"

const NavBar = () => {
  return (
    <HStack>
        <Image src={loge} boxSize="60px"/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar