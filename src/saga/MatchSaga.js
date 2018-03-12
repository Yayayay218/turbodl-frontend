import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'

export function* getMatches({data}) {
    try {
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.getMatches], data);
        yield put(Actions.getMatchesSuccess(response));

    } catch (err) {
        yield put(Actions.getMatchesFailure(err));
    }
}

export function* getLivestreams({data}) {
    try {
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.getLivestreams], data);
        yield put(Actions.getLivestreamSuccess(response));

    } catch (err) {
        yield put(Actions.getLivestreamFailure(err));
    }
}

export function* getChannel({data}) {
    try {
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.getChannel], data);
        if(response && !response.success) {
            yield put(Actions.getChannelFailure(response.message));
            return;
        }
        yield put(Actions.getChannelSuccess(response));

    } catch (err) {
        yield put(Actions.getChannelFailure(err));
    }
}

export function* postUrl({data}) {
    try {
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.postUrl], data);
        if(response && response.error) {
            yield put(Actions.postUrlFailure(response));
            return;
        }
        yield put(Actions.postUrlSuccess(response));

    } catch (err) {
        yield put(Actions.postUrlFailure(err));
    }
}