import SettingsClass from './Settings.module.css'
import React from 'react'
let Settings = props =>{
    let createRef = React.createRef()
    let changeSettingsFunc = ()=>{
        let text = createRef.current.value
        props.changeSettings(text)
    }
    return(
        <div className={SettingsClass.photos}>
            <div className={SettingsClass.container}>
                <div className='title'>Settings</div>
                <input type="text" ref={createRef} onChange={changeSettingsFunc} value={props.newText} />
            </div>
        </div>
    )
}
export default Settings