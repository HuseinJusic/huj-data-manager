export const GET_DATASETS = 'GET_DATASETS'

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
