import SettingsClass from './Settings.module.css'
import React from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store-redux'
import { actions } from '../../redux/settings-reducer'
import { OldURL } from '../../noc/oldURL'
import BreadCrumbContainer from '../BreadCrumb/BreadCrumb'
import SettingsInput from './SettingsInput'

const Settings: React.FC = React.memo((props) => {
    const blackTheme = useSelector((state: AppState) => state.settings.blackTheme)
    const dispatch = useDispatch()
    const setBlackThemes = (blackTheme: boolean) => dispatch(actions.setBlackTheme(blackTheme))

    const buttonClasses = cn(SettingsClass.useBlack, { [SettingsClass.useWhite]: blackTheme === true })
    const buttonText = blackTheme === false ? 'Use Black Theme' : 'Use White Theme'


    return (
        <div className={SettingsClass.photos}>
            <div className={SettingsClass.container} >
                <BreadCrumbContainer page='Settings' containerPage='SettingsPage'/>
                <SettingsInput/>
                <button onClick={() => setBlackThemes(!blackTheme)} className={buttonClasses}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
})

const SettingsUrlContainer = OldURL(Settings)
export default SettingsUrlContainer