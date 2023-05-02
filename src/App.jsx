import { useEffect, useState } from 'react'
import { CountriesDropdown } from './CountriesDropdown'
import { CountryDetails } from './CountryDetails'

const App = () => {
  const [country, setCountry] = useState([])

  /* useEffect(() => {


  }, [country]) */

  return (
    <>
      {<CountriesDropdown setCountry={setCountry} />}
    </>
  )
}

export default App
