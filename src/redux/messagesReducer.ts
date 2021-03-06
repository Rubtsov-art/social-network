const ADD_INTERLOCUTOR = 'ADD-INTERLOCUTOR';

type dialogListDataType = {
    link: string,
    user: string
}

type messageDataType = {
    id: string,
    message: string
}

export type initialStateType = {
    dialogListData: Array<dialogListDataType>,
    messageData: Array<messageDataType>
}

let initialState: initialStateType = {
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

type actionsType = actionCreatorAddInterlocutorType

const messagesReducer = (state = initialState, action: actionsType) => {
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

type actionCreatorAddInterlocutorType = {
    type: typeof ADD_INTERLOCUTOR,
    newDialog: string
}

export const actionCreatorAddInterlocutor = (newDialog: string): actionCreatorAddInterlocutorType => {
    return ({type: ADD_INTERLOCUTOR, newDialog})
};

export default messagesReducer;