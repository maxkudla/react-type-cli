export const AUTH_FETCH_USER_DATA = "AUTH_FETCH_USER_DATA";
export const AUTH_FETCH_USER_DATA_START = "AUTH_FETCH_USER_DATA_START";
export const AUTH_FETCH_USER_DATA_SUCCESS = "AUTH_FETCH_USER_DATA_SUCCESS";
export const AUTH_FETCH_USER_DATA_FAIL = "AUTH_FETCH_USER_DATA_FAIL";

export const authFetchUserData = (payload) => ({
    action: AUTH_FETCH_USER_DATA,
    payload
});

export const authFetchUserDataStart = () => ({
    action: AUTH_FETCH_USER_DATA_START
});

export const authFetchUserDataSuccess = (payload) => ({
    action: AUTH_FETCH_USER_DATA_SUCCESS,
    payload
});

export const authFetchUserDataFail = (error) => ({
    action: AUTH_FETCH_USER_DATA_FAIL,
    error
});
