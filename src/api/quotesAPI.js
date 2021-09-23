const quotesAPI = {
    // fetch quote from they said so API, 
    async fetchQuoteOfTheDay(){
        try{
            const url = `https://cors-anywhere.herokuapp.com/https://quotes.rest/qod?category=inspire`;
            const response = await fetch(url, {
                method:'GET',
                headers: {
                    "Content-type":"application/json",
                }
            });
            if(response.ok){
                const jsonResponse = await response.json();

                const fetchedQuote = jsonResponse.contents.quotes[0]
                const quote = {
                    text: fetchedQuote.quote,
                    author: fetchedQuote.author,
                }

                console.log(quote);
                return quote;
            }else{
                throw new Error('Request has failed!');
            }

        }catch(error){
            console.log(error);
        }
    }
}

export default quotesAPI;