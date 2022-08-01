import './App.css';
import './Nullstyle.css';
import HeaderComponent from './components/Header/Header';
import Help from './components/Help/Help';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import SideBar from './components/SideBar/SideBar';
//@ts-ignore
import FriendsContainer from './components/Friends/FriendsContainer';
import SelectionPage from './components/Login/selectionPage';
import { connect, Provider, useDispatch, useSelector } from 'react-redux'
//@ts-ignore
import GaysContainer from './components/GAYS/GaysContainer';
import React, { useEffect } from 'react';
import { compose } from 'redux';
import { inizializateReady } from './redux/app-reducer';
import store, { AppState } from './redux/store-redux';
import { actions } from './redux/settings-reducer';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import PoliticsNews from './components/News/PoliticsNews/PoliticsNews';
const Massages = React.lazy(() => import('./components/Massages/Massages'));
//@ts-ignore
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/Users'));
const ChatPage = React.lazy(() => import('./components/ChatPage/ChatPage'));
const Login = React.lazy(() => import('./components/Login/Login'));

const App: React.FC = props => {
  const inizializated = useSelector((state: AppState) => state.app.inizializated)
  const userData = useSelector((state: AppState) => state.auth)
  const blackThemeP = useSelector((state: AppState) => state.settings.blackTheme)
  const dispatch = useDispatch()
  const users = useSelector((state:AppState)=> state.massagesPage.users)
  
  //@ts-ignore
  const inizializateReadyP = (isAuth: boolean, id: number) => dispatch(inizializateReady(isAuth, id))
  localStorage.setItem('blackTheme', blackThemeP);
  const blackTheme = localStorage.getItem('blackTheme') === 'true';
  // blackTheme === true ? normalPhone : blackPhone
  const { Header, Content } = Layout;
  useEffect(() => {
    inizializateReadyP(userData.isAuth, userData.id)
  }, [inizializated])
  if (!inizializated) return <div className='inizializating'></div>
  return (
    <Layout style={{ height: '100vh', overflowX: 'hidden' }}>
    <HeaderComponent />
    <Layout  >
      <Layout >

          {userData.isAuth === true ? <SideBar /> : <div></div>} 
        <Layout style={{ padding: '0 24px 24px 0'}}>

          <Content
            className="site-layout-background"
            style={ window.innerWidth <= 600 ? {
              padding: 0,
              margin: 0,
              minHeight: 280,
            } : {
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path="/" element={<Navigate to="/profile" />} />
                <Route path='/profile' element={<ProfileContainer />} />
                <Route path='/massages/*' element={<Massages />} />
                <Route path='/chat' element={<ChatPage />} />
                {/* <Route path='/music' element={<div>Music</div>} /> */}
                <Route path='/friends' element={<FriendsContainer />} />
                <Route path='/gays' element={<GaysContainer />} />
                {/* <Route path='/games' element={<div>Games</div>} /> */}
                <Route path='/help' element={<Help />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/selectionPage' element={<SelectionPage />} />
                <Route path='/news' element={<PoliticsNews/>} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </React.Suspense>
            {/* <div style={{display: 'flex', alignItems: 'center', position: 'relative' ,left: '45%', padding: '7px 0'}}>@Created by Alexander Cherniy</div> */}
          </Content>
        </Layout>

      </Layout>
    </Layout>
    </Layout>
  );
}

const AppContainer = compose<React.ComponentType>(
  connect(null, { inizializateReady, setBlackTheme: actions.setBlackTheme })
)(App)
const MainApp:React.FC = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}
export default MainApp
