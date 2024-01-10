import React, { useEffect, useState } from 'react'
import Card from './Card'

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const [location, setLocation] = useState('')

  useEffect(() => {
  const fetchData = async() => {
    try {
        const apiLink = `https://api.weatherapi.com/v1/current.json?key=c40b7db05222404b93e115706232906&q=Delhi&aqi=yes`

        const response = await fetch(apiLink)
        const data = await response.json()

        setWeatherData(data)
        setLoading(false)
    }catch(error) {
        setError('Error fetching weather data')
        setLoading(false)
    }
  }  
  fetchData()
  }, []);

  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && (<div>{error}</div>)}
        {weatherData && 
        <div>
            <Card header={'Temperature'} props={`${weatherData.current.temp_c}°C`} />
            <Card header={'Humidity'} props={`${weatherData.current.humidity}%`} />
            <Card header={'Condition'} props={`${weatherData.current.condition.text}`} />
            <Card header={'Wind Speed'} props={`${weatherData.current.wind_kph} km/hr`} />
        </div>
        }
    </div>
  )
}

export default WeatherApp