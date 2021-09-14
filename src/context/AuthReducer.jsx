export default (state, action) => {
    switch (action.type) {

        case 'USER_LOGIN':
            sessionStorage.setItem("user", action.payload.data.username);
            sessionStorage.setItem('id', JSON.stringify(action.payload.data._id));
            sessionStorage.setItem('isAuthenticated', true);
            return {
                ...state,
                isAuthenticated: sessionStorage.getItem("isAuthenticated"),
                user: sessionStorage.getItem("user"),
                id: sessionStorage.getItem("id"),
                token: action.payload.token,
                error: false
            }
        case 'USER_LOGIN_ERROR':
            return {
                ...state,
                LoginSatus: false,
                error: true,
            }
        default:
            return state
    }
}