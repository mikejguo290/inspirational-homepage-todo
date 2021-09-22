import { useSelector } from 'react-redux';
import { selectQuote } from './quoteSlice';

function Quote(){
    /*
    // mock data for Quote.
    const quote = {
        text:'Beep … beep … beep.',
        author:'Sputnik'
    };
    */
    const quote = useSelector(selectQuote);

    return (
        <section className="quote">
            <h2>{quote.text}</h2>
            <h2>- {quote.author}</h2>
        </section>)
    }

export default Quote;