const initialState = {
    trivia: "261 is number of possible unfolded tesseract patterns.",
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_SUCCESS': 
            return {
                isFetching: false,
                trivia: action.payload,
                error: ''
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}