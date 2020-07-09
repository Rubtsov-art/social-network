import axios from 'axios';
import { profileType } from '../types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3f4f3bf6-035a-4f75-a534-7545a1c1a8c4'
    },
});

export const usersAPI = {

    getUsers (currantPage = 1, pageSize = 10) {
       return instance.get(`users?page=${currantPage}&count=${pageSize}`)
        .then (response => {
            return response.data
        });
    },

    toEnemy (someUser : number) {
        return instance.delete(`follow/${someUser}`)
    },

    toFriend (someUser : number) {
        return instance.post(`follow/${someUser}`)
    },
};

export enum resultCodeEnum {
    Success = 0,
    Error = 1
}

export enum resultCodeForCaptcha {
    captchaIsRequired = 10
}

type setLoginResponseType = {
    data: {
        id: number 
        email: string 
        login: string
    },
    resultCode: resultCodeEnum
    messages: Array<string>
}

type loginResponseType = {
    data: {
        id: number
    },
    resultCode: resultCodeEnum | resultCodeForCaptcha
    messages: Array<string>
}

export const loginAPI = {
    setLogin () {
        return instance.get<setLoginResponseType>('auth/me').then(res => res.data)
    },

    login (email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<loginResponseType>('auth/login', {email, password, rememberMe, captcha})
            .then(res => res.data)
    },

    logout () {
        return instance.delete('auth/login')
    },
};

export const profileAPI = {
    setUserProfile (userId : number) {
       return instance.get(`profile/${userId}`)
    },

    getUserStatus (userId : number) {
        return instance.get(`profile/status/${userId}`)
    },

    updateUserStatus (newStatus : string) {
        return instance.put(`profile/status`, {status: newStatus})
    },

    saveUserPhoto (userPhoto : any) {
        const formData = new FormData();
        formData.append('image', userPhoto);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form=data'
            }
        })
    },

    saveUserProfile (profile : profileType) {
        return instance.put(`profile`, profile)
    }
};

export const  securityAPI = {
        getCaptchaURL () {
        return instance.get(`security/get-captcha-url`)
     },
}