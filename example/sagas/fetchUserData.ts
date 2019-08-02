import { Action } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";

import {
    AUTH_FETCH_USER_DATA,
    authFetchUserDataStart,
    authFetchUserDataSuccess,
    authFetchUserDataFail,
} from "../actions";

const fetchUserData = (payload) => {
};

function* authFetchUserDataRequest(action: Action) {
    try {
        yield put(authFetchUserDataStart());

        const response = yield call(fetchUserData, action.payload);

        yield put(authFetchUserDataSuccess(response));

    } catch (e) {
        yield put(authFetchUserDataFail(e));
    }
};

export default function* authFetchUserDataSaga() {
    yield takeLatest(AUTH_FETCH_USER_DATA, authFetchUserDataRequest);
};
