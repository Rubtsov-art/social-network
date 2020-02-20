


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

    // addPost () {
    //     let newPost = {
    //         id: '4', 
    //         message: this.getState().profilePage.postFieldValue,
    //     };
    //     this.getState().profilePage.postsData.push(newPost);
    //     this._collSubscriber(this.getState());
    // },

    // changeInTextarea (text) {
    //     this.getState().profilePage.postFieldValue = text;
    //     this._collSubscriber(this.getState());
    // },

    subscribe (observer) {
        this._collSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: '4', 
                message: this.getState().profilePage.postFieldValue,
            };
            this.getState().profilePage.postsData.push(newPost);
            this._collSubscriber(this.getState());
        } else if (action.type === 'CHANGE-IN-TEXTAREA') {
            this.getState().profilePage.postFieldValue = action.newText;
            this._collSubscriber(this.getState());
        }
    }

};

export default store;
window.store = store;