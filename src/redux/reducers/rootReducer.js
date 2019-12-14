import {combineReducers} from "redux";
import todoReducer from './todoReducer';

export default combineReducers({todos: todoReducer});

//store a bağlamak için yaparız. Tüm reducerları birbirlerine bağlar 
//daha fazla reducer için virgülle ayırabilirdik 

