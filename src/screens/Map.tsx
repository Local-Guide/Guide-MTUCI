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

import Search from './Search'
import Stairs from './Stairs'
import Popups from './Popups'
import PopupsHeading from './PopupsOnlyHeading'

// Styles
import 'leaflet/dist/leaflet.css'
import './leafletStyles.css'

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

  const contentsPopups = [
    {
      bounds: [
        [-141.2, 513.2],
        [-174, 498],
      ],
      header: 'Кафе-бар',
      content1: 'Время работы:',
      content2: 'с 12:00 до 18:00',
    },
    {
      bounds: [
        [-82.5, 513.3],
        [-115.1, 497.5],
      ],
      header: 'Кафе-бистро',
      content1: 'Время работы:',
      content2: 'с 12:00 до 18:00',
    },
    {
      bounds: [
        [-82.5, 560],
        [-115.1, 546.5],
      ],
      header: 'Деканат “ИТ”',
      content1: 'Телефоны:',
      content2: '+7 (495) 925-10-67',
      additionalСontent: '+7 (495) 925-10-67',
    },
    {
      bounds: [
        [-90.5, 150],
        [-118, 136.5],
      ],
      header: 'Канцтовары',
      content1: 'Время работы:',
      content2: 'Пн-Пт с 9:00 до 17:00',
      additionalСontent: 'Сб-Вс выходной',
    },
  ]
  const contentsPopupsHeading = [
    {
      bounds: [
        [-82.5, 396.5],
        [-115.5, 412],
      ],
      header: 'Ректор университета',
    },
    {
      bounds: [
        [-83.5, 310],
        [-112, 273],
      ],
      header: 'Женский туалет',
    },
    {
      bounds: [
        [-83.5, 271.5],
        [-112, 230],
      ],
      header: 'Мужской туалет',
    },
    {
      bounds: [
        [-83.5, 188.5],
        [-112, 151],
      ],
      header: 'Тренажерный зал',
    },
    {
      bounds: [
        [-170, 188.5],
        [-142, 151],
      ],
      header: 'Щитовая',
    },
    {
      bounds: [
        [-87.5, 321.5],
        [-114, 282],
      ],
      header: 'Туалет',
    },
    {
      bounds: [
        [-90.5, 347],
        [-117.5, 361],
      ],
      header: 'Туалет',
    },
    {
      bounds: [
        [-90.5, 232],
        [-117.5, 217.5],
      ],
      header: 'Туалет',
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
      <Search />
      <Stairs setActiveFloor={setActiveFloor} />
      {contentsPopups.map((e) => (
        <Popups
          key={e}
          bounds={e.bounds}
          header={e.header}
          content1={e.content1}
          content2={e.content2}
          additionalСontent={e.additionalСontent}
        />
      ))}
      {contentsPopupsHeading.map((e) => (
        <PopupsHeading key={e} bounds={e.bounds} header={e.header} />
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
