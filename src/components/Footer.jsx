import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <Box 
            as="footer"
            position="fixed"
            left="0"
            bottom="0"
            width="100%"
            bg={useColorModeValue('gray.300', 'gray.700')}
            px={4}
        >
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
        <p>{year} All rights reserved. Nishan Shashintha.</p>
        </Flex>
      </Box>
    </>
  )

}