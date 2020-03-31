import { getLogin } from './authReducer';

const INITIALIZED = 'INITIALIZED';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED: {
            return ({
                ...state,
                initialized: true
            })
        }
        default: return state;
    };
};

const initializedSuccess = () => {
    return ({type: INITIALIZED})
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getLogin());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;