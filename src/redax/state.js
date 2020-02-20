const ADD_POST = 'ADD-POST';
const CHANGE_IN_TEXTAREA = 'CHANGE-IN-TEXTAREA';
const ADD_INTERLOCUTOR = 'ADD-INTERLOCUTOR';
const CHANGE_IN_DIALOG_FIELD = 'CHANGE-IN-DIALOG-FIELD';

let store = {
    _state : {
        profilePage: {
            postsData: [
                { id: '1', message: 'first post' },
                { id: '2', message: 'second post' },
                { id: '3', message: 'third post' },
            ],
    
            postFieldValue: "write post",
        },
    
        messagesPage: {
    
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
        },
    
        friendsList: {
            friends: [
                { name: 'Pasha' },
                { name: 'Irina' },
                { name: 'Vitia' },
            ],
        },
    
        
    },

    _collSubscriber () {
        console.log('state changed')
    },

    getState () {
        return this._state;
    },

    subscribe (observer) {
        this._collSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: '4', 
                message: this.getState().profilePage.postFieldValue,
            };
            this.getState().profilePage.postsData.push(newPost);
            this._collSubscriber(this.getState());
        } else if (action.type === CHANGE_IN_TEXTAREA) {
            this.getState().profilePage.postFieldValue = action.newText;
            this._collSubscriber(this.getState());
        } else if (action.type === ADD_INTERLOCUTOR) {
            let newInterlocutor = {
                link: '/messages/interlocutor',
                user: this.getState().messagesPage.postFieldValue,
            };
            this.getState().messagesPage.dialogListData.push(newInterlocutor);
            this._collSubscriber(this.getState());
        } else if (action.type === CHANGE_IN_DIALOG_FIELD) {
            this.getState().messagesPage.postFieldValue = action.newName;
            this._collSubscriber(this.getState());
        }
    },

};

export const actionCreatorAddPost = () => {
    return ({type: ADD_POST})
};

export const actionCreatorChangeInTextarea = (text) => {
    return ({type: CHANGE_IN_TEXTAREA, newText: text})
};

export const actionCreatorAddInterlocutor = () => {
    return ({type: ADD_INTERLOCUTOR})
};

export const actionCreatorChangeInDialogList = (name) => {
    return ({type: CHANGE_IN_DIALOG_FIELD, newName: name})
};

export default store;
window.store = store;