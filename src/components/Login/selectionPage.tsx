import LoginForm from "./LoginForm";
import c from "./Login.module.scss";
import { Navigate, NavLink } from "react-router-dom";
import { Button } from "antd";
import 'antd/dist/antd.css';
const SelectionPage: React.FC = props => {
    return <div className={c.selectionPageWrapper}>
        <div className={c.selectionPage}>
            <div>
                <div className={c.Login}>
                    <img alt="logo" />
                    <h2 className={c.title}> Login <div>Developers Network</div> </h2>
                    <div className={c.LoginMessage}>
                        Чтобы просматривать эту страницу, нужно зайти на сайт.
                    </div>
                    <div>
                        <Button style={{backgroundColor: '#0077ff', width: '100%', borderRadius: '8px', marginBottom: '12px' }}  type="primary">
                            <NavLink className={c.LoginLink} to={'/login'}>LogIn</NavLink>
                        </Button>
                    </div>
                    <div>
                        <Button style={{ background: '#4bb34b', width: '100%', borderRadius: '8px' }} type="primary">
                            <a style={{ background: '#4bb34b' }} className={c.LoginLink} target='_blank' href="https://social-network.samuraijs.com/signUp">Registration</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SelectionPage