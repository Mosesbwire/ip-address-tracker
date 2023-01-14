import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import Map from './components/Map';
import IPInformation from './components/IPInformation';

function App() {
  const [ipInformation, setIpInformation] = useState({})

  const [loading, setLoading] = useState(true)

  
  useEffect(()=>{
    const getUserIp = async ()=>{
      const res = await axios.get('http://localhost:5000/')

      setIpInformation(res.data) 
      setLoading(false)

    }

    getUserIp()
  },[])
  return (
    <div className='main'>
      <Header setIpInformation={setIpInformation} setLoading={setLoading}/>
      <IPInformation ipInformation={ipInformation} loading={loading}/>
      <Map ipInformation={ipInformation} loading={loading}/>
    </div>
  );
}

export default App;
