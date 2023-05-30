import { Box } from '@chakra-ui/react'
import { Popup, Rectangle } from 'react-leaflet'

export default function PopupsHeading({
  bounds,
  header,
  floor,
  checkFloor,
}: any) {
  const popupHead = {
    fontWeight: '500',
    fontSize: '15px',
    marginLeft: '10px',
    marginRight: '10px',
  }
  if (floor === checkFloor) {
    return (
      <Rectangle bounds={bounds}>
        <Popup minWidth={70}>
          <Box textAlign="center" style={popupHead}>
            {header}
          </Box>
        </Popup>
      </Rectangle>
    )
  }
  return null
}
