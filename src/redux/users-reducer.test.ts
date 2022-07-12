import { actions } from "./users-reducer"
import usersReducer from "./users-reducer";
import { UserType } from "./GlobalTypes";
import {initialState} from './users-reducer'
let state: typeof initialState
beforeEach(()=>{
    state = {
        users: [
            {id: 1, name: 'user1', status: 'status1', followed: false, photos: { small: 'small1', large: 'large1'}},
            {id: 2, name: 'user2', status: 'status2', followed: false, photos: { small: 'small2', large: 'large2'}},
            {id: 3, name: 'user3', status: 'status3', followed: true, photos: { small: 'small3', large: 'large3'}},
            {id: 4, name: 'user4', status: 'status4', followed: true, photos: { small: 'small4', large: 'large4'}}
        ] as Array<UserType>,
        totalCount: 0,
        pageSize: 9,
        currentPage: 1,
        loader: false,
        isBlocked: [] as number[],
        GlovalError: false,
        searchParams: "null" as "null" | "true" | "false",
        term: null as string | null
    }
})

test("check follow users", ()=>{
    const action = actions.toggleFollow(2)
    const newState = usersReducer(state,action)
    expect(newState.users[0].followed).toBeFalsy
    expect(newState.users[1].followed).toBeTruthy
})
test("check loader users page", ()=>{
    const action = actions.loader(true)
    const newState = usersReducer(state,action)
    expect(newState.loader).toBeTruthy
})
