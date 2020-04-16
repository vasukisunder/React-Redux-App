const triviaState = {
    trivia: "261 is number of possible unfolded tesseract patterns.",
    isFetching: false,
    error: ''
};

const yearState = {
    trivia: "2013 is the year that China will attempt its first unmanned Moon landing",
    
    isFetching: false,
    error: ''
};

const mathState = {
    trivia: "5 is the number of platonic solids.",
    isFetching: false,
    error: ''
};

export const reducer = (state = triviaState, action) => {
    switch(action.type) {
        case 'TRIVIA_START':
            return {
                ...state,
                isFetching: true
            };
        case 'TRIVIA_SUCCESS': 
            return {
                isFetching: false,
                trivia: action.payload,
                error: ''
            };
        case 'TRIVIA_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}

export const yearReducer = (state = yearState, action) => {
    switch(action.type) {
        case 'YEAR_START':
            return {
                ...state,
                isFetching: true
            };
        case 'YEAR_SUCCESS': 
            return {
                isFetching: false,
                trivia: action.payload,
                error: ''
            };
        case 'YEAR_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const mathReducer = (state = mathState, action) => {
    switch(action.type) {
        case 'MATH_START':
            return {
                ...state,
                isFetching: true
            };
        case 'MATH_SUCCESS': 
            return {
                isFetching: false,
                trivia: action.payload,
                error: ''
            };
        case 'MATH_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}



