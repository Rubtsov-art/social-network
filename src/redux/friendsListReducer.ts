type friend = {
    name: string
}

export type initialType = {
    friends: Array<friend>
}

let initialState: initialType = {
    friends: [
        { name: 'Pasha' },
        { name: 'Irina' },
        { name: 'Vitia' },
    ],
};

const friendsListReducer = (state = initialState, action: any): initialType => {
        switch (action.type) {
            case 1:
                let stateCopy = {...state};
                return stateCopy;
            default: return state;
        }
}

export default friendsListReducer;