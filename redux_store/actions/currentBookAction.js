import * as types from '../types';

export const updatingCurrentBook = (payload) => async dispatch => {
    dispatch({
        type: types.GET_CURRENT_BOOK,
        payload: payload,

    })
}