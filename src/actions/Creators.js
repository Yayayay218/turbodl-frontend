import createAction from './CreateAction';
import Types from './Types';

const getMatches = (data) => createAction(Types.GET_MATCHES, {data});
const getMatchesSuccess = (response) => createAction(Types.GET_MATCHES_SUCCESS, {response});
const getMatchesFailure = (error) => createAction(Types.GET_MATCHES_FAILURE, {error});

const getLivestream  = (data) => createAction(Types.GET_LIVESTREAM, {data});
const getLivestreamSuccess = (response) => createAction(Types.GET_LIVESTREAM_SUCCESS, {response});
const getLivestreamFailure = (errCode) => createAction(Types.GET_LIVESTREAM_FAILURE, {errCode});

const setChannel = (data) => createAction(Types.SET_CHANNEL, {data});

const getChannel = (data) => createAction(Types.GET_CHANNEL, {data});
const getChannelSuccess = (response) => createAction(Types.GET_CHANNEL_SUCCESS, {response});
const getChannelFailure = (errCode) => createAction(Types.GET_CHANNEL_FAILURE, {errCode});

const postUrl = (data) => createAction(Types.POST_URL, {data})
const postUrlSuccess = (response) => createAction(Types.POST_URL_SUCCESS, {response})
const postUrlFailure = (errCode) => createAction(Types.POST_URL_FAILURE, {errCode})

const search = (data) => createAction(Types.SEARCH, {data})
const searchSuccess = (response) => createAction(Types.SEARCH_SUCCESS, {response})
const searchFailure = (errCode) => createAction(Types.SEARCH_FAILURE, {errCode})

export default {
    getMatches,
    getMatchesSuccess,
    getMatchesFailure,

    getLivestream,
    getLivestreamSuccess,
    getLivestreamFailure,

    setChannel,

    getChannel,
    getChannelSuccess,
    getChannelFailure,

    postUrl,
    postUrlSuccess,
    postUrlFailure,

    search,
    searchSuccess,
    searchFailure
}