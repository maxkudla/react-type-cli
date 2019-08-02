import {Reducer, Action} from "redux";

export const fetchUserDataStart: Reducer<AuthState, Action> = (state, action) => ({
    ...state
});

export const fetchUserDataSuccess: Reducer<AuthState, Action> = (state, action) => ({
    ...state
});

export const fetchUserDataFail: Reducer<AuthState, Action> = (state, action) => ({
    ...state,
});
