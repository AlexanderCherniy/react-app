import { changeStatus } from '../../../../redux/profile-reducer'
import ProfileReducer from '../../../../redux/profile-reducer'
let state = {
    statusText: 'Напишите о себе',
}
describe("test profile status page",()=>{
    test("test symbols added in status",()=>{
        let action = changeStatus("СОСИ")
        let newState = ProfileReducer(state,action)
        expect(newState.statusText).toBe("СОСИ")
    })
})