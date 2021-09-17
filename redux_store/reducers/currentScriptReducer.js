import * as types from '../types';

const initialState = {
    loading: false,
    currentScript : [],
}

export const currentScriptReducer = (state = initialState, action) => {
    if(action.type === types.GET_CURRENT_SCRIPT){
        return{
            ...state,
            loading: true,
            currentScript: action.payload 
        }
    } else{
        return state
    }
}