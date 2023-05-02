import React from "react";
import { countries } from "countries-list";
import Select from "react-select"

const countriesList = Object.values(countries).map(c => {
    return { value: c.name, label: c.name }
})


export const CountriesDropdown = ({ setCountry }) => {
    console.log("countries?")
    console.log(countriesList)

    return (
        <Select options={countriesList}/>
    )

}