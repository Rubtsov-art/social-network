import {renderAllPage} from "../renderAllPage";


let state = {
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

    
};

export let addPost = () => {
    debugger;
    let newPost = {
        id: '4', 
        message: state.profilePage.postFieldValue,
    };
    state.profilePage.postsData.push(newPost);
    renderAllPage(state);
};

export let changeInTextarea = (text) => {
    state.profilePage.postFieldValue = text;
    renderAllPage(state);
};

export default state