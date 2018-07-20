import React from "react";
//created a search bar as a separate file
//used searchfield and on searchchange inside the searchbar bc we need to filter data when user uses searchbar
const Searchbar=({searchfield,searchChange})=>{
    return(
        <div className="pa3 ba b--green bg-lightest-blue">
        <input 
        type="search" 
        placeholder="search here"
        //every time search is changed this event is called from app.js
        onChange={searchChange}/>
        
        </div>
    )
}
export default Searchbar;