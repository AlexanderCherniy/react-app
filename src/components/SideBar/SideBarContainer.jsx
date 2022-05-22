import { NavLink } from 'react-router-dom';
import itemSideBar from './SideBar.module.css';
import SideBar from './SideBar';
import { connect } from 'react-redux';

const SideBarArh = props =>{
  return(
    <li className={itemSideBar.item}>
      <NavLink to={props.to} className={link=>link.isActive ? itemSideBar.activeLink : itemSideBar.item}>{props.text}</NavLink>
    </li>
  )
}
let mapStateToProps = state =>{
  return{
    SideBarInfo : state.sideBar.sideBarLinks.map(l=> <SideBarArh to={l.to} key={l.id} text={l.text}/>)
  }
}
let SideBarContainer = connect(mapStateToProps)(SideBar)
export default SideBarContainer