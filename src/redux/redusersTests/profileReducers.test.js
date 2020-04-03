import profileReducer, { deletePost } from "../profileReducer";


it ('post must be deleted', () => {
// 1. test data

let action = deletePost(1);

let state = {
    postsData: [
        { id: '1', message: 'first post' },
        { id: '2', message: 'second post' },
        { id: '3', message: 'third post' },
    ],
}

// 2. action 

let newState = profileReducer(state, action)

// 3. expectation 

expect(newState.postsData.length).toBe(2);
})
