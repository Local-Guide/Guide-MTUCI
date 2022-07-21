import { Image } from '@chakra-ui/react'
import logo from '../assets/imgs/logo.svg'

export default function Logo() {
  return (
    <Image
      src={logo}
      opacity="0.6"
      position="absolute"
      zIndex="9999"
      w="7em"
      ml="9em"
      mt="0.8em"
    />
  )
}