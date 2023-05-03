import "./App.css"
import { useEffect, useState } from 'react'
import CountriesDropdown from './CountriesDropdown'
import CountryInfoDetails from './CountryDetails'

const App = () => {
  const [country, setCountry] = useState("")
  const [countriesInfo, setCountriesInfo] = useState([])
  const [countryInfo, setCountryInfo] = useState()

  // Fetch all the data of the countries and save it
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();

        // Change the data so the "Select" component can use the names in the dropdown
        setCountriesInfo(
          data.map(d => {
            return { ...d, value: d.name.common, label: d.name.common }
          }).sort((a, b) => a.value < b.value ? -1 : 1)
        )
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log("Error in fetching countries", e)
      }
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    if (country) {
      const foundCountry = countriesInfo.find(c => c.name.common === country)
      if (foundCountry) {
        setCountryInfo(foundCountry)
      }
    }

  }, [country, countriesInfo])

  return (
    <div className="container">
      <CountriesDropdown countryNames={countriesInfo} setCountry={setCountry} />
      <CountryInfoDetails countryInfo={countryInfo} />
    </div>
  )
}

export default App
