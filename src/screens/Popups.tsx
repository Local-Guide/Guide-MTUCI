import { Box } from '@chakra-ui/react'
import { Popup, Rectangle } from 'react-leaflet'

export default function Popups({
  bounds,
  header,
  content1,
  content2,
  additionalСontent,
}: any) {
  const popupHead = {
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: 'Inter',
    letterSpacing: '2px',
  }
  const popupText = {
    fontSize: '10px',
    marginTop: '3px',
    fontFamily: 'Inter',
  }

  return (
    <Rectangle bounds={bounds}>
      <Popup>
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
