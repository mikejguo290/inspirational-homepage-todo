const apiKey = '68f0e305a7c7de98fc11d2bf9d32994c';

const weatherAPI = {
    async fetchWeather(){
        try{
            const url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${apiKey}`
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
        }catch(error){
            console.log(error);
        }
    }
}

export default weatherAPI;