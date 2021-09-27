import { useSelector, useDispatch } from 'react-redux';
import { selectQuote, fetchQuote } from './quoteSlice';
import { useEffect } from 'react';
import './Quote.css'

function Quote(){
    const dispatch = useDispatch();

    useEffect(()=>{
        // useEffect call backs are synchronous! define and invoke the async function within body of call back
        dispatch(fetchQuote()); // dispatch calling the thunk action creator = dispatching async thunk function. 
    },[dispatch]);
    const quote = useSelector(selectQuote);

    return (
        <section className="quote">
            <h3>{quote.text}</h3>
            <h2>- {quote.author}</h2>
        </section>)
    }

export default Quote;