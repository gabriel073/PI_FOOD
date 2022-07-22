import { GET_RECIPES, GET_RECIPE_DETAILS } from "../actions";

const initialState = {

    recipes: [],
    details:{}
}

function rootReducer(state = initialState, action) {

    if (action.type === GET_RECIPES) {
        return {
            ...state,
            recipes: action.payload,
        }
    }
    if (action.type === GET_RECIPE_DETAILS) {
        return {
            ...state,
            recipes: action.payload,
        }
    }
    return state;
}

export default rootReducer;