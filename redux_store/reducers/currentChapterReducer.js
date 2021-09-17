import * as types from '../types';

const initialState = {
    loading: false,
    currentChapter : '',
}

export const currentChapterReducer = (state = initialState, action) => {
    if(action.type === types.GET_CURRENT_CHAPTER){
        return{
            ...state,
            loading: true,
            currentChapter: action.payload 
        }
    } else{
        return state
    }
}