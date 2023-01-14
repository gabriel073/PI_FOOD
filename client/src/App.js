import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar.js";
import Home from "./components/home/Home.js";
import RecipeDetails  from './components/recipeDetails/RecipeDetails.js';
import NewRecipe from './components/newRecipe/NewRecipe';
import axios from 'axios';

axios.defaults.baseURL = 'https://pifood-production-e359.up.railway.app'


function App() {
  return (
<BrowserRouter>
    <Route exact path="/" component={NavBar}></Route>
    <Route exact path ="/recipes" component={Home}></Route>
    <Route exact path ="/recipe" component={NewRecipe}></Route>
    <Route exact path ="/recipes/:id" component={RecipeDetails}></Route>
    </BrowserRouter>       
  );
}
export default App;
