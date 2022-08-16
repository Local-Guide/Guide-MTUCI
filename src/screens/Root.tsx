import { useState } from 'react'
import { ChakraProvider, Portal, Stack, Flex, Spacer } from '@chakra-ui/react'

// Screens
import Map from './Map'
import Search from './Search'
import Logo from './Logo'

export default function Root() {
  const [activeFloor, setActiveFloor] = useState<string>('0')

  return (
    <ChakraProvider>
      <Portal>
        <Stack
          spacing={{ base: '4', lg: '0' }}
          direction={{ base: 'column', lg: 'row' }}
          pos="absolute"
          left={0}
          top={{ base: '2', lg: '0' }}
          w="100vw"
          h={{ base: 'auto', lg: '24' }}
          zIndex="overlay"
        >
          <Flex flex="1" align="center" justify="center">
            <Logo />
          </Flex>
          <Flex flex="1" align="center" justify="center">
            <Search setActiveFloor={setActiveFloor} />
          </Flex>
          <Spacer display={{ base: 'none', lg: 'block' }} />
        </Stack>
      </Portal>
      <Map activeFloor={activeFloor} setActiveFloor={setActiveFloor} />
    </ChakraProvider>
  )
}
