import {
  InputGroup,
  Flex,
  Center,
  InputRightElement,
  Input,
} from '@chakra-ui/react'

import './autocomplete.css'

import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'

import '@fontsource/inter'

export default function Search() {
  const [value, setValue] = useState<string>('')
  const [loopOpacity, setLoopOpacity] = useState<string>('0.3')

  type Item = {
    id: number
    name: string
  }

  const items: Item[] = [
    { id: 300, name: '300' },
    { id: 301, name: '301' },
    { id: 302, name: '302' },
    { id: 303, name: '303' },
    { id: 304, name: '304' },
    { id: 305, name: '305' },
    { id: 306, name: '306' },
    { id: 307, name: '307' },
    { id: 308, name: '308' },
    { id: 309, name: '309' },
    { id: 310, name: '310' },
    { id: 311, name: '311' },
    { id: 1, name: 'Туалет' },
  ]

  const fitlerCabinets = items.filter((item) =>
    item.name.toLowerCase().startsWith(value.toLowerCase())
  )

  return (
    <Center>
      {' '}
      <Flex
        w={{ base: '70vw', lg: '60vw' }}
        mr="3em"
        direction="column"
        position="relative"
        zIndex="999"
      >
        <Flex>
          <InputGroup mt="10">
            <Input
              onChange={(event: any) => setValue(event.target.value)}
              h={{ base: '2.4em', lg: '2.5rem' }}
              bg="gray.700"
              w={{ base: '85vw', lg: '60vw' }}
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
            <InputRightElement h="-webkit-fill-available">
              <SearchIcon
                color="white"
                opacity={loopOpacity}
                mr={{ base: '2', lg: '4' }}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <ul className="autocomplete">
          {value
            ? fitlerCabinets.map((item, index) => (
                <li className="autocompleteItem" key={item.id}>
                  {item.name}
                </li>
              ))
            : null}
        </ul>
      </Flex>
    </Center>
  )
}
