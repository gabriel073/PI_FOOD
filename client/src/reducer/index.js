import {
    GET_RECIPES,
    GET_RECIPE_DETAILS,
    EMPTY_RECIPE_DETAILS,
    SEARCH_RECIPE,
    ORDER_RECIPE,
    GET_DIETS,
    FILTER_RECIPE,
    POST_RECIPE
} from '../actions';

const initialState = {
    recipes: [],
    details: {},
    filteredRecipes: [],
    diets: [],
    newRecipes: {},
    searching: ""
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
             details: action.payload
        }
    }

    if (action.type === EMPTY_RECIPE_DETAILS) {
        return {
            ...state,
            details: {}
        }
    }

    if (action.type === SEARCH_RECIPE) {
        const filtered = state.recipes.filter((dato) => dato.name.toLowerCase()
            .includes(action.payload.toLowerCase()))     
        return {
            ...state,
            filteredRecipes: filtered.length === 0 ? "No Hay Recetas" : filtered,
            searching: action.payload
        }
    }

    if (action.type === ORDER_RECIPE) {
        if (action.payload === "alfaAsc") {
            return {
                ...state,
                filteredRecipes: [...state.recipes].sort((a, b) => a.name.localeCompare(b.name))
            }
        }

        if (action.payload === "alfaDesc") {
            return {
                ...state,
                filteredRecipes: [...state.recipes].sort((a, b) => b.name.localeCompare(a.name))
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
            return {
                ...state,
                filteredRecipes: state.recipes
            }
        }
    }

    if (action.type === GET_DIETS) {
        return {
            ...state,
            diets: action.payload,
        }
    }

    if (action.type === FILTER_RECIPE) {
        return {
            ...state,
            filteredRecipes: state.recipes.filter((dato) => dato.diets.toLowerCase()
                .includes(action.payload.toLowerCase()))
        }
    }

    if (action.type === POST_RECIPE) {
        return {
            ...state,
            filteredRecipes: [action.payload, ...state.filteredRecipes ],
            recipes: [action.payload, ...state.recipes ],
        }
    }

    return state;
}

export default rootReducer;