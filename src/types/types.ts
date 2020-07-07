import { appStateType } from "../redux/redux-store"

export type postDataType = {
    id: string,
    message: string
}

export type photosType = {
    small: string | null,
    large: string | null
}

export type profileType = {
    userId: number | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    photos: photosType, 
    contacts: {
        github: string | null,
        vk: string | null,
        facebook: string | null,
        instagram: string | null,
        twitter: string | null,
        website: string | null,
        youtube: string | null,
        mainLink: string | null,
    }

}

export type userType = {
    name: string,
    id: number,
    photos: photosType,
    status: null | string,
    followed: boolean,
    friend: boolean
}