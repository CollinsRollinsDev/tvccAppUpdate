export const SET_CURRENT_BOOK = "SET_CURRENT_BOOK";
export const SET_CURRENT_CHAPTER = "SET_CURRENT_CHAPTER";
export const SET_CURRENT_VERSE = "SET_CURRENT_VERSE";
export const SET_CURRENT_SCRIPTURE = "SET_CURRENT_SCRIPTURE";

export const SET_CURRENT_TITLE = "SET_CURRENT_TITLE";
export const SET_CURRENT_MINISTERING = "SET_CURRENT_MINISTERING";
export const SET_CURRENT_POSTBODY = "SET_CURRENT_POSTBODY";


export let setCurrentBook = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_BOOK,
    payload: payload,
  });
};

export let setCurrentChapter = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_CHAPTER,
    payload: payload,
  });
};

export let setCurrentVerse = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_VERSE,
    payload: payload,
  });
};

export let setCurrentScripture = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_SCRIPTURE,
    payload: payload,
  });
};

export let setCurrentTitle = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_TITLE,
    payload: payload,
  });
};

export let setCurrentMinistering = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_MINISTERING,
    payload: payload,
  });
};

export let setCurrentPostBody = (payload) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_POSTBODY,
    payload: payload,
  });
};
