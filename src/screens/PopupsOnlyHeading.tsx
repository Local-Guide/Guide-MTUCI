import { Box } from '@chakra-ui/react'
import { Popup, Rectangle } from 'react-leaflet'

export default function PopupsHeading({ bounds, header }: any) {
  const popupHead = {
    fontWeight: '700',
    fontSize: '14px',
    letterSpacing: '2px',
    marginLeft: '10px',
    marginRight: '10px',
  }
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