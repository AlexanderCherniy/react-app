import { UserType } from "../redux/GlobalTypes";
import { defaultAxios } from "./api-dal";



type getUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
type FollowAndUnfollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export const UsersApi = {
    getUsers: (page = 1, pageSize = 9, term: string | null, searchParams: "null" | "true" | "false") => defaultAxios.get<getUsersType>
        (`users?page=${page}&count=${pageSize}&term=${term}&friend=${searchParams === "null" ? "null" : searchParams === "true" ? "true" : "false"}`).then(response => response.data),

    deleteFollowUsers: (id: number) => defaultAxios.delete<FollowAndUnfollowType>(`follow/${id}`).then(response => response),

    postFollowUsers: (id: number) => defaultAxios.post<FollowAndUnfollowType>(`follow/${id}`, {}).then(response => response),
}