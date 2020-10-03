export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const USER_ERROR = "USER_ERROR";


export const getUser = () => async dispatch => {
    try {
        fetch('api/v1/user/get')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch({
                    type: GET_USER,
                    payload: data
                })
            });
    } catch {

    }
}
/*
export const getUser = () => async dispatch => {
    try{
        fetch('api/v1/dataset/list')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch( {
                    type: GET_USER,
                    payload: data
                })
            });
    }catch{

    }
}*/
