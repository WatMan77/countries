import React from "react";

export const CountryDetails = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population {country.population}</p>
            <img src={country.flag} height={200} width={250} />
        </div>
    )
}