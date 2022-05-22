import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login";
import {setError} from '../../redux/auth-reducer'
class LoginContainer extends React.Component{
    render = ()=> <Login  {...this.props} />
}

let mapStateToProps = (state)=>{
    return{
        userData: state.auth,
        error: state.auth.error
    }
}
export default compose(
    connect(mapStateToProps,{setError})
)(LoginContainer)
