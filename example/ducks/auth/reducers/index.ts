import { fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFail } from "./fetchUserData";

import {
    AUTH_FETCH_USER_DATA_START,
    AUTH_FETCH_USER_DATA_SUCCESS,
    AUTH_FETCH_USER_DATA_FAIL
} from "../actions/fetchUserData";

/* rtc-imports */

const handlers: {
    [key: string]: Function
} = {
    
    [AUTH_FETCH_USER_DATA_START]: fetchUserDataStart,
    [AUTH_FETCH_USER_DATA_SUCCESS]: fetchUserDataSuccess,
    [AUTH_FETCH_USER_DATA_FAIL]: fetchUserDataFail,
    /* rtc-handlers */
};

const initialState = {data:null,error:null,loading:true};

export default (state: AuthState = initialState, action: Action) => {
    const handler = handlers[action.type];

    return handler !== undefined ? handler(state, action) : state;
};
