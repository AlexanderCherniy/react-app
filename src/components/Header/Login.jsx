import { NavLink } from 'react-router-dom';
import c from './Header.module.scss';
let Login = ({isAuth,login}) => {
    return (
        <div>
            {isAuth !== true
                ? <NavLink className={c.loginLink} to='/login'>Login</NavLink>
                : <span className={c.login}>{login}</span>}
        </div>
    )
}
export default Login