import { Button, Flex, Box, Text } from '@chakra-ui/react'

export default function Stairs() {
  return (
    <Box
      bg="#273142;"
      borderRadius="5"
      width="71px"
      height="311px"
      position="absolute"
      right="16px"
      top="25%"
      zIndex="999"
    >
      <Flex flexDirection="column" textAlign="center" gap="1" p="2" fontSize="lg">
        <Text color="rgba(255,255,255,0.7)">
          Этаж
        </Text>
        <Button
          color="rgba(255,255,255,0.7)"
          ml="auto"
          mr="auto"
          h="40px"
          w="40px"
          bg='none'
          border="2px solid #4A5568"
          borderRadius="2px"
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
          color="rgba(255,255,255,0.7)"
          ml="auto"
          mr="auto"
          h="40px"
          w="40px"
          bg='none'
          border="2px solid #4A5568"
          borderRadius="2px"
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
          color="rgba(255,255,255,0.7)"
          ml="auto"
          mr="auto"
          h="40px"
          w="40px"
          bg='none'
          border="2px solid #4A5568"
          borderRadius="2px"
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
          color="rgba(255,255,255,0.7)"
          ml="auto"
          mr="auto"
          h="40px"
          w="40px"
          bg='none'
          border="2px solid #4A5568"
          borderRadius="2px"
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
          color="rgba(255,255,255,0.7)"
          ml="auto"
          mr="auto"
          h="40px"
          w="40px"
          bg='none'
          border="2px solid #4A5568"
          borderRadius="2px"
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
          color="rgba(255,255,255,0.7)"
          ml="auto"
          mr="auto"
          h="40px"
          w="40px"
          bg='none'
          border="2px solid #4A5568"
          borderRadius="2px"
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
  )
}
