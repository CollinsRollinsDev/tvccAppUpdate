import * as types from '../types';

const initialState = {
    loading: false,
    currentVerse : '',
}

export const currentVerseReducer = (state = initialState, action) => {
    if(action.type === types.GET_CURRENT_VERSE){
        return{
            ...state,
            loading: true,
            currentVerse: action.payload 
        }
    } else{
        return state
    }
}