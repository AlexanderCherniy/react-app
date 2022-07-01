import { Form, Field, Formik } from "formik"
import { Navigate } from "react-router-dom";
import { AuthApi } from "../../api/api-dal"
import { Input } from "../../Forms/Forms";
import { dataType } from "../../redux/auth-reducer";
import { validateLogin } from "../../validate/validate";
import incClass from '../Profile/Posts/Posts.module.scss';
import c from './Login.module.scss';

type Props = {
    captcha: string | null
    error: string | null
    userData: dataType
    getCaptcha: ()=> void
    setError: (error: string | null)=> void
}
export type FormValues = {
    login: string,
    passoword: string,
    captcha: string,
    remebmerMe: boolean
}
const LoginForm:React.FC<Props> = ({ captcha, error, ...props }) => {
    
    const deleteError = () => {
        props.setError(null);
    }
    const initialValues: FormValues = {
        login: '',
        passoword: '',
        captcha: '',
        remebmerMe: false
    }
    if (props.userData.email != null && props.userData.login != null) {
        return <Navigate to={'/profile'} />
    }
    return <Formik initialValues={initialValues}
        validate={validateLogin}
        onSubmit={async values => {
            const data = await AuthApi.loginService(values.login, values.passoword, values.remebmerMe, values.captcha)
            if (data.resultCode === 0) {
                window.location.reload()
            }
            else {
                if (data.resultCode === 10) {
                    props.getCaptcha()
                }
                props.setError(data.messages[0]);
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
                {captcha !== null
                    ?
                    <div className={incClass.captchaContainer}>
                        <Field className={c.loginInputForm} component={Input} name="captcha" placeholder="Captcha" />
                        <img className={c.captchaImg} src={captcha} alt="Captcha" />
                    </div>
                    :
                    ""
                }
                <button className={c.sendButton} onBlur={deleteError} type="submit">GO FORM</button>
                {error === null ? "" : <div className={incClass.errorLogin}>{error}</div>}
            </div>
        </Form>
    </Formik>
}
export default LoginForm