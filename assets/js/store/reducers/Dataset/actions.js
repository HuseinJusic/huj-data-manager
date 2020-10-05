export const GET_DATASETS = 'GET_DATASETS'
export const SET_LOADING = 'SET_LOADING'

export const getDatasets = (token) => async dispatch => {
    try {
        fetch('/api/v1/dataset/list', {
            method: 'GET',
            headers: {
              'X-AUTH-TOKEN': token
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_DATASETS,
                    payload: data
                })
            });
    } catch {

    }
}

export const setIsLoading = () => ({

        type: SET_LOADING,
        payload: null

});
