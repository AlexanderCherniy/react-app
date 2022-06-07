import { connect } from 'react-redux'
import {changeSettingsAction, setBlackTheme} from '../../redux/settings-reducer'
import Settings from './Settings'
const mapStateToProps = state =>{
    return{
        newText : state.settings.newText,
        blackTheme: state.settings.blackTheme
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeSettings: text => dispatch(changeSettingsAction(text)),
        setBlackTheme: blackTheme => dispatch(setBlackTheme(blackTheme)),
    }
}
const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)
export default SettingsContainer