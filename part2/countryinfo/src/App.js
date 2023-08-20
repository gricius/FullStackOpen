import React, { useState, useEffect } from 'react';
import CountryInfo from './components/CountryInfo';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (searchQuery) {
      console.log(searchQuery)
      fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === 404) {
            setError('Country not found');
            setCountries([]);
          } else if (data.length > 10) {
            setError('Too many matches. Continue typing.');
            setCountries([]);
          } else {
            setError('');
            setCountries(data);
            setSelectedCountry(null);
          }
        })
        .catch(error => {
          console.error(error);
          setError('An error occurred while fetching data.');
          setCountries([]);
          setSelectedCountry(null);
        });
    } else {
      setError('');
      setCountries([]);
      setSelectedCountry(null);
    }
  }, [searchQuery]);

  const handleCountrySelect = country => {
    setSelectedCountry(country);
    console.log('selected country', country)
    };

  return (
    <div>
      <h1>Country Information</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="find countries..."
      />
      {error && <p style={{color: "red"}}>{error}</p>}
      {selectedCountry ? (
        <CountryInfo country={selectedCountry} />
      ) : (
        <ul>
          {countries.length === 1 ? (
            <li>
              <CountryInfo country={countries[0]} />
            </li>
          ) : (
            countries.map(country => (
              <li key={country.cca3}>
                {country.name.common}{' '}
                <button onClick={() => handleCountrySelect(country)}>View</button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default App;