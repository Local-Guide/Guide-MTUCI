import {
  InputGroup,
  Flex,
  Center,
  InputRightElement,
  Input,
} from '@chakra-ui/react'

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'

import '@fontsource/inter'

export default function Search() {
  const [loopOpacity, setLoopOpacity] = useState<string>('0.3')

  type Item = {
    id: number
    name: string
  }

  const items: Item[] = [
    { id: 301, name: '301' },
    { id: 302, name: '302' },
  ]

  // const handleOnSearch = (string: any, results: any) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results)
  // }

  // const handleOnHover = (result: any) => {
  //   // the item hovered
  //   console.log(result)
  // }

  // const handleOnSelect = (item: any) => {
  //   // the item selected
  //   console.log(item)
  // }

  // const handleOnFocus = () => {
  //   console.log('Focused')
  // }

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>
          id: {item.id}
        </span>
        <span style={{ display: 'block', textAlign: 'left' }}>
          name: {item.name}
        </span>
      </>
    )
  }

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
            onInput={() => setLoopOpacity('1')}
          />
          <ReactSearchAutocomplete<Item>
            items={items}
            // onSearch={handleOnSearch}
            // onHover={handleOnHover}
            // onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
          <InputRightElement h="-webkit-fill-available">
            <SearchIcon
              color="white"
              opacity={loopOpacity}
              mr={{ base: '2', lg: '4' }}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Center>
  )
}
