import LoginForm from "./LoginForm";
import c from "./Login.module.scss";
const Login:React.FC = props => {

    return <div className={c.ShieldWrapper}>
        <div className={c.wrapper}>
        <img alt="logo" />
        <h2 className={c.title}><div style={{letterSpacing: "2px"}}>Enter</div> <div style={{fontWeight: 'bold'}}>Your</div> <div>Email & Password</div></h2>
        <LoginForm />
        </div>
    </div>
}

export default Login