import { SET_CURRENT_BOOK, SET_CURRENT_CHAPTER, SET_CURRENT_VERSE, SET_CURRENT_SCRIPTURE } from './actions';

let initialState = {
    currentBook : '',
    currentChapter : '',
    currentVerse : '',
    currentScripture : [],
}

function useTheReducer(state = initialState, action){
    switch (action.type) {
        case SET_CURRENT_BOOK:
            return {...state, currentBook: action.payload}

        case SET_CURRENT_CHAPTER:
            return {...state, currentChapter: action.payload}

        case SET_CURRENT_VERSE:
            return {...state, currentVerse: action.payload}

        case SET_CURRENT_SCRIPTURE:
            return {...state, currentScripture: action.payload}
    
        default:
            return state;
    }
}

export default useTheReducer;