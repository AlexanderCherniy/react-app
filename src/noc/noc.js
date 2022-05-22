import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'


const AnonimGoLogin = (WrappedComponent)=>{
    const mapAnonimStateToProps = state=>{
        return{
            isAuth: state.auth.isAuth
        } 
    }
    const HOC = (props)=>{
        if(!props.isAuth) return <Navigate to='/login'/>
        return <WrappedComponent {...props}/>
    }
    return connect(mapAnonimStateToProps)(HOC)
}
export default AnonimGoLogin