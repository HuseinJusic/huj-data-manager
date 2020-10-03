import * as actions from './actions'

const initState = {
    user: null
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_USER:
            console.log(action);
            return {
                ...state,

            }
        default:
            return state;
    }
}

export default UserReducer;