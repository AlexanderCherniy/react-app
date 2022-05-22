import LoginForm from "./LoginForm";
const Login = props =>{
    return <div>
            <div className="title">LOGIN</div>
            <LoginForm {...props}/>
        </div>
}
export default Login