import { HStack, Image, Text } from "@chakra-ui/react";
import loge from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";



const NavBar = () => {
  
  return (
    <HStack padding="10px">
      <Image src={loge} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
