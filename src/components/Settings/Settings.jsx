import SettingsClass from './Settings.module.css'
import React from 'react'
import {changeSettingsAction} from '../../redux/settings-reducer'
let Settings = props =>{
    let createRef = React.createRef()
    let changeSettingsFunc = ()=>{
        let text = createRef.current.value
        props.dispatch(changeSettingsAction(text))
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