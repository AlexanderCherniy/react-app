import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login";
import { setError } from '../../redux/auth-reducer'
const LoginContainer = props => {
    return <Login  {...props} />
}

let mapStateToProps = (state) => {
    return {
        userData: state.auth,
        error: state.auth.error
    }
}
export default compose(
    connect(mapStateToProps, { setError })
)(LoginContainer)
