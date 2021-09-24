// using Unsplash API to fetch image urls.
const accessKey = 'F3IT-ZZ3z3WQA1-WmIB5-M9M3cQ1VJkETxlJdZiqZVs';
const imageAPI = {
    async fetchImage(){
        // search unsplash api with query 'mountain'
        const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=mountain&page=3`;
        try{
            const response = await fetch(url, {
                method: 'GET',
                headers:{
                    'Content-type':'application/json'
                }
            });
            if(response.ok){

                const jsonResponse = await response.json();
                // create object to return, this will become action.payload
                console.log(jsonResponse);
                return jsonResponse;
            }else{
                throw new Error('Request has failed!')
            }
        }catch(error){
            console.log(error);
        }    
    }
}

export default imageAPI;