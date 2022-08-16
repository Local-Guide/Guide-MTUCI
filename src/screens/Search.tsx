import {
  InputGroup,
  Flex,
  Center,
  InputRightElement,
  Input,
  ListItem,
  UnorderedList,
  Box,
  Stack,
  Heading,
  InputLeftElement,
} from '@chakra-ui/react'

import { Select } from 'chakra-react-select'
// import './autocomplete.css'

import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'

import '@fontsource/inter'

import floor0 from '../assets/popups/floor0.json'
import floor1 from '../assets/popups/floor1.json'
import floor2 from '../assets/popups/floor2.json'
import floor3 from '../assets/popups/floor3.json'
import floor4 from '../assets/popups/floor4.json'
import floor5 from '../assets/popups/floor5.json'
import contentFloor2 from '../assets/popups/contentFloor2.json'
import contentFloor3 from '../assets/popups/contentFloor3.json'
import contentFloor4 from '../assets/popups/contentFloor4.json'
import contentFloor5 from '../assets/popups/contentFloor5.json'

const allDate = [
  ...floor0,
  ...floor1,
  ...floor2,
  ...floor3,
  ...floor4,
  ...floor5,
  ...contentFloor2,
  ...contentFloor3,
  ...contentFloor4,
  ...contentFloor5,
]

interface AwesomeSelectProps {
  onChange: (newValue: typeof allDate[0]) => void
}

function AwesomeSelect({ onChange }: AwesomeSelectProps) {
  const disableRightButton = {
    DropdownIndicator: () => null,
    IndicatorSeparator: () => null,
  }
  return (
    <Box
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
    >
      <Select
        isClearable
        options={allDate}
        components={{
          ...disableRightButton,
        }}
        placeholder="Поиск..."
        noOptionsMessage={() => 'Ничего не нашлось 😔'}
        onChange={onChange}
      />
    </Box>
  )
}

export default function Search({ setActiveFloor }: any) {
  const [value, setValue] = useState<string>('')
  const [loopOpacity, setLoopOpacity] = useState<string>('0.3')

  // const allDate = [
  //   ...floor0,
  //   ...floor1,
  //   ...floor2,
  //   ...floor3,
  //   ...floor4,
  //   ...floor5,
  //   ...contentFloor2,
  //   ...contentFloor3,
  //   ...contentFloor4,
  //   ...contentFloor5,
  // ]

  // const handleChooseCab = (e: any) => {
  //   setActiveFloor(e.target.value)
  // }

  // const handleInputChange = (event: any) => {
  //   setValue(event.target.value)
  // }

  // const fitlerallDate = allDate.filter((item) =>
  //   item.label.toLowerCase().startsWith(value.toLowerCase())
  // )

  const [selectedValue, setSelectedValue] = useState<{
    text: string
    floor: string
  }>()
  const handleUpdateSelect: AwesomeSelectProps['onChange'] = (newValue) => {
    console.log(newValue)
    setSelectedValue({ text: newValue.label, floor: newValue.floor })
    setActiveFloor(newValue.floor)
  }

  return (
    <Center>
      <Stack
        mt="10"
        w={{ base: '70vw', lg: '60vw' }}
        mr="3em"
        direction="column"
        position="relative"
        zIndex="999"
      >
        <AwesomeSelect onChange={handleUpdateSelect} />
        {selectedValue && (
          <Heading>
            Вы выбрали:{' '}
            <Heading as="b">
              {selectedValue.text} {selectedValue.floor}
            </Heading>
          </Heading>
        )}
      </Stack>{' '}
    </Center>
  )
}
