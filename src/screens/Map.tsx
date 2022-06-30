import { type Dispatch, type SetStateAction, useState, useEffect } from 'react'
import l from 'leaflet'
import 'leaflet.heat'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'

// Styles
import 'leaflet/dist/leaflet.css'
import './leafletStyles.css'

export default function LeafletMap() {
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 257,
    y: -87,
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
        url={`${process.env.PUBLIC_URL}/imgs/{z}/{x}-{y}.png`}
        maxZoom={zoom}
        minZoom={zoom}
      />
    </MapContainer>
  )
}

function MapInfo({ setCenter, setZoom }: MapInfoProps) {
  const map = useMapEvents({
    move: () => {
      // eslint-disable-next-line no-console
      // console.warn('map center:', map.getCenter())
      setZoom(map.getZoom())
      setCenter({ x: map.getCenter().lng, y: map.getCenter().lat })
    },
  })

  // Тепловая карта
  useEffect(() => {
    // @ts-ignore
    L.heatLayer([
      [-129, 86, 0.2],
      [-104, 92, 0.3],
      [-86, 83, 0.5],
      [-173, 84, 0.1],
      [-88, 106, 0.4],
    ]).addTo(map)
  }, [map])
  return null
}

// Types
interface MapInfoProps {
  setZoom: Dispatch<number>
  setCenter: Dispatch<SetStateAction<{ x: number; y: number }>>
}
