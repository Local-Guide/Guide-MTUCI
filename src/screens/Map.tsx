import { type Dispatch, type SetStateAction, useState } from 'react'
import l from 'leaflet'
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
  SVGOverlay,
  FeatureGroup,
  Popup,
  Circle,
  Rectangle,
} from 'react-leaflet'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Button,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

import Search from './Search'
import Stairs from './Stairs'
// Styles
import 'leaflet/dist/leaflet.css'
import './leafletStyles.css'

export default function LeafletMap() {
  const popupHead = {
    // textAlign: 'center',
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: 'Inter',
    letterSpacing: '2px',
  }
  const popupText = {
    fontSize: '10px',
    marginTop: '3px',
    fontFamily: 'Inter',
  }
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
      <Search />
      <Stairs />
      <TileLayer
        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        url={`${process.env.PUBLIC_URL}/imgs/{z}/{x}-{y}.png`}
        // url="https://map.aviapark.com/tiles/1@2x/{z}/{x}/{y}.png"
        maxZoom={zoom + 1}
        minZoom={zoom - 1}
      />

      <Rectangle
        bounds={[
          [-258.5, 538],
          [-288.5, 523.3],
        ]}
      >
        <Popup>
          <div style={popupHead}>Кафе-бар</div>
          <div style={popupText}>
            Время работы:
            <br />с 12:00 до 18:00
          </div>
        </Popup>
      </Rectangle>
      {/* </FeatureGroup> */}

      <Popover>
        {/* PopoverTrigger открывает содержимое всплывающего окна. Это должен быть интерактивный элемент, такой как «кнопка» или «а». */}
        <PopoverTrigger>
          <Button>
            {/* <SVGOverlay attributes={{ stroke: 'pink' }} bounds={bounds}>
              <rect x="0" y="0" width="100%" height="100%" fill="none" />
              <circle r="5" cx="10" cy="10" fill="red" />
              <text x="50%" y="50%" stroke="white">
                xxx
              </text>
            </SVGOverlay> */}
            тык сюда
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          {/* PopoverArrow — это элемент, который используется в качестве ссылки для позиционирования всплывающего окна. */}
          <PopoverArrow />
          {/* PopoverHeader — это доступный заголовок или метка для содержимого всплывающего окна, и он сначала объявляется программами чтения с экрана. */}
          <PopoverHeader>Кафешка</PopoverHeader>
          <PopoverCloseButton />
          {/* PopoverBody — основная область содержимого всплывающего окна. Должен содержать хотя бы один интерактивный элемент. */}
          <PopoverBody>
            <Button colorScheme="blue">Тут можно пожрать</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>

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
