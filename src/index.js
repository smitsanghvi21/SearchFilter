//need to import react files and link other project files through import
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import "tachyons";
import {Char} from "./Char";
import Charlist from "./Charlist";
import App from "./App";
import Searchbar from "./Searchbar";

//this will link the main app.js file
ReactDOM.render(<App/> , document.getElementById('root'));
registerServiceWorker();
