export default (state, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            localStorage.setItem("user", action.payload.data.username);
            localStorage.setItem('id', JSON.stringify(action.payload.data._id));
            localStorage.setItem('isAuthenticated', true);


            return {
                ...state,
                isAuthenticated: localStorage.getItem("isAuthenticated"),
                user: localStorage.getItem("user"),
                id: localStorage.getItem("id"),
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