import { Form, Field, Formik } from "formik"
import { Navigate } from "react-router-dom";
import { createField, Input } from "../../Forms/Forms";
import { dataType } from "../../redux/auth-reducer";
import { validateLogin } from "../../validate/validate";
import incClass from '../Profile/Posts/Posts.module.scss';
import c from './Login.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/auth-reducer";
import { AppState } from "../../redux/store-redux";
import { getCaptcha } from "../../redux/auth-reducer";
import { Button } from "antd";
import { AuthApi } from "../../api/auth-api";

export type FormValues = {
    login: string,
    passoword: string,
    captcha: string,
    remebmerMe: boolean
}
type FormValuesKeys = keyof FormValues
const LoginForm:React.FC = (props) => {
    const userData = useSelector((state:AppState)=> state.auth)
    const error = useSelector((state:AppState)=> state.auth.error)
    const captcha = useSelector((state:AppState)=> state.auth.captcha)
    const dispatch = useDispatch()
    const setError = (error: string | null)=> dispatch(actions.setError(error))
    //@ts-ignore
    const getCaptchaFunc = ()=> dispatch(getCaptcha())
    const deleteError = () => setError(null);
    const initialValues: FormValues = {
        login: '',
        passoword: '',
        captcha: '',
        remebmerMe: false
    }
    if (userData.email != null && userData.login != null) {
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
                    getCaptchaFunc()
                }
                setError(data.messages[0]);
            }
        }}>
        <Form>
            <div>
                {createField<FormValuesKeys>(c.loginInputForm, 'login', Input, "Email")}
            </div>
            <div>
                {createField<FormValuesKeys>(c.loginInputForm, 'passoword', Input, "Password")}
            </div>
            <div>
                <label className={c.rememberMeForm}>
                    RememberMe? {createField<FormValuesKeys>(undefined, 'remebmerMe', Input, undefined, "checkbox")}
                </label>
            </div>
            <div>
                {captcha !== null
                    ?
                    <div className={incClass.captchaContainer}>
                        {createField<FormValuesKeys>(c.loginInputForm, 'captcha', Input, "Captcha")}
                        <img className={c.captchaImg} src={captcha} alt="Captcha" />
                    </div>
                    :
                    ""
                }
                <Button type='primary' htmlType="submit" style={{backgroundColor: '#0077ff', width: '100%', borderRadius: '8px', marginBottom: '12px' }} className={c.sendButton} onBlur={deleteError}>LogIn</Button>
                {error === null ? "" : <div className={incClass.errorLogin}>{error}</div>}
            </div>
        </Form>
    </Formik>
}
export default LoginForm