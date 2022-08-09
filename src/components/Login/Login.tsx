import LoginForm from "./LoginForm";
import c from "./Login.module.scss";
import { CodeOutlined } from '@ant-design/icons';
const Login:React.FC = props => {

    return <div className={c.ShieldWrapper}>
        <div className={c.wrapper}>
            <CodeOutlined style={{ width: '100%' , fontSize: 65 , display: 'flex', justifyContent: 'center'}}/>
            <h2 className={c.title}><div style={{letterSpacing: "2px"}}>Enter</div> <div style={{fontWeight: 'bold'}}>Your</div> <div>Email & Password</div></h2>
            <LoginForm />
        </div>
    </div>
}

export default Login