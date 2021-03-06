import './Homepage.css'
import Weather from '../../features/Weather';
import Quote from '../../features/Quote';
import Todos from '../../features/Todos';
import InputTodos from '../InputTodos';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImages, selectImageIndex, selectTotalPages,selectPage, fetchImage, setPage,
    selectLoadingStatus, selectErrorStatus, getNextImage, getPreviousImage } from '../../features/Image/imageSlice'

function Homepage () {
    /* 
    homepage renders for the fist time without data, after rendering, the side effect takes place. dispatch thunk
    action creator to fetchImage. the image data is fetched from imageAPI and the imageSlice is updated. Homepage is rerendered due
    to its use of selectors exported from imageSlice. 
    */
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    useEffect(()=>{
        // dispatch thunk action creator with arg set to the page of query response results to fetch. 
        dispatch(fetchImage(page));
    },[dispatch,page])

    const loading = useSelector(selectLoadingStatus);
    const error = useSelector(selectErrorStatus);

    // if no image is fetched - const image = useSelector(selectImage); => undefined. 
    const defaultImageURL = 'https://images.unsplash.com/photo-1631551831518-b5b32d35f248';
    
    let style = {
        /* set default style */
        backgroundImage: `url(${defaultImageURL})`,
        backgroundSize:'cover',
    }

    const currentIndex = useSelector(selectImageIndex);
    const images = useSelector(selectImages)
    const image = images[currentIndex];

    
    // set background image to different values depending on result of of api call.
    if(error){
        style.backgroundImage = 'url(/errorImage.jpg)';
    }else if(loading){
        style.backgroundImage = 'url(/loadingImage.jpg)';
    }else if (image !== undefined){ // image is undefined either on first render or when no image is returned from fetch. 
        // don't run the following code if image doesn't contain image object.
        const background = `url(${image.urls.regular})`;
        style.backgroundImage = background;
    }

    const maxIndex = images.length-1;
    const totalPages = useSelector(selectTotalPages);

    const handleClickNext = () =>{
        // this will change image.imageIndex, which will change the image fetched by selector selectImage.
        // if index is within range, get nextImage, else, get new page of results and set 
        if(currentIndex < maxIndex){
            dispatch(getNextImage());
        }else{
            //in case currentIndex === maxIndex, 
            if(page < totalPages ){
                // dispatch action that sets index to 0
                // dispatch async thunk creator with higher page arg
                const payload = {page:page+1}
                dispatch(setPage(payload));
            }
        }
    }

    const handleClickPrevious = () => {
        if(currentIndex > 0){
            dispatch(getPreviousImage());
        }else{
            if(page > 1){
                const payload = {page:page-1}
                dispatch(setPage(payload));
            }
        }
    }

    return (
        <section className="Homepage" style={style}>
            <section className = 'header'>
                <Weather />
                <InputTodos />
            </section>

            <section className="main">
                <section className = 'todosList'>
                    <span id="prev" className="material-icons md-light md-36 md-inactive" onClick={handleClickPrevious}>
                        arrow_back_ios
                    </span>
                    <Todos isCompleted={false} />
                    <span id="next" className="material-icons md-light md-36 md-inactive" onClick={handleClickNext}>
                        arrow_forward_ios
                    </span>
                </section>
                <section className = 'todosList'>
                    <Todos isCompleted={true} />
                </section>
            </section>
            <section className='footer'>
                <Quote />
            </section>
        </section>
    );
}

export default Homepage; 
