export default (state, action) => {
    switch (action.type) {
        case 'GET_CHANNEL_DETAILS':
            return {
                ...state,
                channel_name: action.payload.channel_name,
                channel_Logo: action.payload.channel_Logo,
            }

        default:
            return state
    }
}