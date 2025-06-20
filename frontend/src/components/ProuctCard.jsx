import { Box, Heading, HStack, IconButton, Image, Text,  } from '@chakra-ui/react'
import { MdDelete, MdEdit } from "react-icons/md";
import DialogueBox from './DialogueBox.jsx'
import React from 'react'
import { useProductStore } from '../store/product.js';

const ProuctCard = ({product}) => {
  const{deleteProduct}=  useProductStore()
  return (
    <Box 
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{transform: 'translateY(-5px)',scale: 1.05, shadow:'xl'}}
    cursor={'pointer'}
    >
        <Image src={product?.image} alt={product?.name} h={48} w={'full'} objectFit={'cover'} />
        <Box p={4} >
            <Heading as={'h3'} fontSize={'md'} mb={2} textTransform={'capitalize'}>{product?.name}</Heading>
            <Text fontWeight={'bold'} fontSize={'xl'} >${product?.price}</Text>
            <HStack >
                {/* <IconButton onc _active={{scale:0.95}}  bg={'green.400'} >{<MdEdit />}</IconButton> */}
                <DialogueBox  product={product} />
                <IconButton onClick={()=>deleteProduct(product?._id)} _active={{scale:0.95}} bg={'red.400'} >{<MdDelete />}</IconButton>
             
            </HStack>
        </Box>

    </Box>
  )
}

export default ProuctCard