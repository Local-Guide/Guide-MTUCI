import { Box } from '@chakra-ui/react'
import { Popup, Rectangle } from 'react-leaflet'

export default function PopupsHeading({ bounds, header }: any) {
  const popupHead = {
    fontWeight: '700',
    fontSize: '14px',
    fontFamily: 'Inter',
    letterSpacing: '2px',
    marginTop: '10px',
    marginLeft: '9px',
  }
  return (
    <Rectangle bounds={bounds}>
      <Popup>
        <Box textAlign="center" style={popupHead}>
          {header}
        </Box>
      </Popup>
    </Rectangle>
  )
}
