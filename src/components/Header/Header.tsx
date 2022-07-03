import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../redux/store-redux';
import incapsClasses from './Header.module.scss';
//@ts-ignore
import Login from './Login';
//@ts-ignore
import UnLogin from './Unlogin';
let noPhoto =
  'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
const Header: React.FC = (props) => {
  const headerLinks = useSelector((state: AppState) => state.header.headerLinks)
  const userData = useSelector((state: AppState) => state.auth)

  type HeaderLinkType = {
    text: string
  }
  const HeaderArh: React.FC<HeaderLinkType> = (props) => {
    if (props.text === 'SETTINGS') return <NavLink className={incapsClasses.header__li} to='/settings'>SETTINGS</NavLink>
    return (
      <li className={incapsClasses.header__li}>{props.text}</li>
    )
  }
  const headerShort = headerLinks.map(link => <HeaderArh key={link.id} text={link.text} />)
  return (
    <header className={incapsClasses.header}>
      <div className={incapsClasses.header__container}>
        <ul className={incapsClasses.header__list}>
          <li className={incapsClasses.header__logo}>
            <NavLink to='/profile'>
              <img src={userData.photo === null ? noPhoto : userData.photo} alt='headerAva' />
            </NavLink>
            <Login isAuth={userData.isAuth} login={userData.login} />
            <UnLogin isAuth={userData.isAuth} />
          </li>
          {headerShort}
        </ul>
      </div>
    </header>
  )
}
export default Header