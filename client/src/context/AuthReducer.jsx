const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            };
        case "LOGOUT_START":
            return {
                user: action.payload,
                isFetching: true,
                error: false,
            };
        case "LOGOUT_SUCCESS":
            return {
                user: null,
                isFetching: false,
                error: false,
            };
        case "LOGOUT_FAILURE":
            return {
                user: action.payload,
                isFetching: false,
                error: true,
            };
        default:
            return state;
    }
};

export default AuthReducer;