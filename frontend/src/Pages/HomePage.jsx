import ProuctCard from "../components/ProuctCard.jsx";
import { useProductStore } from "../store/product.js";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { products, getAllProuducts } = useProductStore();
  useEffect(() => {
    getAllProuducts();
  }, []);

  return (
    <Container maxWidth={"container.xl"} py={12} bg={""}>
      <VStack spacing={8}>
        <Text
          textAlign={"center"}
          fontSize={30}
          fontWeight={"bold"}
          bgGradient={"to-r"}
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip={"text"}
        >
          Current Products 🚀{" "}
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} mt={8}>
          {products.length>0&&products.map((product) => (
            <ProuctCard key={product?._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"gray.500"}
          >
            No product Found 😭&nbsp;
            <Link to={"/create"}>
              <Text
                as={"span"}
                color={"blue.400"}
                _hover={{ textDecoration: "underline" }}
              >
                Create a Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
