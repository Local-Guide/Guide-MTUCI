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

const Floor2 = require('../assets/popups/Floor2.json')
const contentFloor2 = require('../assets/popups/contentFloor2.json')
const Floor3 = require('../assets/popups/Floor3.json')
const contentFloor3 = require('../assets/popups/contentFloor3.json')

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
  const contentsPopupsFloorHeading0 = [
    {
      bounds: [
        [-83.5, 310],
        [-112, 273],
      ],
      header: 'Женский туалет',
      floor: '0',
    },
    {
      bounds: [
        [-83.5, 271.5],
        [-112, 230],
      ],
      header: 'Мужской туалет',
      floor: '0',
    },
    {
      bounds: [
        [-83.5, 188.5],
        [-112, 151],
      ],
      header: 'Тренажерный зал',
      floor: '0',
    },
    {
      bounds: [
        [-170, 188.5],
        [-142, 151],
      ],
      header: 'Щитовая',
      floor: '0',
    },
  ]
  const contentsPopupsFloorHeading1 = [
    {
      bounds: [
        [-87.5, 321.5],
        [-114, 282],
      ],
      header: 'Туалет',
      floor: '1',
    },
  ]
  const contentsPopupsFloorHeading4 = [
    {
      bounds: [
        [-91.9, 111.5],
        [-124.1, 125],
      ],
      header: 'Туалет',
      floor: '4',
    },
    {
      bounds: [
        [-91.9, 323],
        [-124.4, 337],
      ],
      header: 'Туалет',
      floor: '4',
    },
    {
      bounds: [
        [-91.9, 522],
        [-124.4, 535],
      ],
      header: 'Туалет',
      floor: '4',
    },
    {
      bounds: [
        [-91.9, 641.5],
        [-124.4, 653],
      ],
      header: 'Туалет',
      floor: '4',
    },
  ]
  const contentsPopupsFloorHeading5 = [
    {
      bounds: [
        [-105.5, 70.5],
        [-124.5, 83],
      ],
      header: 'Туалет',
      floor: '5',
    },
    {
      bounds: [
        [-105.5, 223],
        [-124.5, 237.5],
      ],
      header: 'Туалет',
      floor: '5',
    },
    {
      bounds: [
        [-105.5, 344],
        [-124.5, 353.5],
      ],
      header: 'Туалет',
      floor: '5',
    },
    {
      bounds: [
        [-105.5, 438],
        [-124.5, 449],
      ],
      header: 'Туалет',
      floor: '5',
    },
    {
      bounds: [
        [-105.5, 450],
        [-160.5, 468],
      ],
      header: 'Общественная зона',
      floor: '5',
    },
    {
      bounds: [
        [-105.5, 53.5],
        [-160.5, 69.5],
      ],
      header: 'Общественная зона',
      floor: '5',
    },
  ]

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
      {contentsPopupsFloorHeading0.map((e) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {contentsPopupsFloorHeading1.map((e) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {Floor2.map((e: any) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {Floor3.map((e: any) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {contentsPopupsFloorHeading4.map((e) => (
        <PopupsHeading
          key={e}
          bounds={e.bounds}
          header={e.header}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
      {contentsPopupsFloorHeading5.map((e) => (
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
