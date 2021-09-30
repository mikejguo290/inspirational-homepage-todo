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
        return (
            <section className="weather">
                <p>Loading weather data</p>
            </section>
        );
    }else if(error){
        return (
            <section className="weather">
                <p>Error! {error.message}</p>
            </section>
        );
    }else{
        return (
            <section className="weather">
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