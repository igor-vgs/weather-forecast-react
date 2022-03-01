import DateFormat from '../Functions/DateFormat';

export default function Weather({ weather }) {
  console.log(weather);
  return typeof weather.main != 'undefined' ? (
    <>
      <div className="location-box">
        <div className="location">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="date">{DateFormat(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}°c</div>
        <div className="weather">{weather.weather[0].main}</div>
      </div>
    </>
  ) : (
    ''
  );
}
