import './App.css';
import './Nullstyle.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Help from './components/Help/Help';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import MassagesContainer from './components/Massages/MassagesContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import { connect, Provider } from 'react-redux'
import GaysContainer from './components/GAYS/GaysContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { inizializateReady } from './redux/app-reducer';
import { setProfile } from './redux/auth-reducer';
import store from './redux/store-redux';
import { LazyLoaderHOC } from './noc/lazyLoad';
const MassagesContainer = React.lazy(() => import('./components/Massages/MassagesContainer'));
const App = props =>{
  useEffect(()=>{
    props.inizializateReady(props.userData.isAuth, props.userData.id)
  },[props.inizializated])
    if(!props.inizializated) return <div className='inizializating'></div> 
    return (
      <div className="wrapper">
        <HeaderContainer store = {props.store}/>
        <div className='shellMainSide'>
          <SideBarContainer store = {props.store}/>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer store = {props.store}/>}/>
            <Route path='/profile' element={<ProfileContainer store = {props.store}/>}/>
            <Route path='/music' element={<div>Music</div>}/>
            <Route path='/friends' element={<FriendsContainer/>}/>
            <Route path='/gays' element={<GaysContainer/>}/>
            <Route path='/games' element={<div>Games</div>}/>
            <Route path='/massages/*' element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <MassagesContainer store = {props.store}/>
            </React.Suspense>
            }/>
            {/* <Route path='/massages/*' element={LazyLoaderHOC(<MassagesContainer/>)}/> */}
            <Route path='/help' element={<Help/>}/>
            <Route path='/settings' element={<SettingsContainer store = {props.store}/>}/>
            <Route path='/users' element={<UsersContainer store={props.store}/>}/>
            <Route path='/login' element={<LoginContainer store={props.store}/>}/>
          </Routes>
        </div>
      </div>
  );
}
const mapStateToProps = state=>{
  return{
    inizializated: state.app.inizializated,
    userData: state.auth
  }
}

const AppContainer = compose(
  connect(mapStateToProps,{inizializateReady,setProfile})
)(App)
const MainApp = props =>{
  return(
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer store = {store}/>
      </Provider>
    </BrowserRouter>
  )
}
export default MainApp