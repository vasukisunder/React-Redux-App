import axios from 'axios';

export const fetchTrivia = () => {
    return dispatch => {
        dispatch({ type: 'TRIVIA_START' });

        axios
        .get('http://numbersapi.com/random/trivia/')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'TRIVIA_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'TRIVIA_FAILURE',
                payload: error
            });
        })
    }
}

export const fetchYear = () => {
    return dispatch => {
        dispatch({ type: 'YEAR_START' });

        axios
        .get('http://numbersapi.com/random/year/')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'YEAR_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'YEAR_FAILURE',
                payload: error
            });
        })
    }
}

export const fetchMath = () => {
    return dispatch => {
        dispatch({ type: 'MATH_START' });

        axios
        .get('http://numbersapi.com/random/math/')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'MATH_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'MATH_FAILURE',
                payload: error
            });
        })
    }
}

export const inputNumber = (input, type) => {
    return dispatch => {
        dispatch({ type: `${type.toUpperCase()}_START` });

        axios
        .get(`http://numbersapi.com/${input}/${type}/`)
        .then(response => {
            console.log(response);
            dispatch({
                type: `${type.toUpperCase()}_SUCCESS`,
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: `${type.toUpperCase()}_FAILURE`,
                payload: error
            });
        })
    }
}

