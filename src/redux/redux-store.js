import {combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import friendsListReducer from './friendsListReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsList: friendsListReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;