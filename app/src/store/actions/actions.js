import axios from 'axios';

export const fetchTrivia = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_START' });

        axios
        .get('http://numbersapi.com/random/trivia/')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'FETCH_FAILURE',
                payload: error
            });
        })
    }
}

