import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppState } from '../redux/store-redux'
import { JSXElementConstructor } from 'react'

type HOCProps = {
    isMyProfile: boolean
    isAuth:boolean
}
const AnonimGoLogin = (WrappedComponent:ComponentType<any>)=>{
    const mapAnonimStateToProps = (state:AppState)=>{
        return{
            isAuth: state.auth.isAuth
        } 
    }
    const HOC = (props:HOCProps)=>{
        if(!props.isAuth) return <Navigate to='/selectionPage'/>
        return <WrappedComponent {...props}/>
    }
    return connect(mapAnonimStateToProps)(HOC)
}
export default AnonimGoLogin