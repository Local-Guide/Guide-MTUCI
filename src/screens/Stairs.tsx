import { Button, Flex, Box, Text, Center } from '@chakra-ui/react'

export default function Stairs() {
  return (
    <Center>
      <Box
        bg="gray.700"
        opacity="0.8"
        borderRadius="17px"
        maxW={{ base: '50px', lg: '71px' }}
        maxH={{ base: '300px', lg: '400px' }}
        position="absolute"
        right="2vw"
        top={{ base: '25%', lg: '25%' }}
        zIndex="999"
      >
        <Flex
          flexDirection={{ base: 'column', lg: 'column' }}
          alignItems="center"
          gap="1"
          p="2"
          fontSize={{ base: 'md', lg: 'lg' }}
        >
          <Text color="rgba(255,255,255,0.7)">Этаж</Text>
          <Button
            size="xl"
            color="rgba(255,255,255,0.7)"
            mx="5px"
            my={{ base: '0px', lg: '4px' }}
            h={{ base: '30px', lg: '40px' }}
            w={{ base: '30px', lg: '40px' }}
            bg="none"
            border="2px solid #4A5568"
            borderRadius="10px"
            _hover={{
              bg: 'rgba(229, 229, 229, 0.2)',
            }}
            _active={{
              bg: 'rgba(129, 129, 129, 0.2)',
            }}
          >
            0
          </Button>
          <Button
            size="xl"
            color="rgba(255,255,255,0.7)"
            mx="5px"
            my={{ base: '0px', lg: '4px' }}
            h={{ base: '30px', lg: '40px' }}
            w={{ base: '30px', lg: '40px' }}
            bg="none"
            border="2px solid #4A5568"
            borderRadius="10px"
            _hover={{
              bg: 'rgba(229, 229, 229, 0.2)',
            }}
            _active={{
              bg: 'rgba(129, 129, 129, 0.2)',
            }}
          >
            1
          </Button>
          <Button
            size="xl"
            color="rgba(255,255,255,0.7)"
            my={{ base: '0px', lg: '4px' }}
            mx="5px"
            h={{ base: '30px', lg: '40px' }}
            w={{ base: '30px', lg: '40px' }}
            bg="none"
            border="2px solid #4A5568"
            borderRadius="10px"
            _hover={{
              bg: 'rgba(229, 229, 229, 0.2)',
            }}
            _active={{
              bg: 'rgba(129, 129, 129, 0.2)',
            }}
          >
            2
          </Button>
          <Button
            size="xl"
            color="rgba(255,255,255,0.7)"
            my={{ base: '0px', lg: '4px' }}
            mx="5px"
            h={{ base: '30px', lg: '40px' }}
            w={{ base: '30px', lg: '40px' }}
            bg="none"
            border="2px solid #4A5568"
            borderRadius="10px"
            _hover={{
              bg: 'rgba(229, 229, 229, 0.2)',
            }}
            _active={{
              bg: 'rgba(129, 129, 129, 0.2)',
            }}
          >
            3
          </Button>
          <Button
            size="xl"
            color="rgba(255,255,255,0.7)"
            my={{ base: '0px', lg: '4px' }}
            mx="5px"
            h={{ base: '30px', lg: '40px' }}
            w={{ base: '30px', lg: '40px' }}
            bg="none"
            border="2px solid #4A5568"
            borderRadius="10px"
            _hover={{
              bg: 'rgba(229, 229, 229, 0.2)',
            }}
            _active={{
              bg: 'rgba(129, 129, 129, 0.2)',
            }}
          >
            4
          </Button>
          <Button
            size="xl"
            color="rgba(255,255,255,0.7)"
            my={{ base: '0px', lg: '4px' }}
            mx="5px"
            h={{ base: '30px', lg: '40px' }}
            w={{ base: '30px', lg: '40px' }}
            bg="none"
            border="2px solid #4A5568"
            borderRadius="10px"
            _hover={{
              bg: 'rgba(229, 229, 229, 0.2)',
            }}
            _active={{
              bg: 'rgba(129, 129, 129, 0.2)',
            }}
          >
            5
          </Button>
        </Flex>
      </Box>
    </Center>
  )
}
