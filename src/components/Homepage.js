import Weather from '../features/Weather';
import Quote from '../features/Quote';
import Todos from '../features/Todos';
import InputTodos from './InputTodos';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImage, selectPageToFetch, fetchImage, selectLoadingStatus, selectErrorStatus, getNextImage, getPreviousImage } from '../features/Image/imageSlice'

function Homepage () {
    /* 
    homepage renders for the fist time without data, after rendering, the side effect takes place. dispatch thunk
    action creator to fetchImage. the image data is fetched from imageAPI and the imageSlice is updated. Homepage is rerendered due
    to its use of selectors exported from imageSlice. 
    */
    const dispatch = useDispatch();
    const page = useSelector(selectPageToFetch);
    useEffect(()=>{
        // dispatch thunk action creator with arg set to the page of query response results to fetch. 
        dispatch(fetchImage(page));
    },[dispatch, page])

    // if no image is fetched - const image = useSelector(selectImage); => undefined. 
    const defaultImageURL = 'https://images.unsplash.com/photo-1631551831518-b5b32d35f248';
    
    let style = {
        /* set default style */
        backgroundImage: `url(${defaultImageURL})`,
        backgroundSize:'cover',
    }
    
    const image = useSelector(selectImage);

    if (image !== undefined){ // image is undefined either on first render or when no image is returned from fetch. 
        // don't run the following code if image doesn't contain image object.
        const background = `url(${image.urls.regular})`;
        style.backgroundImage = background;
    }

    const handleClickNext = () =>{
        // this will change image.imageIndex, which will change the image fetched by selector selectImage.
        // if index is within range, get nextImage, else, get new page of results and set 
        dispatch(getNextImage())
    }

    const handleClickPrevious = () => {
        dispatch(getPreviousImage())
    }

    return (
        <section className="homepage" style={style}>
            <Weather />
            <InputTodos />
            <Todos isCompleted={false} />
            <button onClick={handleClickPrevious}>Previous Image</button> 
            <button onClick={handleClickNext}>Next Image</button> 
            <br />
            <Todos isCompleted={true} />
            <Quote />
        </section>
    );
}

export default Homepage; 
