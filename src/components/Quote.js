
function Quote(){
    // mock data for Quote.
    const quote = {
        text:'Beep … beep … beep.',
        author:'Sputnik'
    };
    
    return (
        <section className="quote">
            <h2>{quote.text}</h2>
            <h2>- {quote.author}</h2>
        </section>)
    }

export default Quote;