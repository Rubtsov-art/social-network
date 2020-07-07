import { getLogin } from './authReducer';

const INITIALIZED = 'INITIALIZED';

type initStateType = {
    initialized: boolean
}

let initialState: initStateType = {
    initialized: false,
}

type actionsType = initializedSuccessActionType

const appReducer = (state: initStateType = initialState, action: actionsType): initStateType => {
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