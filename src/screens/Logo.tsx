import { Image } from '@chakra-ui/react'
import logo from '../assets/imgs/logo.svg'

export default function Logo() {
  return <Image src={logo} opacity="0.6" w={{ base: '4em', lg: '6em' }} />
}
