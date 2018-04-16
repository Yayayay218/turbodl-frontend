import Types from '../actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: [],
    limit: 10,
    page: 0,
    pages: 1,
    total: 0,
    current: {},
    channel:{},
    isFetching: false,
    isFull: false,
    error: null,
});

const postUrl = (state, action) =>
    state.merge({
        urlPosting: true,
        urlPosted: false,
        err: null,
        url: action.data
    })

const postUrlSuccess = (state, action) =>
    state.merge({
        urlPosting: false,
        urlPosted: true,
        err: null,
        data: action.response.data
    })

const postUrlFailure = (state) =>
    state.merge({
        urlPosting: false,
        urlPosted: false,
        err: true
    })

const ACTION_HANDLERS = {
    [Types.POST_URL]: postUrl,
    [Types.POST_URL_SUCCESS]: postUrlSuccess,
    [Types.POST_URL_FAILURE]: postUrlFailure
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
