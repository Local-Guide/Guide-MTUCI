import {
  InputGroup,
  Flex,
  Center,
  InputRightElement,
  Input,
} from '@chakra-ui/react'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { SearchIcon } from '@chakra-ui/icons'

import '@fontsource/inter'

export default function Search() {
  return (
    <Center>
      {' '}
      <Flex w="60vw">
        <InputGroup mt="10" position="relative" zIndex="999">
          <Input
            h={{ base: '2em', lg: '2.5rem' }}
            bg="gray.700"
            w="60vw"
            opacity="0.9"
            borderRadius="17px"
            color="white"
            fontWeight="700"
            filter="drop-shadow(9px 7px 20px rgba(0, 0, 0, 0.4))"
            border="none"
            fontSize={{ base: 'revert', lg: 'md' }}
            placeholder="Поиск..."
            _placeholder={{
              color: 'white',
              opacity: 0.3,
              fontFamily: 'Inter',
              fontWeight: '700',
            }}
          />
          <InputRightElement h="-webkit-fill-available">
            <SearchIcon
              color="white"
              opacity="0.3"
              mr={{ base: '2', lg: '4' }}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Center>
  )
}
