import { Form, Field, Formik } from "formik"
import { Navigate } from "react-router-dom";
import { AuthApi } from "../../api/api-dal"
import { Input } from "../../Forms/Forms";
import { validateLogin } from "../../validate/validate";
import incClass from '../Profile/Posts/Posts.module.css';
import c from './Login.module.css';
const LoginForm = (props) => {
    const deleteError = () => {
        props.setError(null);
    }
    if (props.userData.email != null && props.userData.login != null) {
        return <Navigate to={'/profile'} />
    }
    return <Formik initialValues={{
        login: '',
        passoword: '',
        captcha: '',
        remebmerMe: false
    }}
        validate={validateLogin}
        onSubmit={async values => {
            const data = await AuthApi.loginService(values.login, values.passoword, values.remebmerMe, values.captcha)
            if (data.resultCode === 0) {
                window.location.reload()
            }
            else {
                if(data.resultCode === 10){
                    props.getCaptcha()
                }
                props.setError(...[data.messages]);
            }
        }}>
        <Form>
            <div>
                <Field className={c.loginInputForm} component={Input} placeholder="Login" name="login" />
            </div>
            <div>
                <Field className={c.loginInputForm} component={Input} name="passoword" placeholder="Password" />
            </div>
            <div>
            <label className={c.rememberMeForm}>
                RememberMe? <Field component={Input} name="remebmerMe" type='checkbox' />
            </label>
            </div>
            <div>
            {props.captcha !== null 
            ?             
            <div className={incClass.captchaContainer}>
            <Field className={c.loginInputForm} component={Input} name="captcha" placeholder="Captcha" />
            <img className={c.captchaImg} src={props.captcha} alt="Captcha"/>
            </div>
            : 
            ""
            }
                <button className={c.sendButton} onBlur={deleteError} type="submit">GO FORM</button>
                {props.error === null ? "" : <div className={incClass.errorLogin}>{props.error}</div>}
            </div>
        </Form>
    </Formik>
}
export default LoginForm