import axios from 'axios'
import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS
}
    from '../constants/productConstant'

export const getProducts=()=>async(dispatch )=>{
    try{
        dispatch({
            type:ALL_PRODUCTS_REQUEST
        })
        const {data}=await axios.get('/api/getproduct')

        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
}
export const clearErrors=()=>(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}