export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const ORDER_RECIPE = "ORDER_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_NEW_RECIPE = "GET_NEW_RECIPE";
export const FILTER_RECIPE = "FILTER_RECIPE";
export const EMPTY_RECIPE_DETAILS = "EMPTY_RECIPE_DETAILS";
export const POST_RECIPE = " POST_RECIPE";

const axios = require('axios');

export function getRecipes() {
    return function (dispatch) {
        return axios.get(`http://54.175.191.76/recipes`)
            .then(({ data }) => {
                dispatch({ type: GET_RECIPES, payload: data })
            })
    }
}

export function getRecipeDetails(id) {
    return function (dispatch) {
        return axios.get(`http://54.175.191.76/recipes/${id}`)
            .then(({ data }) => {
                dispatch({ type: GET_RECIPE_DETAILS, payload: data })
            })
    }
}

export function emptyRecipeDetail() {
    return function (dispatch) {
        dispatch({ type: EMPTY_RECIPE_DETAILS })
    }
}

export function searchRecipe(query) {
    return function (dispatch) {
        dispatch({ type: SEARCH_RECIPE, payload: query })
    }
}

export function orderRecipe(data) {
    return function (dispatch) {
        dispatch({ type: ORDER_RECIPE, payload: data });
    }
}

export function getDiets() {
    return function (dispatch) {
        return axios.get(`http://54.175.191.76/diets`)
            .then(({ data }) => {
                dispatch({ type: GET_DIETS, payload: data })
            })
    }
}

export function filterRecipe(data) {
    return function (dispatch) {
        dispatch({ type: FILTER_RECIPE, payload: data });
    }
}


export function uploadRecipe(recipe) {
    return function (dispatch) {
        return axios.post(`http://54.175.191.76/recipe`, recipe)
            .then(({ data }) => {
                dispatch({ type: POST_RECIPE, payload: data });
            })
    }
}
