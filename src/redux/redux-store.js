import {combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsListReducer from './friendsListReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsList: friendsListReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;