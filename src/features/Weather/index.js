import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectWeather, fetchWeather, selectLoadingStatus, selectErrorStatus } from './weatherSlice';
import './Weather.css';
function Weather() {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchWeather());
    },[dispatch]);

    const weather = useSelector(selectWeather);
    const loading = useSelector(selectLoadingStatus);
    const error = useSelector(selectErrorStatus);
    if(loading){
        return <p>Loading weather data</p>
    }else if(error){
        return <p>Error! Weather data failed to load</p>
    }else{
        return (
            <section className="weather">
                {/* This is to be replaced with the weather fetched from weather API */}
                {/* handle case of no weather data getting fetched gracefully! */}
                <img className="weather-icon" src={weather.weatherIcon} alt="weatherIcon" />  
                <div>
                    <h2>{weather.temperature}°C</h2>
                    <p>{weather.description}</p>
                </div>
            </section>
        )
    }
}

export default Weather;