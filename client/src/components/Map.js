import React, {Fragment } from 'react'
import PropTypes from 'prop-types';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {Icon} from "leaflet";
import locationPin from '../assets/icon-location.svg'

const Map = ({ipInformation, loading}) => {
  const pin = new Icon({
    iconUrl: locationPin,
    iconSize: [20,20]
  })
const Location = ({lat, lng}) =>{
  const map = useMap();

  if (lng && lat)
  {
    map.flyTo([lat, lng], 12)
  }

  return lng && lat ? (
    <Marker
      draggable
      position={[lat,lng]}
      icon={pin}
    >
      <Popup>Location of IP Address</Popup>
    </Marker>
  ) : null
}


  return loading ? null : <Fragment>
        <div className='map'>
        
          <MapContainer center={[ipInformation.location.lat, ipInformation.location.lng]} zoom={13} scrollWheelZoom={false} style={{height: "450px"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Location lat={ipInformation.location.lat} lng={ipInformation.location.lng}/>
          </MapContainer>
        </div>
    </Fragment>

}

Map.propTypes = {
  ipInformation: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Map
