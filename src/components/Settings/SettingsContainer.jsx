import { connect } from 'react-redux'
import {changeSettingsAction} from '../../redux/settings-reducer'
import Settings from './Settings'
const mapStateToProps = state =>{
    return{
        newText : state.settings.newText
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeSettings: text => dispatch(changeSettingsAction(text)),
    }
}
const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)
export default SettingsContainer