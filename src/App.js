import './App.css';
import './Nullstyle.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Help from './components/Help/Help';
import Photos from './components/Photos/Photos';
import Games from './components/Games/Games';
import Massages from './components/Massages/Massages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MassagesContainer from './components/Massages/MassagesContainer';
const App = props=> {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Header state = {props.state.header}/>
        <div className='shellMainSide'>
          <SideBar state = {props.state.sideBar}/>
          <Routes>
            <Route path='/' element={<Profile store = {props.store}/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/games' element={<Games/>}/>
            <Route path='/massages/*' element={<MassagesContainer
            store = {props.store}
            />}/>
            <Route path='/photos' element={<Photos/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/settings' element={<Settings newText = {props.state.settings.newText} dispatch={props.dispatch}/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    );
}
export default App;