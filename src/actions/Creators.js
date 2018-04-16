import createAction from './CreateAction';
import Types from './Types';

const authenticated = (data) => createAction(Types.AUTHENTICATED, {data});
const unAuthenticated = (data) => createAction(Types.UN_AUTHENTICATED, {data});

const postUrl = (data) => createAction(Types.POST_URL, {data})
const postUrlSuccess = (response) => createAction(Types.POST_URL_SUCCESS, {response})
const postUrlFailure = (errCode) => createAction(Types.POST_URL_FAILURE, {errCode})

const search = (data) => createAction(Types.SEARCH, {data})
const searchSuccess = (response) => createAction(Types.SEARCH_SUCCESS, {response})
const searchFailure = (errCode) => createAction(Types.SEARCH_FAILURE, {errCode})

export default {
    postUrl,
    postUrlSuccess,
    postUrlFailure,

    search,
    searchSuccess,
    searchFailure,
    authenticated,
    unAuthenticated
}