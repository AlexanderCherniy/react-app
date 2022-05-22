import itemSideBar from './SideBar.module.css';

let SideBar = props=>{
    return(
      <div className={itemSideBar.sideBar}>
      <div className={itemSideBar.sideBar__list}>
        {props.SideBarInfo}
      </div>
    </div>
    )
}
export default SideBar