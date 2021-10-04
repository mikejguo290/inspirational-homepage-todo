const axios = require("axios");

exports.handler = async function (event, context) {
    console.log(event);
    console.log(context);
    try {
        const { page, query } = event.queryStringParameters; 
        const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&page=${page}&query=${query}`);
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
