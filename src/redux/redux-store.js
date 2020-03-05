import {combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsListReducer from './friendsListReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsList: friendsListReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;