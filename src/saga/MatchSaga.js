import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'

export function* getMatches({data}) {
    try {
        console.log(data)
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.getMatches], data);
        yield put(Actions.getMatchesSuccess(response));

    } catch (err) {
        yield put(Actions.getMatchesFailure(err));
    }
}

export function* getLivestreams({data}) {
    console.log(data)
    try {
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.getLivestreams], data);
        yield put(Actions.getLivestreamSuccess(response));

    } catch (err) {
        yield put(Actions.getLivestreamFailure(err));
    }
}