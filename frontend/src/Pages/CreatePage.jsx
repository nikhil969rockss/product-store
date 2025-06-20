import { useProductStore } from "../store/product.js";
import { useColorModeValue } from "../components/ui/color-mode";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { checkImageURL } from "../../utils/helper.jsx";

export const CreatePage = () => {
  const navigate = useNavigate()
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
   const {createProudct}=useProductStore()
   

  const handleAddProduct =async () => {
    const isValidURL = checkImageURL(newProduct.image);
    if (!isValidURL) {
      toast.error("Please enter a valid image URL.");
      return;}

     await createProudct(newProduct)
     setNewProduct({
      name: "",
      price: "",
      image: "",
     })
     setTimeout(() => {
      navigate('/')
     }, 1000);
    
   }
  return (
    <Container maxWidth={"sm"} bg={""}>
      <VStack gap={4} />
      <Heading
        as={"h1"}
        size={"3xl"}
        textAlign={"center"}
        mb={8}
        fontWeight={"extrabold"}
      >
        Create New Product
      </Heading>
      <Box
        width={"full"}
        bg={useColorModeValue("white", "gray.800")}
        p={6}
        rounded={"lg"}
        shadow={"md"}
      >
        <VStack spaceY={4}>
          <Input
            placeholder="Product Name"
            name="name"
            border={useColorModeValue("", "0.2px solid white")}
            value={newProduct.name}
            onChange={e=> setNewProduct({...newProduct, name: e.target.value})}
          />
          <Input
            placeholder="Product Price"
            name="price"
            type="number"
            border={useColorModeValue("", "0.2px solid white")}
            value={newProduct.price}

            onChange={e=> setNewProduct({...newProduct, price: e.target.value})}
          />
          <Input
            placeholder="Product Image URL"
            name="image"
            border={useColorModeValue("", "0.2px solid white")}
            value={newProduct.image}
            onChange={e=> setNewProduct({...newProduct, image: e.target.value})}
          />
          <Button type="submit" onClick={handleAddProduct} colorScheme={'blue'} variant={'subtle'} w={'full'}>Add Product</Button>

          
        </VStack>
      </Box>
    </Container>
  );
};
