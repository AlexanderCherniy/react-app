import { AuthApi } from '../../api/api-dal';
import c from './Header.module.css';
const UnLogin = ({isAuth}) => {
    const unLoginFunc = () => AuthApi.unloginService().then(data => {
        if (data.resultCode === 0) {
          window.location.reload()
        }
    })
    return (
        <div>
            {isAuth === true ? <button className={c.unlogin} onClick={unLoginFunc}>UNLOGIN</button> : ""}
        </div>
    )
}
export default UnLogin
