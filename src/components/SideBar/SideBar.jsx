import itemSideBar from './SideBar.module.css';

const Show = props => {
  if (props.isAuth === true) {
    return props.SideBarInfo
  } else return props.AnonimSideBarInfo
}

let SideBar = props => {
  return (
    <div className={itemSideBar.sideBar}>
      <div className={itemSideBar.sideBar__list}>
      <Show {...props} />
    </div>
    </div>
  )
}
export default SideBar