import { useState } from 'react';
import Search from './Components/Search';
import onTempChange from './Callbacks/onTempChange';
import Weather from './Components/Weather';

function App() {
  const [weather, setWeather] = useState({});

  return (
    <div className={onTempChange({ weather })}>
      <Search setWeather={setWeather} />
      <Weather weather={weather} />
    </div>
  );
}

export default App;
