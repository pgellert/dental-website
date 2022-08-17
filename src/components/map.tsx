import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngTuple } from 'leaflet'

const PRACTICE_LOCATION: LatLngTuple = [47.666309, 17.6449138]

import { icon } from "leaflet"
import Link from 'next/link'

const ICON = icon({
  iconUrl: "/img/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [13, 41],
  popupAnchor: [0, -41],
})

const Map = () => {
  return (
    <MapContainer center={PRACTICE_LOCATION} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}} closePopupOnClick={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={PRACTICE_LOCATION} icon={ICON} alt="Map marker" >
        <Popup >
          Perident Dental Clinic <br/> 
          <Link href="https://www.google.com/maps/place/Perident+-+Implantol%C3%B3gia+%C3%A9s+eszt%C3%A9tikai+fog%C3%A1szat/@47.666309,17.6427251,17z/data=!3m1!4b1!4m5!3m4!1s0x476bc076b0720ea7:0xad6af353cd9eaf75!8m2!3d47.666309!4d17.6449138">
            9024 GYŐR, Nagy Imre út 93.</Link>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map