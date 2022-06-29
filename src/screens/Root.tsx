// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChakraProvider, Box } from '@chakra-ui/react'

// Screens
import Map from './Map'

export default function Root() {
  return (
    <ChakraProvider>
      {/*       <Box
        bg="red"
        boxSize="30px"
        position="absolute"
        top="calc(50% - 15px)"
        left="calc(50% - 15px)"
        zIndex="1000"
      /> */}
      <Map />
    </ChakraProvider>
  )
}
