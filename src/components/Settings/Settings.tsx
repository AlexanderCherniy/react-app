import SettingsClass from './Settings.module.css'
import React from 'react'
import cn from 'classnames'
type Props = {
    blackTheme: boolean
    newText: string
    changeSettings: (text:string)=> void
    setBlackTheme: (blackTheme:boolean)=> void
}
const Settings: React.FC<Props> = (props) => {
    const buttonClasses = cn(SettingsClass.useBlack, { [SettingsClass.useWhite]: props.blackTheme === true })
    const buttonText = props.blackTheme === false ? 'Use Black Theme' : 'Use White Theme'
    const inputRef = React.useRef<HTMLInputElement>(null)
    const changeSettingsFunc = () => {
        //@ts-ignore
        let text = inputRef.current.value
        props.changeSettings(text)
    }
    return (
        <div className={SettingsClass.photos}>
            <div className={SettingsClass.container}>
                <div className='title'>Settings</div>
                    <input type="text" ref={inputRef} onChange={changeSettingsFunc} value={props.newText} />
                    <button onClick={() => props.setBlackTheme(!props.blackTheme)} className={buttonClasses}>
                        {buttonText}
                    </button>
            </div>
        </div>
    )
}
export default Settings