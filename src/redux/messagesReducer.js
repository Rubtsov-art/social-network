const ADD_INTERLOCUTOR = 'ADD-INTERLOCUTOR';
const CHANGE_IN_DIALOG_FIELD = 'CHANGE-IN-DIALOG-FIELD';

let initialState = {
    dialogListData: [
        { link: '/messages/pasha', user: 'Pasha' },
        { link: '/messages/irina', user: 'Irina' },
        { link: '/messages/vitia', user: 'Vitia' },
    ],

    postFieldValue: '',

    messageData: [
        { id: '1', message: 'Privet', },
        { id: '2', message: 'I am Irina' },
        { id: '3', message: 'I am Vitia' },
    ],
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INTERLOCUTOR:{
            let newInterlocutor = {
                link: '/messages/interlocutor',
                user: state.postFieldValue,
            };
            return ({
                ...state,
                dialogListData: [ ...state.dialogListData, newInterlocutor],
            });
        }
        case CHANGE_IN_DIALOG_FIELD: {
            return ({
                ...state,
                postFieldValue: action.newName
            })
        }
        default: return state;
    };
};

export const actionCreatorAddInterlocutor = () => {
    return ({type: ADD_INTERLOCUTOR})
};

export const actionCreatorChangeInDialogList = (name) => {
    return ({type: CHANGE_IN_DIALOG_FIELD, newName: name})
};

export default messagesReducer;