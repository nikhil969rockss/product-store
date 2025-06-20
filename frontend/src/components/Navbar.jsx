import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useColorMode,  } from "./ui/color-mode";
import { FaRegMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    const {colorMode, toggleColorMode}= useColorMode()
  return (
    <Container maxWidth={"1140px"} px={"4"} py={"4"} >
      <Flex
        h={"16"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{
            base: "22px",
            sm: "28px",
          }}
          textShadow={'sm'}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"to-r"}
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={"4"} alignItems={"center"}>
          <Link to={"/create"}>
            <Button variant={'outline'}>
              <CiSquarePlus />
            </Button>
          </Link>
         
          <Button variant={'outline'} onClick={toggleColorMode} >
            {colorMode === "light" ? <FaRegMoon /> : <FaSun />}
          </Button>
         
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
