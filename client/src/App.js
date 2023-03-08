import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar.js";
import Home from "./components/home/Home.js";
import RecipeDetails  from './components/recipeDetails/RecipeDetails.js';
import NewRecipe from './components/newRecipe/NewRecipe';
import axios from 'axios';
import NotFound from './components/search/NotFound';

// axios.defaults.baseURL = 'https://food-production-d6e7.up.railway.app';
axios.defaults.baseURL =  'http://127.0.0.1:3001';                  

function App() {
  return (
<BrowserRouter>
    <Route exact path="/" component={NavBar}></Route>
    <Route exact path="/notFound" component={NotFound}></Route>
    <Route exact path ="/recipes" component={Home}></Route>
    <Route exact path ="/recipe" component={NewRecipe}></Route>
    <Route exact path ="/recipes/:id" component={RecipeDetails}></Route>
    </BrowserRouter>       
  );
}
export default App;
