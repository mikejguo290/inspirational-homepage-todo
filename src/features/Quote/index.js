import { useSelector, useDispatch } from 'react-redux';
import { selectQuote, fetchQuote, selectLoadingStatus, selectErrorStatus } from './quoteSlice';
import { useEffect } from 'react';
import './Quote.css'

function Quote(){
    const dispatch = useDispatch();

    useEffect(()=>{
        // useEffect call backs are synchronous! define and invoke the async function within body of call back
        dispatch(fetchQuote()); // dispatch calling the thunk action creator = dispatching async thunk function. 
    },[dispatch]);
    const quote = useSelector(selectQuote);

    const loading = useSelector(selectLoadingStatus);
    const quoteError = useSelector(selectErrorStatus);

    if(loading){
        return (
            <section className="quote">
                <p>Loading ...</p>
            </section>)
    }else if(quoteError){
        return (
            <section className="quote">
                <p>Error! {quoteError.message}</p>
            </section>)
    }else{
        return (
            <section className="quote">
                <h3>{quote.text}</h3>
                <h2>- {quote.author}</h2>
            </section>)
        }
    }

export default Quote;