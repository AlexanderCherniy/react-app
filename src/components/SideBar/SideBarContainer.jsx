import { NavLink } from 'react-router-dom';
import itemSideBar from './SideBar.module.css';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import { setShowSideBar } from '../../redux/sideBar-reducer';

const SideBarArh = props =>{
  return(
    <li className={itemSideBar.item}>
      <NavLink to={props.to} className={link=>link.isActive ? itemSideBar.activeLink : itemSideBar.item}>{props.text}</NavLink>
    </li>
  )
}
const mapStateToProps = state =>{
  return{
    SideBarInfo : state.sideBar.sideBarLinks.map(l=> <SideBarArh to={l.to} key={l.id} text={l.text}/>),
    AnonimSideBarInfo : state.sideBar.sideBarLinks.filter(l=> l.id !== 1 && l.id !== 2).map(l=> <SideBarArh to={l.to} key={l.id} text={l.text}/>),
    showSideBar: state.sideBar.showSideBar,
    isAuth: state.auth.isAuth
  }
} 
export default connect(mapStateToProps,{setShowSideBar})(SideBar)