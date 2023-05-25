import { Box, Button, Flex, Text } from '@chakra-ui/react'

function Stairs({ setActiveFloor }: any) {
  const stairs = [0, 1, 2, 3, 4, 5]
  return (
    <Box
      bg="gray.700"
      opacity="0.8"
      borderRadius="5"
      width="71px"
      height="311px"
      filter="drop-shadow(9px 7px 20px rgba(0, 0, 0, 0.4))"
      position="absolute"
      right="16px"
      top="25%"
      zIndex="overlay"
    >
      <Flex
        flexDirection="column"
        textAlign="center"
        gap="1"
        p="2"
        fontSize="lg"
      >
        <Text color="rgba(255,255,255,0.7)">Этаж</Text>
        {stairs.map((item) => (
          <Button
            color="rgba(255,255,255,0.7)"
            ml="auto"
            mr="auto"
            h="40px"
            w="40px"
            bg="none"
            border="2px solid #4A5568"
            borderRadius="2px"
            _hover={{
              bg: 'rgba(229, 229, 229, 0.2)',
            }}
            _active={{
              bg: 'rgba(129, 129, 129, 0.2)',
            }}
            onClick={() => {
              setActiveFloor(`${item}`)
            }}
          >
            {item}
          </Button>
        ))}
      </Flex>
    </Box>
  )
}

export default Stairs
