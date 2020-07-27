import axios from 'axios';

const GET_GROCERY_LIST = "GET_GROCERY_LIST"
const GET_RECIPES = "GET_RECIPES"
const GET_CALORIE_RANGE = "GET_CALORIE_RANGE"
const CART_ERROR = 'CART_ERROR'

const getGroceries = (groceryList) => (
    {
        type: GET_GROCERY_LIST,
        groceryList
    }
)

const getRecipes = (recipes) => (
    {
        type: GET_RECIPES,
        recipes
    }
)
const getRange = (range) => (
    {
        type: GET_RECIPES,
        range
    }
)

const cartErrorAction = error => ({type: CART_ERROR, error})


export const fetchList = (info) => {
    return async dispatch => {
        const {data} = await axios.put('/api/', info)
        console.log("DATA", data)

        dispatch(getGroceries(data))
      
    }
  }

  export const fetchRecipes = (info) => {
    return async dispatch => {
        const {data} = await axios.get('/api/', info)
        console.log("DATA", data)

        dispatch(getGroceries(data))
      
    }
  }

const initialState = {
    groceryList: [],
    recipes: [],
    range: 2000
}

export default function recipesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_GROCERY_LIST: {
        return {...state, groceryList: action.groceryList}
      }
      case GET_RECIPES: {
          return {...state, recipes: action.recipes}
      }
      case GET_CALORIE_RANGE: {
        return {...state, range: action.range}
    }
      default:
        return state
    }
  }