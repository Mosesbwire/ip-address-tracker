import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const IPInformation = ({ipInformation, loading}) => {
  return loading ? <p>LOADING...</p> : <Fragment>
    <div className='information-section'>
      <div className='information-wrapper'>
        <div className ='border-lg'>
            <p className='subtitles'>IP ADDRESS</p>
            <p className='info-text'>{ipInformation.ip}</p>
        </div>
        <div className ='border-lg'>
            <p className='subtitles'>LOCATION</p>
            <p className='info-text'>{ipInformation.location.region}, {ipInformation.location.city}</p>
        </div>
        <div className ='border-lg'>
            <p className='subtitles'>TIMEZONE</p>
            <p className='info-text'>{ipInformation.location.timezone}</p>
        </div>
        <div>
            <p className='subtitles'>ISP</p>
            <p className='info-text'>{ipInformation.isp}</p>
        </div>
      </div>
    </div>
  </Fragment>
  
}

IPInformation.propTypes = {
  ipInformation: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default IPInformation
