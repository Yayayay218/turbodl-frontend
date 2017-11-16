import createAction from './CreateAction';
import Types from './Types';

const getMatches = (data) => createAction(Types.GET_MATCHES, {data});
const getMatchesSuccess = (response) => createAction(Types.GET_MATCHES_SUCCESS, {response});
const getMatchesFailure = (error) => createAction(Types.GET_MATCHES_FAILURE, {error});

const getLivestream  = (data) => createAction(Types.GET_LIVESTREAM, {data});
const getLivestreamSuccess = (response) => createAction(Types.GET_LIVESTREAM_SUCCESS, {response});
const getLivestreamFailure = (errCode) => createAction(Types.GET_LIVESTREAM_FAILURE, {errCode});

const setChannel = (data) => createAction(Types.SET_CHANNEL, {data});

export default {
    getMatches,
    getMatchesSuccess,
    getMatchesFailure,

    getLivestream,
    getLivestreamSuccess,
    getLivestreamFailure,

    setChannel
}