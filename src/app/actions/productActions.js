import actionTypes from "./actionTypes";

export const setCategories = (categories) => {
    return {
        type: actionTypes.setCategories,
        payload: categories
    }
}

export const setProducts = (products) => {
    return {
        type: actionTypes.setProducts,
        payload: products
    }
}

export const setProduct = (product) => {
    return {
        type: actionTypes.setProduct,
        payload: product
    }
}

export const clearProduct = () => {
    return {
        type: actionTypes.removeProduct,
    }
}