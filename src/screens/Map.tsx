import { type Dispatch, type SetStateAction, useState } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import l from 'leaflet'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'

// Styles
import 'leaflet/dist/leaflet.css'
import './leafletStyles.css'

export default function LeafletMap() {
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 533,
    y: -253,
  })
  const [zoom, setZoom] = useState<number>(1)
  return (
    <Stack
      boxSize="100%"
      align="center"
      justify="center"
      px={{ base: 2, lg: 48 }}
      py={{ base: 40, lg: 32 }}
    >
      <Text>
        Center x: {center.x}, y: {center.y}
      </Text>
      <Text>Zoom {zoom}</Text>
      <Box boxSize="100%">
        <MapContainer
          crs={l.CRS.Simple}
          center={[center.y, center.x]}
          zoom={zoom}
          style={{ width: '100%', height: '100%' }}
          attributionControl={false}
        >
          <MapInfo setZoom={setZoom} setCenter={setCenter} />
          <TileLayer
            // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            url={`${process.env.PUBLIC_URL}/imgs/{z}/{x}-{y}.png`}
            // url="https://map.aviapark.com/tiles/1@2x/{z}/{x}/{y}.png"
            maxZoom={zoom + 1}
            minZoom={zoom - 1}
          />
        </MapContainer>
      </Box>
    </Stack>
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
