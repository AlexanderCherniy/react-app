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
          <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path='/profile' element={<ProfileContainer/>}/>
            <Route path='/music' element={<div>Music</div>}/>
            <Route path='/friends' element={<FriendsContainer/>}/>
            <Route path='/gays' element={<GaysContainer/>}/>
            <Route path='/games' element={<div>Games</div>}/>
            <Route path='/massages/*' element={<MassagesContainer/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/settings' element={<SettingsContainer/>}/>
            <Route path='/users' element={<UsersContainer/>}/>
            <Route path='/login' element={<LoginContainer/>}/>
          </Routes>
          </React.Suspense>
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
  connect(mapStateToProps,{inizializateReady,setBlackTheme})
)(App)
const MainApp = ()=>{
  return(
    <HashRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </HashRouter>
  )
}
export default MainApp