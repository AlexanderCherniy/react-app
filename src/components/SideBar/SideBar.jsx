import { NavLink } from 'react-router-dom';
import itemSideBar from './SideBar.module.css';


const SideBarArh = props =>{
  return(
    <li className={itemSideBar.item}>
      <NavLink to={props.to} className={link=>link.isActive ? itemSideBar.activeLink : itemSideBar.item}>{props.text}</NavLink>
    </li>
  )
}

let SideBar = props=>{
  const SideBarInfo  = props.state.sideBarLinks.map(l=> <SideBarArh to={l.to} text={l.text}/>)
    return(
      <div className={itemSideBar.sideBar}>
      <div className={itemSideBar.sideBar__list}>
        {SideBarInfo}
      </div>
    </div>
    )
}
export default SideBar
// const SideBarArh = props =>{
//   return(
//     <li className={itemSideBar.item}>
//       <NavLink to={props.to} className={link=>link.isActive ? itemSideBar.activeLink : itemSideBar.item}>{props.text}</NavLink>
//     </li>
//   )
// }

// let SideBar = props=>{
//   const SideBarInfo  = props.state.sideBarLinks.map(l=> <SideBarArh to={l.to} text={l.text}/>)
//     return(
//       <div className={itemSideBar.sideBar}>
//       <div className={itemSideBar.sideBar__list}>
//         {SideBarInfo}
//       </div>
//     </div>
//     )
// }