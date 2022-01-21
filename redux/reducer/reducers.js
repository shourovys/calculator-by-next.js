import { combineReducers } from "redux";
import { calculatorReducers } from "./calculatorReducers";

const reducers = combineReducers({
   calculator: calculatorReducers
})
export default reducers