import { useState } from 'react';
import Search from './Components/Search';
import onTempChange from './Callbacks/onTempChange';
import Weather from './Components/Weather';

function App() {
  const [weather, setWeather] = useState({});

  return (
    <div className={onTempChange({ weather })}>
      <main>
        <Search setWeather={setWeather} />
        <Weather weather={weather} />
      </main>
    </div>
  );
}

export default App;
