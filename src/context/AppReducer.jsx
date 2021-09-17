export default (state, action) => {
    switch (action.type) {
        case 'GET_CHANNEL_DETAILS':
            return {
                ...state,
                channelDetails: action.payload.data,
            }
        case 'ADD_NEW_CHANNEL':
            return {
                ...state,
                channelDetails: action.payload
            }

        default:
            return state
    }
}