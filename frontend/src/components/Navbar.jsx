import { Box,
         Container, 
         Flex,
         IconButton,
         Text,
         Spacer,
         Button,
         Menu,
         MenuButton,
         MenuList,
         MenuItem} from "@chakra-ui/react"

import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar() {
   return (
     <Box bg="blue.300" h="56px" p="10px"> 
       <Container maxW="80em">
         <Flex alignItems='center' 
               justify='space-between' 
               gap="10px">
           <IconButton colorScheme='blue' icon={<HamburgerIcon />} display={{ base: 'block' }} />
           <Text fontSize='20px' color='white' as="b">
             LOGO
           </Text>
           
           <Spacer/>
           <Flex alignItems='center' gap='2' display={{ base: 'block', md: 'flex' }}>
             <Button colorScheme='blue'>
               Log in
             </Button>
           </Flex>
           
         </Flex>   
       </Container>
     </Box>
   );
 }
