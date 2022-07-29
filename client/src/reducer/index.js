import { GET_RECIPES, GET_RECIPE_DETAILS, EMPTY_RECIPE_DETAILS, SEARCH_RECIPE, ORDER_RECIPE } from "../actions";

const initialState = {
    recipes: [],
    details: {},
    filteredRecipes: []
}

function rootReducer(state = initialState, action) {

    if (action.type === GET_RECIPES) {
        return {
            ...state,
            recipes: action.payload,
            filteredRecipes: action.payload
        }
    }
    if (action.type === GET_RECIPE_DETAILS) {
        return {
            ...state,
            details: action.payload,
        }
    }
    if (action.type === EMPTY_RECIPE_DETAILS) {
        return {
            ...state,
            details: {}
        }
    }
    if (action.type === SEARCH_RECIPE) {
        return {
            ...state,
            filteredRecipes: state.recipes.filter((dato) => dato.title.toLowerCase()
                .includes(action.payload.toLowerCase()))
        }
    }

    if (action.type === ORDER_RECIPE) {

        if (action.payload === "alfaAsc") {
            return {
                ...state,
                filteredRecipes: [...state.recipes].sort((a, b) => a.title.localeCompare(b.title))
            }
        }
        if (action.payload === "alfaDesc") {
            return {
                ...state,
                filteredRecipes: [...state.recipes].sort((a, b) => b.title.localeCompare(a.title))
            }
        }
        if (action.payload === "scoreMin") {
            return {
                ...state,
                filteredRecipes: [...state.recipes].sort((a, b) => a.healthScore - b.healthScore)
            }
        }
        if (action.payload === "scoreHigh") {
            return {
                ...state,
                filteredRecipes: [...state.recipes].sort((a, b) => b.healthScore - a.healthScore)
            }
        }
        
        if (action.payload === "original") {
            console.log(state.recipes)
            return {
                ...state,
                filteredRecipes: state.recipes
            }
        }

    }
    return state;
}

export default rootReducer;