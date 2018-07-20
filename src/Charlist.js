import React from "react";
import Card from "./Card";

const Charlist=({Char})=>{
    return(
        <div>
            {
                //this will create a user and "i" will be used as index to fetch data from char.js
                Char.map((user,i)=>{
                    return(
                        <Card
                        //i is used to fetch data will act as for loop i 
                        key={i}
                        id={Char[i].id}
                        name={Char[i].name}
                        Location={Char[i].Location}
                        />
                        );
                
            })
            }
            </div>
    );

}


export default Charlist;