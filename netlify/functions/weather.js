const axios = require("axios");

exports.handler = async function (event, context) {
    console.log(event);
    console.log(context);
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=68f0e305a7c7de98fc11d2bf9d32994c`);
        return {
            statusCode: 200,
            body: JSON.stringify(response),
        };
    } catch (err) {
        return {
            statusCode: 404,
        body: err.toString(),
        };
    }
};
