import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import l from 'leaflet'

import PopupsHeading from './PopupsOnlyHeading'

import floor0 from '../assets/popups/floor0.json'
import floor1 from '../assets/popups/floor1.json'
import floor2 from '../assets/popups/floor2.json'
import floor3 from '../assets/popups/floor3.json'
import floor4 from '../assets/popups/floor4.json'
import floor5 from '../assets/popups/floor5.json'

interface FloorsMenuProps {
  activeFloor: number
}

export default function FloorsMenu({ activeFloor }: FloorsMenuProps) {
  const map = useMap()
  const allFloor = [
    ...floor0,
    ...floor1,
    ...floor2,
    ...floor3,
    ...floor4,
    ...floor5,
  ]

  useEffect(() => {
    switch (activeFloor) {
      case 0:
        map.setView(new l.LatLng(-300, 0), 0)
        break
      case 1:
        map.setView(new l.LatLng(0, 0), 0)
        break
      case 2:
        map.setView(new l.LatLng(0, 0), 2)
        break
      case 3:
        map.setView(new l.LatLng(0, 0), 2)
        break
      case 4:
        map.setView(new l.LatLng(0, 0), 2)
        break
      case 5:
        map.setView(new l.LatLng(0, 0), 2)
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
    </>
  )
}
