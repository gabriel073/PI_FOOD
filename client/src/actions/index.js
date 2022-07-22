export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
const axios = require('axios');



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
   return axios.get(`http://localhost:3001/recipes/id`)
        .then(({data})=>{

            dispatch({type: GET_RECIPE_DETAILS, payload: data})
          
        })
    }
}
