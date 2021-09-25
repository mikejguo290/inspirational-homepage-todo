import Weather from '../features/Weather';
import Quote from '../features/Quote';
import Todos from '../features/Todos';
import InputTodos from './InputTodos';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImage, selectPageToFetch, fetchImage, selectLoadingStatus, selectErrorStatus } from '../features/Image/imageSlice'

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

    return (
        <section className="homepage" style={style}>
            <Weather />
            <InputTodos />
            <Todos isCompleted={false} />
            <button>Previous Image</button> 
            <button>Next Image</button> 
            <br />
            <Todos isCompleted={true} />
            <Quote />
        </section>
    );
}

export default Homepage; 
