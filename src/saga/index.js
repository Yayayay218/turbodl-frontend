import {takeLatest, all, fork} from 'redux-saga/effects';
import Types from '../actions/Types';

import {
    postUrl,
    search
} from "./MatchSaga"

export default function* root() {
    yield all([
        takeLatest(Types.POST_URL, postUrl),
        takeLatest(Types.SEARCH, search)
    ])
}
