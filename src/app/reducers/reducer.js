import actionTypes from "../actions/actionTypes";


const productState = {
    products: []
}

const categoriesState = {
    categories: []
}

export const categoriesReducer = (state= categoriesState, {type, payload}) => {
    switch (type) {
        case actionTypes.setCategories:
            return {...state, categories: payload}
        default:
            return state;
    }
}


export const productsReducer = (state = productState, {type, payload})=> {
    
    switch (type) {
        case actionTypes.setProducts: 
            return {...state, products: payload}
        default:
            return state;
    } 
} 

export const productReducer = (state = {}, {type, payload})=> {
    switch (type) {
        case actionTypes.setProduct: 
            return {...state, ...payload}
        case actionTypes.removeProduct: 
            return {}
        default:
            return state;
    } 
} 
