import { combineReducers } from 'redux';
import converterReducer from 'reducers/converter';

export default combineReducers({
    converter: converterReducer
})