
const weatherAPI = {
    async fetchWeather(){
        
            const url = `/.netlify/functions/weather`;
            const response = await fetch(url,{
                method:'GET',
                headers: {
                    "Content-type":"application/json",
                }
            });

            if(response.ok){
                const jsonResponse = await response.json();
                
                // create data object to return 
                // format weather icon url with the weather.icon value from the response. 
                const weatherIcon = `http://openweathermap.org/img/w/${jsonResponse.weather[0].icon}.png`;
                
                const weatherData = {
                    temperature: jsonResponse.main.temp,
                    description: jsonResponse.weather[0].description,
                    weatherIcon: weatherIcon, 
                }
        
                return weatherData;
            }else{
                throw new Error('Request has failed!');
            }
        
    }
}

export default weatherAPI;