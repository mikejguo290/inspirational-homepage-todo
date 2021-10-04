const axios = require("axios");

exports.handler = async function (event, context) {
    console.log(event);
    console.log(context);
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${process.env.OPEN_WEATHER_API_SECRET}`);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (err) {
        return {
            statusCode: 404,
            body: err.toString(),
        };
    }
};
