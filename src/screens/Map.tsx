import {
  type Dispatch,
  type SetStateAction,
  useState,
  useEffect,
  useRef,
} from 'react'
import { Box, Flex } from '@chakra-ui/react'
import l from 'leaflet'
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
} from 'react-leaflet'

import Search from './Search'
import Stairs from './Stairs'
import Popups from './Popups'
import PopupsHeading from './PopupsOnlyHeading'
import Logo from './Logo'

// Styles
import 'leaflet/dist/leaflet.css'
import './leafletStyles.css'

import floor0 from '../assets/popups/floor0.json'
import floor1 from '../assets/popups/floor1.json'
import floor2 from '../assets/popups/floor2.json'
import floor3 from '../assets/popups/floor3.json'
import floor4 from '../assets/popups/floor4.json'
import floor5 from '../assets/popups/floor5.json'
import contentFloor2 from '../assets/popups/contentFloor2.json'
import contentFloor3 from '../assets/popups/contentFloor3.json'

export default function LeafletMap() {
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 533,
    y: -253,
  })
  // const [maxBound, setMaxBound] = useState<[x: number, y: number]>([
  //   -253,
  //   533
  // ])
  // const bounds: [[number, number]] = [[center.x, center.y]]

  const [zoom, setZoom] = useState<number>(1)

  // const urlFloors = {
  //   1: `${process.env.PUBLIC_URL}/imgs/1/{z}/{x}-{y}.png`,
  //   3: `${process.env.PUBLIC_URL}/imgs/3/{z}/{x}-{y}.png`,
  // }

  const [activeFloor, setActiveFloor] = useState<string>('0')

  const ref = useRef<any>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.setUrl(
        `${process.env.PUBLIC_URL}/imgs/${activeFloor}/{z}/{x}-{y}.png`
      )
    }
  }, [activeFloor])

  return (
    <MapContainer
      // maxBounds={maxBound}
      crs={l.CRS.Simple}
      center={[center.y, center.x]}
      zoom={zoom}
      className="map"
      attributionControl={false}
      zoomControl={false}
    >
      <MapInfo setZoom={setZoom} setCenter={setCenter} />
      <Flex>
        <Box flex={{ base: '4.3', lg: '0.4' }}>
          <Logo />
        </Box>
        <Box flex={{ base: '17', lg: '25' }}>
          <Search />
        </Box>
      </Flex>
      <Stairs setActiveFloor={setActiveFloor} />
      {floor0.map((e) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {floor1.map((e) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {contentFloor2.map((e: any) => (
        <Popups
          key={e}
          bounds={e.bounds}
          header={e.header}
          content1={e.content1}
          content2={e.content2}
          additionalСontent={e.additionalСontent}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {contentFloor3.map((e: any) => (
        <Popups
          key={e}
          bounds={e.bounds}
          header={e.header}
          content1={e.content1}
          content2={e.content2}
          additionalСontent={e.additionalСontent}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {floor2.map((e: any) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {floor3.map((e: any) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {floor4.map((e: any) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {floor5.map((e: any) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      <TileLayer
        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        ref={ref}
        url={`${process.env.PUBLIC_URL}/imgs/${activeFloor}/{z}/{x}-{y}.png`}
        // url="https://map.aviapark.com/tiles/1@2x/{z}/{x}/{y}.png"
        maxZoom={zoom + 1}
        minZoom={zoom - 1}
      />
      <ZoomControl zoomInTitle="Inrease" zoomOutTitle="Decrease" />
    </MapContainer>
  )
}

function MapInfo({ setCenter, setZoom }: MapInfoProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = useMapEvents({
    move: () => {
      // console.warn('location found:', map.getCenter())
      setZoom(map.getZoom())
      setCenter({ x: map.getCenter().lng, y: map.getCenter().lat })
    },
  })
  return null
}

// Types
interface MapInfoProps {
  setZoom: Dispatch<number>
  setCenter: Dispatch<SetStateAction<{ x: number; y: number }>>
}
