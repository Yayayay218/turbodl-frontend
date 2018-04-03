import Types from '../actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: [],
    current: {},
    channel:{},
    fetching: false,
    fetched: false,
    error: null,
});

const search = (state, action) =>
    state.merge({
        err: null,
        fetching: true,
        fetched: false,
    })

const searchSuccess = (state, action) =>
    state.merge({
        err: null,
        fetching: false,
        fetched: true,
        data: action.response.items
    })

const searchFailure = (state, action) =>
    state.merge({
        err: action.errCode.error,
        fetching: false,
        fetched: false,
    })

const ACTION_HANDLERS = {
    [Types.SEARCH]: search,
    [Types.SEARCH_SUCCESS]: searchSuccess,
    [Types.SEARCH_FAILURE]: searchFailure

};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
