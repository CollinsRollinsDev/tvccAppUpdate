import * as types from '../types';

export const updatingSCurrentScript = (payload) => async dispatch => {
    dispatch({
        type: types.GET_CURRENT_SCRIPT,
        payload: payload,

    })
}