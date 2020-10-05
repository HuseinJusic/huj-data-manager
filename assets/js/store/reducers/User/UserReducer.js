import * as actions from './actions'

const initState = {
    user: null,
    apiToken: null,
    isLoading: true
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_USER:

            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case actions.GET_API_TOKEN:

            return{
                ...state,
                apiToken: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;