import * as types from '../types';

const initialState = {
    loading: false,
    currentBook : '',
}

export const currentBookReducer = (state = initialState, action) => {
    if(action.type === types.GET_CURRENT_BOOK){
        return{
            ...state,
            loading: true,
            currentBook: action.payload 
        }
    } else{
        return state
    }
}