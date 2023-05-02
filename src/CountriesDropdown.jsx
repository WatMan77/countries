import Select from "react-select"

const CountriesDropdown = ({ countryNames, setCountry }) => {

    return (
        <Select options={countryNames} onChange={(e) => setCountry(e.value)} placeholder="Select country..." />
    )
}

export default CountriesDropdown