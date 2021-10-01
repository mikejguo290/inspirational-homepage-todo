// using Unsplash API to fetch image urls.
const accessKey = 'F3IT-ZZ3z3WQA1-WmIB5-M9M3cQ1VJkETxlJdZiqZVs';
const imageAPI = {
    async fetchImage(pageToFetch){
        // search unsplash api with query 'mountain'
        const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${pageToFetch}&query=mountain`;
        console.log(url);
        
            const response = await fetch(url, {
                method: 'GET',
                headers:{
                    'Content-type':'application/json'
                }
            });
            if(response.ok){

                const jsonResponse = await response.json();
                // create object to return, this will become action.payload
                console.log('making an api call!')
                console.log(jsonResponse);
                // 1. define general structure of slice , e.g. images go into array of objects. 
                // 2. return objects with properties set with jsonResponse.  
                const images = jsonResponse.results.map(image => {
                    const { id, created_at, description, alt_description, likes, tags, urls, } = image;
                    return {
                        id:id,
                        created_at:created_at,
                        description:description, 
                        alt_description: alt_description,
                        likes: likes,
                        tags: tags, // an array of tag objects
                        urls: urls // object with types of images as properties and their urls as values. 
                    }
                })
                const totalPages = jsonResponse.total_pages;
                const data = {
                    images: images,
                    totalPages:totalPages,
                }
                return data;
            }else{
                throw new Error('Request has failed!')
            }
       
    }
}

export default imageAPI;