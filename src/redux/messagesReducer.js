const ADD_INTERLOCUTOR = 'ADD-INTERLOCUTOR';

let initialState = {
    dialogListData: [
        { link: '/messages/pasha', user: 'Pasha' },
        { link: '/messages/irina', user: 'Irina' },
        { link: '/messages/vitia', user: 'Vitia' },
    ],

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
                user: action.newDialog,
            };
            return ({
                ...state,
                dialogListData: [ ...state.dialogListData, newInterlocutor],
            });
        }
        default: return state;
    };
};

export const actionCreatorAddInterlocutor = (newDialog) => {
    return ({type: ADD_INTERLOCUTOR, newDialog})
};

export default messagesReducer;