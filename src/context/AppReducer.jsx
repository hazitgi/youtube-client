export default (state, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                userLogged: true,
                data: action.payload
            }
        case 'USER_LOGIN_ERROR':
            return {
                ...state,
                userLogged: false,
            }
        default:
            return state
    }
}