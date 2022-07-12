import React, { ComponentType, Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppState } from '../redux/store-redux'
import { JSXElementConstructor } from 'react'
import { ActionType, SideBarActions } from '../redux/sideBar-reducer'

type HOCProps = {
    oldURL: string
    setOldURL: (newUrl: string)=> void,
    setSelectedKeys: ()=> void,
    setSelectedSidebarLinks: ()=> void
}
export const OldURL = (WrappedComponent:ComponentType<any>)=>{
    const mapOldStateToProps = (state:AppState)=>{
        return{
            oldURL: state.sideBar.oldURL
        } 
    }
    const mapOldDispatchToProps = (dispatch: Dispatch<ActionType>)=>{
        return{
            setOldURL: (newUrl: string)=> dispatch(SideBarActions.setOldURL(newUrl)),
            setSelectedKeys: ()=> dispatch(SideBarActions.setSelectedKeys()),
            setSelectedSidebarLinks: ()=> dispatch(SideBarActions.setSelectedSideBarLinks())
        } 
    }
    const HOC = (props:HOCProps)=>{
        useEffect(()=>{
        if(props.oldURL !== window.location.href){
            props.setSelectedKeys()
            props.setSelectedSidebarLinks()
            props.setOldURL(window.location.href)
        }
        },[]) 
        return <WrappedComponent {...props}/>
    }
    return connect(mapOldStateToProps,mapOldDispatchToProps)(HOC)
}