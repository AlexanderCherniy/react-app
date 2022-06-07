import './App.css';
import './Nullstyle.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Help from './components/Help/Help';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import SettingsContainer from './components/Settings/SettingsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import { connect, Provider } from 'react-redux'
import GaysContainer from './components/GAYS/GaysContainer';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { inizializateReady } from './redux/app-reducer';
import { setProfile } from './redux/auth-reducer';
import store from './redux/store-redux';
import { LazyLoaderHOC } from './noc/lazyLoad';
import { setBlackTheme } from './redux/settings-reducer';
const MassagesContainer = React.lazy(() => import('./components/Massages/MassagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const App = props =>{
  localStorage.setItem('blackTheme', props.blackTheme);
  const blackTheme = localStorage.getItem('blackTheme') === 'true';
  useEffect(()=>{
    props.inizializateReady(props.userData.isAuth, props.userData.id)
  },[props.inizializated])
    if(!props.inizializated) return <div className='inizializating'></div> 
    return (
      <div className={blackTheme ? "wrapper blackTheme" : "wrapper"}>
        <HeaderContainer/>
        <div className='shellMainSide'>
          <SideBarContainer/>
          <Routes>
            <Route path='/profile/:userId' element={
              <React.Suspense fallback={<div>Загрузка...</div>}>
                <ProfileContainer/>
              </React.Suspense>}/>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path='/profile' element={
              <React.Suspense fallback={<div>Загрузка...</div>}>
                <ProfileContainer/>
            </React.Suspense>}/>
            <Route path='/music' element={<div>Music</div>}/>
            <Route path='/friends' element={<FriendsContainer/>}/>
            <Route path='/gays' element={<GaysContainer/>}/>
            <Route path='/games' element={<div>Games</div>}/>
            <Route path='/massages/*' element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <MassagesContainer/>
            </React.Suspense>
            }/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/settings' element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <SettingsContainer/>
            </React.Suspense>
            }/>
            <Route path='/users' element={
              <React.Suspense fallback={<div>Загрузка...</div>}>
                <UsersContainer/>
              </React.Suspense>}/>
            <Route path='/login' element={
              <React.Suspense fallback={<div>Загрузка...</div>}>
                <LoginContainer/>
              </React.Suspense>}/>
          </Routes>
        </div>
      </div>
  );
}
const mapStateToProps = state=>{
  return{
    inizializated: state.app.inizializated,
    userData: state.auth,
    blackTheme: state.settings.blackTheme,
  }
}

const AppContainer = compose(
  connect(mapStateToProps,{inizializateReady,setProfile,setBlackTheme})
)(App)
const MainApp = ()=>{
  return(
    <HashRouter>
      <Provider store={store}>
        <AppContainer store = {store}/>
      </Provider>
    </HashRouter>
  )
}
export default MainApp