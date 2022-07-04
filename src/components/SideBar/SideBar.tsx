import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../redux/store-redux';
import itemSideBar from './SideBar.module.css';

type ShowProps = {
  isAuth: boolean
  SideBarInfo: any
  AnonimSideBarInfo: any
}
const Show: React.FC<ShowProps> = (props) => {

  if (props.isAuth === true) {
    return props.SideBarInfo
  } else return props.AnonimSideBarInfo
}
type SideBarArhType = {
  to: string
  text: string
  id?: number
}
export const SideBarArh: React.FC<SideBarArhType> = props => {
  return (
    <li className={itemSideBar.item}>
      <NavLink to={props.to} className={(link) => link.isActive ? itemSideBar.activeLink : itemSideBar.item}>{props.text}</NavLink>
    </li>
  )
}
let SideBar: React.FC = props => {
  const isAuth = useSelector((state: AppState) => state.auth.isAuth)
  const AnonimSideBarInfo = useSelector((state: AppState) => state.sideBar.sideBarLinks.filter(l => l.id !== 1 && l.id !== 2).map(l => <SideBarArh to={l.to} key={l.id} text={l.text} />))
  const SideBarInfo = useSelector((state: AppState) => state.sideBar.sideBarLinks.map(l => <SideBarArh to={l.to} key={l.id} text={l.text} />))
  return (
    <div className={itemSideBar.sideBar}>
      <div className={itemSideBar.sideBar__list}>
        <Show isAuth= {isAuth} AnonimSideBarInfo = {AnonimSideBarInfo} SideBarInfo = {SideBarInfo}/>
      </div>
    </div>
  )
}
export default SideBar