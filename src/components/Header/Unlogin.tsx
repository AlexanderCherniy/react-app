import { AuthApi } from '../../api/auth-api';
import c from './Header.module.scss';
type UnLoginType = {
    isAuth: boolean
}
const UnLogin:React.FC<UnLoginType> = ({isAuth}) => {
    const unLoginFunc = () => AuthApi.unloginService().then(data => {
        if (data.resultCode === 0) {
          window.location.reload()
        }
    })
    return (
        <div >
            {isAuth === true ? <button style={{background: 'white'}} className={c.unlogin} onClick={unLoginFunc}>UNLOGIN</button> : ""}
        </div>
    )
}
export default UnLogin
