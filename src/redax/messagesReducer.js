const ADD_INTERLOCUTOR = 'ADD-INTERLOCUTOR';
const CHANGE_IN_DIALOG_FIELD = 'CHANGE-IN-DIALOG-FIELD';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_INTERLOCUTOR:
            let newInterlocutor = {
                link: '/messages/interlocutor',
                user: state.postFieldValue,
            };
            state.dialogListData.push(newInterlocutor);
            return state;
        case CHANGE_IN_DIALOG_FIELD: 
            state.postFieldValue = action.newName;
            return state;
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