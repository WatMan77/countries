import { useEffect, useState } from 'react'
import CountriesDropdown from './CountriesDropdown'

const App = () => {
  const [country, setCountry] = useState("")
  const [countriesInfo, setCountriesInfo] = useState([])
  const [countryInfo, setCountryInfo] = useState()

  // Fetch all the data of the countries and save it
  useEffect(() => {
    console.log("Fetching countries")
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();

        // Change the data so the "Select" component can use the names in the dropdown
        setCountriesInfo(data.map(d => {
          return { ...d, value: d.name.common, label: d.name.common }
        }))
      } catch (e) {
        console.log("Error in fetching countries", e)
      }
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    console.log("Changed to", country)
    if(countryInfo){
      const foundCountry = countriesInfo.find(c => c.name.common === country)
      if(foundCountry){
        setCountryInfo(foundCountry)
      }
    }

  }, [country, countriesInfo, countryInfo])

  return (
    <>
      <CountriesDropdown countryNames={countriesInfo} setCountry={setCountry} />
    </>
  )
}

export default App
