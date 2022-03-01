export default function onTempCahnge({ weather }) {
  return typeof weather.main != 'undefined' ? (weather.main.temp > 16 ? 'app warm' : 'app') : 'app';
}
