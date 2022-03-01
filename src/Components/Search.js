import { useState } from 'react';
import onSearch from '../Callbacks/onSearch';

export default function Search({ setWeather }) {
  const [query, setQuery] = useState('');

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={(evt) => onSearch(evt, setWeather, query, setQuery)}
      />
    </div>
  );
}
