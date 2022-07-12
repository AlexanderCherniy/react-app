import { ProfileType } from "../redux/GlobalTypes"
import { defaultAxios } from "./api-dal"

type UpdateStatusType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
export type DefaultDataType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type UpdatePhotoType = {
    resultCode: number
    messages: Array<string>
    data: {
        photos: {
            large: string
            small: string
        }
    }
}

export const ProfileApi = {
    getProfile: (userId: number) => defaultAxios.get<ProfileType>(`profile/${userId}`).then(response => response.data),
    getStatus: (id: number) => defaultAxios.get(`profile/status/${id}`),
    updateStatus: (status: string) => {
        return defaultAxios.put<UpdateStatusType>(`profile/status`, { status })
    },
    updatePhoto: (photo: string) => {
        const formData = new FormData()
        formData.append("image", photo)
        return defaultAxios.put<UpdatePhotoType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile: (profile: ProfileType) => {
        return defaultAxios.put<ProfileType>(`profile`, profile)
    }
}