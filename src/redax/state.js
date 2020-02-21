import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";


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

        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().messagesPage = messagesReducer(this.getState().messagesPage, action);
        this._collSubscriber(this.getState());
    },
    
};

export default store;
window.store = store;