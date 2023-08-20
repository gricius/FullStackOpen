import React, { useState, useEffect } from 'react';

const CountryInfo = ({ country }) => {
    const { name, capital, area, flags, languages } = country;
    const [weather, setWeather] = useState(null);
    const [weatherError, setWeatherError] = useState(false);

    useEffect(() => {
        if (capital) {
            const apiKey = process.env.REACT_APP_API_KEY;
            console.log(apiKey);
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => {
                    if (response.status === 404) {
                        setWeatherError(true);
                        return null;
                    }
                    if (response.status === 401) {
                        setWeatherError(true);
                        return null;
                    }
                    return response.json();
                })
                .then(data => {
                    if (data) {
                        setWeather(data);
                        setWeatherError(false);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [capital]);

    return (
        <div>
        <h2>{name.common}</h2>
        <p>Capital: {capital}</p>
        <p>Area: {area} km²</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={flags.svg} alt={`${name.common} flag`} style={{ maxWidth: '200px' }} />
        {weatherError ? (
                <p>Currently no weather data for {capital}</p>
            ) : (
                    weather && weather.main && weather.weather && (
                    <div>
                        <h3>Weather in {capital}</h3>
                    <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
                    <p><strong>Description:</strong> {weather.weather[0].description}</p>

                    <img
                        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                        alt={weather.weather[0].description}
                        style={{ width: '150px' }}
                    />
                    <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
                    <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                    <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p>
                    <p><strong>Feels like:</strong> {weather.main.feels_like}°C</p>
                        
                    </div>
                )
            )}

            

            
        </div>
    );
};
export default CountryInfo;