const CountryInfoDetails = ({ countryInfo }) => {
    if(!countryInfo){
        return null
    }
    return (
        <div>
            <h1>{countryInfo.name.common}</h1>
            <p>Capital: {countryInfo.capital}</p>
            <p>Population {countryInfo.population}</p>
            <img src={countryInfo.flags.png} height={200} width={250} />
        </div>
    )
}

export default CountryInfoDetails