import './App.css';

import Header from './components/Header';
import Map from './components/Map';
import IPInformation from './components/IPInformation';

function App() {
  return (
    <div className='main'>
      
      <Header/>
      <IPInformation/>
      <Map/>
    </div>
  );
}

export default App;
