import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import l from 'leaflet'

import useActiveFloor from '../screens/stores/stairs'

import PopupsHeading from './PopupsOnlyHeading'
import Popups from './Popups'

import floor0 from '../assets/popups/floor0.json'
import floor1 from '../assets/popups/floor1.json'
import floor2 from '../assets/popups/floor2.json'
import floor3 from '../assets/popups/floor3.json'
import floor4 from '../assets/popups/floor4.json'
import floor5 from '../assets/popups/floor5.json'

import contentFloor2 from '../assets/popups/contentFloor2.json'
import contentFloor3 from '../assets/popups/contentFloor3.json'
import contentFloor4 from '../assets/popups/contentFloor4.json'
import contentFloor5 from '../assets/popups/contentFloor5.json'

export default function FloorPopups() {
  const { activeFloor } = useActiveFloor()
  const map = useMap()
  const allFloor = [
    ...floor0,
    ...floor1,
    ...floor2,
    ...floor3,
    ...floor4,
    ...floor5,
  ]
  const allContentFloor = [
    ...contentFloor2,
    ...contentFloor3,
    ...contentFloor4,
    ...contentFloor5,
  ]

  useEffect(() => {
    switch (activeFloor) {
      case 0:
        map.setView(new l.LatLng(-140, 390), 1)
        break
      case 1:
        map.setView(new l.LatLng(-140, 390), 1)
        break
      case 2:
        map.setView(new l.LatLng(-140, 260), 1)
        break
      case 3:
        map.setView(new l.LatLng(-140, 510), 1)
        break
      case 4:
        map.setView(new l.LatLng(-140, 380), 1)
        break
      case 5:
        map.setView(new l.LatLng(-140, 260), 1)
        break
    }
  }, [activeFloor, map])

  return (
    <>
      {allFloor.map((e) => (
        <PopupsHeading
          key={e.label + e.floor + JSON.stringify(e.bounds)}
          bounds={e.bounds}
          header={e.label}
          floor={e.floor}
          checkFloor={activeFloor}
        />
      ))}
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
    </>
  )
}
