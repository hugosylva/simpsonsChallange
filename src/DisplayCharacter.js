import React from "react";

function DisplayCharacter({allInfo,quote}) {
    
    console.log(quote);
    
    return (
        <div>
            <button onClick={allInfo}>Push BUTTON to be inspired!</button>
            <h3>{quote.quote}</h3>
            <img src={quote.image} alt= 'Random Simpson'/>
           
        </div>
    )



};

export default DisplayCharacter;