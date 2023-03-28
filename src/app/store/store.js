import {combineReducers, createStore} from "redux";
import {calculatorComponentsReducer} from "./calculatorComponentsReducer";

const rootReducer = combineReducers({
    calculatorComponents: calculatorComponentsReducer,
})

export const store = createStore(rootReducer)