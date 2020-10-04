import * as actions from './actions'

const initState = {
    isLoading: true,
    datasets: null
}

const DatasetReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_DATASETS:
            return {
                ...state,
                datasets: action.payload.data,
                isLoading: false
            }
        default:
            return state;
    }
}

export default DatasetReducer;