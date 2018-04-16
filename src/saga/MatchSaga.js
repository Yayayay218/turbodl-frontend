import {call, put} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'

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

export function* search({data}) {
    try {
        const ParseApi = new Api(null, true);
        const response = yield call([ParseApi, ParseApi.search], data);
        if(response && response.error) {
            yield put(Actions.searchFailure(response.error));
            return;
        }
        yield put(Actions.searchSuccess(response));

    } catch (err) {
        yield put(Actions.searchFailure(err));
    }
}