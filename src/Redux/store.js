import {applyMiddleware,combineReducers,createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"


const reducer=combineReducers({});


const middleware=[thunk]

const store =createStore(
    reducer,
    {},
    composeWithDevTools(...middleware)
)

export default store;

