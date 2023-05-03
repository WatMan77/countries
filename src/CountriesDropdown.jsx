import Select from "react-select"
import "./styles/dropdown.css"

const CountriesDropdown = ({ countryNames, setCountry }) => {

    return (
        <Select className="dropdown" options={countryNames} onChange={(e) => setCountry(e.value)} placeholder="Select country..." />
    )
}

export default CountriesDropdown