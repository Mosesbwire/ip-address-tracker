import React from 'react'
import PropTypes from 'prop-types'

const IPInformation = props => {
  return (
    <div className='information-section'>
      <div className='information-wrapper'>
        <div className ='border-lg'>
            <p className='subtitles'>IP ADDRESS</p>
            <p className='info-text'>192.212.174.101</p>
        </div>
        <div className ='border-lg'>
            <p className='subtitles'>LOCATION</p>
            <p className='info-text'>Kasarani, Nairobi</p>
        </div>
        <div className ='border-lg'>
            <p className='subtitles'>TIMEZONE</p>
            <p className='info-text'>EAT - 15:00</p>
        </div>
        <div>
            <p className='subtitles'>ISP</p>
            <p className='info-text'>SpaceX</p>
        </div>
      </div>
    </div>
  )
}

IPInformation.propTypes = {

}

export default IPInformation
