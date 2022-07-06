import { type Dispatch, type SetStateAction, useState } from 'react'
import l from 'leaflet'
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
} from 'react-leaflet'
import Search from './Search'
import Stairs from './Stairs'
// Styles
import 'leaflet/dist/leaflet.css'
import './leafletStyles.css'

export default function LeafletMap() {
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 533,
    y: -253,
  })
  // const [maxBound, setMaxBound] = useState<{x: number; y: number}>({
  //   x: -253,
  //   y: 533,
  // })
  // const bounds: [[number, number]] = [[center.x, center.y]]
  const [zoom, setZoom] = useState<number>(1)
  return (
    <MapContainer
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
