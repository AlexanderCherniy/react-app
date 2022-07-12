import { UsersApi } from "../api/users-api"
import { ProfileCodes } from "./profile-reducer"
import { followUsers, unfollowUsers, downloadUsers, fillUsers } from "./users-reducer"
jest.mock('../api/api-dal')
const userAPIMock = UsersApi as jest.Mocked<typeof UsersApi>
const result = {
    resultCode: ProfileCodes.Good,
    messages: [],
    data: {}
}
const resultDownloadUsers = {
    error: null,
    items: [{id: 1, name: 'user1', status: 'status1', followed: false, photos: { small: 'small1', large: 'large1'}}],
    totalCount: 19822
}

test("check follow users thunk", async ()=>{
    //@ts-ignore
    userAPIMock.postFollowUsers.mockReturnValue(Promise.resolve(result))
    const thunk = followUsers(1)
    const dispatchMock = jest.fn()
    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(4)
})
test("check unfollow users thunk", async ()=>{
    //@ts-ignore
    userAPIMock.deleteFollowUsers.mockReturnValue(Promise.resolve(result))
    const thunk = unfollowUsers(1)
    const dispatchMock = jest.fn()
    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(4)
})
test( "check download users" ,async ()=>{
    userAPIMock.getUsers.mockReturnValue(Promise.resolve(resultDownloadUsers))
    const thunk = downloadUsers(0, 1, 9, null, "null")
    const dispatchMock = jest.fn()
    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(3)
})
test( "check fill users" ,async ()=>{
    userAPIMock.getUsers.mockReturnValue(Promise.resolve(resultDownloadUsers))
    const thunk = fillUsers(1, 9, null, "null")
    const dispatchMock = jest.fn()
    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(5)
})