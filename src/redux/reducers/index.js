import {combineReducers} from "redux";
import dinoReducer from './dinoReducer';

const rootReducer = combineReducers({
    dinoReducer, //contains dinos
});

export default rootReducer;