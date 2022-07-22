import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar.js";
import Home from "./components/home/Home.js";
import RecipeDetails  from './components/recipeDetails/RecipeDetails.js';




function App() {
  return (
<BrowserRouter>
    <Route exact path="/" component={NavBar}></Route>
    <Route path="/recipes" component={Home}></Route>
    <Route path="/recipes:id" component={RecipeDetails}></Route>
</BrowserRouter>
   
    
  );
}

export default App;
