import { ChakraProvider, Portal, Stack, Flex, Spacer } from '@chakra-ui/react'

// Screens
import Map from './Map'
import Search from './Search'

export default function Root() {
  return (
    <ChakraProvider>
      <Portal>
        <Stack
          align="center"
          spacing={{ base: '4', lg: '0' }}
          direction={{ base: 'column', lg: 'row' }}
          pos="absolute"
          left={0}
          top={{ base: '2', lg: '0' }}
          w="100vw"
          h={{ base: 'auto', lg: '24' }}
          zIndex="overlay"
        >
          <Search />
        </Stack>
      </Portal>
      <Map />
    </ChakraProvider>
  )
}
