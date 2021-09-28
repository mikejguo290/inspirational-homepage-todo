import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectWeather, fetchWeather } from './weatherSlice';
import './Weather.css';
function Weather() {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchWeather());
    },[dispatch]);

    const weather = useSelector(selectWeather);

    return (
        <section className="weather">
            {/* This is to be replaced with the weather fetched from weather API */}
            {/* handle case of no weather data getting fetched gracefully! */}
            <img class="weather-icon" src={weather.weatherIcon} alt="weatherIcon" />  
            <div>
                <h2>{weather.temperature}°C</h2>
                <p>{weather.description}</p>
            </div>
        </section>
    )
}

export default Weather;