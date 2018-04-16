import Types from '../actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    isAuthenticated: false,
    isFetched: false
});

const authenticated = (state, action) =>
    state.merge({
        isAuthenticated: true,
        isFetched: true
    })

const unAuthenticated = (state, action) =>
    state.merge({
        isAuthenticated: false,
        isFetched: false
    })

const ACTION_HANDLERS = {
    [Types.AUTHENTICATED]: authenticated,
    [Types.UN_AUTHENTICATED]: unAuthenticated
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
