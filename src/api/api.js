import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3f4f3bf6-035a-4f75-a534-7545a1c1a8c4'
    },
});

export const usersAPI = {

    getUsers (currantPage, pageSize) {
       return instance.get(`users?page=${currantPage}&count=${pageSize}`)
        .then (response => {
            return response.data
        });
    },

    toEnemy (someUser) {
        return instance.delete(`follow/${someUser}`)
    },

    toFriend (someUser) {
        return instance.post(`follow/${someUser}`)
    },
};


export const loginAPI = {
    setLogin () {
        return instance.get('auth/me')
    },
};

export const profileAPI = {
    setUserProfile (userId) {
       return instance.get(`profile/${userId}`)
    },
};
