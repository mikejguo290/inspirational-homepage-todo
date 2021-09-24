import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectWeather, fetchWeather } from './weatherSlice';

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
            <img src={weather.weatherIcon} alt="weatherIcon" />  <span>{weather.temperature}'C</span> - <span>{weather.description}</span>
        </section>
    )
}

export default Weather;