import {createStore, combineReducers} from "redux";
import reducer from "./mainReducer";

const reducers = combineReducers({
    main: reducer}
);

let store = createStore(reducers);

export default store;