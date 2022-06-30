import Header from './Header';
import { connect } from 'react-redux';
import React from 'react';
const HeaderContainer = props=>{
  return <Header {...props} />
}
const mapStateToProps = state=>{
  return{
    headerLinks: state.header.headerLinks,
    userData: state.auth
  }
}
export default connect(mapStateToProps, {})(HeaderContainer)