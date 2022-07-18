import { Box } from '@chakra-ui/react'
import { Popup, Rectangle } from 'react-leaflet'

export default function Popups({
  bounds,
  header,
  content1,
  content2,
  additionalСontent,
  floor,
  checkFloor,
}: any) {
  const popupHead = {
    fontWeight: '700',
    fontSize: '14px',
    letterSpacing: '2px',
  }
  const popupText = {
    fontSize: '10px',
    marginTop: '3px',
  }

  if (floor === checkFloor) {
    return (
      <Rectangle bounds={bounds}>
        <Popup minWidth={160}>
          <Box textAlign="center" style={popupHead}>
            {header}
          </Box>
          <Box style={popupText}>
            {content1}
            <br />
            {content2}
            <br />
            {additionalСontent}
          </Box>
        </Popup>
      </Rectangle>
    )
  }
  return null
}
