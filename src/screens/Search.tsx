import { Box, Center, Icon } from '@chakra-ui/react'

import {
  chakraComponents,
  Select,
  type ChakraStylesConfig,
} from 'chakra-react-select'

import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Rectangle } from 'react-leaflet'

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

const groupedOptions = [
  { label: 'Этаж 0', options: floor0 },
  { label: 'Этаж 1', options: floor1 },
  { label: 'Этаж 2', options: [...floor2, ...contentFloor2] },
  { label: 'Этаж 3', options: [...floor3, ...contentFloor3] },
  { label: 'Этаж 4', options: [...floor4, ...contentFloor4] },
  { label: 'Этаж 5', options: [...floor5, ...contentFloor5] },
]

interface AwesomeSelectProps {
  onChange: (newValue: typeof groupedOptions[0] | null) => void
}

function AwesomeSelect({ onChange }: AwesomeSelectProps) {
  const disableRightButton = {
    /* eslint-disable */
    DropdownIndicator: (props: any) => (
      <chakraComponents.DropdownIndicator {...props}>
        <Icon as={SearchIcon} h={4} />
      </chakraComponents.DropdownIndicator>
    ) /* eslint-enable */,
    IndicatorSeparator: () => null,
  }
  const chakraStyles: ChakraStylesConfig = {
    menuList: (provided) => ({
      ...provided,
      p: 0,
      borderColor: 'gray.700',
      bg: '#2d3748ab',
    }),
    groupHeading: (provided) => ({
      ...provided,
      bg: '#232c3bab',
      color: '#bfc2c7',
      fontSize: '18',
    }),
    option: (provided, state) => ({
      ...provided,
      bg: '#2d3748ab',
      color: 'gray.300',
      _active: { bg: 'white' },
      _hover: { bg: 'gray.600' },
    }),
    container: (provided) => ({
      ...provided,
      mt: { base: '0px', lg: '10px' },
      bg: '#2d3748ab',
      borderRadius: '17px',
      w: { base: '70vw', lg: '60vw' },
      boxShadow: '0px 0px 35px 9px #2d3748ab',
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: '17px',
      border: 'none',
      fontFamily: 'Inter',
      color: '#bfc2c7',
    }),
    // dropdownIndicator: (provided) => ({
    //   ...provided,
    //   bg: 'none',
    // }),
    dropdownIndicator: (provided, { selectProps: { menuIsOpen } }) => ({
      ...provided,
      opacity: '0.5',
      bg: 'none',
      w: '30px',
      mr: '10px',
      borderRadius: '10px',
      _hover: { h: '84%', bg: '#1e222b30', opacity: '1' },
      '> svg': {
        transitionDuration: 'normal',
        transform: `rotate(${menuIsOpen ? -180 : 0}deg)`,
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      opacity: '0.5',
      bg: 'none',
      w: '30px',
      borderRadius: '10px',
      _hover: { bg: '#1e222b30', opacity: '1' },
    }),
  }
  return (
    <Select
      chakraStyles={chakraStyles}
      isClearable
      options={groupedOptions}
      components={{
        ...disableRightButton,
      }}
      placeholder="Поиск..."
      noOptionsMessage={() => 'Ничего не нашлось 😔'}
      // @ts-ignore
      onChange={onChange}
    />
  )
}

export default function Search({ setActiveFloor }: any) {
  // const [value, setValue] = useState<string>('')

  const [selectedValue, setSelectedValue] = useState<{
    text: string
    bounds: any
  }>()
  const handleUpdateSelect: AwesomeSelectProps['onChange'] = (newValue) => {
    if (newValue) {
      setSelectedValue({
        text: newValue.label,
        bounds: (newValue as any).bounds,
      })
      setActiveFloor((newValue as any).floor)
    } else {
      setSelectedValue(undefined)
    }
  }

  return (
    <Center w="100%">
      <AwesomeSelect onChange={handleUpdateSelect} />
      {selectedValue && (
        <Box>
          Вы выбрали:{' '}
          <Box as="b">
            {selectedValue.bounds}
            {/* вот тут всё ломается */}
            {/* <Rectangle bounds={selectedValue.bounds} /> */}
          </Box>
        </Box>
      )}
    </Center>
  )
}
