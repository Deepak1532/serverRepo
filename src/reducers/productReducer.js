import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
}
    from '../constants/productConstant'

export const productReducer =(state={products:[]},action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading: true,
                products:[]
            }
        case ALL_PRODUCTS_SUCCESS:
            return{
                loading: false,
                products:action.payload.products
            }
        case ALL_PRODUCTS_FAIL:
            return{
                loading: false,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return{
                state
            }
    }
}

//to show product detail
export const productDetailsReducer= (state = {products :{} },action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
               ...state,
               loading:true,
               products:{}
            }
            case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
            case PRODUCT_DETAILS_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }
            case CLEAR_ERRORS:
                return{
                    error:null
                }
              default:
              return{
                state
          }
    }
}