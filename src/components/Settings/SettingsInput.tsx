import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store-redux'
import { actions } from '../../redux/settings-reducer'

const SettingsInput:React.FC = ()=>{
    const newText = useSelector((state: AppState) => state.settings.newText)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const changeSettings = (text: string) => dispatch(actions.changeSettingsAction(text))

    const changeSettingsFunc = () => {
        //@ts-ignore
        let text = inputRef.current.value
        changeSettings(text)
    }
    return(
        <input type="text" ref={inputRef} onChange={changeSettingsFunc} value={newText} />
    )
}
export default SettingsInput