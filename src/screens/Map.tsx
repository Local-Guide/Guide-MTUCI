import {
  type Dispatch,
  type SetStateAction,
  useState,
  useEffect,
  useRef,
} from 'react'
import l from 'leaflet'
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
} from 'react-leaflet'

import Stairs from './Stairs'
import Popups from './Popups'

// Styles
import 'leaflet/dist/leaflet.css'
import './leafletStyles.css'

import contentFloor2 from '../assets/popups/contentFloor2.json'
import contentFloor3 from '../assets/popups/contentFloor3.json'
import contentFloor4 from '../assets/popups/contentFloor4.json'
import contentFloor5 from '../assets/popups/contentFloor5.json'
import useActiveFloor from './stores/stairs'
import FloorsMenu from '../components/FloorsMenu'

const allContentFloor = [
  ...contentFloor2,
  ...contentFloor3,
  ...contentFloor4,
  ...contentFloor5,
]

export default function LeafletMap() {
  const activeFloor = useActiveFloor((state) => state.activeFloor)
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 350,
    y: -100,
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
      <Stairs />
      <FloorsMenu activeFloor={activeFloor} />
      {allContentFloor.map((e: any) => (
        <Popups
          key={e.label + e.floor + JSON.stringify(e.bounds)}
          bounds={e.bounds}
          header={e.label}
          content1={e.content1}
          content2={e.content2}
          additionalСontent={e.additionalСontent}
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
