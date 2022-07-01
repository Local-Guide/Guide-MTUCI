import {
  InputGroup,
  Flex,
  Center,
  InputRightElement,
  Input,
  Icon,
} from '@chakra-ui/react'

import { RiSearchLine } from 'react-icons/ri'

import '@fontsource/inter'

export default function Search() {
  return (
    <Center>
      {' '}
      <Flex w="60vw">
        <InputGroup mt="10" position="relative" zIndex="999">
          <Input
            bg="gray.700"
            w="60vw"
            opacity="0.8"
            borderRadius="17px"
            color="white"
            fontWeight="700"
            filter="drop-shadow(9px 7px 20px rgba(0, 0, 0, 0.4))"
            border="none"
            placeholder="Поиск..."
            _placeholder={{
              color: 'white',
              opacity: 0.6,
              fontFamily: 'Inter',
              fontWeight: '700',
            }}
          />
          <InputRightElement>
            <Icon
              position="absolute"
              top="10px"
              zIndex="999"
              color="white"
              opacity="0.6"
              mr="4"
              as={RiSearchLine}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Center>
  )
}
