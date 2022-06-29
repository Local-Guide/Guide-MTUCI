import {
  InputGroup,
  Flex,
  Center,
  InputRightElement,
  Input,
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

import '@fontsource/inter'

export default function Search() {
  return (
    <Center>
      {' '}
      <Flex w="60vw">
        <InputGroup>
          <Input
            bg="gray.700"
            opacity="0.8"
            borderRadius="17px"
            placeholder="Поиск..."
            _placeholder={{
              color: 'white',
              opacity: 0.6,
              fontFamily: 'Inter',
              fontWeight: '700',
            }}
          />
          <InputRightElement>
            <SearchIcon color="white" opacity="0.6" mr="4" />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Center>
  )
}
