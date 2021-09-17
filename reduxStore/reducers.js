import { SET_CURRENT_BOOK, SET_CURRENT_CHAPTER, SET_CURRENT_VERSE, SET_CURRENT_SCRIPTURE } from './actions';

const initialState = {
    currentBook : '',
    currentChapter : '',
    currentVerse : '',
    currentScripture : [],
}

function useTheReducer(state = initialState, action){
    switch (action.type) {
        case SET_CURRENT_BOOK:
            return {...state, currentBook: action.payload}
            break;

        case SET_CURRENT_CHAPTER:
            return {...state, currentChapter: action.payload}
            break;

        case SET_CURRENT_VERSE:
            return {...state, currentVerse: action.payload}
            break;

        case SET_CURRENT_SCRIPTURE:
            return {...state, currentScripture: action.payload}
            break;
    
        default:
            return state;
    }
}

export default useTheReducer;