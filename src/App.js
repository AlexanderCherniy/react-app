import './App.css';
import './Nullstyle.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Games from './components/Games/Games';
import Help from './components/Help/Help';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MassagesContainer from './components/Massages/MassagesContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import { connect, Provider } from 'react-redux'
import GaysContainer from './components/GAYS/GaysContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import React from 'react';
import { compose } from 'redux';
import { inizializateReady } from './redux/app-reducer';
import { setProfile } from './redux/auth-reducer';
class App extends React.Component{
  componentDidMount = ()=> {
    this.props.inizializateReady(this.props.userData.isAuth, this.props.userData.id)
  }
  render(){
    if(!this.props.inizializated) return <div className='inizializating'></div> 
    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
      <div className="wrapper">
        <HeaderContainer store = {this.props.store}/>
        <div className='shellMainSide'>
          <SideBarContainer store = {this.props.store}/>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer store = {this.props.store}/>}/>
            <Route path='/profile' element={<ProfileContainer store = {this.props.store}/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/friends' element={<FriendsContainer/>}/>
            <Route path='/gays' element={<GaysContainer/>}/>
            <Route path='/games' element={<Games/>}/>
            <Route path='/massages/*' element={<MassagesContainer store = {this.props.store}/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/settings' element={<SettingsContainer store = {this.props.store}/>}/>
            <Route path='/users' element={<UsersContainer store={this.props.store}/>}/>
            <Route path='/login' element={<LoginContainer store={this.props.store}/>}/>
          </Routes>
        </div>
      </div>
      </Provider>
      </BrowserRouter>
  );
  }
}
const mapStateToProps = state=>{
  return{
    inizializated: state.app.inizializated,
    userData: state.auth
  }
}
export default compose(
  connect(mapStateToProps,{inizializateReady,setProfile})
)(App)