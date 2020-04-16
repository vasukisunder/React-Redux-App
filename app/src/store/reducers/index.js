import { combineReducers } from 'redux';
import { reducer as trivia } from './reducers';
import { yearReducer as yearTrivia } from './reducers';
import { mathReducer as mathTrivia } from './reducers';

export default combineReducers({
    trivia, yearTrivia, mathTrivia
});