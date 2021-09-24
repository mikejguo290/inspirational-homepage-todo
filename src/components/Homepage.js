import Weather from '../features/Weather';
import Quote from '../features/Quote';
import Todos from '../features/Todos';
import InputTodos from './InputTodos';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImage, fetchImage } from '../features/Image/imageSlice'
import imageAPI from '../api/imageAPI';

function Homepage () {
    /* homepage will have to have images state */
    const dispatch = useDispatch();
    useEffect(()=>{
        // test api call without dispatching to store
        const getImage = async()=>{
            const fetchedImage = await imageAPI.fetchImage();
            return fetchedImage;
        }
        getImage();
    },[dispatch])

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
