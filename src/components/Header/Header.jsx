import { NavLink } from 'react-router-dom';
import incapsClasses from './Header.module.css';
import Login from './Login';
import UnLogin from './Unlogin';
let noPhoto =
  'https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
let Header = props => {
  const HeaderArh = props => {
    if (props.text === 'SETTINGS') return <NavLink className={incapsClasses.header__li} to='/settings'>SETTINGS</NavLink>
    return (
      <li className={incapsClasses.header__li}>{props.text}</li>
    )
  }
  const headerShort = props.headerLinks.map(l => <HeaderArh key={l.id} text={l.text} />)
  return (
    <header className={incapsClasses.header}>
      <div className={incapsClasses.header__container}>
        <ul className={incapsClasses.header__list}>
          <li className={incapsClasses.header__logo}>
            <NavLink to='/profile'>
              <img src={props.userData.photo === null ? noPhoto : props.userData.photo} alt='headerAva' />
            </NavLink>
            <Login isAuth={props.userData.isAuth} login={props.userData.login} />
            <UnLogin isAuth={props.userData.isAuth} />
          </li>
          {headerShort}
        </ul>
      </div>
    </header>
  )
}
export default Header