const api = {
  key: 'babae4c8faff79dcdf115c79674fa6ab',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export default function onSearch(evt, setWeather, query, setQuery) {
  if (evt.key === 'Enter') {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
  }
}
