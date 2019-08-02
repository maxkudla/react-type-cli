import { all, fork } from "redux-saga/effects";

import authFetchUserDataSaga from "./fetchUserData";
/* rtc-import */

export default function* rootSaga() {
    yield all([
        fork(authFetchUserDataSaga),
        /* rtc-handler */
    ]);
};
