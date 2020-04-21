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

    login (email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },

    logout () {
        return instance.delete('auth/login')
    },
};

export const profileAPI = {
    setUserProfile (userId) {
       return instance.get(`profile/${userId}`)
    },

    getUserStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateUserStatus (newStatus) {
        return instance.put(`profile/status`, {status: newStatus})
    },

    saveUserPhoto (userPhoto) {
        const formData = new FormData();
        formData.append('image', userPhoto);
        return instance.put(`profile/photo`, formData, {
            'Content-Type': 'multipart/form=data'
        })
    },

    saveUserProfile (profile) {
        return instance.put(`profile`, profile)
    }
};

export const  securityAPI = {
        getCaptchaURL () {
        return instance.get(`security/get-captcha-url`)
     },
}