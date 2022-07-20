import { NavLink } from 'react-router-dom';
import { OldURL } from '../../noc/oldURL';
import c from './Header.module.scss';

type LoginType = {
    isAuth: boolean
    login: string | null
}
const Login: React.FC<LoginType> = ({ isAuth, login }) => {
    return (
        <div>
            {isAuth !== true
                ? <NavLink className={c.loginLink} to='/login'>Login</NavLink>
                : <span className={c.login}>{login}</span>}
        </div>
    )
}
const LoginContainer = OldURL(Login)
export default LoginContainer