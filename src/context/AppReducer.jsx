export default (state, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                LoginSatus: true,
                data: action.payload,
                error: false
            }
        case 'USER_LOGIN_ERROR':
            return {
                ...state,
                LoginSatus: false,
                error: 'invalid user name or password'
            }
        default:
            return state
    }
}