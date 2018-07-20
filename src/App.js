import React,{Component} from "react";
import Charlist from "./Charlist";
import Char from "./Char";
import Searchbar from "./Searchbar";

//when we use component from react we need to define constructor
class App extends Component{
    //to cretae state used constructor
    constructor(){
        //need super whenever using "this" keyword
        super()
        //"this" used to create state for char and search field
        this.state={
            Char: Char,
            searchfield:""
        }

        }
        //if there is searchchange then it will print using console
       
        onSearchchange=(event)=>{
            this.setState({searchfield:event.target.value})
            
        }
    render(){    
        
            const filterChar=this.state.Char.filter(Char=>{
                return Char.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            
    return(
        //created a searchbar and will display char inside it using char list
       //used searchchagne function
       //this.state.char will call the data from the this.state
       //so if the user starts typing in searchbar then we can observer the changes through console.log
       <div className="tc">
        <h1>Characters</h1>
        <Searchbar searchChange={this.onSearchchange}/>
         <Charlist Char={filterChar}/>
        </div>
    )
}
}
export default App;