import {combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsListReducer from './friendsListReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsList: friendsListReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;

export default store;