import { Box, Flex } from '@chakra-ui/react'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'

// styles
import 'leaflet/dist/leaflet.css'

export default function LeafletMap() {
  return (
    <Flex
      boxSize="100%"
      align="center"
      justify="center"
      px={{ base: 2, lg: 48 }}
      py={{ base: 40, lg: 32 }}
    >
      <Box boxSize="100%">
        <MapContainer
          center={[4.5, 6]}
          zoom={9}
          style={{ width: '100%', height: '100%' }}
          attributionControl={false}
        >
          <MapInfo />
          <TileLayer
            // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            url="https://map.aviapark.com/tiles/1@2x/{z}/{x}/{y}.png"
            maxZoom={11}
            minZoom={8}
          />
        </MapContainer>
      </Box>
    </Flex>
  )
}

function MapInfo() {
  const map = useMapEvents({
    move: () => {
      // console.warn('location found:', map.getZoom())
    },
  })
  return null
}
