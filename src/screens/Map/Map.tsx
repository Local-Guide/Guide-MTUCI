import { MapContainer, TileLayer, Popup, LayerGroup, Circle, FeatureGroup, Rectangle } from 'react-leaflet'

export default function Map() {
    const fillBlueOptions = { fillColor: 'blue' }
    const fillRedOptions = { fillColor: 'red' }
    const greenOptions = { color: 'green', fillColor: 'green' }
    const purpleOptions = { color: 'purple' }
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
                <Circle center={[51.505, -0.09]} pathOptions={fillBlueOptions} radius={200} />
                <Circle
                    center={[51.505, -0.09]}
                    pathOptions={fillRedOptions}
                    radius={100}
                    stroke={false}
                />
                <LayerGroup>
                    <Circle
                    center={[51.51, -0.08]}
                    pathOptions={greenOptions}
                    radius={100}
                    />
                </LayerGroup>
            </LayerGroup>
            <FeatureGroup pathOptions={purpleOptions}>
                <Popup>Popup in FeatureGroup</Popup>
                <Circle center={[51.51, -0.06]} radius={200} />
                <Rectangle bounds={[
                    [51.49, -0.08],
                    [51.5, -0.06],
                ]} />
            </FeatureGroup>
        </MapContainer>
    )
}
