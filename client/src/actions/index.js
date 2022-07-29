export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const ORDER_RECIPE = "ORDER_RECIPE";

const axios = require('axios');
export const EMPTY_RECIPE_DETAILS = "EMPTY_RECIPE_DETAILS";


export function getRecipes() {    
    return function (dispatch) {
   return axios.get(`http://localhost:3001/recipes`)
        .then(({data})=>{

            dispatch({type: GET_RECIPES, payload: data})
          
        })
    }
}

export function getRecipeDetails(id) {
    return function (dispatch) {
   return axios.get(`http://localhost:3001/recipes/${id}`)
        .then(({data})=>{

            dispatch({type: GET_RECIPE_DETAILS, payload: data})
          
        })
    }
}

export function emptyRecipeDetail() {
    return function (dispatch) { 

            dispatch({type: EMPTY_RECIPE_DETAILS})
          
        
    }
}

export function searchRecipe(query) {
    return function (dispatch) { 

            dispatch({type: SEARCH_RECIPE, payload: query})
          
        
    }
}

export function orderRecipe(order) {
    return function (dispatch) { 

            dispatch({type: ORDER_RECIPE, payload: order});
          
        
    }
}