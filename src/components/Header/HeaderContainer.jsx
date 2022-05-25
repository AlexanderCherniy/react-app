import Header from './Header';
import { connect } from 'react-redux';
import React from 'react';
import {setUserData,authToggle,setPhoto, setProfile} from '../../redux/auth-reducer'
const HeaderContainer = props=>{
  return <Header {...props} />
}
const mapStateToProps = state=>{
  return{
    headerLinks: state.header.headerLinks,
    userData: state.auth
  }
}
export default connect(mapStateToProps, {setUserData,authToggle,setPhoto,setProfile})(HeaderContainer)