import { combineReducers } from "redux";
import homeReducer from "./homeReducer"


const appReducer = combineReducers({
    home: homeReducer
});

export default appReducer