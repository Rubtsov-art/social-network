import { getLogin } from './authReducer';

const INITIALIZED = 'INITIALIZED';

type initStateType = {
    initialized: boolean
}

let initialState: initStateType = {
    initialized: false,
}

const appReducer = (state: initStateType = initialState, action: any): initStateType => {
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

type initializedSuccessActionType = {
    type: typeof INITIALIZED
}

const initializedSuccess = () :initializedSuccessActionType => {
    return ({type: INITIALIZED})
};

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getLogin());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;