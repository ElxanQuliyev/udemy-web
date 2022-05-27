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
import { darkModeReducer } from "./Reducers/DarkModeReducer";
import { userLoginReducer, userRegisterReducer } from "./Reducers/UserReducer";

const reducer=combineReducers({
    colorReducer:ChangeColorReducer,
    darkMode:darkModeReducer,
    loginUser:userLoginReducer,
    registerUser:userRegisterReducer
})
const userInfoFromLS=localStorage.getItem("userInfo") ?
 JSON.parse(localStorage.getItem("userInfo"))
 :null


const initialState={
    loginUser:{
        userInfo:userInfoFromLS
    }
}
const middleware = [thunk];


const store=createStore(
    reducer,
    initialState,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store;















