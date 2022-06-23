import { connect } from 'react-redux'
import {changeSettingsAction, setBlackTheme} from '../../redux/settings-reducer'
import Settings from './Settings'
import {AppState} from '../../redux/store-redux'
type mapStateToPropsType = {
    newText : string
    blackTheme: boolean
}
type mapDispatchToPropsType = {
    changeSettings: (text:string) => void
    setBlackTheme: (blackTheme:boolean) => void
}
const mapStateToProps = (state:AppState):mapStateToPropsType =>{
    return{
        newText : state.settings.newText,
        blackTheme: state.settings.blackTheme
    }
}
const mapDispatchToProps = (dispatch: Function):mapDispatchToPropsType => {
    return {
        changeSettings: (text:string) => dispatch(changeSettingsAction(text)),
        setBlackTheme: (blackTheme:boolean) => dispatch(setBlackTheme(blackTheme)),
    }
}
const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)
export default SettingsContainer