import React, { useEffect, useState } from 'react';
import './App.css';
import Info from './components/Info/Info';
import Information from './components/Information/Information';

function App() {
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])


  const [info, setInfo] = useState([]);
  const handleInfo = (country) => {
    const newInfo = country;
    setInfo(newInfo);

  }

  return (
    <div >
      <div className='header'>
        <h1>Country Loaded : {countries.length} </h1>
      </div>
      <div className='App'>
        <div className='initial-info'>

          <ul>
            {
              countries.map(country => <Information information={country}
                handleInfo={handleInfo}
              ></Information>)
            }

          </ul>
        </div>

        <div className='more-info'>
          <Info info={info} />
        </div>
      </div>

    </div>
  );
}

export default App;
