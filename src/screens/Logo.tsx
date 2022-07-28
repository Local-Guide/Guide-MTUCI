import { Image } from '@chakra-ui/react'
import logo from '../assets/imgs/logo.svg'

export default function Logo() {
  return (
    <Image
      src={logo}
      opacity="0.6"
      position="absolute"
      zIndex="9999"
      w={{ base: '3em', lg: '7em' }}
      ml={{ base: '1.8em', lg: '9em' }}
      mt={{ base: '3em', lg: '0.8em' }}
    />
  )
}
