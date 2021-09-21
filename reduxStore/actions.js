export const SET_CURRENT_BOOK = "SET_CURRENT_BOOK";
export const SET_CURRENT_CHAPTER = "SET_CURRENT_CHAPTER";
export const SET_CURRENT_VERSE = "SET_CURRENT_VERSE";
export const SET_CURRENT_SCRIPTURE = "SET_CURRENT_SCRIPTURE";

export let setCurrentBook = payload => dispatch => {
    dispatch({
        type: SET_CURRENT_BOOK,
        payload: payload
    })
}

export let setCurrentChapter = payload => dispatch => {
    dispatch({
        type: SET_CURRENT_CHAPTER,
        payload: payload
    })
}

export let setCurrentVerse = payload => dispatch => {
    dispatch({
        type: SET_CURRENT_VERSE,
        payload: payload
    })
}

export let setCurrentScripture = payload => dispatch => {
    dispatch({
        type: SET_CURRENT_SCRIPTURE,
        payload: payload
    })
}