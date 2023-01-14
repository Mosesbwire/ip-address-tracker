import React, {useState} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import arrow from '../assets/icon-arrow.svg'

const Header = ({setIpInformation, setLoading}) => {
  const [address, setAddress] = useState('')

  const getAddress = (e) => setAddress(e.target.value)
  const onClick = async ()=>{

    const body = JSON.stringify({address: address})
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('http://localhost:5000/getip/',body,config)
      setIpInformation(res.data)
      setLoading(false)
    } catch (err) {
      const error = err.response.data.errors
      console.log(error)
    }
  }
  return (
    <div className='header'>
      <div className='header-wrapper'>
        <h1 className='heading'>IP Address Tracker</h1>
        <div className='search-container'>
            <input className='input' type={'text'} placeholder= 'Search for any ip address or domain' onChange={e => getAddress(e)}/>
            <div className='search-btn' onClick={e => onClick()}>
                <img src={arrow} alt ='arrow right'/>
            </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  setIpInformation: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default Header
