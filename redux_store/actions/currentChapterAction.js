import * as types from '../types';

export const updatingCurrentChapter = (payload) => async dispatch => {
    dispatch({
        type: types.GET_CURRENT_CHAPTER,
        payload: payload,

    })
}