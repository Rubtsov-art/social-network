let initialState = {
    friends: [
        { name: 'Pasha' },
        { name: 'Irina' },
        { name: 'Vitia' },
    ],
};

const friendsListReducer = (state = initialState, action) => {
        switch (action.type) {
            case 1:
                return state;
            default: return state;
        }
}

export default friendsListReducer;