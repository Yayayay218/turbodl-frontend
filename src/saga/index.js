import { takeLatest, all, fork } from 'redux-saga/effects';
import Types from '../actions/Types';

import {
    getMatches,
    getLivestreams,
    getChannel, postUrl
} from "./MatchSaga"

export default function * root () {
    yield all([
        takeLatest(Types.GET_MATCHES, getMatches),
        takeLatest(Types.GET_LIVESTREAM, getLivestreams),
        takeLatest(Types.GET_CHANNEL, getChannel),
        takeLatest(Types.POST_URL, postUrl)
    ])
}
