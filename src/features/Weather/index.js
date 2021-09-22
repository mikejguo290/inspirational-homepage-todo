
function Weather() {
    const weather = {
        temperature: "21 celsius",
        description: 'Broken Clouds',
        weatherIcon: 'c( )p',
    }
    return (
        <section className="weather">
            {/* This is to be replaced with the weather fetched from weather API */}
            {weather.weatherIcon} - {weather.temperature} - {weather.description}
        </section>
    )
}

export default Weather;