import {
  InputGroup,
  Flex,
  Center,
  InputRightElement,
  Input,
  ListItem,
  UnorderedList,
  chakra,
} from '@chakra-ui/react'
import { Autocomplete, Option } from 'chakra-ui-simple-autocomplete'

import './autocomplete.css'

import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'

import '@fontsource/inter'

export default function Search({ setActiveFloor }: any) {
  const [value, setValue] = useState<string>('')
  const [loopOpacity, setLoopOpacity] = useState<string>('0.3')

  type Item = {
    id: number
    name: string
  }

  const items: Item[] = [
    { id: 0, name: 'Тренажерный зал' },
    { id: 1, name: 'Женский туалет (0 этаж)' },
    { id: 2, name: 'Мужской туалет (0 этаж)' },
    { id: 3, name: 'Щитовая' },
    { id: 130, name: 'Туалет (1 этаж)' },
    { id: 200, name: 'Канцтовары' },
    { id: 201, name: 'Туалет (2 этаж)' },
    { id: 202, name: 'Туалет (2 этаж)' },
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
  ]

  const handleChooseCab = (e: any) => {
    if (e.target.value >= 0 && e.target.value < 100) {
      setActiveFloor('0')
    } else if (e.target.value >= 100 && e.target.value < 200) {
      setActiveFloor('1')
    } else if (e.target.value >= 200 && e.target.value < 300) {
      setActiveFloor('2')
    } else if (e.target.value >= 300 && e.target.value < 400) {
      setActiveFloor('3')
    } else if (e.target.value >= 400 && e.target.value < 500) {
      setActiveFloor('4')
    } else if (e.target.value >= 500 && e.target.value < 600) {
      setActiveFloor('5')
    }
  }

  const handleInputChange = (event: any) => {
    setValue(event.target.value)
  }


  return (
    <Center>
      {' '}
      <Flex w="60vw" direction="column" position="relative" zIndex="999">
        <Flex>
          <InputGroup mt="10">
            <Input
              onChange={handleInputChange}
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
            <InputRightElement h="-webkit-fill-available">
              <SearchIcon
                color="white"
                opacity={loopOpacity}
                mr={{ base: '2', lg: '4' }}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <UnorderedList className="autocomplete" ml="0">
          {value
            ? items.map((item) => (
                <ListItem
                  className="autocompleteItem"
                  value={item.name}
                  onClick={handleChooseCab}
                >
                  {item.name}
                </ListItem>
              ))
            : null}
        </UnorderedList>
      </Flex>
    </Center>
  )
}
