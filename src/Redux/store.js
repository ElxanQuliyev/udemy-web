// import {applyMiddleware,combineReducers,createStore } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
// import thunk from "redux-thunk"


// const reducer=combineReducers({});


// const middleware=[thunk]

// const store =createStore(
//     reducer,
//     {},
//     composeWithDevTools(...middleware)
// )

// export default store;


import {createStore,combineReducers, applyMiddleware} from "redux";
import { ChangeColorReducer } from "./Reducers/ColorReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer=combineReducers({
    colorReducer:ChangeColorReducer,
})
const initialState={}
const middleware = [thunk];

const store=createStore(
    reducer,
    initialState,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store;















