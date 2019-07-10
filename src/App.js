import React, { useState } from 'react'

function App() {
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  function handleCityChange(event) {
    setCity(event.target.value)
  }
  function handleCountryChange(event) {
    setCountry(event.target.value)
  }
  return (
    <div>
      <form>
        <div>
          <input
            type='text'
            placeholder='City'
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Country'
            value={country}
            onChange={handleCountryChange}
          />
        </div>
      </form>
      <h1>RESULT</h1>
      <h3>City: {city}</h3>
      <h3>Country: {country}</h3>
    </div>
  )
}

export default App
