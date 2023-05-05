import "./App.css"
import { useEffect, useState } from 'react'
import CountriesDropdown from './CountriesDropdown'
import CountryInfoDetails from './CountryDetails'

const App = () => {
  const [country, setCountry] = useState("")
  const [countryInfo, setCountryInfo] = useState()
  const [countryNames, setCountryNames] = useState([])

  // Fetch all the data of the countries and save it
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name")
        const data = await response.json();

        // Change the data so the "Select" component can use the names in the dropdown
        setCountryNames(
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
    const fetchCountryInfo = async () => {
      if (!country) {
        return
      }
      //Check local storage for the country info
      const countryData = JSON.parse(localStorage.getItem(country))
      if (countryData) {
        setCountryInfo(countryData)
        return
      }

      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        const foundCountry = await response.json()
        if (foundCountry.length > 0) {
          localStorage.setItem(country, JSON.stringify(foundCountry[0]))
          setCountryInfo(foundCountry[0])
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log("Error in fetching country info", e)
      }
    }

    fetchCountryInfo()

  }, [country])

  return (
    <>
      <CountriesDropdown countryNames={countryNames} setCountry={setCountry} />
      <CountryInfoDetails countryInfo={countryInfo} />
    </>
  )
}

export default App
