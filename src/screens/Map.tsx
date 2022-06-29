import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import l from 'leaflet'
import 'leaflet.heat'
import { MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet'

// Styles
import 'leaflet/dist/leaflet.css'
import './leafletStyles.css'

export default function LeafletMap() {
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 538,
    y: -242,
  })
  const [zoom, setZoom] = useState<number>(1)

  return (
    <MapContainer
      crs={l.CRS.Simple}
      center={[center.y, center.x]}
      zoom={zoom}
      className="map"
      attributionControl={false}
    >
      <MapInfo setZoom={setZoom} setCenter={setCenter} />
      <TileLayer
        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        url={`${process.env.PUBLIC_URL}/imgs/{z}/{x}-{y}.png`}
        // url="https://map.aviapark.com/tiles/1@2x/{z}/{x}/{y}.png"
        maxZoom={zoom}
        minZoom={zoom}
      />
    </MapContainer>
  )
}

function MapInfo({ setCenter, setZoom }: MapInfoProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = useMapEvents({
    move: () => {
      console.warn('location found:', map.getCenter())
      setZoom(map.getZoom())
      setCenter({ x: map.getCenter().lng, y: map.getCenter().lat })
    },
  })

  // Очень странная хрень
  const map2 = useMap()
  useEffect(() => {
    // @ts-ignore
    L.heatLayer([
      [-129, 86, 0.2],
      [-104, 92, 0.2],
      [-86, 83, 0.2],
      [-173, 84, 0.2],
      [-88, 106, 0.9],
    ]).addTo(map2)
  }, [])
  return null
}

// Types
interface MapInfoProps {
  setZoom: Dispatch<number>
  setCenter: Dispatch<SetStateAction<{ x: number; y: number }>>
}
