import { ChakraProvider } from '@chakra-ui/react'

// Screens
import Map from './Map'

export default function Root() {
  return (
    <ChakraProvider>
      <Map />
    </ChakraProvider>
  )
}
