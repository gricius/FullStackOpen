import React, {useState, useEffect} from 'react';

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (searchQuery) {
            fetch(`https://restcountries.com/v3.1/name/${searchQuery}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 404) {
                        setError('Country not found');
                        setCountries([]);
                    } else if (data.length > 10) {
                        setError('Too many matches. Please provide a more specific query.');
                        setCountries([]);
                    } else {
                        setError('');
                        setCountries(data);
                    }
                })
                .catch(error => {
                    console.error(error);
                    setError('An error occurred while fetching data.');
                    setCountries([]);
                });
        } else {
            setError('');
            setCountries([]);
        }
    }, [searchQuery]);

    return (
        <div>
            <h1>Country Information</h1>
            find countries
            <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search for a country..."
            />
            {error && <p>{error}</p>}
            <ul>
                {countries.map(country => (
                    <li key={country.cca3}>
                        <h2>{country.name.common}</h2>
                        <p>Capital: {country.capital}</p>
                        <p>Area: {country.area} km²</p>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <h2>Languages</h2>
                        <ul>
                            {Object.values(country.languages).map(language => (
                                <li key={language}>{language}</li>
                            ))}
                        </ul>
                        <img src={country.flags.png} alt={country.name.common} width="200" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
