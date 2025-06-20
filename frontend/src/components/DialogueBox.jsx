import { useProductStore } from "../store/product.js"
import {
    Button,
    CloseButton,
    Dialog,
    For,
    HStack,
    IconButton,
    Input,
    Portal,
    VStack,
  } from "@chakra-ui/react"
import { useRef, useState } from "react"
import toast from "react-hot-toast"
import { MdEdit } from "react-icons/md"
import { checkImageURL } from "../../utils/helper.jsx"
  
  const DialogueBox = ({product}) => {
    const [updateFields, setUpdateFields] = useState(product)
    const {updateProduct } = useProductStore()
   const cancelBtn = useRef()
   
    const handleUpdate = async()=>{
      const isValidURL = checkImageURL(updateFields.image)
      if(!isValidURL) {
        toast.error("Please enter a valid image URL.")
        return
      }
      const {status, message} = await updateProduct(product._id, updateFields)
      if(status) {
        toast.success(message)
        setTimeout(()=>{
          cancelBtn.current?.click()
        }, 1000)
      }else{
        toast.error(message)
        
      }
     
    }
    
    return (
      <HStack wrap="wrap" gap="4">
        <For each={[ "center"]}>
          {(placement) => (
            <Dialog.Root
              key={placement}
              placement={placement}
              motionPreset="slide-in-bottom"
            >
              <Dialog.Trigger asChild>
                <IconButton _active={{scale:0.95}}  bg={'green.400'}  > <MdEdit /> </IconButton>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>Update Product</Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <VStack gap={4}>
                      <Input placeholder="Product Name" value={updateFields.name} onChange={e=> setUpdateFields({...updateFields, name:e.target.value})}  />
                    
                      <Input placeholder="Product price" value={updateFields.price} onChange={e=> setUpdateFields({...updateFields, price:e.target.value})} />
                      <Input placeholder="Product URL" value={updateFields.image} onChange={e=> setUpdateFields({...updateFields, image:e.target.value})} />
                      </VStack>
                     
                    </Dialog.Body>
                    <Dialog.Footer>
                      <Dialog.ActionTrigger asChild>
                        <Button ref={cancelBtn} variant="outline">Cancel</Button>
                      </Dialog.ActionTrigger>
                      <Button  onClick={handleUpdate}>Save</Button>
                    </Dialog.Footer>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          )}
        </For>
      </HStack>
    )
  }
  export default DialogueBox