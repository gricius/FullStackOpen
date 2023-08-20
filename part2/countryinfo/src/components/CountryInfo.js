const CountryInfo = ({ country }) => {
    const { name, capital, area, flags, languages } = country;
  
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
      </div>
    );
  };
  export default CountryInfo;