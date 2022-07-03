import SettingsClass from './Settings.module.css'
import React from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store-redux'
import {changeSettingsAction, setBlackTheme} from '../../redux/settings-reducer'

export const Settings: React.FC = (props) => {
    const blackTheme = useSelector((state: AppState)=> state.settings.blackTheme)
    const newText = useSelector((state: AppState)=> state.settings.newText)
    const dispatch = useDispatch()
    const changeSettings = (text:string) => dispatch(changeSettingsAction(text))
    const setBlackThemes = (blackTheme:boolean) => dispatch(setBlackTheme(blackTheme))

    const buttonClasses = cn(SettingsClass.useBlack, { [SettingsClass.useWhite]: blackTheme === true })
    const buttonText = blackTheme === false ? 'Use Black Theme' : 'Use White Theme'
    const inputRef = React.useRef<HTMLInputElement>(null)

    const changeSettingsFunc = () => {
        //@ts-ignore
        let text = inputRef.current.value
        changeSettings(text)
    }
    return (
        <div className={SettingsClass.photos}>
            <div className={SettingsClass.container}>
                <div className='title'>Settings</div>
                    <input type="text" ref={inputRef} onChange={changeSettingsFunc} value={newText} />
                    <button onClick={() => setBlackThemes(!blackTheme)} className={buttonClasses}>
                        {buttonText}
                    </button>
            </div>
        </div>
    )
}