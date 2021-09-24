import Weather from '../features/Weather';
import Quote from '../features/Quote';
import Todos from '../features/Todos';
import InputTodos from './InputTodos';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImage, selectPageToFetch, fetchImage } from '../features/Image/imageSlice'

function Homepage () {
    /* homepage will have to have images state */
    const dispatch = useDispatch();
    const page = useSelector(selectPageToFetch);
    useEffect(()=>{
        // dispatch thunk action creator with arg set to the page of query response results to fetch. 
        dispatch(fetchImage(page));
    },[dispatch, page])

    const image = useSelector(selectImage);
    const background = `url(${image.url})`;
    let style= {
        backgroundImage: background,
        backgroundSize:'cover',
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
