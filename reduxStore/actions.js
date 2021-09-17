const SET_CURRENT_BOOK = "SET_CURRENT_BOOK";
const SET_CURRENT_CHAPTER = "SET_CURRENT_CHAPTER";
const SET_CURRENT_VERSE = "SET_CURRENT_VERSE";
const SET_CURRENT_SCRIPTURE = "SET_CURRENT_SCRIPTURE";

export const setCurrentBook = payload => dispatch => {
    dispatch({
        type: SET_CURRENT_BOOK,
        payload: payload
    })
}

export const setCurrentChapter = payload => dispatch => {
    dispatch({
        type: SET_CURRENT_CHAPTER,
        payload: payload
    })
}

export const setCurrentVerse = payload => dispatch => {
    dispatch({
        type: SET_CURRENT_VERSE,
        payload: payload
    })
}

export const setCurrentScripture = payload => dispatch => {
    dispatch({
        type: SET_CURRENT_SCRIPTURE,
        payload: payload
    })
}