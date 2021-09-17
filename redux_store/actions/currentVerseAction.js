import * as types from '../types';

export const updatingCurrentVerse = (payload) => async dispatch => {
    dispatch({
        type: types.GET_CURRENT_VERSE,
        payload: payload,

    })
}