import React from 'react'
import PropTypes from 'prop-types';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet";
import locationPin from '../assets/icon-location.svg'

const Map = props => {
  const pin = new Icon({
    iconUrl: locationPin,
    iconSize: [20,20]
  })
  return (
    <div>
    <div className='map'>
      <MapContainer center={[45.4, -75.7]} zoom={13} scrollWheelZoom={false} style={{height: "450px"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.4, -75.7]} icon={pin}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
  )
}

Map.propTypes = {

}

export default Map
