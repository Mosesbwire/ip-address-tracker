import React from 'react'
import PropTypes from 'prop-types'
import arrow from '../assets/icon-arrow.svg'

const Header = props => {
  return (
    <div className='header'>
      <div className='header-wrapper'>
        <h1 className='heading'>IP Address Tracker</h1>
        <div className='search-container'>
            <input className='input' type={'text'} placeholder= 'Search for any ip address or domain'/>
            <div className='search-btn'>
                <img src={arrow} alt ='arrow right'/>
            </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header
