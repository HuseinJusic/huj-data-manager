export const GET_USER = "GET_USER";
export const GET_API_TOKEN = "GET_API_TOKEN";
export const UPDATE_USER = "UPDATE_USER";
export const USER_ERROR = "USER_ERROR";


export const getApiToken = () => async dispatch => {
    try {
        fetch('/getApiToken')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_API_TOKEN,
                    payload: data
                })
            });
    } catch {

    }
}
