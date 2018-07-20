//need to import react to use jsx(html sort of)
import React from "react";

const Card=({name,Location,id})=>{
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 grow b2 shadow -5">
            <img alt="robots" src={'https://robohash.org/${id}?200x200'}/>
            <div>
                <h2>{name}</h2>
                <p>{Location}</p>
            </div>
        </div>
    );    
    
}

export default Card;